import React from 'react';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

const HomePage = ({homePage}) => {

    let {banner, popularProducts} = homePage;


    return <div>
        <div className={""}>
            <div>
                <img className={styles.banner}
                     src={banner.imgUrl} /> </div>
            <div>
                <h2>Популярные товары</h2>
                <div className={styles.popularBlock}>
                    {
                        popularProducts.map( (p, index) => <div key={index}>
                            <div>
                               <NavLink to='/product'>
                                <img src={p.img}/>
                               </NavLink>
                            </div>
                            <div>
                                {p.title}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
};

const mapStateToProps = (state) => ({
    homePage: state.homePage
});



export default connect(mapStateToProps)(HomePage);