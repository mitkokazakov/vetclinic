import style from './AddPet.module.css';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as clinicServices from '../../services/clinicServices';

const scheme = yup.object().shape({

    name: yup.string().min(2,"Pet name must be at least 2 characters").max(30,"Pet name must be max 30 characters long").required("The field is required"),
    kind: yup.string().min(2,"Kind must be at least 2 characters").required("The field is required"),
    breed: yup.string().min(2,"Breed must be at least 2 characters").max(30,"Breed must be max 30 characters long").required("The field is required")
})

function AddPet({match, history}) {

    const {register,handleSubmit,formState: {errors}} = useForm({
        resolver: yupResolver(scheme)
    });

    let addPetInputStyles = style.addPetInput + ' form-control mt-2';
    let addPetButtonStyles = style.addPetButton + ' btn';

    let userId = match.params.userId;

    function onSubmitAddPetHandler(data,e){

        e.preventDefault();
        
        let form = new FormData();
        form.append('name',e.target.name.value);
        form.append('kind',e.target.kind.value);
        form.append('breed',e.target.breed.value);
        form.append('birthDate',e.target.birthDate.value);
        form.append('image',e.target.image.files[0]);

        // let currentPet = {
        //     name: e.target.name.value,
        //     kind: e.target.kind.value,
        //     breed: e.target.breed.value,
        //     birthDate: e.target.birthDate.value,
        //     image: e.target.image.files[0]
        // }

    
        clinicServices.addPet(userId,form);

        history.push(`/manage/userprofile/${userId}`);
    }

    return (
        <div className="row">
            <form className="col-md-6 col-sm-4 offset-md-3" method="post" encType="multipart/form-data"  onSubmit={handleSubmit(onSubmitAddPetHandler)}>

                <div className={style.addPetHeader}>
                    <h1 >Add Pet</h1>
                    <hr className="mb-4"></hr>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className={addPetInputStyles} id="name" name="name" placeholder="Name..." {...register("name")} />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="kind">Kind</label>
                    <input type="text" className={addPetInputStyles} id="kind" name="kind" placeholder="Kind..." {...register("kind")} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="breed">Breed</label>
                    <input type="text" className={addPetInputStyles} id="breed" name="breed" placeholder="Breed..." {...register("breed")} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="birthDate">Date Of Birth</label>
                    <input type="date" className={addPetInputStyles} id="birthDate" name="birthDate" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="image">Image</label>
                    <input className={addPetInputStyles} type="file" name="image" id="image" />
                    
                </div>

                <button type="submit" className={addPetButtonStyles}>Add</button>
            </form>
        </div>
    );
}

export default AddPet;