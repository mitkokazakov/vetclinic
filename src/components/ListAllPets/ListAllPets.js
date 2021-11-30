import SinglePet from '../SinglePet/SinglePet';
import style from './ListAllPets.module.css';
import * as clinicServices from '../../services/clinicServices';

import {useState,useEffect} from 'react';

function ListAllPets() {

    const [allPets,setAllPets] = useState([]);

    useEffect(() => {

        clinicServices.getAllPets().then(data => setAllPets(data));

    },[allPets]);

    return (
        <div >
            <div className={style.petsHeading}>
                <h1>All Pets</h1>
                <div className={style.petsHr}></div>
            </div>

            <div className="row d-flex justify-content-center">
                {
                    allPets.map(pet => {

                        return <SinglePet key={pet.petId} petId={pet.petId} name={pet.name} kind={pet.kind} breed={pet.breed} />
                    })
                }
                
            </div>
        </div>
    );
}

export default ListAllPets;