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
  - "tags": short categories like "Utility", "HUD", "Visual"
  - "downloads": optional number shown on the card (e.g. 12500). Leave 0 to hide.
  - "gallery": pictures in /images/gallery, each with a short caption
  - Dates are written YYYY-MM-DD.
  All mods are client-side, closed source, and All Rights Reserved (see LICENSE).
*/

const SITE = {
  name: "xtroslimmods",
  logo: "images/logo.png",
  tagline: "Client-side Fabric mods for Minecraft 1.21.11",
  intro: "Lightweight client-side mods that make Minecraft feel better to play. Free for personal use: download, drop into your mods folder, and play.",
  minecraft: "1.21.11",
  loader: "Fabric",
  licenseName: "All Rights Reserved",
  github: "https://github.com/xtroslimmods",
  discord: "",        // paste your invite link, e.g. "https://discord.gg/abc123"
  contactEmail: "",   // optional, shown on the Help page
  footer: "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft."
};

const MODS = [
  {
    id: "handheld-lanterns",
    name: "Handheld Lanterns",
    icon: "images/handheld-lanterns.svg",
    summary: "Hold a lantern or torch and it lights up the area around you, just like it should.",
    tags: ["Visual"],
    version: "1.2.0",
    updated: "2026-11-03",
    downloads: 0,
    size: "184 KB",
    download: "files/handheld-lanterns-1.2.0.jar",
    requires: ["Fabric API"],
    description: [
      "Carrying a lantern through a cave should light the cave. Handheld Lanterns makes any light source in your hand or off-hand cast light around you as you move.",
      "Everything happens on your side only, so it works on any server and never changes your world or anyone else's game."
    ],
    features: [
      "Works with lanterns, torches, glowstone and more",
      "Smooth light that follows you as you move",
      "Adjustable brightness and update speed",
      "Client-side only, so it works on any server"
    ],
    gallery: [
      { src: "images/gallery/handheld-lanterns-1.png", caption: "Holding a lantern" },
      { src: "images/gallery/handheld-lanterns-2.png", caption: "Soul lantern in the off-hand" },
      { src: "images/gallery/handheld-lanterns-3.png", caption: "Exploring a cave at night" }
    ],
    changelog: [
      { version: "1.2.0", date: "2026-11-03", notes: ["Updated to 1.21.11", "Off-hand items now give light too", "Fixed light flickering under water"] },
      { version: "1.1.0", date: "2026-07-14", notes: ["Added a brightness setting"] },
      { version: "1.0.0", date: "2026-04-02", notes: ["First release"] }
    ]
  },
  {
    id: "honest-hud",
    name: "Honest HUD",
    icon: "images/honest-hud.svg",
    summary: "Shows real numbers for health, armor and hunger instead of just icons.",
    tags: ["Utility", "HUD"],
    version: "2.0.3",
    updated: "2026-10-21",
    downloads: 0,
    size: "310 KB",
    download: "files/honest-hud-2.0.3.jar",
    requires: ["Fabric API"],
    description: [
      "Puts the exact value next to each HUD bar, and warns you in blocks how far you're about to fall."
    ],
    features: ["Exact health, armor and hunger values", "Fall-distance warning", "Every element can be moved or hidden"],
    gallery: [],
    changelog: [
      { version: "2.0.3", date: "2026-10-21", notes: ["Updated to 1.21.11"] },
      { version: "2.0.0", date: "2026-03-30", notes: ["Rewritten from scratch", "New settings screen"] }
    ]
  },
  {
    id: "shulker-peek",
    name: "Shulker Peek",
    icon: "images/shulker-peek.svg",
    summary: "Hover over a shulker box in your inventory to see what's inside.",
    tags: ["Utility", "Inventory"],
    version: "1.0.4",
    updated: "2026-09-02",
    downloads: 0,
    size: "56 KB",
    download: "files/shulker-peek-1.0.4.jar",
    requires: ["Fabric API"],
    description: [
      "Shows a grid of a shulker box's contents in its tooltip, coloured to match the box. No more placing boxes down just to check what's in them."
    ],
    features: [],
    gallery: [],
    changelog: [
      { version: "1.0.4", date: "2026-09-02", notes: ["Fixed tooltips overlapping at small window sizes"] },
      { version: "1.0.0", date: "2026-06-20", notes: ["First release"] }
    ]
  },
  {
    id: "quiet-villagers",
    name: "Quiet Villagers",
    icon: "images/quiet-villagers.svg",
    summary: "Turns villager sounds down by half, with a slider for each sound.",
    tags: ["Utility", "Audio"],
    version: "3.1.0",
    updated: "2026-05-17",
    downloads: 0,
    size: "22 KB",
    download: "files/quiet-villagers-3.1.0.jar",
    requires: [],
    description: ["For anyone with a trading hall next to their base."],
    features: [],
    gallery: [],
    changelog: [
      { version: "3.1.0", date: "2026-05-17", notes: ["Settings screen added"] }
    ]
  }
];
