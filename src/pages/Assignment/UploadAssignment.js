import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import Dropzone from 'react-dropzone'

export default class UploadAssignment extends Component {
 constructor(props) {
  super(props)

  this.onChangeTeachersName = this.onChangeTeachersName.bind(this);
  this.onChangeSubject = this.onChangeSubject.bind(this);
  this.onChangeUploadedFile = this.onChangeUploadedFile.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
   teachersname: '',
   subject: '',
   uploadedfile: '',
   staffs: []
  }
 }

 componentDidMount() {
  axios.get(process.env.REACT_APP_BACK_END + '/staffs')
   .then(response => {
    if (response.data.length > 0) {
     this.setState({
      staffs: response.data.map(staff => staff.firstname + ' ' + staff.lastname),
      firstname: response.data[0].firstname,
      lastname: response.data[0].lastname
     })
    }
   })
 }

 onChangeTeachersName(e) {
  this.setState({
   teachersname: e.target.value
  })
 }

 onChangeSubject(e) {
  this.setState({
   subject: e.target.value
  })
 }

 onChangeUploadedFile(e) {
  this.setState({
   uploadedfile: e.target.value
  })
 }

 onSubmit(e) {
  e.preventDefault();

  // let form = document.getElementById('form');
  // let formData = new FormData(form)

  const assignment = {
   teachersname: this.state.teachersname,
   subject: this.state.subject,
   upload: this.state.upload,
  }

  console.log('Form submitted');

  axios.post(process.env.REACT_APP_BACK_END + '/upload', assignment)

   .then(res => {
    console.log(res.data)
    swal("Good job", "Assignment Successfully Submitted", "success")

   })
   .catch(function (error) {
    console.log(error)
    swal("Couldn't submit assignment", "Please input or check all fields properly", "error")
   })

  this.setState({
   teachersname: '',
   subject: '',
   upload: ''
  })
 }


 render() {
  return (
   <div className="content-body">
    <div className="container-fluid">

     <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
       <div className="welcome-text">
        <h4>Assignment</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-students">Students</Link></li>
        <li className="breadcrumb-item active"><Link to="/upload-assignment">Upload Assignment</Link></li>
       </ol>
      </div>
     </div>

     <div className="row">
      <div className="col-lg-12">
       <ul className="nav nav-pills mb-3">
        <li className="nav-item"><a href="#list-view" data-toggle="tab" className="nav-link btn-primary mr-1 show active">List View</a></li>
        <li className="nav-item"><a href="#grid-view" data-toggle="tab" className="nav-link btn-primary">Grid View</a></li>
       </ul>
      </div>
      <div className="col-lg-12">
       <div className="row tab-content">
        <div id="list-view" className="tab-pane fade active show col-lg-12">
         <div className="card">
          <div className="card-header">
           <h4 className="card-title">Upload Assignments</h4>
          </div>
          <div className="card-body">
           <div className="table-responsive">
            <form
             encType="multipart/form-data"
             onSubmit={this.onSubmit}
             id="form"
            >
             <div className="form-group">
              <div className="input-group">
               <div className="input-group-prepend">
                <span className="input-group-text">Submit To</span>
               </div>
               <select className="form-control" value={this.state.teachersname} onChange={this.onChangeTeachersName} required>
                <option value="Class">Please select the teachers name</option>
                {
                 this.state.staffs.map(function (staff) {
                  return <option
                   key={staff}
                   value={staff}
                  >
                   {staff}
                  </option>
                 })
                }
               </select>
              </div>
             </div>
             <div className="form-group">
              <div className="input-group">
               <div className="input-group-prepend">
                <span className="input-group-text">Subject</span>
               </div>
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
                <option value="Basic Science">Basic Science</option>
                <option value="Creative Arts">Creative Arts</option>
                <option value="Computer">Computer</option>
                <option value="P.H.E">P.H.E</option>
                <option value="Civic">Civic</option>
                <option value="History">History</option>
               </select>

              </div>
             </div>
             <span className="input-group-text">Upload Assignment &nbsp;
             
             <input
              type="file"
              name="image"
              className="form-control-file"
              required
              value={this.state.uploadedfile}
              onChange={this.onChangeUploadedFile}
             />
             </span>
             <div className="form-group">
              <div className="summernote"></div>
             </div>
             <div className="row align-items-center">
              <div className="col-lg-6">
               <div className="fallback w-100">
                {/* <Dropzone>

                 <p>Drag and drop a file OR click here to select a file</p>
                </Dropzone> */}
               </div>
              </div>
              <div className="col-lg-6">
               <button type="submit" className="btn btn-primary float-right">
                Send <i className="fa fa-paper-plane-o"></i>
               </button>
              </div>
             </div>
            </form>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  )
 }
}

