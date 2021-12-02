import style from './SingleUser.module.css';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import * as clinicServices from '../../services/clinicServices';

function SingleUser({ match }) {

    let addPetBtnStyles = 'btn mt-3 ' + style.petsContainerAddButton;

    let currentUserId = match.params.userId;
    const [userToDisplay, setUserToDisplay] = useState('');
    const [userPets, setUserPets] = useState([]);

    useEffect(() => {
        clinicServices.getUserById(currentUserId).then(data => setUserToDisplay(data));
        clinicServices.getPetsByUser(currentUserId).then(data => setUserPets(data));
    }, [currentUserId, userPets]);

    return (
        <div className={style.userContainer}>
            <div className="row col-md-8">
                <h1>User Info</h1>

                <div className="row d-flex">
                    <div className="col-md-6 mb-3">
                        <h2 >Name</h2>
                        <h4 >{userToDisplay.firstName + ' ' + userToDisplay.lastName}</h4>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h2>Email</h2>
                        <h4>{userToDisplay.email}</h4>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h2>Phone</h2>
                        <h4>{userToDisplay.phone}</h4>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h2>Town</h2>
                        <h4>{userToDisplay.town}</h4>
                    </div>
                    <div className="col-md-12 mb-3">
                        <h2>Address</h2>
                        <h4>{userToDisplay.address}</h4>
                    </div>
                </div>
            </div>

            <div className={style.petsContainer}>
                <h1>User's Pets</h1>

                {
                    userPets.map(p => {
                        return <Link key={p.petId} to={`/manage/viewpet/${p.petId}`} >{p.name}</Link>
                    })
                }

                <Link to={`/manage/addpet/${currentUserId}`} className={addPetBtnStyles}>Add Pet</Link>
            </div>
        </div>
    );
}

export default SingleUser;