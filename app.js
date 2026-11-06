(function () {
  "use strict";

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

  const fmtDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso + "T12:00:00");
    return isNaN(d) ? esc(iso) : d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  };

  const initials = (name) =>
    name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  const icon = (m) => `<div class="icon">${m.icon
    ? `<img src="${esc(m.icon)}" alt="">`
    : `<span class="initials" aria-hidden="true">${esc(initials(m.name))}</span>`}</div>`;

  const ICONS = {
    download: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v8.5m0 0L4.5 7M8 10.5 11.5 7M2.5 13.5h11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    back: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  const platform = `${SITE.loader || "Fabric"} ${SITE.minecraft || ""}`.trim();
  const sorted = [...MODS].sort((a, b) => String(b.updated).localeCompare(String(a.updated)));

  /* ---------- shared header + footer ---------- */
  document.getElementById("brand").textContent = SITE.name;
  const links = [
    ["Modrinth", SITE.modrinth], ["CurseForge", SITE.curseforge],
    ["GitHub", SITE.github], ["Discord", SITE.discord], ["Ko-fi", SITE.kofi]
  ].filter(([, url]) => url);
  document.getElementById("site-links").innerHTML =
    links.map(([label, url]) => `<a href="${esc(url)}" rel="me noopener">${label}</a>`).join("");
  document.getElementById("footer").innerHTML =
    `<p>&copy; ${new Date().getFullYear()} ${esc(SITE.name)}. ${esc(SITE.footer || "")}</p>`;

  /* ---------- home ---------- */
  function home() {
    document.title = `${SITE.name} — ${SITE.tagline || "Minecraft mods"}`;
    document.getElementById("pill-text").textContent = `All mods for ${platform}`;
    document.getElementById("tagline").textContent = SITE.tagline || "Minecraft mods";
    document.getElementById("intro").textContent = SITE.intro || "";
    if (SITE.github) {
      const gh = document.getElementById("hero-github");
      gh.href = SITE.github; gh.hidden = false;
    }

    const grid = document.getElementById("grid");
    const q = document.getElementById("q");
    const empty = document.getElementById("empty");
    document.getElementById("count").textContent = MODS.length;

    function draw() {
      const term = q.value.trim().toLowerCase();
      const shown = sorted.filter((m) => !term || `${m.name} ${m.summary}`.toLowerCase().includes(term));

      grid.innerHTML = shown.map((m) => `
        <article class="card">
          <div class="card-top">
            ${icon(m)}
            <div>
              <h3><a class="card-link" href="mod.html?id=${encodeURIComponent(m.id)}">${esc(m.name)}</a></h3>
              <div class="version">v${esc(m.version)} · ${esc(platform)}</div>
            </div>
          </div>
          <p class="summary">${esc(m.summary)}</p>
          <div class="card-foot">
            <span class="updated">Updated ${fmtDate(m.updated)}</span>
            <a class="btn btn-primary btn-sm" href="${esc(m.download)}" download>${ICONS.download} Download</a>
          </div>
        </article>`).join("");

      empty.hidden = shown.length !== 0;
      document.getElementById("empty-term").textContent = q.value.trim();
    }

    q.addEventListener("input", draw);
    document.getElementById("clear").addEventListener("click", () => { q.value = ""; draw(); q.focus(); });
    draw();
  }

  /* ---------- mod page ---------- */
  function modPage() {
    const id = new URLSearchParams(location.search).get("id");
    const m = MODS.find((x) => x.id === id);
    const root = document.getElementById("mod");
    const back = `<a href="./" class="back">${ICONS.back} All mods</a>`;

    if (!m) {
      document.title = `Mod not found — ${SITE.name}`;
      root.innerHTML = `${back}<div class="not-found"><h1>Mod not found</h1>
        <p>There's no mod with the ID “${esc(id || "")}”.</p>
        <a href="./" class="btn btn-glass" style="margin-top:1rem">See all mods</a></div>`;
      return;
    }

    document.title = `${m.name} — ${SITE.name}`;
    document.querySelector('meta[name="description"]').content = m.summary;

    const facts = [
      ["Version", m.version],
      ["Minecraft", SITE.minecraft],
      ["Loader", SITE.loader],
      ["Runs on", m.side],
      ["Requires", (m.requires || []).join(", ") || "Nothing else"],
      ["File size", m.size],
      ["Updated", m.updated ? fmtDate(m.updated) : ""]
    ].filter(([, v]) => v);

    const desc = Array.isArray(m.description) ? m.description : [m.description].filter(Boolean);
    const shots = m.screenshots || [];
    const log = m.changelog || [];
    const extra = [["Modrinth", m.modrinth], ["CurseForge", m.curseforge], ["Source code", m.source]].filter(([, u]) => u);

    root.innerHTML = `
      ${back}
      <section class="mod-hero">
        ${icon(m)}
        <div>
          <h1 class="gradient-text">${esc(m.name)}</h1>
          <p class="summary">${esc(m.summary)}</p>
          <div class="tags">
            <span class="tag tag-green">${esc(platform)}</span>
            ${m.side ? `<span class="tag">${esc(m.side)}</span>` : ""}
            <span class="tag">v${esc(m.version)}</span>
          </div>
          <div class="actions">
            <a class="btn btn-primary" href="${esc(m.download)}" download>${ICONS.download} Download v${esc(m.version)}${m.size ? ` <span class="size">· ${esc(m.size)}</span>` : ""}</a>
            ${extra.map(([label, url]) => `<a class="btn btn-glass" href="${esc(url)}" rel="noopener">${label}</a>`).join("")}
          </div>
        </div>
      </section>

      <div class="mod-layout">
        <div>
          ${desc.length ? `<section class="panel prose"><h2>About</h2>${desc.map((p) => `<p>${esc(p)}</p>`).join("")}</section>` : ""}
          ${shots.length ? `<section class="panel"><h2>Screenshots</h2><div class="shots">${shots.map((s) => {
              const src = typeof s === "string" ? s : s.src;
              const alt = typeof s === "string" ? "" : (s.alt || "");
              return `<a href="${esc(src)}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></a>`;
            }).join("")}</div></section>` : ""}
          ${log.length ? `<section class="panel"><h2>Changelog</h2><ol class="changelog">${log.map((c, i) => `
              <li class="${i === 0 ? "latest" : ""}">
                <div class="row">
                  <span class="v">${esc(c.version)}</span>
                  ${i === 0 ? '<span class="latest-tag">Latest</span>' : ""}
                  ${c.date ? `<time datetime="${esc(c.date)}">${fmtDate(c.date)}</time>` : ""}
                </div>
                <ul>${(c.notes || []).map((n) => `<li>${esc(n)}</li>`).join("")}</ul>
              </li>`).join("")}</ol></section>` : ""}
        </div>
        <aside class="panel sticky">
          <h2>Details</h2>
          <dl class="facts">
            ${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}
          </dl>
        </aside>
      </div>`;
  }

  if (document.body.dataset.page === "home") home();
  if (document.body.dataset.page === "mod") modPage();
})();
