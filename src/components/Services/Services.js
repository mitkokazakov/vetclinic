import style from './Services.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {

    let iconsStyle = style.iconsWrapper + ' col-md-4';
    return (
        <div className={style.servicesContainer} id="services">
            <div className={style.servicesHeading}>
                <h1>Our Services</h1>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
                    semper aliquam quis mattis quam.</p>
            </div>
            <div className={style.services}>

                <div className="row">
                    <div className={iconsStyle}>
                        <div className={style.servicesIcons}>
                        <i class="fas fa-coffee"></i>
                        </div>
                        <div className={style.iconsText}>
                            <h6>Quick Coffee</h6>
                            <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                        </div>
                    </div>

                    <div className={iconsStyle}>
                        <div className={style.servicesIcons}>
                        <i class="fas fa-radiation"></i>
                        </div>
                        <div className={style.iconsText}>
                            <h6>Radiology</h6>
                            <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                        </div>
                    </div>

                    <div className={iconsStyle}>
                        <div className={style.servicesIcons}>
                        <i class="fas fa-ambulance"></i>
                        </div>
                        <div className={style.iconsText}>
                            <h6>Emergency</h6>
                            <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className={iconsStyle}>
                        <div className={style.servicesIcons}>
                        <i class="fas fa-brain"></i>
                        </div>
                        <div className={style.iconsText}>
                            <h6>Neurology</h6>
                            <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                        </div>
                    </div>

                    <div className={iconsStyle}>
                        <div className={style.servicesIcons}>
                        <i class="fa fa-compass"></i>
                        </div>
                        <div className={style.iconsText}>
                            <h6>Ultrasound</h6>
                            <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                        </div>
                    </div>

                    <div className={iconsStyle}>
                        <div className={style.servicesIcons}>
                        <i class="fas fa-heartbeat"></i>
                        </div>
                        <div className={style.iconsText}>
                            <h6>Cardiology</h6>
                            <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services