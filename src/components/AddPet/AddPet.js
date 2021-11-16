import style from './AddPet.module.css';

function AddPet(){

    let addPetInputStyles = style.addPetInput + ' form-control mt-2';
    let addPetButtonStyles = style.addPetButton + ' btn';

    return(
        <div className="row">
            <form className="col-md-6 col-sm-4 offset-md-3">

                <div className={style.addPetHeader}>
                    <h1 >Add Pet</h1>
                    <hr className="mb-4"></hr>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="firstName">Name</label>
                    <input type="text" className={addPetInputStyles} id="name"  placeholder="Name..." />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="kind">Kind</label>
                    <input type="text" className={addPetInputStyles} id="kind" placeholder="Kind..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="breed">Breed</label>
                    <input type="text" className={addPetInputStyles} id="breed" placeholder="Breed..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                    <input type="date" className={addPetInputStyles} id="dateOfBirth" />
                </div>

                <button type="submit" className={addPetButtonStyles}>Add</button>
            </form>
        </div>
    );
}

export default AddPet;