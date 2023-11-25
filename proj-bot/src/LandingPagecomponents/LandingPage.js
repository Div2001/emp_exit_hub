import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";



const LandingPage = () => {

    return (
             <>
                <Navigation />
                  <Header />
                  <Features />
                  <About />
                  <Services />
                  <Testimonials />
                  <Contact />
                </>

    
    );
  };
  
  export default LandingPage;