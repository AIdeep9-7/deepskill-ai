# DeepSkill AI — site

Static Night Studio storefront. One product for sale: **Prompt Secrets** ($4, Gumroad).

No build step. No database. No domain required.

## Local

From this folder:

```bash
python3 -m http.server 4175
```

Open `http://localhost:4175`.

## Live URL, $0, no domain

### Cloudflare Pages (recommended)

1. Zip **the contents of this folder** (the files themselves: `index.html`, `css/`, `img/`, …). Not the parent `deepskill-ai` project unless this folder *is* the root.
2. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
3. Drop the zip (or the folder). Deploy.
4. Cloudflare gives you `https://something.pages.dev`.

Or connect a GitHub repo later: root directory = this folder, build command empty, output directory empty / `/`.

Custom 404: this repo already has `404.html`. In Pages, that file is used automatically if it sits at the site root.

### Netlify (same idea)

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Deploy manually**.
2. Drop this folder.
3. You get `https://something.netlify.app`.

`netlify.toml` in this folder is already set.

## After you have the URL

1. **Unpause** [Prompt Secrets](https://deepskill.gumroad.com/l/xugipk) on Gumroad if it still says “not currently for sale.”
2. Gumroad product → settings → **Redirect after purchase** →  
   `https://YOUR-SUBDOMAIN.pages.dev/thanks.html`
3. Click **Buy — $4** on the live site. Do a real test purchase. Confirm the file arrives and `/thanks` loads.

## What is not wired yet

- Email form (“The Brief”) — needs Beehiiv or Kit. Leave it until you have a list.
- **Pro** — page exists at `pro.html` but is out of the nav until Whop is real.
- Custom domain — skip. `*.pages.dev` is enough.

## Folder

```
index.html          Home
start.html          Three doors
method.html         The Loop
products.html       Catalog (cards → details)
prompt-secrets.html Sales letter
about.html
journal/            Essays
privacy.html  terms.html  refunds.html  thanks.html  404.html
css/site.css  js/site.js  img/
```

Buy links: `https://deepskill.gumroad.com/l/xugipk?wanted=true`
