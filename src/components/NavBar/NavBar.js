import React from "react";
import styles from './NavBar.module.scss';
import logo from '../../assets/logo-wealty.png';
import { FaUserAlt, FaSearch } from 'react-icons/fa';

export const NavBar = () =>{
    return(
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <img  src={logo} alt="logo-wealty"/>
            </div>
            <div className={styles.navbar__items}>
                <div className={styles.navbar__tools}>
                    <a href="./index.html"><FaSearch className={styles.navbar__search}/>Search</a>
                    <a href="./index.html"><FaUserAlt className={styles.navbar__user} />My Profile</a>
                </div>
           </div>
        </div>
    )
}