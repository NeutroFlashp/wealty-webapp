import { Footer } from '../components/Footer/Footer';
import { NavBar } from "../components/NavBar/NavBar";
import { HomePage } from '../content/HomePage';
import { Hero }  from '../components/Hero/Hero';

export default function Home(){
    return(
        <>
            <NavBar/>
            <HomePage/>
            <Hero/>
            <Footer/>
        </>
    )
}