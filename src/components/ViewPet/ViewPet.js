import style from './ViewPet.module.css';
import Image from '../../images/unknown.jpg';
import UserContext from '../UserContext/UserContext';

import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import * as clinicServices from '../../services/clinicServices';

function ViewPet({ match }) {

    const { currentUser } = useContext(UserContext);

    let currentPetId = match.params.petId;

    const [pet, setPet] = useState({ name: '', kind: '', breed: '', imageId: null});

    useEffect(() => {

        clinicServices.getPetById(currentPetId).then(data => setPet(data));

    }, [pet]);

    let imageUrl = null;

    if(pet.imageId == null){
        imageUrl = Image;
    }
    else{
        imageUrl = `https://localhost:44384/pets/getimage/${currentPetId}`;
    }


    return (
        <div className="row">
            <h1 className="font-weight-bold">Pet Info</h1>
            <div className={style.petHr}></div>
            <div className="d-flex justify-content-start">
                <div className={style.petImage}>
                    <img src={imageUrl} alt="No image"></img>
                </div>

                <div className={style.petInfo}>
                    <h3 className="mb-3">Name: {pet.name}</h3>
                    <h4 className="mb-3">Kind: {pet.kind}</h4>
                    <h5 className="mb-3">Breed: {pet.breed}</h5>
                    <h6 className="mb-3">Age: </h6>

                    <Link to={`/changePet/${currentPetId}`} className={`btn ${style.petBtn}`}>Edit</Link>
                </div>


            </div>

            <div className="col-md-6 offset-md-3">
                <h1>Visitations</h1>
                {
                    currentUser.role == "Admin" ? <Link to={`/manage/addVisitation/${currentPetId}`} className={`btn ${style.petBtn}`}>Add Visitation</Link> : null
                }
            </div>
        </div>
    );
}

export default ViewPet;