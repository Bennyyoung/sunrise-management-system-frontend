import { Route, Switch } from "react-router-dom";
import React from 'react'

import axios from "axios";
import{ AuthContextProvider } from "./context/AuthContext";
import Router from "./Router";

axios.defaults.withCredentials = true;


function App() {

 return (
  <AuthContextProvider className="App">
   <Router />
  </AuthContextProvider>
 );
}

export default App;
