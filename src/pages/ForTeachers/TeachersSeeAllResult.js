import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const Result = props => (
 <tr>
  <td>{props.result.studentname}</td>
  <td>{props.result.subject}</td>
  <td>{props.result.classtest}</td>
  <td>{props.result.midtermtest}</td>
  <td>{props.result.midtermtotal}</td>
  <td>{props.result.exam}</td>
  <td>{props.result.examtotal}</td>
  <td>{props.result.average}</td>
  <td>{props.result.position}</td>
  <td>{props.result.resultdate.substring(0, 10)}</td>
  <td>{props.result.responsible}</td>

  <td style={{ textAlign: 'center', padding: '0 1rem 0 1rem' }}>
   <Link to={"/edit-result/" + props.result._id} className="btn btn-sm btn-primary"><i className="la la-pencil"> </i> </Link>
  </td>
 </tr>
)

export default class TeachersSeeAllResult extends Component {
 constructor(props) {
  super(props);


  this.state = { results: [] };
 }

 componentDidMount() {
  axios.get(process.env.REACT_APP_BACK_END + '/results/')
   .then(response => {
    this.setState({ results: response.data })
   })
   .catch((error) => {
    console.log(error)
   })
 }

 resultList() {
  return this.state.results.map(
   currentresult => {
    return <Result result={currentresult} key={currentresult._id} />
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
        <h4>All Result</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-results">Results</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-results">All Results</Link></li>
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
           <a href="/add-new-result" className="btn btn-primary">+ Add new</a>
          </div>
          <div className="card-body">
           <div className="table-responsive">
            <table id="example3" className="display" style={{ minWidth: "845px" }}>
             <thead>
              <tr>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Student Name</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Subject</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Class Test</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Mid Term Test</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Mid Term Total</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Exam</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>All Total</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Average</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Position</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Result Date</th>
               <th style={{ textAlign: 'center', padding: '0 2rem 0 2rem' }}>Responsible</th>
              </tr>
             </thead>
             <tbody style={{ textAlign: 'center', paddingLeft: '2rem' }}>
              {this.resultList()}
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
