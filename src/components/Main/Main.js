import Manage from '../Manage/Manage';
import { Routes, Route, Link } from 'react-router-dom';

import AddPet from '../AddPet/AddPet';

function Main() {

    return (
        <div className="d-flex">
            <Manage />
            
        </div>
    );
}

export default Main;