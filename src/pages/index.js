import { Footer } from '../components/Footer/Footer';
import { NavBar } from "../components/NavBar/NavBar";
import { HomePage } from '../content/HomePage';
import { Hero }  from '../components/Hero/Hero';
import { InfoAbout } from '../components/InfoAbout/InfoAbout';

export default function Home(){
    return(
        <>
            <NavBar/>
            <HomePage/>
            <Hero/>
            <InfoAbout/>
            <Footer/>
        </>
    )
}