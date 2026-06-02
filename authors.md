---
layout: default
title: Authors
permalink: /authors/
---

<h1>Authors</h1>

<div class="authors-list">
  {% for author in site.authors %}
    <div class="author-card">
      <h2><a href="{{ author.url | relative_url }}">{{ author.name }}</a></h2>
      {% if author.position %}
        <p class="author-position">{{ author.position }}</p>
      {% endif %}
      <p class="author-bio">{{ author.content | strip_html | truncate: 150 }}</p>
      {% assign author_posts = site.posts | where: 'author', author.short_name %}
      <p class="author-posts">
        <small>{{ author_posts.size }} post{% if author_posts.size != 1 %}s{% endif %} • 
          <a href="{{ author.url | relative_url }}">View all</a>
        </small>
      </p>
    </div>
  {% endfor %}
</div>

<style>
  .authors-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .author-card {
    border: 1px solid #eee;
    padding: 1rem;
    border-radius: 4px;
  }

  .author-card h2 {
    margin: 0 0 0.5rem 0;
  }

  .author-card h2 a {
    text-decoration: none;
    color: #0066cc;
  }

  .author-card h2 a:hover {
    text-decoration: underline;
  }

  .author-position {
    margin: 0 0 0.5rem 0;
    color: #666;
    font-weight: bold;
  }

  .author-bio {
    margin: 0 0 0.5rem 0;
    line-height: 1.5;
    color: #333;
  }

  .author-posts {
    margin: 0;
    color: #666;
  }
</style>
