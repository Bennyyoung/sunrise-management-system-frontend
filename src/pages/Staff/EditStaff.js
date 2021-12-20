import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import swal from 'sweetalert'

export default class EditStaff extends Component {
 constructor(props) {
  super(props);
  this.onChangeFirstName = this.onChangeFirstName.bind(this)
  this.onChangeLastName = this.onChangeLastName.bind(this)
  this.onChangeEmail = this.onChangeEmail.bind(this)
  this.onChangeJoiningDate = this.onChangeJoiningDate.bind(this)
  this.onChangePassword = this.onChangePassword.bind(this)
  this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this)
  this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this)
  this.onChangeGender = this.onChangeGender.bind(this)
  this.onChangeDesignation = this.onChangeDesignation.bind(this)
  this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this)
  this.onChangeEducation = this.onChangeEducation.bind(this)
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
   firstname: '',
   lastname: '',
   email: '',
   joiningdate: new Date(),
   password: '',
   confirmpassword: '',
   mobilenumber: '',
   gender: '',
   designation: '',
   dateofbirth: new Date(),
   education: ''
  }
 }

 componentDidMount() {
  axios.get(process.env.REACT_APP_BACK_END + '/staffs/' + this.props.match.params.id)
   .then(response => {
    this.setState({
     firstname: response.data.firstname,
     lastname: response.data.lastname,
     email: response.data.email,
     joiningdate: new Date(response.data.joiningdate),
     password: response.data.password,
     confirmpassword: response.data.confirmpassword,
     mobilenumber: response.data.mobilenumber,
     gender: response.data.gender,
     designation: response.data.designation,
     dateofbirth: new Date(response.data.dateofbirth),
     education: response.data.education
    })
   })
   .catch(function (error) {
    console.log(error);
   })
 }

 onChangeFirstName(e) {
  this.setState({
   firstname: e.target.value
  });
 }

 onChangeLastName(e) {
  this.setState({
   lastname: e.target.value
  })
 }

 onChangeEmail(e) {
  this.setState({
   email: e.target.value
  })
 }

 onChangeJoiningDate(joiningdate) {
  this.setState({
   joiningdate: joiningdate
  })
 }

 onChangePassword(e) {
  this.setState({
   password: e.target.value
  })
 }

 onChangeConfirmPassword(e) {
  this.setState({
   confirmpassword: e.target.value
  })
 }

 onChangeMobileNumber(e) {
  this.setState({
   mobilenumber: e.target.value
  })
 }

 onChangeGender(e) {
  this.setState({
   gender: e.target.value
  })
 }

 onChangeDesignation(e) {
  this.setState({
   designation: e.target.value
  })
 }

 onChangeDateOfBirth(dateofbirth) {
  this.setState({
   dateofbirth: dateofbirth
  })
 }

 onChangeEducation(e) {
  this.setState({
   education: e.target.value
  })
 }

 onSubmit(e) {
  e.preventDefault();

  const staff = {
   firstname: this.state.firstname,
   lastname: this.state.lastname,
   email: this.state.email,
   joiningdate: this.state.joiningdate,
   password: this.state.password,
   confirmpassword: this.state.confirmpassword,
   mobilenumber: this.state.mobilenumber,
   gender: this.state.gender,
   designation: this.state.designation,
   dateofbirth: this.state.dateofbirth,
   education: this.state.education
  };

  console.log(staff);

  axios.post(process.env.REACT_APP_BACK_END + '/staffs/update/' + this.props.match.params.id, staff)
   .then(res => {
    console.log(res.data)
    console.log(staff)
    console.log('Staff successfully updated')
    swal("Good job", "Staff successfully updated", "success")
   })
   .catch(function (error) {
    console.log(error)
    swal("Couldn't update staff", "Please input or check all fields properly", "error")
   })

  // window.location = "/all-staffs"

  // Redirect to Staff List
  this.props.history.push('/all-staffs')
 }

 render() {
  return (
   <div className="content-body">
    <div className="container-fluid">

     <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
       <div className="welcome-text">
        <h4>Edit Staff</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-staffs">Staffs</Link></li>
        <li className="breadcrumb-item active"><Link to="/add-staff">Add Staff</Link></li>
       </ol>
      </div>
     </div>

     <div className="row">
      <div className="col-xl-12 col-xxl-12 col-sm-12">
       <div className="card">
        <div className="card-header">
         <h5 className="card-title">Basic Info</h5>
        </div>
        <div className="card-body">
         <form onSubmit={this.onSubmit}>
          <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">First Name</label>
             <input type="text" className="form-control" value={this.state.firstname} onChange={this.onChangeFirstName} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Last Name</label>
             <input type="text" className="form-control" value={this.state.lastname} onChange={this.onChangeLastName} />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Email Here</label>
             <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Joining Date:</label> <br />
             <DatePicker
              selected={this.state.joiningdate}
              onChange={this.onChangeJoiningDate}
             />

             {/* <input name="datepicker" className="datepicker-default form-control" id="datepicker" value={this.state.joiningdate} onChange={this.onChangeJoiningDate} /> */}
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Password</label>
             <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Confirm Password</label>
             <input type="password" className="form-control" value={this.state.confirmpassword} onChange={this.onChangeConfirmPassword} />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Mobile Number (+234)</label>
             <input type="tel" className="form-control" value={this.state.mobilenumber} onChange={this.onChangeMobileNumber} />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Gender</label>
             <select className="form-control" value={this.state.gender} onChange={this.onChangeGender}>
              <option value="Gender">Please select a gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
             </select>
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Designation</label>
             <input type="text" className="form-control" value={this.state.designation} onChange={this.onChangeDesignation} />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Date of Birth</label><br />
             <DatePicker
              selected={this.state.dateofbirth}
              onChange={this.onChangeDateOfBirth}
             />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Education</label>
             <input type="text" className="form-control" value={this.state.education} onChange={this.onChangeEducation} />
            </div>
           </div>
           <div className="col-lg-12 col-md-12 col-sm-12">
            <button type="submit" className="btn btn-primary">Update</button>
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
}
