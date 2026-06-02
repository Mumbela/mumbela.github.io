# AGENTS: Repo Guidance for AI Coding Agents

Purpose
- Short, actionable guidance for agents troubleshooting pagination in this Jekyll site.

Quick commands
- Build site: `bundle exec jekyll build`
- Serve locally (with drafts & livereload): `bundle exec jekyll serve --livereload --drafts`

Where to look (high-value files)
- [/_config.yml](_config.yml) — pagination config, paginate/pagination keys, paginate_path
- [/_layouts/home.html](_layouts/home.html) — site index layout; where `paginator` may be used
- [/_layouts/paginate.desc.html](_layouts/paginate.desc.html) — helper partials for pagination
- [/index.md](index.md) and [/blog.md](blog.md) — front matter and layout used for list pages
- [/Gemfile](Gemfile) — ensure `jekyll-paginate` or `jekyll-paginate-v2` is present
- [/_posts/2018-01-11-mango.md](_posts/2018-01-11-mango.md) — example post location

Common checks and quick fixes
- Confirm which pagination plugin is used:
  - If using `jekyll-paginate` (v1): `_config.yml` should contain `paginate: 5` and optionally `paginate_path: "/page:num/"`.
  - If using `jekyll-paginate-v2`: `_config.yml` should include a `pagination:` block per the plugin docs.
- Verify `Gemfile` includes the pagination gem and run `bundle install`.
- Ensure the page/template that should be paginated uses the `paginator` object (e.g. `{% for post in paginator.posts %}`) — only the main paginated page receives `paginator`.
- Check for typos in local serve commands (use `--livereload`, not `--lovereload`).
- Confirm `paginate` is not set under an unintended `defaults` scope that prevents the intended page from receiving the paginator.

How to reproduce and verify locally
1. Run `bundle install`.
2. Run `bundle exec jekyll build` and inspect `_site/` for paginated pages (`page2index.html`, `/page2/`, etc.).
3. Run `bundle exec jekyll serve --livereload --drafts` and open the index/blog pages to ensure navigation links and `paginator.total_pages` appear.

When opening a fix PR
- Describe which pagination approach you adopted (jekyll-paginate vs jekyll-paginate-v2).
- Include failing vs fixed screenshots of the local `_site/` pages and mention commands used to reproduce.
- Link the edited templates and config lines.

Notes for agents
- Prefer linking to workspace docs rather than copying large sections. Use the files listed above as the primary sources of truth.
- If pagination still fails after the checklist, search templates for `paginator` usage and confirm the page(s) using that template are the site root or explicitly target the pagination-enabled collection.

Next suggested customizations
- Add a short test script or Makefile target to build and validate presence of `_site/page2` to aid automation.

Planned tasks (short-term)
- 1) ✅ Add post metadata and Prev/Next post navigation to `post` layout — helps readers move between posts.
- 2) ✅ Generate author pages and link authors from posts — use the existing `authors` collection.
- 3) ✅ Add `CONTRIBUTING.md` describing front matter conventions and how to add posts/drafts.
- 4) ✅ Add tag/category pagination and ensure archive layouts use `paginator`.
- 5) ✅ Create a lightweight search index (`/assets/search.json`) for client-side search.

Implementation notes
- Completed items 1–5 and verified by running `bundle exec jekyll build` locally.
- Author pages now link from posts, and an authors index page lists all contributors.
- Search UI at `/search/` provides real-time filtering across posts.
- Tag/category archives display with conventional pagination (Prev 1 2 3 Next).
- Footer and navigation now link to Archives, Authors, Search, and more.

How to request more
- To request a specific implementation or refinement, reply with details.
- Or ask me to open a PR with the changes I implement here.
