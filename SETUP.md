# DeepSkill AI — detailed setup

You do **not** need a domain. You need a free Cloudflare (or Netlify) account and the Gumroad product you already have.

Do this in order. Don’t skip to Gumroad redirect until the site URL exists.

---

## 0. What you should have on your computer

The site folder looks like this. **This folder is the website.** `index.html` must be at the top when you upload — not nested inside another folder.

```
deepskill/
  index.html
  start.html
  method.html
  products.html
  prompt-secrets.html
  about.html
  journal.html
  journal/
  privacy.html
  terms.html
  refunds.html
  thanks.html
  404.html
  css/site.css
  js/site.js
  img/
  README.md
  SETUP.md
  netlify.toml
```

If you zip it, zip **these files**, not a wrapper named `deepskill` that contains another `deepskill`. After unzip on the host, opening the site should load Home immediately.

---

## 1. Optional: see it on your machine first

1. Open a terminal.
2. `cd` into this folder.
3. Run:

```bash
python3 -m http.server 4175
```

4. In a browser: `http://localhost:4175`
5. Click **Products** → the card → **Get on Gumroad**.  
   If the card doesn’t open details, you’re in the wrong folder.

Stop the server with `Ctrl+C` when you’re done.

---

## 2. Put the site on GitHub (you have an account)

This is the durable way. Cloudflare will pull from GitHub. Every push updates the live URL.

### 2.1 Create an empty repo on GitHub

