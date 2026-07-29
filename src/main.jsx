import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import productPageReducer from "./redux/productPageReducer";
import catalogPageReducer from "./redux/catalogPageReducer";
import homePageReducer from "./redux/homePageReducer";
import {Provider} from 'react-redux';

let reducers = combineReducers({
    productPage: productPageReducer,
    catalogPage: catalogPageReducer,
    homePage: homePageReducer
});

let store = createStore(reducers);
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
                <App state={store.getState} store={store}  />
            </BrowserRouter>
        </Provider>
        </React.StrictMode>)
}

rerenderEntirePage(store.getState());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
