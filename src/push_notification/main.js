import AppServiceWorker from "./AppServiceWorker.js";
import NotificationPushService from "./NotificationPushService.js";

export function loadWorker() {
    const workerUri = "/service_worker.js";
    const applicationKey = 'BItoVHgEImb1oDvlVaCchsKAHOQNjbclddgfp7mlfZUmKwMIgqlgI5t8bBYRWWNlic3uViiU4ZbIRU6rmRuX_Ac';
    const apiEndpoint = "http://localhost:8001/api/notification/register/";

//Here check if we can use ServiceWorker and Push notification
    if (!AppServiceWorker.isSupported() || !NotificationPushService.isSupported()) {
        console.error("Service Worker and Notification Push are not supported by your navigator");
    } else {
        // document.querySelector("#askNotificationPermission").addEventListener("click", (event) => {
        //     event.preventDefault();
        //     NotificationPushService.askAgainAuthorisation();
        // });

        //Create the worker
        let serviceWorker = new AppServiceWorker(workerUri);

        //Init worker
        serviceWorker.registerNewWorker();

        //When worker is ready, prepare notificationPushService
        serviceWorker.ready((serviceWorkerRegistration) => {
            let notificationPushService = new NotificationPushService(
                applicationKey,
                apiEndpoint,
                serviceWorkerRegistration
            );

            notificationPushService.subscribeClient();
        });
    }
}

/**
 * ***************Abouts***************
 *  How to use ?
 *  - Deploy <script src="js/main.js" type="module"></script> in your index.html
 *  - Put service_worker.js in the racine of your application and modify constant "workerUri"
 *  - Generate key here : https://web-push-codelab.glitch.me/ and modify constant "applicationKey"
 *  - Create an endpoint on your server and modify constant "apiEndpoint"
 * ***********Browser support***********
 * Not supported :
 * - IE
 * **************Developer**************
 * - DELAMOTTE Pierrick
 * ***************Sources***************
 * https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import
 * https://web-push-codelab.glitch.me/
 * https://developers.google.com/web/fundamentals/codelabs/push-notifications#top_of_page
 * https://github.com/web-push-libs
 * chrome://inspect/#service-workers
 */









