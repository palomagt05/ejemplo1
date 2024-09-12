module.exports = {
    "globDirectory": "./",
    "globPatterns": [
        "**/*.{html,js,css,png}"
    ],
    "swDest": "sw.js",
    "runtimeCaching": [{
        "urlPattern": ({request}) => request.destination === 'image',
        "handler": "CacheFirst",
        "options": {
            "cacheName": "images-cache",
            "expiration": {
                "maxEntries": 10,
                "maxAgeSeconds": 7 * 24 * 60 * 60, // 1 semana
            },
        },
    }]
};
