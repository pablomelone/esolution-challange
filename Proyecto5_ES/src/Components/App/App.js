import React from 'react';
import Header from '../Header/Header';
import TripMaker from '../tripMaker/tripMaker';
import UserContext from '../User/User';

const user = {
  name: "Arthur",
  email: "arthur@gmail.com"
}

function App() {
  return (
    <React.StrictMode>
      <UserContext.Provider value={user}>
      <Header/>
      <TripMaker/>
      </UserContext.Provider>
      </React.StrictMode>
  );
}

export default App;
