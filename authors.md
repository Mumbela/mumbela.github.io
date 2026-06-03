---
layout: default
title: Authors
permalink: /authors/
---

<section class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h1 class="display-5 fw-bold">Authors</h1>
      <p class="text-muted">Meet the contributors behind our health, wellness, and science posts.</p>
    </div>

    <div class="row g-4">
      {% for author in site.authors %}
        {% assign author_posts = site.posts | where: 'author', author.short_name %}
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="me-3">
                  {% if author.photo %}
                    <img src="{{ author.photo | relative_url }}" alt="{{ author.name }}" class="rounded-circle" style="width: 60px; height: 60px; object-fit: cover;">
                  {% else %}
                    <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width: 60px; height: 60px; font-size: 1.25rem;">
                      {{ author.name | slice: 0, 1 }}
                    </div>
                  {% endif %}
                </div>
                <div>
                  <h2 class="h5 mb-1"><a href="{{ author.url | relative_url }}" class="text-decoration-none text-dark">{{ author.name }}</a></h2>
                  {% if author.position %}
                    <p class="text-muted mb-0">{{ author.position }}</p>
                  {% endif %}
                </div>
              </div>
              <p class="text-muted">{{ author.content | strip_html | truncate: 140 }}</p>
              {% include author-social-links.html author=author wrapper_class="d-flex flex-wrap gap-3 mt-3" icon_class="fs-4" %}
            </div>
            <div class="card-footer bg-transparent border-0 pt-0 d-flex justify-content-between align-items-center">
              <small class="text-muted">{{ author_posts.size }} post{% if author_posts.size != 1 %}s{% endif %}</small>
              <a href="{{ author.url | relative_url }}" class="text-decoration-none">View profile</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
