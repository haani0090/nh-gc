import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App'

/* Creating a root element for the React app. */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    /* A component that is wrapping the App component. */
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
)