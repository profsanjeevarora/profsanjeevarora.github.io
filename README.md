# Site Maintenance

This repo is the live site for `https://profsanjeevarora.github.io/`.

Most routine updates happen in `assets/site-data.js`.

Image files live in `images/`.

## Common updates

### Update homepage or page text

Edit the relevant sections in `assets/site-data.js`:

- `hero`
- `pages`
- `bioSections`
- `homeLinks`
- `research`
- `teaching`
- `archiveCourses`
- `contact`

### How `assets/site-data.js` is organized

- `hero`: landing page name, roles, research-interest line, portrait, and the buttons under the portrait.
- `pages`: titles for the subpages such as `Bio`, `Research`, `Teaching`, `Advising`, and `Contact`.
- `bioSections`: the content on `bio.html`. Each section has a `title` and an `items` list.
- `homeLinks`: the large cards on the homepage.
- `research`: the three main research cards.
- `teaching`: the cards on `teaching.html`.
- `archiveCourses`: the archived course list on `archived-courses.html`.
- `contact`: the cards on `contact.html`.
- `footerNote`: the copyright / design lines in the footer.

### Common field formats in `site-data.js`

- Most simple entries use plain text fields such as `title`, `description`, `text`, `year`, and `href`.
- In `bioSections`, use `text` for plain text and `html` only when you need an inline hyperlink.
- In `contact`, a normal text entry looks like:

```js
{ label: "Phone", value: "(609) 258-3869" }
```

- A clickable link entry looks like:

```js
{ label: "Twitter", kind: "link", value: "@prfsanjeevarora", href: "https://twitter.com/prfsanjeevarora" }
```

- An obfuscated email entry looks like:

```js
{
  label: "Email",
  kind: "obfuscated-email",
  user: "arora",
  domain: ["cs", "princeton", "edu"],
  revealLabel: "Click to reveal",
}
```

### Update the advising page

Edit these Markdown files:

- `content/advising/current-students.md`
- `content/advising/alumni.md`

Use one bullet per person:

```md
- [Name](https://example.com) | PhD student
- Name Without Link | PhD 2024
```

### Update the CV

1. Put the new PDF in `files/`, for example `files/cv.pdf`.
2. In `assets/site-data.js`, update the `CV / Bio` link in `hero.actions` if needed.

### Update images

- Put image files in `images/`.
- The homepage portrait is set in `assets/site-data.js` under `hero.image.src`.
- The Princeton CS logo is loaded from `images/logo-computer-science-linear.svg`.

## Local preview

From the repo root, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

There is no build step.

1. Commit your changes in this repo.
2. Push to `main`.
3. GitHub Pages will serve the updated site at `https://profsanjeevarora.github.io/`.

If GitHub Pages is not already configured, open `Settings` -> `Pages` and set:

- `Source`: `Deploy from a branch`
- `Branch`: `main`
- `Folder`: `/ (root)`
