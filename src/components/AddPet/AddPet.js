import style from './AddPet.module.css';

import * as clinicServices from '../../services/clinicServices';

function AddPet({match, history}) {

    let addPetInputStyles = style.addPetInput + ' form-control mt-2';
    let addPetButtonStyles = style.addPetButton + ' btn';

    let userId = match.params.userId;

    function onSubmitAddPetHandler(e){

        e.preventDefault();
        
        let currentPet = {
            name: e.target.name.value,
            kind: e.target.kind.value,
            breed: e.target.breed.value,
            birthDate: e.target.dateOfBirth.value
        }

        clinicServices.addPet(userId,currentPet);

        history.push(`/manage/userprofile/${userId}`);
    }

    return (
        <div className="row">
            <form className="col-md-6 col-sm-4 offset-md-3" method="post"  onSubmit={onSubmitAddPetHandler}>

                <div className={style.addPetHeader}>
                    <h1 >Add Pet</h1>
                    <hr className="mb-4"></hr>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className={addPetInputStyles} id="name" name="name" placeholder="Name..." />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="kind">Kind</label>
                    <input type="text" className={addPetInputStyles} id="kind" name="kind" placeholder="Kind..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="breed">Breed</label>
                    <input type="text" className={addPetInputStyles} id="breed" name="breed" placeholder="Breed..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                    <input type="date" className={addPetInputStyles} id="dateOfBirth" name="dateOfBirth" />
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