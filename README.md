# Your Name — Photography & Video Portfolio

A simple, fast portfolio website built with plain **HTML, CSS, and
JavaScript only** — no frameworks, no build tools, nothing to install
to make it run. You can preview it by literally double-clicking
`index.html`.

This guide assumes you've never built a website before. Follow it
top to bottom and you'll end up with a live site at a free
`.netlify.app` address.

---

## 1. What's in this folder

```
portfolio-site/
├── index.html              ← Homepage (hero, featured work, about, contact)
├── gallery.html             ← Full photo gallery
├── video.html                ← Video projects page
├── success.html              ← Shown after someone submits the contact form
├── css/
│   └── style.css             ← All the design (colors, fonts, layout)
├── js/
│   ├── data.js                ← YOUR PHOTO & VIDEO LIST — edit this most
│   └── main.js                ← Site behavior (menu, gallery, lightbox) — you shouldn't need to touch this
├── images/
│   ├── hero/hero.jpg           ← Big homepage banner photo
│   ├── about/portrait.jpg      ← Your photo on the About section
│   ├── photos/                 ← All 58 gallery photos go here
│   └── video-posters/           ← Thumbnail images for the 5 videos
├── netlify.toml               ← Tells Netlify how to deploy (leave as-is)
└── .gitignore                  ← Tells GitHub which junk files to ignore
```

Right now every image is a **placeholder** (a colored rectangle
labeled "Photo 01," "replace me," etc.) so you can see the whole
site working before you add a single real photo. Swap them out
whenever you're ready — the site will look identical, just with your
real work instead.

---

## 2. Preview it on your own computer (no install required)

You don't need VS Code or anything else to *look* at the site:

1. Find the `portfolio-site` folder on your computer.
2. Double-click `index.html`. It opens in your browser and works
   fully, including the photo gallery and lightbox.

**Optional but nicer:** if you do install
[VS Code](https://code.visualstudio.com/) (free), add the
**Live Server** extension (search for it in the Extensions panel,
the icon that looks like four squares). Then right-click
`index.html` → **Open with Live Server**. This gives you
auto-refresh every time you save a file, which is handy while you're
editing.

---

## 3. Add your real photos and videos

### Photos

1. Prepare your 58 photos. For a fast, good-looking site, resize
   large images down to **about 2000px on the long edge** and save
   as `.jpg` — full-size camera files (20–50MB) will make the site
   slow to load. Free tools: [Squoosh](https://squoosh.app) (drag a
   photo in, export as JPG at ~80% quality) or Preview on Mac
   (File → Export, adjust quality).
2. Rename your files to match the placeholders exactly —
   `photo-01.jpg`, `photo-02.jpg`, … `photo-58.jpg` — and drop them
   into `images/photos/`, replacing the placeholder files. This is
   the zero-code way to swap them in.
3. `js/data.js` already lists all 58 filenames, so once the files
   are in place with matching names, they just show up — but every
   photo defaults to the `"People"` category as a placeholder. Go
   through the list and change each photo's `category` to whichever
   of the four fits: `"People"`, `"Events & Movement"`, `"Places"`,
   or `"Nature & Wildlife"` (copy-paste the name exactly so it
   matches the filter buttons). No captions to write — just the
   category.
   - `featured: true` on a photo puts it in the homepage grid
     (currently the first 8). Change which ones say `true` to swap
     out the homepage selection.
   - Want different categories, or a 5th one? Edit the `CATEGORIES`
     list near the top of `js/data.js` — the filter buttons on the
     gallery page always match whatever's in that list.

### Videos

Uploading raw video files to a free host isn't a great idea — they're
large and Netlify's free tier has a bandwidth limit. Instead, host
your 5 videos on **YouTube** (Public or **Unlisted**, so it won't
show up in search but still plays fine when embedded) and just embed
them:

1. Upload each video to YouTube.
2. Copy the video ID from the URL — in
   `https://www.youtube.com/watch?v=Ab1CdEfGhIj`, the ID is
   `Ab1CdEfGhIj` (or just paste the whole URL into `source` —
   either works).
3. In `js/data.js`, paste that ID (or URL) into `source`, and fill
   in `title` and `desc`.
4. Set `orientation` to `"landscape"` for normal widescreen video,
   or `"portrait"` for vertical/phone-shot video. This is what
   keeps the player from showing black bars on the sides — it
   matches the player's shape to the video instead of forcing every
   video into a widescreen box.
5. Replace `images/video-posters/video-01.jpg` (etc.) with a still
   frame from each video — you can screenshot a frame or use
   YouTube's auto-thumbnail (right-click the video while it's
   loading, or use a screenshot tool).

