import style from './UserProfile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserProfile({history}) {

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
                                <p>Mitko</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4>Last Name</h4>
                                <p>Kazakov</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4>Email</h4>
                                <p>kazaka_92@abv.bg</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4>Phone</h4>
                                <p>0895615876</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4>Town</h4>
                                <p>Stara Zagora</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4>Address</h4>
                                <p>Samara 3, bl.3, ap.68</p>
                            </div>
                            <div className="col-md-12 mb-4">
                            <button onClick={onClickChangeButtonHandler} className={changeUserProfileButtonStyles}>Change</button>
                            </div>
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