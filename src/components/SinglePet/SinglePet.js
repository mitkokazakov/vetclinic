import PetImage from '../../images/8.jpg';
import style from './SinglePet.module.css';
import { Link,Redirect } from 'react-router-dom';

import * as clinicServices from '../../services/clinicServices';

function SinglePet({ name, breed, kind, age, petId, history }) {

    let cardStyles = 'card col-md-2 me-5 p-4 ' + style.petCard;
    let petNameStyles = 'card-title ' + style.petName;
    let petBtnStyles = 'btn ' + style.petBtn;

    //let currentPetId = petId;

    function onClickDeleteBtn(e){

        clinicServices.deletePet(petId);

        return <Redirect to="/manage/listAllPets" />
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