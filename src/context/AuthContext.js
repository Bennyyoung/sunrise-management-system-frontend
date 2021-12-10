import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext();

function AuthContextProvider(props) {
 const [loggedIn, setLoggedIn] = useState(undefined);
 // const server_port = 5000

 async function getLoggedIn() {
  // const localhost_url = 'http://localhost:5000/auth/loggedIn'
  // const hosted_url = 'https://sunrise-management-system.herokuapp.com/auth/loggedIn'

  // if (process.env.PORT === process.env.PORT) {
  //  return hosted_url
  // } else if (server_port) {
  //  return localhost_url
  // }

  // const loggedInRes = await axios.get(`${hosted_url} || ${localhost_url}`);

   // const loggedInRes = await axios.get("https://sunrise-management-system.herokuapp.com/auth/loggedIn");
   const loggedInRes = await axios.get("https://sunrise-management-system.herokuapp.com/auth/loggedIn");
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