/* Builds the menu, footer, mod cards, mod pages and gallery from mods.js.
   You shouldn't need to edit this file. */
(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const toDate = (iso) => new Date(iso + "T12:00:00");
  const fmtDate = (iso) => {
    if (!iso) return "";
    const d = toDate(iso);
    return isNaN(d) ? esc(iso) : d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  };
  const ago = (iso) => {
    const d = toDate(iso); if (isNaN(d)) return "";
    const days = Math.round((Date.now() - d) / 864e5);
    if (days <= 0) return "today";
    if (days === 1) return "yesterday";
    if (days < 30) return `${days} days ago`;
    const months = Math.round(days / 30.4);
    if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;
    const years = Math.round(days / 365);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  };
  const compact = (n) => n >= 1e6 ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1).replace(/\.0$/, "") + "M"
    : n >= 1e3 ? (n / 1e3).toFixed(n >= 1e4 ? 0 : 1).replace(/\.0$/, "") + "K" : String(n);
  const initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const modUrl = (m) => `mod.html?id=${encodeURIComponent(m.id)}`;

  const I = {
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 20h16"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9z"/><circle cx="8" cy="8" r="1.5"/></svg>',
    fabric: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M4 15 15 4l5 5L9 20H4z"/><path d="M12 7l5 5"/></svg>',
    cube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>',
    chevronR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
    chevronL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5"/></svg>',
    bug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="7" y="7" width="10" height="13" rx="5"/><path d="M12 11v9M4 12h3M17 12h3M5 6l3 2M19 6l-3 2M5 19l2.5-2M19 19l-2.5-2"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    discord: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 5.3A16.6 16.6 0 0 0 15.5 4l-.5 1a15.3 15.3 0 0 0-6 0l-.5-1a16.6 16.6 0 0 0-4.1 1.3C1.8 9.2 1.1 13 1.4 16.7a16.7 16.7 0 0 0 5.1 2.6l1.1-1.8a10.8 10.8 0 0 1-1.7-.8l.4-.3a11.9 11.9 0 0 0 11.4 0l.4.3c-.5.3-1.1.6-1.7.8l1.1 1.8a16.6 16.6 0 0 0 5.1-2.6c.4-4.3-.7-8-2.9-11.4zM8.5 14.4c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z"/></svg>'
  };

  const discordUrl = SITE.discord || "help.html#contact";
  const sideIcon = (side = "") => /server/i.test(side) && !/client/i.test(side) ? I.server : /client/i.test(side) && !/server/i.test(side) ? I.monitor : I.globe;
  const sideLabel = (side = "") => /client/i.test(side) && /server/i.test(side) ? "Client or server" : side;

  const icon = (m) => `<div class="mod-icon">${m.icon
    ? `<img src="${esc(m.icon)}" alt="" loading="lazy">`
    : `<span class="initials" aria-hidden="true">${esc(initials(m.name))}</span>`}</div>`;

  const tagList = (m) => `<ul class="tags">
      <li class="tag">${I.monitor}Client-side</li>
      ${(m.tags || []).map((t) => `<li class="tag">${I.tag}${esc(t)}</li>`).join("")}
      <li class="tag tag-loader">${I.fabric}${esc(SITE.loader)}</li>
    </ul>`;

  /* ---------- header & footer (shared on every page) ---------- */
  function layout() {
    const page = document.body.dataset.page;
    const tabs = [["home", "Home", "./"], ["mods", "Mods", "mods.html"], ["help", "Help", "help.html"], ["terms", "Terms & conduct", "terms.html"]];
    const current = page === "mod" ? "mods" : page;

    $("#site-header").innerHTML = `
      <a class="skip" href="#main">Skip to content</a>
      <div class="wrap nav">
        <a href="./" class="brand"><img src="${esc(SITE.logo)}" alt="">${esc(SITE.name)}</a>
        <ul class="nav-tabs" id="nav-tabs">
          ${tabs.map(([key, label, href]) => `<li><a href="${href}"${key === current ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
          <li class="show-sm"><a href="${esc(discordUrl)}">Discord</a></li>
        </ul>
        <div class="nav-right">
          <a class="btn btn-discord btn-sm hide-sm" href="${esc(discordUrl)}"${SITE.discord ? ' rel="noopener"' : ""}>${I.discord} Discord</a>
          ${SITE.github ? `<a class="icon-btn" href="${esc(SITE.github)}" rel="noopener" aria-label="GitHub" title="GitHub">${I.github}</a>` : ""}
          <button class="icon-btn menu-btn" id="menu-btn" aria-label="Menu" aria-expanded="false" aria-controls="nav-tabs">${I.menu}</button>
        </div>
      </div>`;

    const menuBtn = $("#menu-btn"), navTabs = $("#nav-tabs");
    menuBtn.addEventListener("click", () => {
      const open = navTabs.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    if ($("#site-footer")) $("#site-footer").innerHTML = `
      <div class="wrap footer-grid">
        <div>
          <a href="./" class="brand"><img src="${esc(SITE.logo)}" alt="">${esc(SITE.name)}</a>
          <p>${esc(SITE.intro)}</p>
        </div>
        <div>
          <h4>Site</h4>
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="mods.html">Mods</a></li>
            <li><a href="help.html">Help</a></li>
            <li><a href="terms.html">Terms & conduct</a></li>
            <li><a href="terms.html#license">License</a></li>
          </ul>
        </div>
        <div>
          <h4>Community</h4>
          <ul>
            <li><a href="${esc(discordUrl)}">Discord</a></li>
            ${SITE.github ? `<li><a href="${esc(SITE.github)}" rel="noopener">GitHub</a></li>` : ""}
          </ul>
        </div>
      </div>
      <div class="wrap footer-bottom">
        <span>&copy; ${new Date().getFullYear()} ${esc(SITE.name)}</span>
        <span>${esc(SITE.footer)}</span>
      </div>`;

    // fill any [data-site] placeholders in page text
    document.querySelectorAll("[data-site]").forEach((el) => { el.textContent = SITE[el.dataset.site] ?? ""; });
    document.querySelectorAll("[data-discord]").forEach((el) => { el.href = discordUrl; });
    document.querySelectorAll("[data-github]").forEach((el) => { if (SITE.github) el.href = SITE.github; else el.remove(); });
  }

  /* ---------- download counts ----------
     Reads the public download_count GitHub keeps on each Release file.
     No cookies, no analytics, nothing about visitors is recorded or sent anywhere.
     A file counts toward a mod when its name starts with the mod's id,
     e.g. "handheld-lanterns-1.2.0.jar" counts for "handheld-lanterns". */
  const DL = {};          // mod id -> total downloads (filled in once loaded)
  let dlLoaded = false;
  async function loadDownloads() {
    if (!SITE.releasesRepo) return false;
    const KEY = "dl-counts-v1";
    try {
      const cached = JSON.parse(sessionStorage.getItem(KEY) || "null");
      if (cached && Date.now() - cached.t < 10 * 60 * 1000) { Object.assign(DL, cached.data); return (dlLoaded = true); }
    } catch (e) { /* storage unavailable: just fetch */ }
    try {
      const ids = MODS.map((m) => m.id.toLowerCase()).sort((a, b) => b.length - a.length); // longest id wins
      const data = Object.fromEntries(MODS.map((m) => [m.id, 0]));
      for (let page = 1; page <= 5; page++) {
        const res = await fetch(`https://api.github.com/repos/${SITE.releasesRepo}/releases?per_page=100&page=${page}`,
          { credentials: "omit", referrerPolicy: "no-referrer", headers: { Accept: "application/vnd.github+json" } });
        if (!res.ok) return false;
        const releases = await res.json();
        releases.forEach((r) => (r.assets || []).forEach((a) => {
          const name = a.name.toLowerCase();
          const id = ids.find((x) => name.startsWith(x));
          if (id) { const m = MODS.find((mm) => mm.id.toLowerCase() === id); data[m.id] += a.download_count || 0; }
        }));
        if (releases.length < 100) break;
      }
      Object.assign(DL, data);
      try { sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), data })); } catch (e) {}
      return (dlLoaded = true);
    } catch (e) { return false; }
  }
  const dlCount = (m) => DL[m.id] || 0;
  const totalDownloads = () => MODS.reduce((n, m) => n + dlCount(m), 0);

  /* ---------- a mod card (list style) ---------- */
  function card(m, headingTag = "h2") {
    return `
      <article class="mod-card">
        ${icon(m)}
        <div>
          <div class="mod-title">
            <${headingTag}><a class="mod-link" href="${modUrl(m)}">${esc(m.name)}</a></${headingTag}>
            <span class="by">by <b>${esc(SITE.name)}</b></span>
          </div>
          <p class="summary">${esc(m.summary)}</p>
          ${tagList(m)}
        </div>
        <div class="mod-stats">
          ${dlLoaded ? `<span class="stat-line" title="${dlCount(m).toLocaleString()} downloads">${I.download}<b>${compact(dlCount(m))}</b> downloads</span>` : ""}
          <span class="stat-line"><b>v${esc(m.version)}</b></span>
          ${m.updated ? `<span class="stat-line" title="${fmtDate(m.updated)}">${I.clock}${ago(m.updated)}</span>` : ""}
        </div>
      </article>`;
  }

  const byUpdated = (a, b) => String(b.updated).localeCompare(String(a.updated));

  /* ---------- welcome page (one screen, no scrolling) ---------- */
  function home() {
    document.title = `${SITE.name} · ${SITE.tagline}`;
    $("#stat-mods").textContent = MODS.length;
    const wrap = $("#stat-dl-wrap");
    wrap.hidden = true;
    loadDownloads().then((ok) => {
      if (!ok) return;
      $("#stat-dl").textContent = compact(totalDownloads());
      wrap.title = `${totalDownloads().toLocaleString()} downloads`;
      wrap.hidden = false;
    });
  }

  /* ---------- mods page ---------- */
  function modsPage() {
    document.title = `Mods · ${SITE.name}`;
    const list = $("#mod-list"), q = $("#q"), sort = $("#sort"), chips = $("#chips"), count = $("#result-count"), empty = $("#empty");
    const allTags = [...new Set(MODS.flatMap((m) => m.tags || []))].sort();
    let tag = "";

    if (allTags.length) {
      chips.innerHTML = ["", ...allTags].map((t) => `<button type="button" class="chip" data-tag="${esc(t)}" aria-pressed="${t === ""}">${t ? esc(t) : "All"}</button>`).join("");
      chips.addEventListener("click", (e) => {
        const b = e.target.closest(".chip"); if (!b) return;
        tag = b.dataset.tag;
        chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
        draw();
      });
    }
    const dlOption = sort.querySelector('[value="downloads"]');
    dlOption.disabled = true;

    function draw() {
      const term = q.value.trim().toLowerCase();
      let shown = MODS.filter((m) =>
        (!tag || (m.tags || []).includes(tag)) &&
        (!term || [m.name, m.summary, ...(m.tags || [])].join(" ").toLowerCase().includes(term)));
      const s = sort.value;
      shown.sort(s === "name" ? (a, b) => a.name.localeCompare(b.name) : s === "downloads" ? (a, b) => dlCount(b) - dlCount(a) : byUpdated);
      list.innerHTML = shown.map((m) => card(m)).join("");
      count.textContent = `${shown.length} mod${shown.length === 1 ? "" : "s"}`;
      empty.hidden = shown.length > 0;
    }
    q.addEventListener("input", draw);
    sort.addEventListener("change", draw);
    $("#clear").addEventListener("click", () => {
      q.value = ""; tag = "";
      chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.tag === "")));
      draw(); q.focus();
    });
    draw();
    loadDownloads().then((ok) => { if (ok) { dlOption.disabled = false; draw(); } });
  }

  /* ---------- single mod page ---------- */
  function modPage() {
    const id = new URLSearchParams(location.search).get("id");
    const m = MODS.find((x) => x.id === id);
    const root = $("#main");

    if (!m) {
      document.title = `Mod not found · ${SITE.name}`;
      root.innerHTML = `<div class="narrow" style="text-align:center;padding:6rem 0">
        <h1 style="font-size:2.2rem;margin:0 0 .6rem">Mod not found</h1>
        <p style="color:var(--muted)">There's no mod with the ID “${esc(id || "")}”. It may have been renamed.</p>
        <a class="btn btn-primary" href="mods.html" style="margin-top:1rem">See all mods</a></div>`;
      return;
    }

    document.title = `${m.name} · ${SITE.name}`;
    $('meta[name="description"]').content = m.summary;

    const gallery = m.gallery || [];
    const log = m.changelog || [];
    const desc = Array.isArray(m.description) ? m.description : [m.description].filter(Boolean);
    const links = [
      [I.bug, "Report a bug", "help.html#bugs"],
      [I.link, "License & terms", "terms.html#license"],
      [I.discord, "Discord", SITE.discord]
    ].filter(([, , u]) => u);

    const shot = (g, i) => `<figure class="shot" role="button" tabindex="0" data-index="${i}" aria-label="View ${esc(g.caption || "screenshot " + (i + 1))}">
        <img src="${esc(g.src)}" alt="${esc(g.caption || "")}" loading="lazy">
        ${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}
      </figure>`;

    root.innerHTML = `
      <div class="wrap">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="mods.html">Mods</a>${I.chevronR}<span aria-current="page">${esc(m.name)}</span></nav>

        <header class="mod-header">
          ${icon(m)}
          <div>
            <h1>${esc(m.name)}</h1>
            <p class="summary">${esc(m.summary)}</p>
            ${tagList(m)}
          </div>
          <div class="head-actions">
            <a class="btn btn-primary btn-lg" href="${esc(m.download)}" download>${I.download} Download ${esc(m.version)}</a>
            <div class="head-stats">
              <span id="mod-dl" hidden>${I.download}<b></b></span>
              ${m.size ? `<span>${I.cube}${esc(m.size)}</span>` : ""}
              ${m.updated ? `<span title="${fmtDate(m.updated)}">${I.clock}${ago(m.updated)}</span>` : ""}
            </div>
          </div>
        </header>

        <div class="tabbar" role="tablist" aria-label="${esc(m.name)}">
          <button role="tab" id="tab-description" aria-controls="panel-description" aria-selected="true">Description</button>
          <button role="tab" id="tab-gallery" aria-controls="panel-gallery" aria-selected="false">Gallery <span class="count">${gallery.length}</span></button>
          <button role="tab" id="tab-changelog" aria-controls="panel-changelog" aria-selected="false">Changelog <span class="count">${log.length}</span></button>
        </div>

        <div class="mod-layout">
          <div>
            <section class="panel prose" role="tabpanel" id="panel-description" aria-labelledby="tab-description">
              <h2>About ${esc(m.name)}</h2>
              ${desc.map((p) => `<p>${esc(p)}</p>`).join("")}
              ${(m.features || []).length ? `<ul class="checklist">${m.features.map((f) => `<li>${I.check}${esc(f)}</li>`).join("")}</ul>` : ""}
              ${gallery.length ? `<div class="gallery-preview">${gallery.slice(0, 3).map(shot).join("")}</div>` : ""}
            </section>

            <section class="panel" role="tabpanel" id="panel-gallery" aria-labelledby="tab-gallery" hidden>
              <h2>Gallery</h2>
              ${gallery.length ? `<div class="gallery">${gallery.map(shot).join("")}</div>`
                : `<p class="empty">No screenshots yet.</p>`}
            </section>

            <section class="panel" role="tabpanel" id="panel-changelog" aria-labelledby="tab-changelog" hidden>
              <h2>Changelog</h2>
              ${log.length ? `<ol class="changelog">${log.map((c, i) => `
                <li class="${i === 0 ? "latest" : ""}">
                  <div class="row"><span class="v">${esc(c.version)}</span>${i === 0 ? '<span class="latest-tag">Latest</span>' : ""}${c.date ? `<time datetime="${esc(c.date)}">${fmtDate(c.date)}</time>` : ""}</div>
                  <ul>${(c.notes || []).map((n) => `<li>${esc(n)}</li>`).join("")}</ul>
                </li>`).join("")}</ol>` : `<p class="empty">No changes listed yet.</p>`}
            </section>
          </div>

          <aside class="side">
            <div class="panel">
              <div class="side-group">
                <h3>Compatibility</h3>
                <dl class="facts">
                  <div><dt>Minecraft</dt><dd>${esc(SITE.minecraft)}</dd></div>
                  <div><dt>Loader</dt><dd>${esc(SITE.loader)}</dd></div>
                  <div><dt>Environment</dt><dd>Client-side</dd></div>
                  <div><dt>Requires</dt><dd>${esc((m.requires || []).join(", ") || "Nothing else")}</dd></div>
                </dl>
              </div>
              <div class="side-group">
                <h3>Details</h3>
                <dl class="facts">
                  <div><dt>Version</dt><dd>${esc(m.version)}</dd></div>
                  ${m.size ? `<div><dt>File size</dt><dd>${esc(m.size)}</dd></div>` : ""}
                  <div><dt>License</dt><dd><a href="terms.html#license">${esc(SITE.licenseName)}</a></dd></div>
                  <div><dt>Source</dt><dd>Closed source</dd></div>
                  ${m.updated ? `<div><dt>Updated</dt><dd>${fmtDate(m.updated)}</dd></div>` : ""}
                  ${log.length ? `<div><dt>Published</dt><dd>${fmtDate(log[log.length - 1].date)}</dd></div>` : ""}
                </dl>
              </div>
              ${links.length ? `<div class="side-group"><h3>Links</h3><ul class="link-list">${links.map(([ic, label, url]) => `<li><a href="${esc(url)}" rel="noopener">${ic}${label}</a></li>`).join("")}</ul></div>` : ""}
            </div>
          </aside>
        </div>
      </div>

      <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Screenshot viewer">
        <button class="lb-btn lb-close" id="lb-close" aria-label="Close">${I.close}</button>
        <button class="lb-btn lb-prev" id="lb-prev" aria-label="Previous screenshot">${I.chevronL}</button>
        <figure><img id="lb-img" alt=""><figcaption id="lb-cap"></figcaption></figure>
        <button class="lb-btn lb-next" id="lb-next" aria-label="Next screenshot">${I.chevronR}</button>
      </div>`;

    /* live download count for this mod */
    loadDownloads().then((ok) => {
      if (!ok) return;
      const el = $("#mod-dl");
      el.querySelector("b").textContent = `${compact(dlCount(m))} downloads`;
      el.title = `${dlCount(m).toLocaleString()} downloads`;
      el.hidden = false;
    });

    /* tabs (also linkable: mod.html?id=x#gallery) */
    const tabs = [...document.querySelectorAll('[role="tab"]')];
    function select(name, focus) {
      tabs.forEach((t) => {
        const on = t.id === `tab-${name}`;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        $(`#${t.getAttribute("aria-controls")}`).hidden = !on;
        if (on && focus) t.focus();
      });
      history.replaceState(null, "", name === "description" ? location.pathname + location.search : `#${name}`);
    }
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(t.id.replace("tab-", "")));
      t.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
        select(next.id.replace("tab-", ""), true);
      });
    });
    const start = location.hash.slice(1);
    if (["gallery", "changelog"].includes(start)) select(start);

    /* lightbox */
    if (!gallery.length) return;
    const lb = $("#lightbox"), img = $("#lb-img"), cap = $("#lb-cap");
    let idx = 0, lastFocus = null;
    const show = (i) => {
      idx = (i + gallery.length) % gallery.length;
      img.src = gallery[idx].src; img.alt = gallery[idx].caption || "";
      cap.innerHTML = `${esc(gallery[idx].caption || "")}<span>${idx + 1} / ${gallery.length}</span>`;
    };
    const open = (i) => { lastFocus = document.activeElement; show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; $("#lb-close").focus(); };
    const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; lastFocus && lastFocus.focus(); };
    $("#lb-prev").hidden = $("#lb-next").hidden = gallery.length < 2;

    root.addEventListener("click", (e) => { const s = e.target.closest(".shot"); if (s) open(+s.dataset.index); });
    root.addEventListener("keydown", (e) => { const s = e.target.closest(".shot"); if (s && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(+s.dataset.index); } });
    $("#lb-close").addEventListener("click", close);
    $("#lb-prev").addEventListener("click", () => show(idx - 1));
    $("#lb-next").addEventListener("click", () => show(idx + 1));
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  layout();
  const page = document.body.dataset.page;
  if (page === "home") home();
  if (page === "mods") modsPage();
  if (page === "mod") modPage();
})();
