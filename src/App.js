import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Main from './components/Main/Main';
import UserContext from './components/UserContext/UserContext';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Manage from './components/Manage/Manage';
import AddPet from './components/AddPet/AddPet';


import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as clinicServices from './services/clinicServices';

function App() {

  const [userToken, setUserToken] = useState('');
  const [currentUser, setCurrentUser] = useState({});



  useEffect(() => {
    if (userToken != '') {
      console.log(userToken);
      clinicServices.getUser(userToken).then(data => setCurrentUser(data));
    }


  }, [userToken])

  console.log(currentUser);

  return (
    <div className="App">
      <UserContext.Provider value={{ userToken, setUserToken, currentUser }}>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage/>}></Route>
          <Route path="/manage" exact element={<Manage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer />

      </UserContext.Provider>
    </div>
  );
}

export default App;
