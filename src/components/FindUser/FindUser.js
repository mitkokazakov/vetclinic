import style from './FindUser.module.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useContext, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import * as clinicServices from '../../services/clinicServices';

import UserContext from '../UserContext/UserContext';
import Fallback from '../Fallback/Fallback';

const scheme = yup.object().shape({
    userName: yup.string().required("This Field is required")
});

function FindUser() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(scheme)
    });

    const { currentUser } = useContext(UserContext);

    const [allFoundUsers, setAllFoundUsers] = useState([]);
    const [currentInputName, setCurrentInputName] = useState('');
    const [isSearched, setIsSearched] = useState(false);
    const [errorInfo, setHasError] = useState({hasError: false, message: ''});

    useEffect(() => {

        if(isSearched == true){
            clinicServices.findUsersByName(currentInputName)
                    .then(data => setAllFoundUsers(data))
                    .catch(err => setHasError({hasError: true, message: err.message}));
        }
        
    }, [currentInputName]);

    let findUserInputStyles = style.findUserInput + ' form-control mt-2';
    let findUserButtonStyles = style.findUserButton + ' btn';

    function onSubmitFindUserHandler(data, e) {

        e.preventDefault();

        setIsSearched(true);
        
        setCurrentInputName(e.target.userName.value);

        
    }

    if(errorInfo.hasError){
        return <Fallback message = {errorInfo.message} />
    }

    return (
        <div className="row">
            <form className="col-md-6 offset-md-3" method="post" onSubmit={handleSubmit(onSubmitFindUserHandler)}>

                <div className={style.findUserHeader}>
                    <h1 >Find User</h1>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="userName">User Name</label>
                    <input type="text" className={findUserInputStyles} id="userName" name="userName" placeholder="Jack..." {...register("userName")} />
                    <span className="text-danger">{errors.userName?.message}</span>
                </div>

                <button type="submit" className={findUserButtonStyles}>Find</button>
            </form>

            {
                isSearched == true ? <div className="col-md-10 offset-md-1 col-12">
                <h1>List All Users</h1>
                <table className="table table-striped table-hover table-responsive col-md-6 col-xs-12">
                    <thead className="thead-dark">
                        <tr>
                            <th>Owner's Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
    
                        {
                            allFoundUsers.map(user => {
                                return <tr key={user.userId}>
                                    <td><Link key={user.userId} to={`/manage/userprofile/${user.userId}`}>{user.firstName + ' ' + user.lastName}</Link></td>
                                    <td key={user.userId}>{user.town == null ? ' ' : user.town + ', ' + user.address == null ? ' ' : user.address}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div> : null
            }

        </div>
    );
}

export default FindUser;