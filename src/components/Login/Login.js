import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Login.module.css';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const scheme = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
});

function Login() {

    const {register,handleSubmit,formState: {errors}} = useForm({
        resolver: yupResolver(scheme)
    });

    function onSubmitHandler(data,e){

        e.preventDefault();

        let username = e.target.email.value;
        let password = e.target.password.value;

        
    }

    let loginInputStyles = style.loginInput + ' form-control mt-2';
    let loginButtonStyles = style.loginButton + ' btn';

    return (

        <div className="row">
            <form className="col-md-6 offset-md-3" method="post" onSubmit={handleSubmit(onSubmitHandler)}>

                <div className={style.loginHeader}>
                    <h1 >Login</h1>
                    <hr className="mb-4"></hr>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" className={loginInputStyles} id="email" name="email" aria-describedby="emailHelp" placeholder="Email..." {...register("email")} />
                    <span>{errors.email?.message}</span>
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