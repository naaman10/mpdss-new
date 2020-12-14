---
layout: default
title: Bikes
permalink: "/bikes"
menu:
  header:
    weight: 2

---
<ul>
{% for bike in site.road %}
  <li>{{ bike.name }}</li>
{% endfor %}
</ul>
