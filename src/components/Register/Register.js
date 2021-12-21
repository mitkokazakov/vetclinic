import style from './Register.module.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useState, useEffect, useContext } from 'react';

import * as clinicServices from '../../services/clinicServices';

import Fallback from '../Fallback/Fallback';
import UserContext from '../UserContext/UserContext';

const scheme = yup.object().shape({

    firstName: yup.string().min(2, "First name must be at least 2 characters").max(30, "First name must be max 30 characters long").required("The field is required"),
    lastName: yup.string().min(2, "Last name must be at least 2 characters").max(30, "Last name must be max 30 characters long").required("The field is required"),
    email: yup.string().email("This is not a valid email!").required("The field is required"),
    password: yup.string().min(6, "The password must at least 6 characters long"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

function Register({ history }) {

    const { currentUser } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(scheme)
    });

    const [errorInfo, setHasError] = useState({ hasError: false, message: '' });

    let registerInputStyles = style.registerInput + ' form-control mt-2';
    let registerButtonStyles = style.registerButton + ' btn';

    useEffect(() => {

        if (currentUser.isLogged == true) {
            history.push("/");
        }

    }, []);

    function onSubmitRegisterHandler(data, e) {
        e.preventDefault();

        let userToBeRegistered = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        clinicServices.registerUser(userToBeRegistered)
            .then(resp => {

                console.log(resp.status);

                if (resp.status == 200) {
                    history.push("/login")
                    return alert("The registration has been successfully");
                }
                if (resp.status === 409) {
                    
                    setHasError({ hasError: true, message: "User with this email already exist!!" });
                }
            })
            .catch(err => setHasError({ hasError: true, message: err.message }));


    }

    if (errorInfo.hasError) {
        return <Fallback message={errorInfo.message} />
    }

    return (

        <div className="row">
            <form method="post" className="col-md-6 offset-md-3 col-12" onSubmit={handleSubmit(onSubmitRegisterHandler)}>

                <div className={style.registerHeader}>
                    <h1 >Register</h1>
                    <div className="mb-4"></div>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className={registerInputStyles} id="firstName" name="firstName" placeholder="First Name..." {...register("firstName")} />
                    <span>{errors.firstName?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className={registerInputStyles} id="lastName" name="lastName" placeholder="Last Name..." {...register("lastName")} />
                    <span>{errors.lastName?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" className={registerInputStyles} id="email" name="email" placeholder="Email..." {...register("email")} />
                    <span>{errors.email?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className={registerInputStyles} id="password" name="password" name="password" {...register("password")} />
                    <span>{errors.password?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className={registerInputStyles} id="confirmPassword" name="confirmPassword" {...register("confirmPassword")} />
                    <span>{errors.confirmPassword?.message}</span>
                </div>

                <button type="submit" className={registerButtonStyles}>Register</button>
            </form>
        </div>
    );
}

export default Register;