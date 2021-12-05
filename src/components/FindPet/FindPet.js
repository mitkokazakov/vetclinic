import style from './FindPet.module.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useContext, useState, useEffect } from 'react';

import * as clinicServices from '../../services/clinicServices';

import UserContext from '../UserContext/UserContext';
import SinglePet from '../SinglePet/SinglePet';

const scheme = yup.object().shape({
    petName: yup.string().required("This Field is required")
});

function FindPet() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(scheme)
    });

    const { currentUser } = useContext(UserContext);

    const [allFoundPets, setAllFoundPets] = useState([]);
    const [currentInputName, setCurrentInputName] = useState('');
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {

        if(isSearched == true){
            clinicServices.findPetsByName(currentInputName).then(data => setAllFoundPets(data));
        }
        
    }, [currentInputName]);

    let findPetInputStyles = style.findPetInput + ' form-control mt-2';
    let findPetButtonStyles = style.findPetButton + ' btn';

    function onSubmitFindPetHandler(data, e) {

        e.preventDefault();

        setIsSearched(true);
        
        setCurrentInputName(e.target.petName.value);

        
    }

    return (
        <div className="row">
            <form className="col-md-6 offset-md-3" method="post" onSubmit={handleSubmit(onSubmitFindPetHandler)}>

                <div className={style.findPetHeader}>
                    <h1 >Find Pet</h1>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="petName">Pet Name</label>
                    <input type="text" className={findPetInputStyles} id="petName" name="petName" placeholder="Jack..." {...register("petName")} />
                    <span>{errors.petName?.message}</span>
                </div>

                <button type="submit" className={findPetButtonStyles}>Find</button>
            </form>

            {
                isSearched == true ? <div className="col-md-10 offset-md-1">
                <div className={style.petsHeading}>
                    <h1 className="mt-5">All Found Pets</h1>
                </div>

                
                <div className="row d-flex justify-content-center">
                    {
                        allFoundPets.map(pet => {

                            return <SinglePet key={pet.petId} petId={pet.petId} name={pet.name} kind={pet.kind} breed={pet.breed} />
                        })
                    }

                </div>
            </div> : null
            }
        </div>
    );
}

export default FindPet;