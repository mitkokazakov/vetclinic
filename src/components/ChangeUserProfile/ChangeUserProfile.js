import style from './ChangeUserProfile.module.css';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const scheme = yup.object().shape({

    firstName: yup.string().min(2,"First name must be at least 2 characters").max(30,"First name must be max 30 characters long").required("The field is required"),
    lastName: yup.string().min(2,"Last name must be at least 2 characters").max(30,"Last name must be max 30 characters long").required("The field is required"),
    email: yup.string().email("This is not a valid email!").required("The field is required"),
    town: yup.string().min(3,"Town must be at least 3 characters log").max(20,"Town must be max 20 characters long").required("The field is required"),
    address: yup.string().min(5,"Address must be at least 5 characters log").max(100,"Address must be max 100 characters long").required("The field is required"),
    phone: yup.string().min(6,"Phone must be at least 6 characters log").max(16,"Phone must be max 16 characters long").required("The field is required")
})

function ChangeUserProfile(){

    const {register,handleSubmit,formState: {errors}} = useForm({
        resolver: yupResolver(scheme)
    });

    function onSubmitChangeUserHandler(data,e){
        e.preventDefault();
    }

    let changeProfileInputStyles = style.changeProfileInput + ' form-control mt-2';
    let changeProfileButtonStyles = style.changeProfileButton + ' btn';

    return(
<div className="row">
            <form method="post" className="col-md-6 offset-md-3 col-12" onSubmit={handleSubmit(onSubmitChangeUserHandler)}>

                <div className={style.changeProfileHeader}>
                    <h1 >Change User Profile</h1>
                    <div className="mb-4"></div>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className={changeProfileInputStyles} id="firstName" name="firstName" placeholder="First Name..." {...register("firstName")} />
                    <span>{errors.firstName?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className={changeProfileInputStyles} id="lastName" name="lastName" placeholder="Last Name..." {...register("lastName")} />
                    <span>{errors.lastName?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" className={changeProfileInputStyles} id="email" name="email" placeholder="Email..." {...register("email")} />
                    <span>{errors.email?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="town">Town</label>
                    <input type="text" className={changeProfileInputStyles} id="town" name="town" {...register("town")} placeholder="Town..."/>
                    <span>{errors.town?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" className={changeProfileInputStyles} id="address" name="address" {...register("address")}  placeholder="Address"/>
                    <span>{errors.address?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className={changeProfileInputStyles} id="phone" name="phone" {...register("phone")}  placeholder="0895615876 e.g."/>
                    <span>{errors.phone?.message}</span>
                </div>

                <button type="submit" className={changeProfileButtonStyles}>Change</button>
            </form>
        </div>
    );
}

export default ChangeUserProfile;