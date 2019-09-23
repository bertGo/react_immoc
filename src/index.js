import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import * as serviceWorker from './serviceWorker';
import Immoc from './js/Immoc'

ReactDOM.render(<Immoc />,document.getElementById("root"));
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept();
    };
    