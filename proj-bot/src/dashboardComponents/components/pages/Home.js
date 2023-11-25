import HeroSection from '../HeroSection'
// import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
// import Navbar from '../Navbar';
// import ExitSurveyForm from '../ExitSurvey';
import { Navbar1 } from '../Navbar1';

function Home(){
    return(
        <>
            <Navbar1 />
            <HeroSection />
            <Cards />
            {/* <ExitSurveyForm /> */}
            <Footer />
        </>
    );
}

export default Home