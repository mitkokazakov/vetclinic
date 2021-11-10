import style from './Header.module.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../../images/logo.png';
import {Link} from 'react-router-dom';

function Header() {

    return (
        <div className={style.header}>
            
            <div className={style.imageWrapper}>
                <img src={Image} />
            </div>

            <ul className={style.ul}>
                <li className={style.li}><Link to="/">Home</Link></li>
                <li className={style.li}><Link to="/services">Services</Link></li>
                <li className={style.li}><Link to="/docs">Doctors</Link></li>
                <li className={style.li}><Link to="/contacts">Contacts</Link></li>
                <li className={style.li}><Link to="/register">Register</Link></li>
                <li className={style.li}><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
}

export default Header;