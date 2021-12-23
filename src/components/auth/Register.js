import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert'
import AuthContext from '../../context/AuthContext';

export default function Register() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");

 const { getLoggedIn } = useContext(AuthContext);
 const history = useHistory()

 async function register(e) {
  axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'PATCH, DELETE, POST, GET, OPTIONS';
  e.preventDefault();

  try {
    const registerData = {
     email,
     password,
     confirmPassword
    };
  
    await axios.post('https://sunrise-management-system.herokuapp.com/auth/', registerData,
    
    //  {
    //   headers: { JWT_SECRET: process.env.JWT_SECRET }
    //  }
    );
    await getLoggedIn();
    swal("Good job", "Registration successful", "success")
   

  } catch(err) {
    console.error(err)
    swal("Couldn't register user", "Mismatched Passwords or check all fields properly", "error")
   }

 }

 return (
  <div className="content-body">
   <div className="container-fluid">

    <div className="row page-titles mx-0">
     <div className="col-sm-6 p-md-0">
      <div className="welcome-text">
       <h4>Register</h4>
      </div>
     </div>
    </div>

    <div className="row">
     <div className="col-xl-12 col-xxl-12 col-sm-12">
      <div className="card">
       <div className="card-header">
        <h5 className="card-title">Register</h5>
       </div>
       <div className="card-body">
        <form onSubmit={register}>
         <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
           <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" placeholder="Email" className="form-control"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             required />
           </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
           <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" placeholder="Password" className="form-control"
             onChange={(e) => setPassword(e.target.value)}
             value={password}
             required />
           </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
           <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input type="password" placeholder="Verify your password" className="form-control"
             onChange={(e) => setConfirmPassword(e.target.value)}
             value={confirmPassword}
             required />
           </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
           <button type="submit" className="btn btn-primary">Register</button>
           <button type="submit" className="btn btn-light">Cancel</button>
          </div>
         </div>
        </form>
       </div>
      </div>
     </div>
    </div>

   </div>
  </div>
 )
}
