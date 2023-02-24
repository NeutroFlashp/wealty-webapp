import React from "react";
import styles from '../Carousel/Carousel.module.scss';

export const Carousel = () => {
    return(
        <div className={styles.carousel}>
            <div className={styles.carousel__text}>
                <h1>Recent Properties</h1>
                <p>FIND YOUR NEXT INVESTMENT</p>
            </div>
        </div>
    )
}