1. Log in at [https://github.com](https://github.com)
2. **+** (top right) → **New repository**
3. Repository name: `deepskill-ai` (or anything)
4. **Public** is fine (it’s a marketing site). Private also works on Cloudflare’s free Pages.
5. **Do not** add a README, `.gitignore`, or license. Empty repo.
6. **Create repository**
7. Copy the URL GitHub shows, either:
   - `https://github.com/YOURUSER/deepskill-ai.git`
   - or `git@github.com:YOURUSER/deepskill-ai.git`

Leave that tab open.

### 2.2 Push this folder (already a git repo)

On your machine, in a terminal, from **this folder** (`deepskill/` — the one that contains `index.html`):

```bash
git remote add origin https://github.com/YOURUSER/deepskill-ai.git
git branch -M main
git push -u origin main
```

Replace `YOURUSER` with your GitHub username.

If GitHub asks you to sign in: use a **Personal Access Token** as the password (GitHub → Settings → Developer settings → Personal access tokens → classic → `repo` scope), or use GitHub CLI / SSH if you already set that up.

When the push finishes, refresh the repo page. You should see `index.html`, `css/`, `img/`, `SETUP.md`.

### 2.3 Later edits

```bash
git add -A
git commit -m "Update site"
git push
```

Cloudflare (next section) will rebuild by itself.

---

## 3. Connect GitHub → Cloudflare Pages

Free HTTPS. Address like `https://deepskill.pages.dev`. No domain.

### 3.1 Cloudflare account

1. [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Sign up. Signing up **with GitHub** is easiest — then Pages can see your repos without a second OAuth dance.
3. Verify email if asked.
4. If they push **Add a domain**, skip / **I’ll do it later**.

### 3.2 Create the Pages project from the repo

1. Left sidebar: **Workers & Pages** (or **Compute** → **Workers & Pages**).
2. **Create** → **Pages**.
3. **Connect to Git** (not Upload assets).
4. Authorize Cloudflare if GitHub asks. Grant access to the `deepskill-ai` repo (or **All repositories** if that’s simpler).
5. Select **`YOURUSER/deepskill-ai`**.
6. Settings (exact):
   - **Project name:** `deepskill` (this is the `*.pages.dev` name)
   - **Production branch:** `main`
   - **Framework preset:** **None**
   - **Build command:** leave **empty**
   - **Build output directory:** leave **empty** or `/`  
     There is no `npm run build`. The HTML *is* the site.
7. **Save and Deploy**.

Wait for **Success**. First deploy is usually under a minute.

### 3.3 Open it

1. Cloudflare shows `https://deepskill.pages.dev` (or `https://deepskill-xxxx.pages.dev` if the name was taken).
2. You should see Home: bronze Loop, “Think with AI.”
3. Check:
   - **Products** → click the card → Prompt Secrets details
   - **Get on Gumroad** → checkout
   - `/nope` → your 404

Copy that URL. Gumroad needs it in section 4.

### 3.4 How updates work now

You change files locally → `git add -A && git commit -m "…" && git push` → Cloudflare rebuilds that same URL. You do not re-upload.

### 3.5 Fallback: upload without Git

If OAuth fails: **Upload assets**, zip the files in this folder, deploy once. Prefer Git when you can.

---

## 4. Alternative: Netlify from GitHub

1. [https://app.netlify.com/signup](https://app.netlify.com/signup) — **Sign up with GitHub**.
2. **Add new site** → **Import an existing project** → GitHub → `deepskill-ai`.
3. Build command empty. Publish directory: `.` (or leave default).
4. Deploy. You get `https://something.netlify.app`.
5. Ignore **Add custom domain**.

Or **Deploy manually** and drag this folder. `netlify.toml` is already here.

---

## 4. Gumroad — make the $4 buy actually complete

You already have: [https://deepskill.gumroad.com/l/xugipk](https://deepskill.gumroad.com/l/xugipk)

### 4.1 Put the product on sale

1. Log in at [https://gumroad.com](https://gumroad.com)
2. Open **Prompt Secrets**.
3. If the public page says **“This product is not currently for sale,”** turn the product **On** / published / not drafted.  
   (Gumroad’s label is usually a toggle at the top of the product: **Published**.)
4. Confirm price is **$4 USD**.
5. Confirm the PDF is attached and downloads after payment.

### 4.2 Redirect after purchase (so they land on your site)

1. Product → **Share** or **Settings** (wording moves; look for **Redirect** / **Thank you** / **After purchase**).
2. Set redirect URL to:

```
https://YOUR-SUBDOMAIN.pages.dev/thanks.html
```

Example: `https://deepskill.pages.dev/thanks.html`

3. Save.

The site already links checkout as:

```
https://deepskill.gumroad.com/l/xugipk?wanted=true
```

`wanted=true` opens the payment form, not a second sales page.

### 4.3 Overlay (keep the buyer on your page)

1. Product → **Share** → **Embed** / **Overlay**.
2. If Gumroad gives a script, you can add it later. For v1 the styled **Get on Gumroad** button is enough.
3. Test on your phone. Overlay bugs are silent.

### 4.4 Test purchase

1. Open your live `*.pages.dev` site.
2. Products → card → **Get on Gumroad**.
3. Buy with a real card (or Gumroad’s test/discount if you have one). A $4 live test is the honest check.
4. Confirm:
   - Receipt email
   - PDF downloads
   - Browser ends on `/thanks.html`
5. Refund yourself if you want. Your refund page says 14 days — honor it.

---

## 5. What you should see when it’s “working”

| Click | Result |
|---|---|
| Home | Loop, method strip, Prompt Secrets $4 |
| Products | One catalog card |
| Click the card (not the button) | `prompt-secrets.html` |
| Get on Gumroad | Checkout, $4 |
| After pay | `thanks.html` |
| Method / Start / About / Journal | Those pages, no Pro in the nav |
| Fake URL | 404 |

**Pro** is not in the nav on purpose. `pro.html` still exists; don’t sell it until Whop is real.

**The Brief** email form says “Not live yet.” That’s correct until Beehiiv or Kit exists.

---

## 6. Accounts you do **not** need yet

- Domain registrar  
- Google Analytics  
- Whop  
- Beehiiv / Kit  
- A designer, a theme, WordPress  

---

## 7. If something breaks

**Upload shows a directory listing, not the site**  
You uploaded a parent folder. Re-upload so `index.html` is at the root.

**CSS / images missing (unstyled text, broken Loop)**  
`css/` and `img/` didn’t upload, or they’re nested. Paths are relative (`css/site.css`, `img/loop-preview.png`). Keep that structure.

**Gumroad says not for sale**  
Product still unpublished. Step 4.1.

**Thanks page never appears**  
Redirect URL wrong or still pointing at Gumroad’s default. Step 4.2. Must be `https://` + your exact Pages host + `/thanks.html`.

**Cloudflare asks you to buy a domain**  
Close that modal. Pages works on `*.pages.dev` forever for this purpose.

---

## 8. When you’re done with this guide

You have a public HTTPS URL and a $4 path that can take money. Next optional steps (not required to launch):

- Your name on About  
- Beehiiv embed in The Brief  
- Whop, then put Pro back in the nav  
- A second product card on the catalog  

Don’t buy a domain until you’re tired of saying `pages.dev` out loud.