Prefer Vimeo instead? Set `type: "vimeo"` and use the Vimeo video ID
the same way.

If a video still won't play in the embedded player (shows an error,
but works fine via the "Watch on YouTube" link under the player),
check **YouTube Studio → your video → Details → Show more → Allow
embedding** — that box needs to be checked for the on-site player to
work at all.

### Homepage banner and About photo

These two are simple file swaps — no code, no `data.js` entry, just
replace the file and keep the exact same filename:

- **Homepage banner** — replace `images/hero/hero.jpg` with your own
  photo. This one fills the entire top of the homepage behind your
  name, so a wide, landscape-oriented shot works best (roughly
  1920×1080 or wider-than-tall). Darker or more evenly-toned photos
  read best, since your name is printed over it in light text.
- **About section photo** — replace `images/about/portrait.jpg` with
  a photo of yourself. This one is portrait-oriented (taller than
  wide) — a vertical or square crop of yourself works best.

Either way: keep the new file named exactly `hero.jpg` or
`portrait.jpg` (same folder, same name) and it swaps in automatically
— no need to open any code file for these two.

---

## 4. Customize the text

Open `index.html`, `gallery.html`, and `video.html` in a text editor
and search for these placeholders to replace with your own words:

- `Kaylah Lang` — already filled in throughout, in case you ever
  want to change display formatting
- The hero tagline and "Based in / Focus / Available for" lines
- The About section paragraphs and skills list — already filled in
  with your bio, but tweak the wording any time
- Your real email and social links — already filled in

You don't need to understand HTML to do this: just find the text
between the `>` and `<` symbols and change the words, leaving the
symbols and tags alone.

### Want a downloadable resume after all?

There's no resume button on the site right now (by request). If you
change your mind later:

1. Save your resume as `resume.pdf` in the project's root folder
   (next to `index.html`).
2. In `index.html`, in the About section, add a line like:
   ```html
   <a class="btn" href="resume.pdf" download>Download resume (PDF)</a>
   ```
   right after the closing `</ul>` of the skills list.

### Changing colors or fonts

Everything visual is controlled from one place: the top of
`css/style.css`, in a section called `:root`. For example:

```css
--accent: #b13f29;   /* the red accent color used for links, buttons, hover states */
```

