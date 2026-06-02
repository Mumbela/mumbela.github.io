---
layout: post
title: "Post Template"
date: 2026-06-02 12:00:00 +0000
author: test
categories: [tests]
tags: [testing]
excerpt_separator: <!--more-->
draft: true
---

This draft is a template and mini-guide for writing posts on this site.

<!--more-->

## How to use this template

- Replace the front matter `title`, `date`, `author`, `categories`, and `tags` with appropriate values.
- Keep `draft: true` while the post is not ready for publishing; set to `false` or remove when ready.
- Short excerpt above the `<!--more-->` marker will appear on list pages.

## Recommended front matter fields

- `title`: The article title.
- `date`: Use ISO-like format `YYYY-MM-DD HH:MM:SS +0000`.
- `author`: short_name from `_authors/` files (e.g., `test`).
- `categories`: list of categories, used for category pages.
- `tags`: list of tags used for tag pages.
- `excerpt_separator`: controls where list excerpts end (`<!--more-->` by default).
- `draft`: `true` to keep as draft.

## Writing guidelines

- Aim for clear, short sections and use headings for structure (`##`, `###`).
- Keep paragraphs short (2-4 sentences) for readability.
- When referencing another post, link with a relative URL like `/blog/` or use the Jekyll `post_url`/`link` helpers when available.

## Images and assets

- Place images in `assets/images/` or `assets/images/posts/` and reference them via `{{ "/assets/images/your-image.jpg" | relative_url }}`.
- Use descriptive `alt` text for accessibility.

Example image:

![Descriptive alt text]({{ "/assets/images/placeholder.jpg" | relative_url }})

## Code blocks

Use fenced code blocks with language hinting for syntax highlighting:

```ruby
def hello
	puts "Hello, world!"
end
```

## Lists, links and inline formatting

- Use bullet lists for steps and numbered lists for ordered instructions.
- For external links include the full URL; for internal pages use relative paths or `relative_url` filter.

## Publishing checklist

1. Replace placeholders in the front matter.
2. Update `draft: true` to `draft: false` when ready to publish.
3. Run `bundle exec jekyll build` locally and preview with `bundle exec jekyll serve --livereload`.
4. Verify images render and internal links work.
5. Optional: ask a colleague to proofread.

## SEO and metadata (optional)

- Consider adding Open Graph meta in the post layout if you want custom preview images.
- Keep the title concise and include important keywords early.

## Example quick-start (replace values)

---
layout: post
title: "How to write a great post"
date: 2026-06-02 12:00:00 +0000
author: test
categories: [guides, writing]
tags: [template, guide]
excerpt_separator: <!--more-->
draft: true
---

This is the excerpt that will appear on list pages.

<!--more-->

Write your full article here with the sections above as guidance.

Good luck and thanks for contributing!

