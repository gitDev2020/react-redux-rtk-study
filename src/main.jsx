import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./redux/store";

const container = document.getElementById('root');
const root = createRoot(container);

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntirePage(state);
// })

let rerenderEntirePage = (state) => {
    root.render(
        <React.StrictMode>
        <Provider store = {store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
        </React.StrictMode>)
}

rerenderEntirePage(store.getState());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
