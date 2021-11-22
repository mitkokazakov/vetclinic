import style from './SingleUser.module.css';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import * as clinicServices from '../../services/clinicServices';

function SingleUser({ match }) {

    let addPetBtnStyles = 'btn ' + style.petsContainerAddButton;

    let currentUserId = match.params.userId;
    const [userToDisplay, setUserToDisplay] = useState('');

    useEffect(() => {
        clinicServices.getUserById(currentUserId).then(data => setUserToDisplay(data));
    }, [currentUserId]);

    return (
        <div className={style.userContainer}>
            <div className={style.infoAboutUser}>
                <h1>User Info</h1>

                <h2>Name</h2>
                <h4>{userToDisplay.firstName + ' ' + userToDisplay.lastName}</h4>
                <h2>Email</h2>
                <h4>{userToDisplay.email}</h4>
                <h2>Phone</h2>
                <h4>{userToDisplay.phone}</h4>
                <h2>Town</h2>
                <h4>{userToDisplay.town}</h4>
                <h2>Address</h2>
                <h4>{userToDisplay.address}</h4>
            </div>

            <div className={style.petsContainer}>
                <h1>User's Pets</h1>

                <Link to={`/manage/addpet/${currentUserId}`} className={addPetBtnStyles}>Add Pet</Link>
            </div>
        </div>
    );
}

export default SingleUser;