import style from '../About/About.module.css';


function About() {

    return (
        <div className={style.aboutContainer}>
            <div className={style.aboutHeading}>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
                    semper aliquam quis mattis quam.</p>
            </div>
            <div className={style.aboutContent}>
                <div className={style.aboutImage}>
                        
                </div>
                <div className={style.aboutText}>
                        <h3>We Take Care Your Pets</h3>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
                </div>
            </div>
        </div>
    );
}

export default About;