import style from './ViewPet.module.css';
import Image from '../../images/8.jpg';

import {useState, useEffect} from 'react';

import * as clinicServices from '../../services/clinicServices';

function ViewPet({ match }) {

    let currentPetId = match.params.petId;

    const [pet, setPet] = useState({name: '', kind: '', breed: ''});

    useEffect(() => {

        clinicServices.getPetById(currentPetId).then(data => setPet(data));

    }, [pet]);
    return (
        <div className="row">
            <h1 className="font-weight-bold">Pet Info</h1>
            <div className={style.petHr}></div>
            <div className="d-flex justify-content-start">
                <div className={style.petImage}>
                    <img src={Image}></img>
                </div>

                <div className={style.petInfo}>
                    <h3 className="mb-3">Name: {pet.name}</h3>
                    <h4 className="mb-3">Kind: {pet.kind}</h4>
                    <h5 className="mb-3">Breed: {pet.breed}</h5>
                    <h6 className="mb-3">Age: </h6>

                    <p>
                        <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle</a>

                    </p>
                    <div className="row">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ViewPet;