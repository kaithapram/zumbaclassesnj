---
layout: page
title: Search
permalink: /search2/
---

<div id="search-container">
<input type="text" id="search-input" placeholder="Search...">
<ul id="results-container"></ul>
</div>

<script src="{{'/bs/assets/javascripts/search.js' | prepend: site.baseurl}}"></script>

<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '{{ site.baseurl }}/search.json'
})
</script>



