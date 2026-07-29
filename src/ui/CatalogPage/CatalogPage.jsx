import React from 'react';
import styles from './Catalog.module.css';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';

const CatalogPage = () => {
    const products = useSelector((state) => state.catalogPage.products);
    return <div>
        <div className={""}>
            <h1>Каталог</h1>
            <div className={styles.products}>
                {
                    products.map((p, index) => <div key={index} className={styles.product}>
                        <div>
                            <NavLink to='/product'>
                                <img src={p.img}/>
                            </NavLink>
                        </div>
                        <div>
                            <div>
                                <b>{p.title}</b>
                            </div>
                            <div>
                               {p.shortDescription}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
};

export default CatalogPage;