import React from "react";
import styles from './NavBar.module.scss';
import logo from '../../assets/logo-wealty.png';
import { CgSearch } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';

export const NavBar = () =>{
    return(
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <img  src={logo} alt="logo-wealty"/>
            </div>
            <div className={styles.navbar__items}>
                <div className={styles.navbar__tools}>
                    <div>
                        <CgSearch className={styles.navbar__search} /><a href="./index.html">Search</a>
                    </div>
                    <div>
                        <FaUserAlt className={styles.navbar__user} /><a href="./index.html">My Profile</a>
                    </div>
                </div>
           </div>
        </div>
    )
}