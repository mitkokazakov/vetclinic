import PetImage from '../../images/unknown.jpg';
import style from './SinglePet.module.css';
import { Link, Redirect } from 'react-router-dom';

import Fallback from '../Fallback/Fallback';

import swal from 'sweetalert';

import { useState, useEffect } from 'react';

import * as clinicServices from '../../services/clinicServices';

function SinglePet({ name, breed, kind, age, petId, imageId }) {

    let cardStyles = 'card col-md-3 me-5 p-4 ' + style.petCard;
    let petNameStyles = 'card-title ' + style.petName;
    let petBtnStyles = 'btn ' + style.petBtn;

    //let currentPetId = petId;

    const [errorInfo, setHasError] = useState({ hasError: false, message: '' });
    const [petImage, setPetImage] = useState('');

    useEffect(() => {

        let imageUrl = null;

        if (imageId == null) {
            imageUrl = PetImage;
        }
        else {
            //The url to hosted API
            imageUrl = `https://mitkokazakov-001-site1.itempurl.com/pets/getimage/${petId}`;

            //The url from the localhost
            //imageUrl = `https://localhost:44384/pets/getimage/${currentPetId}`;
        }
            setPetImage(imageUrl);
    }, [petId]);

    function onClickDeleteBtn(e) {

        clinicServices.deletePet(petId).then(resp => {

            if(resp.status == 200){
                swal({
                    icon: "success",
                    title: "The pet was deleted !"
                });
            }
        })
            .catch(err => setHasError({ hasError: true, message: err.message }));

        return <Redirect to="/manage/listAllPets" />
    }

    if (errorInfo.hasError) {
        return <Fallback message={errorInfo.message} />
    }

    return (

        <div className={cardStyles}>
            <img className="card-img-top" src={petImage} alt="Card image cap" />
            <div className="card-body">
                <h5 className={petNameStyles}>{name}</h5>
                <p className="card-text">{kind} - {breed}</p>
                <p className="card-text"><small className="text-muted">Age: {age} years</small></p>
                <div className="d-flex flex-column">
                    <Link to={`/manage/viewPet/${petId}`} className={petBtnStyles}>View</Link>
                    <Link to={`/manage/deletePet/${petId}`} className={petBtnStyles} onClick={onClickDeleteBtn}>Delete</Link>
                </div>
            </div>
        </div>
    );


}

export default SinglePet;