import style from './UserProfile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import * as clinicServices from '../../services/clinicServices';

import UserContext from '../UserContext/UserContext';

function UserProfile({history}) {

     const {currentUser} = useContext(UserContext);

    let changeUserProfileButtonStyles = style.changeUserProfileButton + ' btn';

    function onClickChangeButtonHandler(){
        history.push("/changeprofile");
    }


    return (
        
        <div className={style.userContainer}>
            <div className={style.userHeader}>


                <div className={style.userMainInfo}>
                    <div className={style.userMainInfoHeader}>
                        <h3 className={style.userMainInfoHeaderH3}>INFORMATION</h3>
                        <div className={style.userInfoHr}></div>

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <h4>First Name</h4>
                                <p>{currentUser.firstName}</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4>Last Name</h4>
                                <p>{currentUser.lastName}</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4>Email</h4>
                                <p>{currentUser.email}</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4>Phone</h4>
                                <p>{currentUser.phone}</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4>Town</h4>
                                <p>{currentUser.town}</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4>Address</h4>
                                <p>{currentUser.address}</p>
                            </div>
                            {
                                currentUser.role == "User" ? <div className="col-md-12 mb-4">
                                <button onClick={onClickChangeButtonHandler} className={changeUserProfileButtonStyles}>Change</button>
                                </div> : null
                            }
                        </div>


                        <h3 className={style.userMainInfoPetsH3}>PETS</h3>
                        <div className={style.userInfoHr}></div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;