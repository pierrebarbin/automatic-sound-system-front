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
     * @param apiEndPointSubscribeUser
     * @param apiEndPointUnsubscribeUserApiEndpoint
     * @param serviceWorkerRegistration
     */
    constructor(appPublicKey, apiEndPointSubscribeUser, apiEndPointUnsubscribeUserApiEndpoint, serviceWorkerRegistration) {
        this.appPublicKey = appPublicKey;
        this.applicationServerKey = NotificationPushService.urlB64ToUint8Array(this.appPublicKey);
        this.serviceWorkerRegistration = serviceWorkerRegistration;
        this.apiEndPointSubscribeUser = apiEndPointSubscribeUser;
        this.apiEndPointUnsubscribeUserApiEndpoint = apiEndPointUnsubscribeUserApiEndpoint;
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
                            this.subscribeOnServer(subscriptionData);
                            return;
                        }

                        this.unSubscribeClient();
                        console.error("Failed to update server");
                    }).catch((err) => {
                        this.unSubscribeClient();
                        console.error('Failed to subscribe the user: ', err);
                    });
                }
            });
    }

    /**
     *
     * @param onServer
     */
    unSubscribeClient(onServer = true) {
        this.serviceWorkerRegistration.pushManager
            .getSubscription()
            .then((subscription) => {
                if (subscription) {
                    return subscription.unsubscribe();
                }
            })
            .catch(function(error) {
                console.error('Error unsubscribing', error);
            })
            .then(() => {
                if (onServer) {
                    this.unsubscribeOnServer();
                }
                console.log('User is unsubscribed.');
            });
    }

    /**
     * Sends the information to the server in order to send it the notifications
     *
     * @param subscriptionData
     */
    subscribeOnServer(subscriptionData) {
        let requestData = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscriptionData),
        };

        NotificationPushService.fetchServer(new Request(this.apiEndPointSubscribeUser, requestData));
    }

    /**
     * Send request to remove all subscription !
     */
    unsubscribeOnServer() {
        let requestData = {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        NotificationPushService.fetchServer(new Request(this.apiEndPointUnsubscribeUserApiEndpoint, requestData));
    }

    /**
     *
     * @returns {number}
     */
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

    /**
     *
     */
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

    /**
     *
     * @param myRequest
     */
    static fetchServer(myRequest) {
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
}

export default NotificationPushService;
