import style from './Manage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Link} from 'react-router-dom';
import { useContext, useEffect } from 'react';

import AddPet from '../AddPet/AddPet';
import ListAllPets from '../ListAllPets/ListAllPets';
import ListAllUsers from '../ListAllUsers/ListAllUsers';
import UserContext from '../UserContext/UserContext';
import SingleUser from '../SingleUser/SingleUser';
import ViewPet from '../ViewPet/ViewPet';
import AddVisitation from '../AddVisitation/AddVisitation';
import FindPet from '../FindPet/FindPet';

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
                    <li><Link to="/manage/listAllPets">List All Pets</Link></li>
                    <li><Link to="/manage/listAllUsers">List All Users</Link></li>
                    <li><Link to="/manage/findPet">Find Pet</Link></li>
                    <li><Link to="/manage/findUser">Find User</Link></li>
                </ul>

            </aside>
            <div className="col-md-10 ">
                <Switch>
                    {/* <Route path="/manage/addPet" exact component={AddPet}></Route> */}
                    <Route path="/manage/listAllPets" exact component={ListAllPets}></Route>
                    <Route path="/manage/listAllUsers" exact component={ListAllUsers}></Route>
                    <Route path="/manage/userprofile/:userId" exact component={SingleUser}></Route>
                    <Route path="/manage/addPet/:userId" exact component={AddPet}></Route>
                    <Route path="/manage/viewPet/:petId" exact component={ViewPet}></Route>
                    <Route path="/manage/addVisitation/:petId" exact component={AddVisitation}></Route>
                    <Route path="/manage/findPet" exact component={FindPet}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Manage;