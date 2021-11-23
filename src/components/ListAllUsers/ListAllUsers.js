import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import * as clinicServices from '../../services/clinicServices';

function ListAllUsers() {

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {

        clinicServices.getAllUsers().then(data => setAllUsers(data));

    },[allUsers])

    return (

        <table className="table table-striped table-hover col-md-6">
            <thead className="thead-dark">
                <tr>
                    <th>Owner's Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>

                {
                    allUsers.map(user => {
                        return <tr>
                        <td><Link key={user.userId} to={`/manage/userprofile/${user.userId}`}>{user.firstName + ' ' + user.lastName}</Link></td>
                        <td>{user.town == null ? ' ' : user.town + ', ' + user.address == null ? ' ' : user.address}</td>
                    </tr>
                    })
                }
            </tbody>
        </table>

    );
}

export default ListAllUsers;