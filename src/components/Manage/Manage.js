import style from './Manage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Link} from 'react-router-dom';
import { useContext, useEffect } from 'react';

import AddPet from '../AddPet/AddPet';
import ListAllPets from '../ListAllPets/ListAllPets';
import ListAllUsers from '../ListAllUsers/ListAllUsers';
import UserContext from '../UserContext/UserContext';

function Manage({history}) {

    const {currentUser} = useContext(UserContext);

    // useEffect(() => {
    //     if(currentUser.isLogged == false){
    //         history.push("/login");
    //     }
    // },[]);


    return (
        <div className="row d-flex">
            <aside className="col-md-2 mt-5">
                <ul className={style.ulManage}>
                    <li><Link to="/manage/addPet" >Add Pet</Link></li>
                    <li><Link to="/manage/listAllPets">List All Pets</Link></li>
                    <li><Link to="/manage/listAllUsers">List All Users</Link></li>
                    <li><Link to="/manage/findPet">Find Pet By Name</Link></li>
                    <li><Link to="/manage/findUser">Find User by Name</Link></li>
                </ul>

            </aside>
            <div className={style.containerManage}>
                <Switch>
                    <Route path="/manage/addPet" exact component={AddPet}></Route>
                    <Route path="/manage/listAllPets" exact component={ListAllPets}></Route>
                    <Route path="/manage/listAllUsers" exact component={ListAllUsers}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Manage;