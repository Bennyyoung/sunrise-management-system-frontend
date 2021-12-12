import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import swal from 'sweetalert'

export default class EditResult extends Component {
 constructor(props) {
  super(props);

  this.onChangeStudentName = this.onChangeStudentName.bind(this)
  this.onChangeSubject = this.onChangeSubject.bind(this);
  this.onChangeClassTest = this.onChangeClassTest.bind(this);
  this.onChangeMidTermTest = this.onChangeMidTermTest.bind(this);
  // this.onChangeMidTermTotal = this.onChangeMidTermTotal.bind(this);
  this.onChangeExam = this.onChangeExam.bind(this);
  // this.onChangeExamTotal = this.onChangeExamTotal.bind(this);
  // this.onChangeAverage = this.onChangeAverage.bind(this);
  this.onChangePosition = this.onChangePosition.bind(this);
  this.onChangeResultDate = this.onChangeResultDate.bind(this);
  this.onChangeResponsible = this.onChangeResponsible.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
   studentname: '',
   subject: '',
   classtest: '',
   midtermtest: '',
  //  midtermtotal: '',
   exam: '',
  //  examtotal: '',
  //  average: '',
   position: '',
   resultdate: new Date(),
   responsible: ''
  };
 }

 componentDidMount() {
  axios.get('https://sunrise-management-system.herokuapp.com/results/' + this.props.match.params.id)
   .then(response => {
    this.setState({
     studentname: response.data.studentname,
     subject: response.data.subject,
     classtest: response.data.classtest,
     midtermtest: response.data.midtermtest,
    //  midtermtotal: response.data.midtermtotal,
     exam: response.data.exam,
    //  examtotal: response.data.examtotal,
    //  average: response.data.average,
     position: response.data.position,
     resultdate: new Date(response.data.resultdate),
     responsible: response.data.responsible
    })
   })
   .catch(function (error) {
    console.log(error);
   })
 }

 onChangeStudentName(e) {
  this.setState({
   studentname: e.target.value
  })
 }

 onChangeSubject(e) {
  this.setState({
   subject: e.target.value
  })
 }

 onChangeClassTest(e) {
  this.setState({
   classtest: e.target.value
  })
 }

 onChangeMidTermTest(e) {
  this.setState({
   midtermtest: e.target.value
  })
 }

//  onChangeMidTermTotal(e) {
//   this.setState({
//    midtermtotal: e.target.value
//   })
//  }

 onChangeExam(e) {
  this.setState({
   exam: e.target.value
  })
 }

//  onChangeExamTotal(e) {
//   this.setState({
//    examtotal: e.target.value
//   })
//  }

//  onChangeAverage(e) {
//   this.setState({
//    average: e.target.value
//   })
//  }

 onChangePosition(e) {
  this.setState({
   position: e.target.value
  })
 }

 onChangeResultDate(resultdate) {
  this.setState({
   resultdate: resultdate
  })
 }

 onChangeResponsible(e) {
  this.setState({
   responsible: e.target.value
  })
 }

 onSubmit(e) {
  e.preventDefault();

  const result = {
   studentname: this.state.studentname,
   subject: this.state.subject,
   classtest: this.state.classtest,
   midtermtest: this.state.midtermtest,
  //  midtermtotal: this.state.midtermtotal,
   exam: this.state.exam,
  //  examtotal: this.state.examtotal,
  //  average: this.state.average,
   position: this.state.position,
   resultdate: this.state.resultdate,
   responsible: this.state.responsible
  }

  console.log(result);

  axios.post('https://sunrise-management-system.herokuapp.com/results/update' + this.props.match.params.id, result)
   .then(res => {
    console.log(res.data)
    console.log(result)
    swal("Good job", "Student Result successfully Updated", "success")

   })
   .catch(function (error) {
    console.log(error)
    swal("Couldn't update student result", "Please input or check all fields properly", "error")
   })

  // Redirect to Resultlist
  this.props.history.push('/all-results')

 }

 render() {
  return (
   <div className="content-body">
    <div className="container-fluid">

     <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
       <div className="welcome-text">
        <h4>Edit Result</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-result">Exam Grade</Link></li>
        <li className="breadcrumb-item active"><Link to="/add-new-result">Add new Result</Link></li>
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
             <label className="form-label">Student Name</label>
             <input type="text" className="form-control" value={this.state.studentname} onChange={this.onChangeStudentName} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Subject</label>
             <select className="form-control" value={this.state.subject} onChange={this.onChangeSubject} required>
              <option value="Class">Please select a subject</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="SOS">SOS</option>
              <option value="Basic Science">General Paper</option>
              <option value="CRK">CRK</option>
              <option value="Home Econ">H/Econ</option>
              <option value="Verbal">Verbal</option>
              <option value="Quantitative">Quantitative</option>
              <option value="Agric">Agric</option>
              <option value="Handwriting">Handwriting</option>
              <option value="French">French</option>
              <option value="Igbo">Igbo</option>
              <option value="Non Verbal">Non Verbal</option>
              <option value="Vocational">Vocational</option>
             </select>
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Class Test</label>
             <input type="number" className="form-control" value={this.state.classtest} onChange={this.onChangeClassTest} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Mid-Term Test</label>
             <input type="number" className="form-control" value={this.state.midtermtest} onChange={this.onChangeMidTermTest} required />
            </div>
           </div>
           {/* <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Mid-Term Total</label>
             <input type="number" className="form-control" value={this.state.midtermtotal} onChange={this.onChangeMidTermTotal} required />
            </div>
           </div> */}
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Exam</label>
             <input type="number" className="form-control" value={this.state.exam} onChange={this.onChangeExam} required />
            </div>
           </div>
           {/* <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">All Total</label>
             <input type="number" className="form-control" value={this.state.examtotal} onChange={this.onChangeExamTotal} required />
            </div>
           </div> */}
           {/* <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Average</label>
             <input type="number" className="form-control" value={this.state.average} onChange={this.onChangeAverage} required />
            </div>
           </div> */}
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Position</label>
             <input type="number" className="form-control" value={this.state.position} onChange={this.onChangePosition} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Result Date</label><br />
             <DatePicker
              selected={this.state.resultdate}
              onChange={this.onChangeResultDate}
             />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Responsible</label>
             <input type="text" className="form-control" value={this.state.responsible} onChange={this.onChangeResponsible} required />
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
