import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Login.module.css';

import { useContext,useState, useEffect } from 'react';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import swal from 'sweetalert';

import * as clinicServices from '../../services/clinicServices';

import UserContext from '../UserContext/UserContext';
import Fallback from '../Fallback/Fallback';
import Alert from '../Alert/Alert';

const scheme = yup.object().shape({
    username: yup.string().email().required("Not valid email. Try again"),
    password: yup.string().min(6, "Password must be at least 6 characters long!").required("Password is required!")
});

function Login({history}) {

    const {register,handleSubmit,formState: {errors}} = useForm({
        resolver: yupResolver(scheme)
    });

    const {currentUser, setUserToken} = useContext(UserContext);

    const [errorInfo, setHasError] = useState({hasError: false, message: ''});


    function onSubmitHandler(data,e){

        e.preventDefault();

        let currentUser = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        
        clinicServices.loginUser(currentUser)
                .then(resp =>  {
                    if(resp.status == 401){
                         swal({
                            icon: "error",
                            title: "Wrong email or password !!",
                            text: "Please try again with valid credentials."

                        });

                        history.push("/login");
                    }
                    else{
                         return resp.json(); 
                    }
                })
                .then(data => {
                    setUserToken(data.token);
                    history.push("/");
                })
                .catch(err => setHasError({hasError: true, message: err.message}));

    }

    let loginInputStyles = style.loginInput + ' form-control mt-2';
    let loginButtonStyles = style.loginButton + ' btn';

    if(errorInfo.hasError){
        return <Fallback message = {errorInfo.message} />
    }


    return (

        <div className="row">
            <form className="col-md-6 offset-md-3" method="post" onSubmit={handleSubmit(onSubmitHandler)}>

                <div className={style.loginHeader}>
                    <h1 >Login</h1>
                    <div className="mb-4"></div>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" className={loginInputStyles} id="username" name="username" aria-describedby="emailHelp" placeholder="Email..." {...register("username")} />
                    <span>{errors.username?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className={loginInputStyles} id="password" name="password" {...register("password")} />
                    <span>{errors.password?.message}</span>
                </div>

                <button type="submit" className={loginButtonStyles}>Login</button>
            </form>
        </div>
    );
}

export default Login;