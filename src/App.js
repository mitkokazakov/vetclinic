import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import UserContext from './components/UserContext/UserContext';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Manage from './components/Manage/Manage';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import UserProfile from './components/UserProfile/UserProfile';
import ChangeUserProfile from './components/ChangeUserProfile/ChangeUserProfile';
import ViewPet from './components/ViewPet/ViewPet';
import ChangePet from './components/ChangePet/ChangePet';
import Fallback from './components/Fallback/Fallback';

import { ErrorBoundary } from 'react-error-boundary';

import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import * as clinicServices from './services/clinicServices';

function App() {

  const [userToken, setUserToken] = useState('');
  const [currentUser, setCurrentUser] = useState(
    {
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
  );

  //let userTokenFromStorage = localStorage.getItem("userToken");

  useEffect(() => {
    if (userToken != '') {

      console.log(userToken);
      clinicServices.getUser(userToken).then(data => setCurrentUser(
        {
          userId: data.userId,
          firstName: data.firstName,
          lastName: data.lastName,
          isLogged: true,
          role: data.role,
          address: data.address,
          town: data.town,
          email: data.email,
          phone: data.phone
        }));
      currentUser.isLogged = true;
      //localStorage.setItem("userInfo", JSON.stringify(currentUser));
    }

  }, [userToken])

  console.log(currentUser);



  return (
    <div className="App">
      <UserContext.Provider value={{ userToken, setUserToken, currentUser, setCurrentUser }}>
        <Header />
        
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/manage" component={Manage}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/myprofile" exact component={UserProfile}></Route>
            <Route path="/changeprofile" component={ChangeUserProfile}></Route>
            <Route path="/viewPet/:petId" component={ViewPet}></Route>
            <Route path="/changePet/:petId" component={ChangePet}></Route>
          </Switch>
        
        <Footer />

      </UserContext.Provider>
    </div>
  );
}

export default App;
