import React, {Component} from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import ProductPage from "./ui/ProductPage/ProductPage";
import HomePage from "./ui/HomePage/HomePage";
import CatalogPage from "./ui/CatalogPage/CatalogPage";
import {NavLink, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className={styles.App}>
            <div>
                <NavLink to='/'><div>Home</div></NavLink>
                <NavLink to='/catalog'><div>Catalog</div></NavLink>
            </div>
            <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/catalog' element={<CatalogPage />}/>
            <Route path='/product' element={<ProductPage />}/>
            </Routes>
        </div>
    );
}

export default App;
