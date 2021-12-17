import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const Student = props => (
 <tr>
  <td>{props.student.firstname}</td>
  <td>{props.student.lastname}</td>
  <td>{props.student.email}</td>
  <td>{props.student.registrationdate.substring(0, 10)}</td>
  <td>{props.student.rollno}</td>
  <td>{props.student.studentclass}</td>
  <td>{props.student.gender}</td>
  <td>{props.student.parentsname}</td>
  <td>{props.student.parentsmobilenumber}</td>
  <td>{props.student.dateofbirth.substring(0, 10)}</td>
  <td>{props.student.bloodgroup}</td>
  <td>{props.student.healthissues}</td>
  <td>{props.student.address}</td>


  <td style={{ textAlign: 'center', padding: '0 1rem 0 1rem' }}>
   <Link to={"/edit-student/" + props.student._id} className="btn btn-sm btn-primary"><i className="la la-pencil"> </i> </Link>
   <Link to="#" onClick={() => { props.deleteStudent(props.student._id) }} className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></Link>
  </td>
 </tr>
)

export default class AllStudent extends Component {
 constructor(props) {
  super(props);

  this.deleteStudent = this.deleteStudent.bind(this)

  this.state = { students: [] };
 }

//  'https://sunrise-management-system.herokuapp.com/students/
// http://localhost:5000//students

 componentDidMount() {
  axios.get('https://sunrise-management-system.herokuapp.com/students')
   .then(response => {
    this.setState({ students: response.data })
   })
   .catch((error) => {
    console.log(error)
   })
 }

 deleteStudent(id) {
  axios.delete('https://sunrise-management-system.herokuapp.com/students/' + id)
   .then(res => {
    console.log(res.data);
    console.log('Student successfully deleted')
    swal("Nice one", "Student successfully deleted", "success")

   });

  this.setState({
   student: this.state.students.filter(el => el._id !== id)
  })

  this.props.history.push('/')
 }

 studentList() {
  return this.state.students.map(
   currentstudent => {
    return <Student student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id} />
   }
  )
 }

 render() {
  return (
   <div className="content-body">
    <div className="container-fluid">

     <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
       <div className="welcome-text">
        <h4>All Student</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-students">Students</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-students">All Student</Link></li>
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
           <h4 className="card-title">All Students List  </h4>
           <a href="/add-student" className="btn btn-primary">+ Add new</a>
          </div>
          <div className="card-body">
           <div className="table-responsive recentOrderTable">
            <table className="table verticle-middle table-responsive-md">
             <thead>
              <tr>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>First Name</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Last Name</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Parents Email</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Admission Date</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Roll No.</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Class</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Gender</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Parents Name</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Parents Number</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>DOB</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Blood Group</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Health Issues</th>
               <th scope="col" style={{ textAlign: 'center', padding: '0 2rem 0 2rem', justifyContent: 'right' }}>Address</th>
              </tr>
             </thead>
             <tbody style={{ textAlign: 'center', paddingLeft: '2rem' }}>
              {this.studentList()}
             </tbody>
            </table>
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
