import style from './ViewPet.module.css';
import Image from '../../images/unknown.jpg';
import UserContext from '../UserContext/UserContext';
import Visitation from '../Visitation/Visitation';

import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import * as clinicServices from '../../services/clinicServices';

function ViewPet({ match }) {

    const { currentUser } = useContext(UserContext);

    let currentPetId = match.params.petId;

    const [pet, setPet] = useState({ name: '', kind: '', breed: '', imageId: null });
    const [visitations, setVisitations] = useState([]);
    const [petImage, setPetImage] = useState('');



    useEffect(() => {

        clinicServices.getPetById(currentPetId).then(data => setPet(data));
        clinicServices.getVisitations(currentPetId).then(data => setVisitations(data));

        let imageUrl = null;

        if (pet.imageId == null) {
            imageUrl = Image;
        }
        else {
            imageUrl = `https://localhost:44384/pets/getimage/${currentPetId}`;
        }

        setPetImage(imageUrl);

    }, [pet]);




    return (
        <div className="row">
            <div className={style.headerContainer}>
                <h1 className={style.petHeader}>Pet Info</h1>
            </div>

            <div className="d-flex justify-content-start">
                <div className={style.petImage}>
                    <img src={petImage} alt="No image"></img>
                </div>

                <div className={style.petInfo}>
                    <h3 className="mb-3">Name: {pet.name}</h3>
                    <h4 className="mb-3">Kind: {pet.kind}</h4>
                    <h5 className="mb-3">Breed: {pet.breed}</h5>
                    <h6 className="mb-3">Age: </h6>

                    <Link to={`/changePet/${currentPetId}`} className={`btn ${style.petBtn}`}>Edit</Link>
                </div>


            </div>

            <div className="col-md-6 offset-md-3 mt-4">
                <h1>Visitations</h1>
                {
                    visitations.map(v => {
                        return <Visitation key={v.id} date={v.date} reason={v.reason} description={v.description} />
                    })
                }
                {
                    currentUser.role == "Admin" ? <Link to={`/manage/addVisitation/${currentPetId}`} className={`btn ${style.petBtn}`}>Add Visitation</Link> : null
                }
            </div>
        </div>
    );
}

export default ViewPet;