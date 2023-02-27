import React from "react";
import styles from './Footer.module.scss';

export const Footer = () =>{
    return(
        <div className={styles.footer}>
           <ul className={styles.footer__items}>
                <div className={styles.footer__bg}>
                    <img  src="#" alt="bg-wealty"/>
                </div>
                <div className={styles.footer__tools}>
                    <p>GET IN TOUCH</p>
                    <a href="./index.html">Miami,USA</a>
                    <a href="./index.html">(305) 842-2163</a>
                    <a href="./index.html">support@wealty.io</a>
                    <a href="./index.html">@wealty</a>
                </div>
           </ul>
        </div>
    )
}