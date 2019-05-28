---
---

var urlsToCache = [
    '{{ site.baseurl }}/index.html',
'{{ site.baseurl }}/css/main.css',
'{{ site.baseurl }}/css/fontawesome-all.min.css',
'{{ site.baseurl }}/css/font.css',
'{{ site.baseurl }}/css/ekko-lightbox.css',
'{{ site.baseurl }}/bs/assets/javascripts/jquery.min.js',
'{{ site.baseurl }}/bs/assets/javascripts/umd/popper.min.js',
'{{ site.baseurl }}/bs/assets/javascripts/bootstrap.min.js',
'{{ site.baseurl }}/bs/assets/javascripts/ekko-lightbox.js',
'{{ site.baseurl }}/bs/assets/javascripts/search.js',
'{{ site.baseurl }}/about/index.html',
{% for page in site.pages limit:30 %}
{% if page.url contains "page" %}
'{{ site.baseurl }}{{ page.url }}index.html',
{% endif %}
{% endfor %}
{% for post in site.posts limit:100 %}
'{{ site.baseurl }}{{ post.url }}',
{% endfor %}
'{{ site.baseurl }}/shop/index.html',
'{{ site.baseurl }}/search2/index.html',
'{{ site.baseurl }}/sitemap.xml',
'{{ site.baseurl }}/404.html',
'{{ site.baseurl }}/search.json',
'{{ site.baseurl }}/privacy/index.html',
'{{ site.baseurl }}/tos/index.html'
];

var CACHE_NAME = 'progressive-hyde-cache-v1';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function (response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(CACHE_NAME).then(function (cache) {
            return fetch(event.request).then(function (response) {
                cache.put(event.request, response.clone());
                return response;
            });
        })
    );
});
