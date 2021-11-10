import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Main from './components/Main/Main';
import UserContext from './components/UserContext/UserContext';

import { useState, useEffect } from 'react';

import * as clinicServices from './services/clinicServices';

function App() {

  const [userToken, setUserToken] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  //console.log(userToken);

  useEffect(() => {
    clinicServices.getUser(userToken).then(data => setCurrentUser(data));
    console.log(currentUser);
  }, [userToken])


  return (
    <div className="App">
      <UserContext.Provider value={{ userToken, setUserToken }}>
        <Header />
        <Slider />
        <Main />
      </UserContext.Provider>
    </div>
  );
}

export default App;
