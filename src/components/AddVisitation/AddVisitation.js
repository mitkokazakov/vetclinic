import style from './AddVisitation.module.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useContext, useState, useEffect } from 'react';

import * as clinicServices from '../../services/clinicServices';

const scheme = yup.object().shape({

    reason: yup.string().min(3, "Reason must be at least 2 characters").max(100, "Reason must be max 100 characters long").required("The field is required"),
    description: yup.string().min(3, "Description must be at least 2 characters").max(200, "Description must be max 200 characters long").required("The field is required")
})

function AddVisitation({match, history}){


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(scheme)
    });

    let addVisitationInputStyles = style.addVisitationInput + ' form-control mt-2';
    let addVisitationButtonStyles = style.addVisitationButton + ' btn';

    let currentPetId = match.params.petId;

    function onSubmitAddVisitationHandler(data,e){
        e.preventDefault();

        let visitation = {
            reason: e.target.reason.value,
            description: e.target.description.value
        }

        clinicServices.addVisitation(currentPetId, visitation);

        history.push(`/manage/viewPet/${currentPetId}`);
    }

    return (
        <div className="row">
            <form method="post" className="col-md-6 offset-md-3 col-12" onSubmit={handleSubmit(onSubmitAddVisitationHandler)}>

                <div className={style.addVisitationHeader}>
                    <h1 >Add Visitation</h1>
                    <div className="mb-4"></div>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="reason">Reason</label>
                    <input type="text" className={addVisitationInputStyles} id="reason" name="reason" {...register("reason")} />
                    <span>{errors.reason?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea cols="10" rows="5"  className={addVisitationInputStyles} id="description" name="description" {...register("description")} />
                    <span>{errors.description?.message}</span>
                </div>

                <button type="submit" className={addVisitationButtonStyles}>Add</button>
            </form>
        </div>
    );
}

export default AddVisitation;