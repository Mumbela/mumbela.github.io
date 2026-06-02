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
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
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
              {% if author.twitter or author.x or author.facebook or author.instagram or author.linkedin %}
                <div class="mt-3 d-flex flex-wrap gap-2">
                  {% if author.twitter %}
                    <a href="https://twitter.com/{{ author.twitter }}" target="_blank" rel="noopener" class="btn btn-outline-secondary btn-sm d-inline-flex align-items-center">
                      <i class="bi bi-twitter me-1"></i>Twitter
                    </a>
                  {% endif %}
                  {% if author.x %}
                    <a href="{% if author.x contains 'http' %}{{ author.x }}{% else %}https://x.com/{{ author.x }}{% endif %}" target="_blank" rel="noopener" class="btn btn-outline-secondary btn-sm d-inline-flex align-items-center">
                      <i class="bi bi-x-lg me-1"></i>X
                    </a>
                  {% endif %}
                  {% if author.facebook %}
                    <a href="{% if author.facebook contains 'http' %}{{ author.facebook }}{% else %}https://facebook.com/{{ author.facebook }}{% endif %}" target="_blank" rel="noopener" class="btn btn-outline-secondary btn-sm d-inline-flex align-items-center">
                      <i class="bi bi-facebook me-1"></i>Facebook
                    </a>
                  {% endif %}
                  {% if author.instagram %}
                    <a href="{% if author.instagram contains 'http' %}{{ author.instagram }}{% else %}https://instagram.com/{{ author.instagram }}{% endif %}" target="_blank" rel="noopener" class="btn btn-outline-secondary btn-sm d-inline-flex align-items-center">
                      <i class="bi bi-instagram me-1"></i>Instagram
                    </a>
                  {% endif %}
                  {% if author.linkedin %}
                    <a href="{% if author.linkedin contains 'http' %}{{ author.linkedin }}{% else %}https://linkedin.com/in/{{ author.linkedin }}{% endif %}" target="_blank" rel="noopener" class="btn btn-outline-secondary btn-sm d-inline-flex align-items-center">
                      <i class="bi bi-linkedin me-1"></i>LinkedIn
                    </a>
                  {% endif %}
                </div>
              {% endif %}
            </div>
            <div class="card-footer bg-transparent border-0 pt-0">
              <small class="text-muted">{{ author_posts.size }} post{% if author_posts.size != 1 %}s{% endif %}</small>
              <a href="{{ author.url | relative_url }}" class="stretched-link text-decoration-none"></a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
