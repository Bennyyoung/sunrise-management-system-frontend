import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext();

function AuthContextProvider(props) {
 const [loggedIn, setLoggedIn] = useState(undefined);

 async function getLoggedIn() {

  const loggedInRes = await axios.get(process.env.REACT_APP_BACK_END + '/auth/loggedIn');
  setLoggedIn(loggedInRes.data);
  console.log("Logged in data "+ loggedIn);
 }

 useEffect(() => {
  getLoggedIn();
 }, []);


 return (
  <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
   {props.children}
  </AuthContext.Provider>
 )
}

export default AuthContext
export { AuthContextProvider };