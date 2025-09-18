---
layout: post
title: Blog
permalink: /blog/
pagination:
  enabled: true
---
<h1>Latest Posts</h1>

<ul class="list-unstyled">
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}" class="text-decoration-none">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>