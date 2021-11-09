import style from './Header.module.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../../images/logo.png';

function Header() {

    return (
        <div className={style.header}>
            
            <div className={style.imageWrapper}>
                <img src={Image} />
            </div>

            <ul className={style.ul}>
                <li className={style.li}>Home</li>
                <li className={style.li}>Who We Are</li>
                <li className={style.li}>Services</li>
                <li className={style.li}>Pets</li>
                <li className={style.li}><a href="#docs">Doctors</a></li>
                <li className={style.li}>Contacts</li>
            </ul>
        </div>
    );
}

export default Header;