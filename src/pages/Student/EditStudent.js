import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import swal from 'sweetalert'

export default class EditStudent extends Component {
 constructor(props) {
  super(props);

  this.onChangeFirstName = this.onChangeFirstName.bind(this);
  this.onChangeLastName = this.onChangeLastName.bind(this);
  this.onChangeEmail = this.onChangeEmail.bind(this);
  this.onChangeRegistrationDate = this.onChangeRegistrationDate.bind(this);
  this.onChangeRollNo = this.onChangeRollNo.bind(this);
  this.onChangeStudentClass = this.onChangeStudentClass.bind(this);
  this.onChangeGender = this.onChangeGender.bind(this);
  this.onChangeParentsName = this.onChangeParentsName.bind(this);
  this.onChangeParentsMobileNumber = this.onChangeParentsMobileNumber.bind(this);
  this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
  this.onChangeBloodGroup = this.onChangeBloodGroup.bind(this);
  this.onChangeHealthIssues = this.onChangeHealthIssues.bind(this);
  this.onChangeAddress = this.onChangeAddress.bind(this);
  this.onSubmit = this.onSubmit.bind(this);


  this.state = {
   firstname: '',
   lastname: '',
   email: '',
   registrationdate: new Date(),
   rollno: '',
   studentclass: '',
   gender: '',
   parentsname: '',
   parentsmobilenumber: '',
   dateofbirth: new Date(),
   bloodgroup: '',
   healthissues: '',
   address: ''
  }
 }

 componentDidMount() {
  axios.get(process.env.REACT_APP_BACK_END + '/students/' + this.props.match.params.id)
  .then(response => {
   this.setState({
    firstname: response.data.firstname,
    lastname: response.data.lastname,
    email: response.data.email,
    registrationdate: new Date(response.data.registrationdate),
    rollno: response.data.rollno,
    studentclass: response.data.studentclass,
    gender: response.data.gender,
    parentsname: response.data.parentsname,
    parentsmobilenumber: response.data.parentsmobilenumber,
    dateofbirth: new Date(response.data.dateofbirth),
    bloodgroup: response.data.bloodgroup,
    healthissues: response.data.healthissues,
    address: response.data.address
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

 onChangeRegistrationDate(date) {
  this.setState({
   registrationdate: date
  })
 }

 onChangeRollNo(e) {
  this.setState({
   rollno: e.target.value
  })
 }

 onChangeStudentClass(e) {
  this.setState({
   studentclass: e.target.value
  })
 }

 onChangeGender(e) {
  this.setState({
   gender: e.target.value
  })
 }

 onChangeParentsName(e) {
  this.setState({
   parentsname: e.target.value
  })
 }

 onChangeParentsMobileNumber(e) {
  this.setState({
   parentsmobilenumber: e.target.value
  })
 }

 onChangeDateOfBirth(dateofbirth) {
  this.setState({
   dateofbirth: dateofbirth
  })
 }

 onChangeBloodGroup(e) {
  this.setState({
   bloodgroup: e.target.value
  })
 }

 onChangeHealthIssues(e) {
  this.setState({
   healthissues: e.target.value
  })
 }

 onChangeAddress(e) {
  this.setState({
   address: e.target.value
  })
 }

 onSubmit(e) {
  e.preventDefault();

  const student = {
   firstname: this.state.firstname,
   lastname: this.state.lastname,
   email: this.state.email,
   registrationdate: this.state.registrationdate,
   rollno: this.state.rollno,
   studentclass: this.state.studentclass,
   gender: this.state.gender,
   parentsname: this.state.parentsname,
   parentsmobilenumber: this.state.parentsmobilenumber,
   dateofbirth: this.state.dateofbirth,
   bloodgroup: this.state.bloodgroup,
   healthissues: this.state.healthissues,
   address: this.state.address
  }

  console.log(student);

  axios.post(process.env.REACT_APP_BACK_END + '/students/update/' + this.props.match.params.id, student)
  .then(res => {
   console.log(res.data)
   console.log(student)
   console.log('Student successfully updated')
   swal("Good job", "Student successfully updated", "success")
  })
  .catch(function (error) {
   console.log(error)
   swal("Couldn't update student", "Please input or check all fields properly", "error")
  })
  // Redirect to Student List
  this.props.history.push('/all-students')
 }



 render() {
  return (
   <div className="content-body">
    <div className="container-fluid">

     <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
       <div className="welcome-text">
        <h4>Edit Student</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-students">Students</Link></li>
        <li className="breadcrumb-item active"><Link to="/add-student">Add Student</Link></li>
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
             <input type="text" className="form-control" value={this.state.lastname} onChange={this.onChangeLastName} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Email</label>
             <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Registration Date</label><br />
             <DatePicker
              selected={this.state.registrationdate}
              onChange={this.onChangeRegistrationDate}
             />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Roll No.</label>
             <input type="number" className="form-control" value={this.state.rollno} onChange={this.onChangeRollNo} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Class</label>
             <select className="form-control" value={this.state.studentclass} onChange={this.onChangeStudentClass} required>
              <option value="Class">Please select a class</option>
              <option value="creche">Creche/Pre-School</option>
              <option value="Nursery 1">Nursery 1</option>
              <option value="Nursery 2">Nursery 2</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>

             </select>
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Gender</label>
             <select className="form-control" value={this.state.gender} onChange={this.onChangeGender} required>
              <option value="Gender">Please select a gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
             </select>
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Parents Name</label>
             <input type="tel" className="form-control" value={this.state.parentsname} onChange={this.onChangeParentsName} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Parents Mobile Number (+234)</label>
             <input type="text" className="form-control" value={this.state.parentsmobilenumber} onChange={this.onChangeParentsMobileNumber} required />
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
             <label className="form-label">Blood Group</label>
             <select className="form-control" value={this.state.bloodgroup} onChange={this.onChangeBloodGroup}>
              <option value="Gender">Please select a blood group</option>
              <option value="O-">O-</option>
              <option value="O+">O+</option>
              <option value="A-">A-</option>
              <option value="A+">A+</option>
              <option value="B-">B-</option>
              <option value="B+">B+</option>
              <option value="AB-">AB-</option>
              <option value="AB-">AB+</option>
             </select>
            </div>
           </div>

           <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-group">
             <label className="form-label" style={{color: 'red'}}>Health issues:</label>
             <textarea className="form-control" rows="5" placeholder="If any health issues kindly state" value={this.state.healthissues} onChange={this.onChangeHealthIssues} required></textarea>
            </div>
           </div>

           <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-group">
             <label className="form-label">Address</label>
             <textarea className="form-control" rows="5" value={this.state.address} onChange={this.onChangeAddress} required></textarea>
            </div>
           </div>
           <div className="col-lg-12 col-md-12 col-sm-12">
            <button type="submit" className="btn btn-primary">Submit</button>
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
