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
    id: "knight-pvp",
    name: "Knight PvP",
    icon: "images/knight-pvp.png",
    summary: "An all-in-one PvP toolkit that replaces PvP resource packs: low fire, small shield, reach indicator, target HUD and more.",
    tags: ["PvP", "HUD"],
    version: "1.2.1",
    updated: "2026-11-08",
    size: "191 KB",
    download: "files/knight-pvp-1.2.1.jar",
    requires: ["Fabric API"],
    description: [
      "Knight PvP puts everything a PvP resource pack does, and a lot more, into one clean menu. Press Right Shift in game to open it, and change every setting live with sliders and switches.",
      "It's completely client-side: it only runs in your own game, so it works on any server and nothing needs to be installed on the server."
    ],
    features: [
      "Low fire, side, small or low shield, and held item and totem size",
      "View model: size, position, rotation and swing speed of your hand",
      "Glint colour, hit colour, motion blur and stretched res",
      "Zoom, fullbright, auto sprint and a HUD cleaner",
      "Custom crosshair, reach indicator and hit markers",
      "Target HUD, damage numbers, and hit and kill effects",
      "Totem pop tracker and combat alerts",
      "Movable HUD panels: CPS, combo, speed, items, cooldowns, armor, effects and keystrokes",
      "Opens with Right Shift"
    ],
    gallery: [
      { src: "images/gallery/knight-pvp-2.jpg", caption: "29 visual PvP modules, all in one menu" },
      { src: "images/gallery/knight-pvp-1.jpg", caption: "Customizable options for every module" }
    ],
    changelog: [
      { version: "1.2.1", date: "2026-11-08", notes: ["Better performance: the HUD, menu text and nearest-player checks are now cached instead of recalculated every frame", "Smoother CPS counter, and damage numbers and totem pops are capped so long fights can't slow your game down"] },
      { version: "1.2.0", date: "2026-11-07", notes: ["View Model: change the size, position, rotation and swing speed of your main hand item, and turn off the equip animation", "Glint: colour, speed and strength of the enchantment shine, a rainbow mode, or hide it completely", "Hit Colour: change the red flash on players and mobs when they get hit", "Motion Blur and Stretched Res (4:3 or a custom stretch)", "Zoom: hold C to zoom, with scroll to zoom, smooth zoom and a cinematic camera", "Fullbright, Auto Sprint and a new Armor HUD", "HUD Cleaner: hide boss bars, the scoreboard, pop-ups, titles and other parts of the vanilla HUD", "Side Shield presets, with an option to only show the shield while blocking", "Speed panel showing how fast you're moving", "Removed the Inventory HUD and the particle and kill effect test buttons"] },
      { version: "1.1.0", date: "2026-11-07", notes: ["New Inventory HUD module: shows your inventory above the hotbar, with PvP item highlights, adjustable background and an option to only show it while holding Tab", "Test buttons for Hit Sound, Hit Particles and Kill Effects so you can preview them without hitting anyone"] },
      { version: "1.0.0", date: "2026-11-06", notes: ["First release"] }
    ]
  },
  {
    id: "loadout-studio",
    name: "Loadout Studio",
    icon: "images/loadout-studio.png",
    summary: "Retexture every PvP item and your HUD with 268 free styles, plus shader packs, sky looks and screen filters.",
    tags: ["Visual", "Textures"],
    version: "1.2.2",
    updated: "2026-11-12",
    size: "310 KB",
    download: "files/loadout-studio-1.2.2.jar",
    requires: ["Fabric API"],
    description: [
      "Loadout Studio lets you design how your PvP gear looks without hunting for resource packs. Pick a new look for every PvP item, your hotbar, HUD and inventory from hundreds of free presets, or use textures from resource packs you already have.",
      "Everything is client-side and visual only, so it works on any server and only changes what you see."
    ],
    features: [
      "Retexture every PvP item, your HUD and your inventory with 268 free styles",
      "Use textures from your own resource packs, with a spinning preview",
      "Shaders tab: manage your Iris shader packs and download top packs in game",
      "Tune puddles, reflections, haze and glow",
      "44 sky looks, custom sky packs, and restyled sun, moon, clouds, rain and snow",
      "15 screen filters and client-side rain, snow and time"
    ],
    gallery: [
      { src: "images/gallery/loadout-studio-1.jpg", caption: "Over 115 premade textures for every item" },
      { src: "images/gallery/loadout-studio-2.jpg", caption: "65 different changeable items" }
    ],
    changelog: [
      { version: "1.2.2", date: "2026-11-12", notes: ["New mod icon"] },
      { version: "1.2.1", date: "2026-11-08", notes: ["Fixed memory leaks: resource pack zips are closed properly, so Windows no longer keeps them locked after you press Apply", "Textures, thumbnails and item icons are freed when you close the menu instead of staying in memory", "Less lag in game: rain, thunder and time lock are worked out once per tick instead of many times per frame", "Smoother menu: pack counts, names and the texture picker are only recalculated when something changes", "Better performance: resource packs and shader packs are scanned in the background and only rescanned when they change", "Faster texture search and filtering, and closing the menu no longer stutters", "Unfinished shader pack downloads are cleaned up if they fail", "Sky and weather settings refresh more reliably"] },
      { version: "1.2.0", date: "2026-11-07", notes: ["New Shaders tab: manage your Iris shader packs, download top packs from Modrinth in game, and tune puddles, reflections, haze and glow", "44 sky looks and custom sky packs (with Skyboxify), plus restyled sun, moon, clouds, rain and snow", "15 screen filters like Cinematic, Moody, Golden and Noir", "Client-side rain, snow and time of day", "Textures: now 268 free styles with a spinning preview", "The Effects tab moved to Knight PvP (motion blur, hit colour, stretched res, shield, crosshair and HUD)"] },
      { version: "1.1.0", date: "2026-11-07", notes: ["Motion blur: smooth trails when you turn the camera (experimental)", "Aspect ratio: play stretched like 4:3 on a 16:9 screen, while your HUD and menus stay normal", "Hit colour: change or remove the red flash when something takes damage", "Shield size: make the shield smaller and lower it out of your view"] },
      { version: "1.0.0", date: "2026-11-06", notes: ["First release"] }
    ]
  },
  {
    id: "ez-presets",
    name: "EZ Presets",
    icon: "images/ez-presets.png",
    summary: "Save your inventory layout as a preset and put everything back in place with one click.",
    tags: ["Inventory", "Utility"],
    version: "1.1.0",
    updated: "2026-11-08",
    size: "95 KB",
    download: "files/ez-presets-1.1.0.jar",
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
      { version: "1.1.0", date: "2026-11-08", notes: ["Improved hotbar refill"] },
      { version: "1.0.0", date: "2026-11-06", notes: ["First release"] }
    ]
  },
  {
    id: "tierlens",
    name: "TierLens",
    icon: "images/tierlens.png",
    summary: "See MCTiers, PvPTiers and SubTiers rankings on nametags, in the tab list and in chat, with a full player profile viewer.",
    tags: ["PvP", "Utility"],
    version: "1.0.0",
    updated: "2026-11-08",
    size: "424 KB",
    download: "files/tierlens-1.0.0.jar",
    requires: ["Fabric API"],
    description: [
      "TierLens shows every player's PvP tier rankings right where you need them: above their heads, in the tab list and next to their name in chat. It pulls live data from MCTiers, PvPTiers and SubTiers.",
      "Open any player's full profile to see their tiers in every gamemode, or search for someone who isn't online. It's completely client-side, so it works on any server."
    ],
    features: [
      "Tiers from MCTiers, PvPTiers and SubTiers",
      "Shows tiers on nametags, in the tab list and in chat",
      "Full player profile viewer with skins and every gamemode",
      "Search for any player, even if they're not on your server",
      "Pick a gamemode for each side of the name, or show their best tier",
      "Auto-detects the kit you're using from your inventory",
      "Coloured or mono gamemode icons and several colour styles",
      "Settings menu with hotkeys and Mod Menu support"
    ],
    gallery: [
      { src: "images/gallery/tierlens-1.jpg", caption: "Easy rank lookup: every tierlist and gamemode in one profile" },
      { src: "images/gallery/tierlens-2.jpg", caption: "Tons of settings to choose what shows next to names" }
    ],
    changelog: [
      { version: "1.0.0", date: "2026-11-08", notes: ["First release"] }
    ]
  }
];
