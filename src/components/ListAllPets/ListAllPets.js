import SinglePet from '../SinglePet/SinglePet';
import style from './ListAllPets.module.css';

function ListAllPets() {

    return (
        <div >
            <div className={style.petsHeading}>
                <h1>All Pets</h1>
                <div className={style.petsHr}></div>
            </div>

            <div className="row d-flex justify-content-center">
                <SinglePet name="Kitty" kind="Cat" breed="Sibirian" age="1" petId="123Dfal0-hjdas567y-uip0" />
                <SinglePet name="Kitty" kind="Cat" breed="Sibirian" age="1" petId="123Dfal0-hjdas567y-uip0" />
                <SinglePet name="Kitty" kind="Cat" breed="Sibirian" age="1" petId="123Dfal0-hjdas567y-uip0" />
                <SinglePet name="Kitty" kind="Cat" breed="Sibirian" age="1" petId="123Dfal0-hjdas567y-uip0" />
            </div>
        </div>
    );
}

export default ListAllPets;