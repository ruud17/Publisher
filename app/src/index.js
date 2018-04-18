import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// 'Minimal' theme - hide/show the AccordionBody component:
import 'react-accessible-accordion/dist/minimal-example.css';

// 'Fancy' theme - boilerplate styles for all components, as seen on our demo:
import 'react-accessible-accordion/dist/fancy-example.css';
import 'rodal/lib/rodal.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';

ReactDOM.render(
    <BrowserRouter>
    <Main/>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
