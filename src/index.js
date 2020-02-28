import React from 'react';
import ReactDOM from 'react-dom';
import './translations/i18n.js';
import App from './components/App';
import './css/styles.css';
import * as main from './push_notification/main';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
main.loadWorker();
//serviceWorker.unregister();
