import style from './Manage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link} from 'react-router-dom';

import AddPet from '../AddPet/AddPet';

function Manage() {

    return (
        <div className="row d-flex">
            <aside className="col-md-2 mt-5">
                <ul className={style.ulManage}>
                    <li><Link to="/manage/addPet">Add Pet</Link></li>
                    <li><Link to="">List All Pets</Link></li>
                    <li><Link to="">List All Users</Link></li>
                    <li><Link to="">Find Pet By Name</Link></li>
                    <li><Link to="">Find User by Name</Link></li>
                </ul>

            </aside>
            <div className={style.containerManage}>
                <Routes>
                    <Route path="/manage/addPet" exact element={<AddPet />}></Route>
                </Routes>

            </div>
        </div>
    );
}

export default Manage;