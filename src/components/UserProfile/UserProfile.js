import style from './UserProfile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState, useEffect } from 'react';
import * as clinicServices from '../../services/clinicServices';

import { Link } from 'react-router-dom';

import UserContext from '../UserContext/UserContext';
import Fallback from '../Fallback/Fallback';

function UserProfile({ history }) {

    const { currentUser } = useContext(UserContext);

    let currentUserId = currentUser.userId;

    const [currentUserPets, setUserPets] = useState([]);
    const [errorInfo, setHasError] = useState({hasError: false, message: ''});

    let changeUserProfileButtonStyles = style.changeUserProfileButton + ' btn';

    useEffect(() => {

        clinicServices.getPetsByUser(currentUserId)
                .then(data => setUserPets(data))
                .catch(err => setHasError({hasError: true, message: err.message}));

    }, [currentUserId]);

    function onClickChangeButtonHandler() {
        history.push("/changeprofile");
    }

    if(currentUser.role != "User"){
        return <Fallback message = "Unauthorized user. Sorry !" />
    }

    if(errorInfo.hasError){
        return <Fallback message = {errorInfo.message} />
    }

    return (

        <div className="row">
            <div className="row">
                <h3 className={`mb-5 ${style.informationHeader}`}>INFORMATION</h3>

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
            <div className="row">
                <h3 className={`mb-3 mt-3 ${style.informationHeader}`}>PETS</h3>
                <div className="col-md-8 offset-md-2">
                    <table className="table table-striped table-hover col-md-8">
                        <thead>
                            <tr>
                                <th>Pet</th>
                                <th>View</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentUserPets.map(pet => {

                                    return <tr key={pet.petId}>
                                        <td>
                                            {pet.name}
                                        </td>
                                        <td>
                                            <Link to={`/viewPet/${pet.petId}`} className="btn btn-primary">View</Link>
                                        </td>
                                        <td>
                                            <Link to={`/changePet/${pet.petId}`} className="btn btn-warning">Edit</Link>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default UserProfile;