import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as clinicServices from '../../services/clinicServices';

import Fallback from '../Fallback/Fallback';

function ListAllUsers() {

    const [allUsers, setAllUsers] = useState([]);

    const [errorInfo, setHasError] = useState({hasError: false, message: ''});

    useEffect(() => {

        clinicServices.getAllUsers()
                .then(data => setAllUsers(data))
                .catch(err => setHasError({hasError: true, message: err.message}));

    }, [allUsers])

    if(errorInfo.hasError){
        return <Fallback message = {errorInfo.message} />
    }

    return (
        <div className="col-md-10 offset-md-1 col-12">
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
                        allUsers.map(user => {
                            return <tr key={user.userId}>
                                <td><Link key={user.userId} to={`/manage/userprofile/${user.userId}`}>{user.firstName + ' ' + user.lastName}</Link></td>
                                <td key={user.userId}>{user.town == null ? ' ' : user.town + ', ' + user.address == null ? ' ' : user.address}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>


    );
}

export default ListAllUsers;