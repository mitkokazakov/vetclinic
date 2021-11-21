import {useContext} from 'react';

import UserContext from '../UserContext/UserContext';

function Logout({history}){

    const {userToken, setUserToken, setCurrentUser} = useContext(UserContext);

    const userInfo = {
        userId: null,
        firstName: null,
        lastName: null,
        isLogged: false,
        role: null,
        address: null,
        town: null,
        email: null,
        phone: null
    }

    setUserToken('');
    setCurrentUser(userInfo);
    
    //localStorage.setItem("userToken", '');
    //localStorage.setItem("userInfo", JSON.stringify(userInfo));

    history.push("/");

    return(
        null
    );
}

export default Logout;