# My Minecraft mods site

A simple dark-themed site for sharing all your Minecraft mods, hosted free on GitHub Pages. No build tools and nothing to install.

## Put it online (about 5 minutes)

1. Sign in at github.com and click **New repository**.
   - Name it `your-username.github.io` if you want the site at `https://your-username.github.io`.
   - Or give it any name, like `mods`, and the site will be at `https://your-username.github.io/mods`.
   - Make it **Public**, then click **Create repository**.
2. On the new repo page, click **uploading an existing file**. Drag in **everything inside this folder** (the files and the `images` and `files` folders), not the folder itself. Click **Commit changes**.
3. Go to **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
4. Wait a minute or two and refresh. The link to your live site shows at the top of the Pages settings.

## Make it yours

Everything you'll want to change is in **`mods.js`**. You can edit it right on GitHub: open the file, click the pencil icon, make your changes, and click **Commit changes**. The site updates within a minute or two.

- `SITE` holds your name, the big headline (`tagline`), the intro line and your links (Modrinth, CurseForge, GitHub, Discord, Ko-fi). Leave a link as `""` to hide it.
- `minecraft` and `loader` in `SITE` are set to `1.21.11` and `Fabric`. They show on every mod, so when you update to a new Minecraft version you only change them once.
- `MODS` is your list of mods. There's no limit. Delete the four example mods and add your own: copy a whole `{ ... },` block, paste it after the others, and change the values.
- **Every mod gets its own page automatically** at `mod.html?id=` plus the mod's `id`. Clicking a mod on the home page opens it.

## Hosting the mod files

You have two options for where the download button points.

**GitHub Releases (recommended for anything over a few MB).** In your repo, click **Releases → Create a new release**, attach your mod file, and publish. Right-click the file on the release page, copy its link, and paste it as `download` in `mods.js`. Releases also show download counts.

**The `files` folder (fine for small files).** Upload the file into `files/`, then set `download` to `"files/your-mod-1.0.0.jar"`. GitHub won't take single files over 100 MB this way.

## Adding icons and screenshots

Each mod has its own icon. Upload your icon into the `images` folder (the same square `icon.png` you put in your mod's jar works great, and pixel art stays sharp), then set:

    icon: "images/my-mod-icon.png",

The example mods use pixel-art icons in `images/` that you can delete. If a mod has no icon (`icon: ""`), its initials are shown instead.

Add screenshots like this:

    screenshots: ["images/my-mod-1.png", "images/my-mod-2.png"],

## Updating a mod

1. Upload the new file (to a new Release or the `files` folder).
2. In `mods.js`, change `version`, `updated`, `size` and `download`.
3. Add a new entry to the **top** of that mod's `changelog`.

The newest-updated mod always shows first on the home page.

## Checking it on your computer

Double-click `index.html` to open it in your browser. It works without any setup.
