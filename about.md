---
layout: page
title: About
permalink: /about/
---
{% if site.author_image %}
<div class="text-center">
<img src="{{ site.author_image }}" width="250" height="375" alt="image" class="img-thumbnail">
</div>
<br />
{% endif %}
<p>Hi, 
welcome to {{ site.title }}. My name is {{ site.author }}. I love blogging and browsing internet. You can contact me at <a href="mailto:{{ site.email }}">{{ site.email }}</a>. Enjoy your stay here.</p>
<br />
Site details: {{ site.description }}
