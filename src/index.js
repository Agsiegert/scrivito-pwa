import React from 'react';
import ReactDOM from 'react-dom';
import * as Scrivito from 'scrivito';
import './config';
import './Objs';
import './Widgets';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.prerenderReady = false;
ReactDOM.render( < App / > , document.getElementById('application'));
registerServiceWorker();
Scrivito.finishLoading().then(() => { window.prerenderReady = true; });