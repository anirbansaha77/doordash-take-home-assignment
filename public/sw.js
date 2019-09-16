const version = 'anirbansaha.net_v2019_08_24_7';
self.addEventListener('install' , function(event) {
    console.log('SW installing version'+version)
    event.waitUntil(
        caches.open(version).then(
            function(cache){
                return cache.addAll([
                    '/offline.html',
                ]);
            }
        )
    );
});
self.addEventListener('activate' , function(event) {
    event.waitUntil(
        caches.keys().then(
            function(keys){
                return Promise.all(keys.filter(function(key){
                    return key !== version;
                }).map(function(key){
                    caches.delete(key);
                }))
            }
        )
    );
});

self.addEventListener('fetch' , function(event) {
    event.respondWith(
        caches.match(event.request).then(
            function(res){
                if(res) {
                    return res;
                }
                // if(!navigator.onLine) {
                //     return caches.match(new Request('/offline.html'));
                // }
                return fetchAndUpdateRequest(event.request);
            }
        )
    );
});

function fetchAndUpdateRequest(request) {
    return fetch(request).then(
        function(res) {
            if(res) {
                return caches.open(version)
                .then(function(cache) {
                    return cache.put(request, res.clone())
                    .then(function() {
                            return res;
                    }).catch(error => {
                        console.log({error, request})
                    })
                })
            }
        }
    );
}