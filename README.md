# xtroslimmods

Website for my client-side Fabric mods for Minecraft 1.21.11, live at **https://xtroslimmods.github.io**.

The mods are closed source and **All Rights Reserved** (see [LICENSE](LICENSE)). They may only be downloaded from this site for personal, non-commercial use. Redistribution, selling and modification are not allowed.

## Pages

| Page | File | What it is |
|---|---|---|
| Home | `index.html` | One-screen welcome page |
| Mods | `mods.html` | List of every mod, with search, sort and category filters |
| Each mod | `mod.html?id=…` | Built automatically: description, gallery, changelog, compatibility |
| Help | `help.html` | Install guide, FAQ, bug reports, contact |
| Terms & conduct | `terms.html` | License summary, terms of use and community rules |

## Adding or editing mods

Everything about your mods lives in **`mods.js`**. Edit it right on GitHub (open the file → pencil icon → **Commit changes**); the site updates in a minute or two.

- **Discord link:** paste your invite into `discord:` in `SITE`. Until then, the Discord buttons go to the Help page's contact section.
- **New mod:** copy a whole `{ ... },` block in `MODS`, paste it after the others, change the values. It gets its own page automatically.
- **Icon:** upload a square PNG to `images/` and set `icon: "images/my-mod.png"`.
- **Gallery:** upload screenshots to `images/gallery/` and list them:
  `gallery: [{ src: "images/gallery/my-mod-1.png", caption: "What this shows" }]`
- **Download file:** upload the `.jar` to a **GitHub Release** in this repo, copy the file's link, and put it in `download:`.
- **Download counts (automatic, no tracking):** the site reads the download totals GitHub keeps for every Release file. For a file to count toward a mod, its name must **start with the mod's `id`**, e.g. `handheld-lanterns-1.2.0.jar` for `id: "handheld-lanterns"`. Every version's file is added up. Files in the `files/` folder are not counted, so always use Releases.

## Updating a mod

1. Create a new Release and attach the new `.jar` (named starting with the mod's id).
2. In `mods.js`, change `version`, `updated`, `size` and `download`.
3. Add the new version to the **top** of that mod's `changelog`.

## Changing site text

The Help and Terms pages are plain HTML: open `help.html` or `terms.html` and edit the text between the tags. The logo is `images/logo.png`.

## After a big update

Browsers save copies of `style.css`, `app.js` and `mods.js`. If visitors might still see an old version, bump the `?v=5` at the end of those links in every `.html` file (to `?v=6` and so on).
