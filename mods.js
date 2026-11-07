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
  - Download counts are automatic: upload the .jar to a GitHub Release and name
    it starting with the mod's id, e.g. "handheld-lanterns-1.2.0.jar".
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
  // Download counts come from the GitHub Releases in this repo (no tracking).
  // Upload each .jar to a Release, and start its file name with the mod's id.
  releasesRepo: "xtroslimmods/xtroslimmods.github.io",
  discord: "",        // paste your invite link, e.g. "https://discord.gg/abc123"
  contactEmail: "",   // optional, shown on the Help page
  footer: "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft."
};

const MODS = [
  {
    id: "ez-presets",
    name: "EZ Presets",
    icon: "images/ez-presets.png",
    summary: "Save your inventory layout as a preset and put everything back in place with one click.",
    tags: ["Inventory", "Utility"],
    version: "1.0.0",
    updated: "2026-11-06",
    size: "95 KB",
    download: "files/ez-presets-1.0.0.jar",
    requires: ["Fabric API"],
    description: [
      "Stop rearranging your inventory after every death or restock. EZ Presets lets you save the layout you like and snap everything back into place with a single click.",
      "A presets panel sits right next to your inventory with a live preview of each layout, so you always know what you're loading. Everything is client-side, so it works on any server."
    ],
    features: [
      "Save as many inventory layouts as you want",
      "One click puts every item back where it belongs",
      "Presets panel next to your inventory with a live preview",
      "Sort button",
      "Share codes to swap layouts with friends",
      "Hotkeys and optional hotbar refill"
    ],
    gallery: [
      { src: "images/gallery/ez-presets-1.jpg", caption: "Your inventory sorted by your preset in one click" }
    ],
    changelog: [
      { version: "1.0.0", date: "2026-11-06", notes: ["First release"] }
    ]
  },
  {
    id: "knight-pvp",
    name: "Knight PvP",
    icon: "images/knight-pvp.png",
    summary: "An all-in-one PvP toolkit that replaces PvP resource packs: low fire, small shield, reach indicator, target HUD and more.",
    tags: ["PvP", "HUD"],
    version: "1.1.0",
    updated: "2026-11-07",
    size: "159 KB",
    download: "files/knight-pvp-1.1.0.jar",
    requires: ["Fabric API"],
    description: [
      "Knight PvP puts everything a PvP resource pack does, and a lot more, into one clean menu. Press Right Shift in game to open it, and change every setting live with sliders and switches.",
      "It's completely client-side: it only runs in your own game, so it works on any server and nothing needs to be installed on the server."
    ],
    features: [
      "Low fire, side or small shield, and held item and totem size",
      "Custom crosshair, reach indicator and hit markers",
      "Target HUD, damage numbers, and hit and kill effects",
      "Totem pop tracker and combat alerts",
      "Movable HUD panels: CPS, combo, items, cooldowns, armor, effects and keystrokes",
      "Inventory HUD that shows your inventory above the hotbar",
      "Opens with Right Shift"
    ],
    gallery: [
      { src: "images/gallery/knight-pvp-2.jpg", caption: "29 visual PvP modules, all in one menu" },
      { src: "images/gallery/knight-pvp-1.jpg", caption: "Customizable options for every module" }
    ],
    changelog: [
      { version: "1.1.0", date: "2026-11-07", notes: ["New Inventory HUD module: shows your inventory above the hotbar, with PvP item highlights, adjustable background and an option to only show it while holding Tab", "Test buttons for Hit Sound, Hit Particles and Kill Effects so you can preview them without hitting anyone"] },
      { version: "1.0.0", date: "2026-11-06", notes: ["First release"] }
    ]
  },
  {
    id: "loadout-studio",
    name: "Loadout Studio",
    icon: "images/loadout-studio.png",
    summary: "Retexture every PvP item, your HUD and your inventory with hundreds of free presets or your own resource packs.",
    tags: ["Visual", "Textures"],
    version: "1.0.0",
    updated: "2026-11-06",
    size: "156 KB",
    download: "files/loadout-studio-1.0.0.jar",
    requires: ["Fabric API"],
    description: [
      "Loadout Studio lets you design how your PvP gear looks without hunting for resource packs. Pick a new look for every PvP item, your hotbar, HUD and inventory from hundreds of free presets, or use textures from resource packs you already have.",
      "Everything is client-side and visual only, so it works on any server and only changes what you see."
    ],
    features: [
      "Retexture every PvP item, your HUD and your inventory",
      "Hundreds of free presets",
      "Use textures from your own resource packs",
      "Kill effects, hit effects and a custom crosshair",
      "Armor HUD, PvP HUD, enchantment glint, low fire and view model"
    ],
    gallery: [
      { src: "images/gallery/loadout-studio-1.jpg", caption: "Over 115 premade textures for every item" },
      { src: "images/gallery/loadout-studio-2.jpg", caption: "65 different changeable items" }
    ],
    changelog: [
      { version: "1.0.0", date: "2026-11-06", notes: ["First release"] }
    ]
  }
];
