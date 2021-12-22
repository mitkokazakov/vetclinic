import style from './ChangePet.module.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import swal from 'sweetalert';

import { useEffect, useState } from 'react';

import * as clinicServices from '../../services/clinicServices';

import Fallback from '../Fallback/Fallback';

const scheme = yup.object().shape({

    name: yup.string().min(2, "Pet name must be at least 2 characters").max(30, "Pet name must be max 30 characters long").required("The field is required"),
    kind: yup.string().min(2, "Kind must be at least 2 characters").required("The field is required"),
    breed: yup.string().min(2, "Breed must be at least 2 characters").max(30, "Breed must be max 30 characters long").required("The field is required")
})

function ChangePet({ match, history }) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(scheme)
    });

    let currentPetId = match.params.petId;

    let changePetInputStyles = style.changePetInput + ' form-control mt-2';
    let changePetButtonStyles = style.changePetButton + ' btn';

    const [currentPet, setCurrentPet] = useState({ name: '', kind: '', breed: '', petId: '' });
    const [errorInfo, setHasError] = useState({ hasError: false, message: '' });

    useEffect(() => {

        let isUnmount = false;

        if (!isUnmount) {
            clinicServices.getPetById(currentPetId)
                .then(data => setCurrentPet(data))
                .catch(err => setHasError({ hasError: true, message: err.message }));
        }

        return () => {
            isUnmount = true;
        }

    }, [currentPetId]);



    function onSubmitChangePetHandler(date, e) {
        e.preventDefault();

        let form = new FormData();
        form.append('name', currentPet.name);
        form.append('kind', currentPet.kind);
        form.append('breed', currentPet.breed);
        form.append('image', e.target.image.files[0]);

        clinicServices.changePet(currentPetId, form)
            .then(resp => {
                if (resp.status == 200) {
                    //return alert("Pets's information has been changed successfully");
                    swal({
                        icon: "success",
                        title: "Pets's information has been changed successfully"

                    });
                }
            });

        history.push(`/viewPet/${currentPetId}`);
    }

    if (errorInfo.hasError) {
        return <Fallback message={errorInfo.message} />
    }

    return (
        <div className="row">
            <form className="col-md-6 col-sm-4 offset-md-3" method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmitChangePetHandler)}>

                <div className={style.changePetHeader}>
                    <h1 >Change Pet</h1>
                    <hr className="mb-4"></hr>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className={changePetInputStyles} id="name" name="name" {...register("name")} value={currentPet.name} onChange={(e) => setCurrentPet(oldState => ({ ...oldState, name: e.target.value }))} />
                    <span>{errors.name?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="kind">Kind</label>
                    <input type="text" className={changePetInputStyles} id="kind" name="kind" {...register("kind")} value={currentPet.kind} onChange={(e) => setCurrentPet(oldState => ({ ...oldState, kind: e.target.value }))} />
                    <span>{errors.kind?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="breed">Breed</label>
                    <input type="text" className={changePetInputStyles} id="breed" name="breed" {...register("breed")} value={currentPet.breed} onChange={(e) => setCurrentPet(oldState => ({ ...oldState, breed: e.target.value }))} />
                    <span>{errors.breed?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="image">Image</label>
                    <input className={changePetInputStyles} type="file" name="image" id="image" accept="image/png, image/jpeg" />

                </div>

                <button type="submit" className={changePetButtonStyles}>Send</button>
            </form>
        </div>
    );
}

export default ChangePet;