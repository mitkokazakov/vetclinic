import style from './Doctors.module.css';
import ImageDoc1 from '../../images/team-1.jpg';
import ImageDoc2 from '../../images/team-2.jpg';
import ImageDoc3 from '../../images/team-3.jpg';
import ImageDoc4 from '../../images/team-4.jpg';

function Doctors() {

    return (
        <div className={style.doctors} id="docs">
            <div className={style.doctorsHeading}>
                <h1>Doctors</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
                    semper aliquam quis mattis quam.</p>
            </div>
            <div className="row mt-5 ms-5">
                <div className="col-md-3 col-sm-6 ">
                    <div className={style.doctorContainer}>
                        <img src={ImageDoc1} className={style.doctorImage} />
                        <div className={style.doctorInfo}>
                            <h4>Dr. Jonh Dow</h4>
                            <h5>Founder</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
                        </div>
                       
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 ">
                    <div className={style.doctorContainer}>
                        <img src={ImageDoc2} className={style.doctorImage} />
                        <div className={style.doctorInfo}>
                            <h4>Dr. Jonh Dow</h4>
                            <h5>Founder</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
                        </div>
                       
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className={style.doctorContainer}>
                        <img src={ImageDoc3} className={style.doctorImage} />
                        <div className={style.doctorInfo}>
                            <h4>Dr. Jonh Dow</h4>
                            <h5>Founder</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
                        </div>
                       
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className={style.doctorContainer}>
                        <img src={ImageDoc4} className={style.doctorImage} />
                        <div className={style.doctorInfo}>
                            <h4>Dr. Jonh Dow</h4>
                            <h5>Founder</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
                        </div>
                       
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Doctors;