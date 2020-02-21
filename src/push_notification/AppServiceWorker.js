class AppServiceWorker {
    /**
     * Check if functionality is supported
     *
     * @returns {boolean}
     */
    static isSupported() {
        return !!('serviceWorker' in navigator);
    }

    /**
     *
     * @param scriptWorkerUri
     */
    constructor(scriptWorkerUri) {
        this.scriptWorkerUri = scriptWorkerUri;
    }

    /**
     * Register worker in browser
     */
    registerNewWorker() {
        navigator.serviceWorker.register(this.scriptWorkerUri)
            .then((serviceWorkerRegistration) => {
                console.info('Registration succeeded. Scope is ' + serviceWorkerRegistration.scope);
            })
            .catch((error) => {
                console.error('Registration failed with ' + error);
            });
    }

    /**
     * Do something when the worker is ready
     *
     * @param callBack
     */
    ready(callBack) {
        navigator.serviceWorker.ready.then(
            (serviceWorkerRegistration) => {
                callBack(serviceWorkerRegistration);
            }
        );
    }
}

export default AppServiceWorker;