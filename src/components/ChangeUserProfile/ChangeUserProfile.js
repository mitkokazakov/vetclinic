import style from './ChangeUserProfile.module.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useContext, useState, useEffect } from 'react';

import * as clinicServices from '../../services/clinicServices';

import UserContext from '../UserContext/UserContext';
import Fallback from '../Fallback/Fallback';

const scheme = yup.object().shape({

    firstName: yup.string().min(2, "First name must be at least 2 characters").max(30, "First name must be max 30 characters long").required("The field is required"),
    lastName: yup.string().min(2, "Last name must be at least 2 characters").max(30, "Last name must be max 30 characters long").required("The field is required"),
    email: yup.string().email("This is not a valid email!").required("The field is required"),
    town: yup.string().min(3, "Town must be at least 3 characters log").max(20, "Town must be max 20 characters long").required("The field is required"),
    address: yup.string().min(5, "Address must be at least 5 characters log").max(100, "Address must be max 100 characters long").required("The field is required"),
    phone: yup.string().min(6, "Phone must be at least 6 characters log").max(16, "Phone must be max 16 characters long").required("The field is required")
})

function ChangeUserProfile({history}) {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(scheme)
    });

    const [errorInfo, setHasError] = useState({hasError: false, message: ''});

    function onSubmitChangeUserHandler(data, e) {
        e.preventDefault();

        let userToBeChangedInfo = {
            userId: currentUser.userId,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            isLogged: true,
            role: currentUser.role,
            address: e.target.address.value,
            town: e.target.town.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }

        clinicServices.changerUserInfo(userToBeChangedInfo);

        setCurrentUser(userToBeChangedInfo)
                .catch(err => setHasError({hasError: true, message: err.message}));

        history.push("/myprofile");
    }

    let changeProfileInputStyles = style.changeProfileInput + ' form-control mt-2';
    let changeProfileButtonStyles = style.changeProfileButton + ' btn';

    if(errorInfo.hasError){
        return <Fallback message = {errorInfo.message} />
    }

    return (
        <div className="row">
            <form method="post" className="col-md-6 offset-md-3 col-12" onSubmit={handleSubmit(onSubmitChangeUserHandler)}>

                <div className={style.changeProfileHeader}>
                    <h1 >Change User Profile</h1>
                    <div className="mb-4"></div>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className={changeProfileInputStyles} id="firstName" name="firstName" defaultValue={currentUser.firstName} {...register("firstName")} />
                    <span>{errors.firstName?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className={changeProfileInputStyles} id="lastName" name="lastName" defaultValue={currentUser.lastName} {...register("lastName")} />
                    <span>{errors.lastName?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" className={changeProfileInputStyles} id="email" name="email" defaultValue={currentUser.email} {...register("email")} />
                    <span>{errors.email?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="town">Town</label>
                    <input type="text" className={changeProfileInputStyles} id="town" name="town" {...register("town")} defaultValue={currentUser.town} />
                    <span>{errors.town?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" className={changeProfileInputStyles} id="address" name="address" {...register("address")} defaultValue={currentUser.address} />
                    <span>{errors.address?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className={changeProfileInputStyles} id="phone" name="phone" {...register("phone")} defaultValue={currentUser.phone} />
                    <span>{errors.phone?.message}</span>
                </div>

                <button type="submit" className={changeProfileButtonStyles}>Change</button>
            </form>
        </div>
    );
}

export default ChangeUserProfile;