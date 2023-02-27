import { React } from "react";
import { Filterbar } from '../FilterBar/Filterbar';
import { Carousel } from "../Carousel/Carousel";
import styles from './Hero.module.scss';

export const Hero = () =>{
    return(
        <div className={styles.hero}>
            <div className={styles.hero__title}>
                <h1>Find an investment property</h1>
            </div>
            <div className={styles.hero__filterbar}>
                <Filterbar/>
            </div>
            <div className={styles.hero__carousel}>
                <Carousel/>
            </div>
        </div>
    )
}

