import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';

function Main() {

    return (
        <div>
            <Routes>
                <Route path="/" exact></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </div>
    );
}

export default Main;