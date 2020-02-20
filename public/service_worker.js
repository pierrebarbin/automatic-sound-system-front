self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');

    let data = event.data.json();

    console.log();

    const title = (data.title !== "") ? data.title : "New Notification";
    const options = {
        body: data.message,
        data: {
            link: (data.link !== "") ? data.link : "/notification",
        },
        icon: 'images/icon.png',
        badge: 'images/badge.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
    console.log('[Service Worker] Notification click Received.');
    console.log(event.notification);
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.link)
    );
});