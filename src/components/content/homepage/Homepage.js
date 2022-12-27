import '../assets/style.css'
import Header from './header/Header';
import Why from './main/Why';
import Our from './main/Our';
import Testi from './main/Testi';
import Sewa from './main/Sewa';
import Faq from './main/Faq';
import Footer from './footer/Footer';

const Homepage = () => {
    return (
    <>
    <Header/>
    <Our/>
    <Why/>
    <Testi/>
    <Sewa/>
    <Faq/>
    <Footer/>
    </>
    );
};

export default Homepage;