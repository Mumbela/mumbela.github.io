---
layout: default
title: Archives
permalink: /archives/
---


## Blog Archives

<div class="row">
    <div class="col-md-6">
		<h3>Categories</h3>
		<ul class="list-unstyled">
		{% for category in site.categories %}
			<li>
			<a href="{{ site.baseurl }}/categories/{{ category[0] }}/" class="text-decoration-none">{{ category[0] | capitalize }}</a> ({{ category[1].size }})
			</li>
		{% endfor %}
		</ul>
    </div>
    <div class="col-md-6">
		<h3>Tags</h3>
		<ul class="list-unstyled">
		{% for tag in site.tags %}
			<li>
			<a href="{{ site.baseurl }}/tags/{{ tag[0] }}/" class="text-decoration-none">{{ tag[0] | capitalize }}</a> ({{ tag[1].size }})
			</li>
		{% endfor %}
		</ul>
    </div>
</div>
