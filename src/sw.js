import {getFiles, setupPrecaching, setupRouting} from 'preact-cli/sw/';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

setupRouting();

const handler = new CacheFirst({
    cacheName: 'all_assets',
    plugins: [
        new ExpirationPlugin({
            maxAgeSeconds: 60 * 60 * 24, // expire cache after 24 hours
            maxEntries: 100,
        }),
    ],
});

registerRoute(({url}) => url['host'] ==='firebasestorage.googleapis.com', handler);
setupPrecaching(getFiles());
