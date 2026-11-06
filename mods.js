/*
  ======================================================
  THIS IS THE ONLY FILE YOU NEED TO EDIT FOR YOUR MODS
  ======================================================

  1. SITE: your name and links. Paste your Discord invite link into "discord".
  2. MODS: your mods. Copy one { ... }, block and paste it below the others
     to add a new one. Each mod gets its own page automatically.

  Tips:
  - "id" must be unique, lowercase, no spaces. The mod's page is mod.html?id=that-id
  - "icon": a square .png in /images, e.g. "images/my-mod.png"
  - "download": a GitHub Release file link, or a file in /files, e.g. "files/my-mod-1.0.0.jar"
  - "side": "Client", "Server", or "Client or server"
  - "tags": short categories like "Utility", "Decoration", "Library"
  - "downloads": optional number shown on the card (e.g. 12500). Leave 0 to hide.
  - "gallery": pictures in /images/gallery, each with a short caption
  - Dates are written YYYY-MM-DD.
*/

const SITE = {
  name: "xtroslimmods",
  logo: "images/logo.png",
  tagline: "Fabric mods for Minecraft 1.21.11",
  intro: "Small, polished mods that fix the little things in Minecraft. Free to download, lightweight, and fine to use in any modpack.",
  minecraft: "1.21.11",
  loader: "Fabric",
  github: "https://github.com/xtroslimmods",
  discord: "",        // paste your invite link, e.g. "https://discord.gg/abc123"
  modrinth: "",
  curseforge: "",
  contactEmail: "",   // optional, shown on the Help page
  footer: "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft."
};

const MODS = [
  {
    id: "better-lanterns",
    name: "Better Lanterns",
    icon: "images/better-lanterns.svg",
    summary: "Lanterns that actually light up a room, with six new metal finishes.",
    tags: ["Decoration"],
    side: "Client or server",
    version: "1.2.0",
    updated: "2026-11-03",
    downloads: 0,
    size: "184 KB",
    license: "MIT",
    download: "files/better-lanterns-1.2.0.jar",
    source: "https://github.com/xtroslimmods/better-lanterns",
    issues: "",
    modrinth: "",
    curseforge: "",
    requires: ["Fabric API"],
    description: [
      "Vanilla lanterns are lovely to look at but barely brighter than a torch. Better Lanterns raises their light level to 15 and adds copper, gold, iron, netherite, amethyst and bone finishes.",
      "Every new lantern can be hung from chains, placed on fences, and crafted in the stonecutter. No new ores, no new menus, and nothing that changes world generation, so it's safe to add to an existing world."
    ],
    features: [
      "Lanterns give off light level 15",
      "Six new finishes, each with a soul variant",
      "Craftable in the stonecutter",
      "Safe to add to or remove from existing worlds"
    ],
    gallery: [
      { src: "images/gallery/better-lanterns-1.png", caption: "Copper lantern" },
      { src: "images/gallery/better-lanterns-2.png", caption: "Lantern hanging from a chain" },
      { src: "images/gallery/better-lanterns-3.png", caption: "Lighting up a cave at night" }
    ],
    changelog: [
      { version: "1.2.0", date: "2026-11-03", notes: ["Updated to 1.21.11", "Added amethyst and bone finishes", "Fixed lanterns flickering under water"] },
      { version: "1.1.0", date: "2026-07-14", notes: ["Lanterns can now be waterlogged"] },
      { version: "1.0.0", date: "2026-04-02", notes: ["First release"] }
    ]
  },
  {
    id: "honest-hud",
    name: "Honest HUD",
    icon: "images/honest-hud.svg",
    summary: "Shows real numbers for health, armor and hunger instead of just icons.",
    tags: ["Utility", "HUD"],
    side: "Client",
    version: "2.0.3",
    updated: "2026-10-21",
    downloads: 0,
    size: "310 KB",
    license: "MIT",
    download: "files/honest-hud-2.0.3.jar",
    source: "https://github.com/xtroslimmods/honest-hud",
    issues: "",
    modrinth: "",
    curseforge: "",
    requires: ["Fabric API"],
    description: [
      "Puts the exact value next to each HUD bar, and warns you in blocks how far you're about to fall.",
      "Client-side only, so it works on any server, including vanilla ones."
    ],
    features: ["Exact health, armor and hunger values", "Fall-distance warning", "Works on any server"],
    gallery: [],
    changelog: [
      { version: "2.0.3", date: "2026-10-21", notes: ["Updated to 1.21.11"] },
      { version: "2.0.0", date: "2026-03-30", notes: ["Rewritten from scratch", "New settings screen"] }
    ]
  },
  {
    id: "sturdy-shulkers",
    name: "Sturdy Shulkers",
    icon: "images/sturdy-shulkers.svg",
    summary: "Shulker boxes survive lava, and come back to spawn if they fall into the void.",
    tags: ["Game mechanics"],
    side: "Server",
    version: "1.0.4",
    updated: "2026-09-02",
    downloads: 0,
    size: "56 KB",
    license: "MIT",
    download: "files/sturdy-shulkers-1.0.4.jar",
    source: "",
    issues: "",
    modrinth: "",
    curseforge: "",
    requires: ["Fabric API"],
    description: [
      "Shulker boxes become fireproof like netherite, and a box that falls into the void returns to your spawn point."
    ],
    features: [],
    gallery: [],
    changelog: [
      { version: "1.0.4", date: "2026-09-02", notes: ["Fixed boxes duplicating with hoppers"] },
      { version: "1.0.0", date: "2026-06-20", notes: ["First release"] }
    ]
  },
  {
    id: "quiet-villagers",
    name: "Quiet Villagers",
    icon: "images/quiet-villagers.svg",
    summary: "Turns villager sounds down by half, with a slider for each sound.",
    tags: ["Utility", "Audio"],
    side: "Client",
    version: "3.1.0",
    updated: "2026-05-17",
    downloads: 0,
    size: "22 KB",
    license: "MIT",
    download: "files/quiet-villagers-3.1.0.jar",
    source: "",
    issues: "",
    modrinth: "",
    curseforge: "",
    requires: [],
    description: ["For anyone with a trading hall next to their base."],
    features: [],
    gallery: [],
    changelog: [
      { version: "3.1.0", date: "2026-05-17", notes: ["Settings screen added"] }
    ]
  }
];
