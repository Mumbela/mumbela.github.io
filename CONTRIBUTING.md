# Contributing

Thank you for contributing to this blog.

Front matter conventions for posts
- `title`: string
- `date`: YYYY-MM-DD HH:MM:SS +/-TTTT
- `author`: short_name matching a file in `/_authors/` (e.g., `mumbela`)
- `categories`: array (optional)
- `tags`: array (optional)
- `draft`: true (optional; place drafts in `_drafts/`)

Adding a new post
1. Create a file in `_posts/` named `YYYY-MM-DD-your-title.md` with the required front matter.
2. Run locally:

```bash
bundle install
bundle exec jekyll serve --livereload --drafts
```

Author pages
- Add author metadata in `/_authors/` as a markdown file with `short_name`, `name`, `bio`, and `email`.

Code style and tests
- Run `bundle exec jekyll build` to verify the site builds.

If you want me to create a GitHub Action to build and deploy, say so and I'll add a suggested workflow.
