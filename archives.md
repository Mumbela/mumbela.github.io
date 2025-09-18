---
layout: default
title: Archives
permalink: /archives/
---

<h1>Archives</h1>

<h2>By Category</h2>
<ul>
  {% for category in site.categories %}
    <li>
      <a href="{{ site.baseurl }}/categories/{{ category[0] }}/">{{ category[0] | capitalize }}</a> ({{ category[1].size }})
    </li>
  {% endfor %}
</ul>

<h2>By Tag</h2>
<ul>
  {% for tag in site.tags %}
    <li>
      <a href="{{ site.baseurl }}/tags/{{ tag[0] }}/">{{ tag[0] | capitalize }}</a> ({{ tag[1].size }})
    </li>
  {% endfor %}
</ul>