Change the hex code and it updates everywhere on the site
automatically. The two fonts (`--font-display` for the italic serif
headings, `--font-body` for regular text) are loaded from Google
Fonts in each HTML file's `<head>` if you want to swap those too —
[fonts.google.com](https://fonts.google.com) lets you pick a new one
and gives you the same kind of `<link>` tag to paste in.

---

## 5. Put it on GitHub

GitHub stores your code online and is what Netlify will "watch" to
auto-deploy your site whenever you make changes.

1. Create a free account at [github.com](https://github.com) if you
   don't have one.
2. Click the **+** in the top-right corner → **New repository**.
   - Name it something like `portfolio-site`.
   - Leave it **Public**.
   - Don't check any of the "initialize with" boxes.
   - Click **Create repository**.
3. On the next page, look for **"uploading an existing file"** (a
   blue link in the quick-setup instructions). Click it.
4. Drag your entire `portfolio-site` folder's *contents* (not the
   folder itself — select everything inside it) into the upload box.
5. Scroll down, add a short commit message like `Initial site`, and
   click **Commit changes**.

That's it — no command line needed. If you later want an easier way
to push updates than re-uploading through the browser every time,
install **[GitHub Desktop](https://desktop.github.com/)** (free): it
lets you open the repo, see your changed files, and click **Commit**
→ **Push** with no typed commands at all.

---

## 6. Deploy on Netlify (free)

1. Create a free account at [netlify.com](https://netlify.com) —
   choose **"Sign up with GitHub"** so the two are connected
   automatically.
2. From your Netlify dashboard, click **Add new site** →
   **Import an existing project**.
3. Choose **GitHub**, then select your `portfolio-site` repository.
4. Deploy settings: leave everything as the defaults — this site
   has no build step, so the **Build command** field can stay empty
   and the **Publish directory** should be `.` (a single period,
   meaning "the root folder"). This is already set in
   `netlify.toml`, so Netlify should pick it up automatically.
5. Click **Deploy site**. After a minute or so, you'll get a live
   URL like `https://random-name-12345.netlify.app`.
6. Optional: click **Site settings → Change site name** to pick a
   nicer subdomain, e.g. `https://yourname-photo.netlify.app` — this
   part is free.

From now on, every time you push a change to GitHub (by re-uploading
through the browser, or via GitHub Desktop), Netlify automatically
rebuilds and redeploys your live site within a minute or two.

### Turn on the contact form

The contact form on the homepage is built to work with **Netlify
Forms** automatically — no backend, database, or email server setup
needed. Once your first deploy finishes:

1. In your Netlify dashboard, go to your site → **Forms**.
2. You should see a form named `contact` listed automatically
   (Netlify detects it from the `data-netlify="true"` attribute in
   `index.html` during the build).
3. Go to **Forms → Settings and usage → Form notifications** → **Add
   notification → Email notification**, and enter your email. Now
   every message submitted through your site lands in your inbox.

The free Netlify plan includes 100 form submissions per month, which
is plenty for a portfolio site.

---

## 7. Optional: a custom domain

The free `yourname.netlify.app` address is perfectly fine to put on
a resume or job application. If you'd rather have something like
`yourname.com`, you'd buy a domain from a registrar (roughly
$10–15/year — this is the one part of this whole setup that isn't
free) and connect it under **Site settings → Domain management** in
Netlify, which also gives you free HTTPS automatically.

---

## 8. Before you send this to the library studio

A quick checklist:

- [ ] Swap in your real 58 photos and 5 videos
- [ ] Open the site on your phone to check it looks good — resize
      your browser window smaller if you don't want to deploy first
- [ ] Click through every nav link, the gallery, the
      lightbox (arrow keys work too), and the video modal to make
      sure nothing's broken
- [ ] Send yourself a test message through the contact form once
      it's live, to confirm the email notification arrives

---

## 9. If something goes wrong

- **A photo shows as a broken image icon:** the filename in
  `js/data.js` doesn't exactly match the file in `images/photos/`
  (check spelling, capitalization, and that it's `.jpg` not
  `.jpeg`/`.JPG`).
- **The site looks unstyled (plain text, no fonts/colors):** the
  `css/style.css` link is broken, usually because the file structure
  got flattened during upload — make sure the `css`, `js`, and
  `images` folders are still folders inside your GitHub repo, not
  merged into one flat list of files.
- **Netlify build fails:** this site has no build step, so a failure
  usually means the publish directory got changed. In **Site
  settings → Build & deploy → Build settings**, confirm the publish
  directory is `.`.
- **Contact form isn't showing up under Forms in Netlify:** forms
  are only detected from a real deploy of the HTML (not a preview
  you're viewing locally) — trigger a new deploy by pushing any
  small change, then check again.

You've got this — good luck with the application!
