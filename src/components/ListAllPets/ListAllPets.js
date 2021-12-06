import SinglePet from '../SinglePet/SinglePet';
import style from './ListAllPets.module.css';
import * as clinicServices from '../../services/clinicServices';

import Fallback from '../Fallback/Fallback';

import {useState,useEffect} from 'react';

function ListAllPets() {

    const [allPets,setAllPets] = useState([]);

    const [errorInfo, setHasError] = useState({hasError: false, message: ''});

    useEffect(() => {

        
         clinicServices.getAllPets()
                .then(data => setAllPets(data))
                .catch(err => setHasError({hasError: true, message: err.message}));

    },[allPets]);


    if(errorInfo.hasError){
        return <Fallback message = {errorInfo.message} />
    }

    return (
        <div className="col-md-10 offset-md-1">
            <div className={style.petsHeading}>
                <h1>All Pets</h1>
                <div className={style.petsHr}></div>
            </div>

            <div className="row d-flex justify-content-center">
                {
                    allPets.map(pet => {

                        return <SinglePet key={pet.petId} petId={pet.petId} name={pet.name} kind={pet.kind} breed={pet.breed} age={pet.age}/>
                    })
                }
                
            </div>
        </div>
    );
}

export default ListAllPets;