import PetImage from '../../images/8.jpg';
import style from './SinglePet.module.css';
import { Link,Redirect } from 'react-router-dom';

import Fallback from '../Fallback/Fallback';

import { useState } from 'react';

import * as clinicServices from '../../services/clinicServices';

function SinglePet({ name, breed, kind, age, petId, history }) {

    let cardStyles = 'card col-md-3 me-5 p-4 ' + style.petCard;
    let petNameStyles = 'card-title ' + style.petName;
    let petBtnStyles = 'btn ' + style.petBtn;

    //let currentPetId = petId;

    const [errorInfo, setHasError] = useState({hasError: false, message: ''});

    function onClickDeleteBtn(e){

        clinicServices.deletePet(petId)
                .catch(err => setHasError({hasError: true, message: err.message}));

        return <Redirect to="/manage/listAllPets" />
    }

    if(errorInfo.hasError){
        return <Fallback message = {errorInfo.message} />
    }

    return (

        <div className={cardStyles}>
            <img className="card-img-top" src={PetImage} alt="Card image cap" />
            <div className="card-body">
                <h5 className={petNameStyles}>{name}</h5>
                <p className="card-text">{kind} - {breed}</p>
                <p className="card-text"><small className="text-muted">Age: {age}</small></p>
                <div className="d-flex flex-column">
                    <Link to={`/manage/viewPet/${petId}`} className={petBtnStyles}>View</Link>
                    <Link to={`/manage/deletePet/${petId}`} className={petBtnStyles} onClick={onClickDeleteBtn}>Delete</Link>
                </div>
            </div>
        </div>
    );


}

export default SinglePet;