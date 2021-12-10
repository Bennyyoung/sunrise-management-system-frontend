import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const Staff = props => (
 <tr>
  <td>{props.staff.firstname}</td>
  <td>{props.staff.lastname}</td>
  <td>{props.staff.email}</td>
  <td>{props.staff.joiningdate.substring(0, 10)}</td>
  {/* <td>{props.staff.password}</td>
        <td>{props.staff.confirmpassword}</td> */}
  <td>{props.staff.mobilenumber}</td>
  <td>{props.staff.gender}</td>
  <td>{props.staff.designation}</td>
  <td>{props.staff.dateofbirth.substring(0, 10)}</td>
  <td>{props.staff.education}</td>

  <td style={{ textAlign: 'center', padding: '0 1rem 0 1rem' }}>
   <Link to={"/edit-staff/" + props.staff._id} className="btn btn-sm btn-primary"><i className="la la-pencil"> </i> </Link>
   <Link to="#" onClick={() => { props.deleteStaff(props.staff._id) }} className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></Link>
  </td>
 </tr>
)

export default class AllStaffs extends Component {
 constructor(props) {
  super(props);

  this.deleteStaff = this.deleteStaff.bind(this)

  this.state = { staffs: [] };
 }

 componentDidMount() {
  axios.get('https://sunrise-management-system.herokuapp.com/staffs')
   .then(response => {
    this.setState({ staffs: response.data })
   })
   .catch((error) => {
    console.log(error)
   })
 }

 deleteStaff(id) {
  axios.delete('https://sunrise-management-system.herokuapp.com/staffs/' + id)
   .then(res => {
    console.log(res.data)
    console.log('Staff successfully deleted')
    swal("Nice one", "Staff successfully deleted", "success")
   
   });

  this.setState({
   staff: this.state.staffs.filter(el => el._id !== id)
  })

  this.props.history.push('/')
 }

 staffList() {
  return this.state.staffs.map(
   currentstaff => {
    return <Staff staff={currentstaff} deleteStaff={this.deleteStaff} key={currentstaff._id} />
   }
  )
 }

 render() {
  return (
   <div className="content-body">
    {/* <!-- row --> */}
    <div className="container-fluid">

     <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
       <div className="welcome-text">
        <h4>All Staffs</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-teachers">Staffs</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-teachers">All Staffs</Link></li>
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
           <h4 className="card-title">All Staffs  </h4>
           <Link to="/add-staff" className="btn btn-primary">+ Add new</Link>
          </div>
          <div className="card-body">
           <div className="table-responsive">
            <table className="display" style={{ minWidth: "845px" }}>
             <thead>
              <tr>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>First Name</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Last Name</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Email</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Joining Date</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Mobile (+234)</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Gender</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Designation</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>DOB</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Education</th>
               {/* <td>Action</td> */}
              </tr>
             </thead>
             <tbody style={{ textAlign: 'center', paddingLeft: '2rem' }}>
              {this.staffList()}
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
