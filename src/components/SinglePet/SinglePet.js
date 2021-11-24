import PetImage from '../../images/8.jpg';
import style from './SinglePet.module.css';
import {Link} from 'react-router-dom';

function SinglePet({name,breed,kind,age,petId}) {

    let cardStyles = 'card col-md-2 me-5 p-4 ' + style.petCard;
    let petNameStyles = 'card-title ' + style.petName;
    let petBtnStyles = 'btn ' + style.petBtn;

    let currentPetId = petId;

    function onClickViewBtn () {

    }

    return (

        <div className={cardStyles}>
            <img className="card-img-top" src={PetImage} alt="Card image cap" />
            <div className="card-body">
                <h5 className={petNameStyles}>{name}</h5>
                <p className="card-text">{kind} - {breed}</p>
                <p className="card-text"><small className="text-muted">Age: {age}</small></p>
                <Link to={`/manage/viewPet/${petId}`} className={petBtnStyles}>View</Link>
            </div>
        </div>
    );


}

export default SinglePet;