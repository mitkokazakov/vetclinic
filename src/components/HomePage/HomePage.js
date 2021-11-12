import Slider from "../Slider/Slider";
import About from "../About/About";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";
import Contact from "../Contacts/Contact";

function HomePage(){

    return(
        <div>
            <Slider />
            <About />
            <Services />
            <Doctors />
            <Contact />
        </div>
    );
}

export default HomePage;