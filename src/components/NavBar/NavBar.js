import React from "react";
import styles from './NavBar.module.scss';
import logo from '../../assets/logo-wealty.png';
import { FaUserAlt, FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <div className={styles.navbar}>
            <Link to="/">
                <div className={styles.navbar__logo}>
                    <img  src={logo} alt="logo-wealty"/>
                </div>
            </Link>
            <div className={styles.navbar__items}>
                <div className={styles.navbar__tools}>
                    <Link to="/searchpage">
                        <a href="./index.html"><FaSearch className={styles.navbar__search}/>Search</a>
                    </Link>
                    <Link to="/userview">
                        <a href="./index.html"><FaUserAlt className={styles.navbar__user} />My Profile</a>
                    </Link>              
                </div>
           </div>
        </div>
    )
}