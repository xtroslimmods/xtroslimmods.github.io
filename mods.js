/*
  ======================================================
  THIS IS THE ONLY FILE YOU NEED TO EDIT
  ======================================================

  1. Change SITE to your own name and links.
  2. Replace the example mods in MODS with your own.
     Add as many as you like: copy one { ... }, block and paste it
     below the others. Each mod automatically gets its own page.

  Tips:
  - "id" must be unique, lowercase, no spaces. The mod's page will be
    yoursite/mod.html?id=that-id
  - "icon": put your mod's icon (a square .png, like the icon.png in your
    jar) in the /images folder and write "images/your-icon.png".
  - "download": a link to a GitHub Release file, or a file in /files,
    e.g. "files/better-lanterns-1.2.0.jar".
  - "modrinth" / "curseforge" / "source" are optional. Leave as "".
  - Dates are written YYYY-MM-DD.
*/

const SITE = {
  name: "xtroslimmods",
  tagline: "Fabric mods for Minecraft 1.21.11",
  intro: "Small, focused mods that fix the little things. Free to download and fine to use in any modpack.",
  minecraft: "1.21.11",
  loader: "Fabric",
  github: "https://github.com/xtroslimmods",
  modrinth: "",
  curseforge: "",
  discord: "",
  kofi: "",
  footer: "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft."
};

const MODS = [
  {
    id: "better-lanterns",
    name: "Better Lanterns",
    icon: "images/better-lanterns.svg",
    summary: "Lanterns that actually light up a room, with six new metal finishes.",
    version: "1.2.0",
    updated: "2026-10-28",
    size: "184 KB",
    download: "files/better-lanterns-1.2.0.jar",
    modrinth: "",
    curseforge: "",
    source: "https://github.com/xtroslimmods/better-lanterns",
    side: "Client and server",
    requires: ["Fabric API"],
    description: [
      "Vanilla lanterns are lovely to look at but barely brighter than a torch. This mod raises their light level to 15 and adds copper, gold, iron, netherite, amethyst and bone finishes.",
      "Every new lantern can be hung from chains, placed on fences, and crafted in the stonecutter. No new ores, no new menus."
    ],
    screenshots: [],
    changelog: [
      { version: "1.2.0", date: "2026-10-28", notes: ["Updated to 1.21.11", "Added amethyst and bone finishes", "Fixed lanterns flickering under water"] },
      { version: "1.1.0", date: "2026-07-14", notes: ["Lanterns can now be waterlogged"] },
      { version: "1.0.0", date: "2026-04-02", notes: ["First release"] }
    ]
  },
  {
    id: "honest-hud",
    name: "Honest HUD",
    icon: "images/honest-hud.svg",
    summary: "Shows real numbers for health, armor and hunger instead of just icons.",
    version: "2.0.3",
    updated: "2026-09-11",
    size: "310 KB",
    download: "files/honest-hud-2.0.3.jar",
    modrinth: "",
    curseforge: "",
    source: "https://github.com/xtroslimmods/honest-hud",
    side: "Client only",
    requires: ["Fabric API"],
    description: [
      "Puts the exact value next to each HUD bar, and warns you in blocks how far you're about to fall.",
      "Client-side only, so it works on any server."
    ],
    screenshots: [],
    changelog: [
      { version: "2.0.3", date: "2026-09-11", notes: ["Updated to 1.21.11"] },
      { version: "2.0.0", date: "2026-03-30", notes: ["Rewritten from scratch", "New settings screen"] }
    ]
  },
  {
    id: "sturdy-shulkers",
    name: "Sturdy Shulkers",
    icon: "images/sturdy-shulkers.svg",
    summary: "Shulker boxes survive lava, and come back to spawn if they fall into the void.",
    version: "1.0.4",
    updated: "2026-08-02",
    size: "56 KB",
    download: "files/sturdy-shulkers-1.0.4.jar",
    modrinth: "",
    curseforge: "",
    source: "",
    side: "Server only",
    requires: ["Fabric API"],
    description: [
      "Shulker boxes become fireproof like netherite, and a box that falls into the void returns to your spawn point."
    ],
    screenshots: [],
    changelog: [
      { version: "1.0.4", date: "2026-08-02", notes: ["Fixed boxes duplicating with hoppers"] },
      { version: "1.0.0", date: "2026-06-20", notes: ["First release"] }
    ]
  },
  {
    id: "quiet-villagers",
    name: "Quiet Villagers",
    icon: "images/quiet-villagers.svg",
    summary: "Turns villager sounds down by half, with a slider for each sound.",
    version: "3.1.0",
    updated: "2026-05-17",
    size: "22 KB",
    download: "files/quiet-villagers-3.1.0.jar",
    modrinth: "",
    curseforge: "",
    source: "https://github.com/xtroslimmods/quiet-villagers",
    side: "Client only",
    requires: [],
    description: [
      "For anyone with a trading hall next to their base."
    ],
    screenshots: [],
    changelog: [
      { version: "3.1.0", date: "2026-05-17", notes: ["Settings screen added"] }
    ]
  }
];
