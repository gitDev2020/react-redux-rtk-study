import React, {Component} from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import ProductPageContainer from "./ui/ProductPage/ProductPageContainer";
import HomePage from "./ui/HomePage/HomePage";
import CatalogPage from "./ui/CatalogPage/CatalogPage";
import {NavLink, Route, Routes} from "react-router-dom";

const App = (props) => {
    let { catalogPage, homePage, productPage } = props.state;

    return (
        <div className={styles.App}>
            <div>
                <NavLink to='/'><div>Home</div></NavLink>
                <NavLink to='/catalog'><div>Catalog</div></NavLink>
            </div>
            <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/catalog' element={<CatalogPage />}/>
            <Route path='/product' element={<ProductPageContainer />}/>
            </Routes>
        </div>
    );
}

export default App;
