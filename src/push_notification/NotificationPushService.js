/**
 *
 */
class NotificationPushService {

    /**
     * Check if functionality is supported
     *
     * @returns {boolean}
     */
    static isSupported() {
        return !!('PushManager' in window);
    }

    /**
     *
     * @param appPublicKey
     * @param serviceWorkerRegistration
     * @param apiEndPointSubscribeUser
     */
    constructor(appPublicKey, apiEndPointSubscribeUser, serviceWorkerRegistration) {
        this.appPublicKey = appPublicKey;
        this.applicationServerKey = NotificationPushService.urlB64ToUint8Array(this.appPublicKey);
        this.serviceWorkerRegistration = serviceWorkerRegistration;
        this.apiEndPointSubscribeUser = apiEndPointSubscribeUser;
    }

    /**
     * Sends the information to the server in order to send it the notifications
     */
    subscribeClient() {
        this.serviceWorkerRegistration.pushManager
            .getSubscription()
            .then((subscription) => {
                if (subscription === null && NotificationPushService.checkAuthorisation() !== -1) {
                    this.serviceWorkerRegistration.pushManager.subscribe(
                        {
                            userVisibleOnly: true,
                            applicationServerKey: this.applicationServerKey
                        }
                    ).then((subscriptionData) => {
                        if (subscriptionData) {
                            this.updateServer(subscriptionData);
                            return;
                        }

                        console.error("Failed to update server");
                    }).catch((err) => {
                        console.error('Failed to subscribe the user: ', err);
                    });
                }
            });
    }

    unSubscribeClient() {

    }

    /**
     * Sends the information to the server in order to send it the notifications
     *
     * @param subscriptionData
     */
    updateServer(subscriptionData) {
        let requestData = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscriptionData),
        };

	console.log(requestData);

        let myRequest = new Request(this.apiEndPointSubscribeUser, requestData);

        fetch(myRequest).then((response) => {
            if (response.ok) {
                console.info("Server update successfully");
                console.info(response);
                return;
            }
            console.error(response);
        }).catch(function (error) {
            console.error("Failed to update Server");
            console.error(error);
        });
    }

    static checkAuthorisation() {
        switch (Notification.permission) {
            case "granted":
                return 1;
            case "denied":
                return -1;
            default:
                return 0;
        }
    }

    static askAgainAuthorisation() {
        if (this.checkAuthorisation() === 1) {
            console.error("You have already the authorization");
            return;
        }

        Notification.requestPermission().then(
            (status) => {
                console.log(status);
            }
        );
    }

    /**
     *
     *
     * @param base64String
     * @returns {Uint8Array}
     */
    static urlB64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
}

export default NotificationPushService;
