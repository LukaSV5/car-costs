# Car costs

## What the site does
A small shared tracker for family and friends who buy cars in the US. People sign in with Google, add cars, log repair/cost items per car (estimated or actual cost), and attach photos. Totals can be shown in GEL or USD using an editable exchange rate. Only invited people (listed in `members`) can get in; an admin manages the member list. The UI works in English and Georgian.

It is a static site hosted on GitHub Pages (public repo). Supabase provides sign-in (Google OAuth), the database and photo storage.

## Files
- `index.html` – markup and all CSS. Screens: sign-in, "not invited", garage, car detail, members, forms. Translatable text uses `data-i18n`, `data-i18n-aria` and `data-i18n-ph` attributes.
- `app.js` – all behaviour: the `I18N` text for `en` and `ka`, language and currency switching, Supabase calls, auth/membership check, car/item/photo CRUD, photo upload to storage, members management.
- `config.js` – sets `window.CAR_COSTS_CONFIG` (Supabase project URL, public anon key, admin name shown on the "not invited" screen).

## Database (Supabase)
Tables: `members`, `cars`, `items`, `photos`, `app_settings`. Photos are files in a Supabase Storage bucket; the `photos` table and `cars.cover_path` point to them. Data is protected by database access rules (RLS), not by hiding the anon key.

## Visitors, members and progress
- Signed-out visitors see a landing page (purpose, three feature tiles, and one card per car with cover photo, name, stage, days left, and the first Before / latest After photo). They never see costs, prices or owner names.
- Visitor data comes only from the Postgres function `public_garage()` (no direct table access for the anon role). Showcase photos (cars' cover, photos tagged `before` / `after`) are readable by anon through a storage policy using `is_showcase_photo()`. `progress` photos stay members-only. Anything new shown to visitors must go through those two, never through open table policies.
- `cars` has `stage` (bought, shipping, repair, paint, ready), `stage_left` (days left in the current stage) and `plan` (jsonb planned days for shipping, repair, paint). Days left = `stage_left` plus the planned days of later stages (`daysLeft()` in `app.js`).
- `photos.tag` is `before`, `progress` or `after`.
- The landing page tolerates a missing `public_garage()` (it just hides the garage section), but saving cars or photos needs the new columns, so apply the SQL before pushing.

## Rules
- Never put the Supabase `service_role` key, the Google client secret or any password in any file. Only the public anon key belongs in `config.js`. Do not write keys into this file either.
- The owner allowed Claude to commit and push to `main` (changed on 2026-11-01; before that it was manual in GitHub Desktop). After each change: check `git status` and `git diff` for secrets first, commit with a clear message, push, and tell the owner what was pushed. The site is public on GitHub Pages, so never push anything unfinished or secret.
- Keep everything working in both English and Georgian: every new user-visible string needs entries in both `en` and `ka` in `I18N` in `app.js` (or a `data-i18n` key for HTML text).
- Database changes need SQL that the owner pastes into Supabase themself. Give the SQL as a separate, clearly marked block; never assume it has been applied.
- No build step or dependencies to install: edit the files directly and test by opening `index.html` via a local static server.
