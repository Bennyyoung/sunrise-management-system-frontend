import React from 'react'
import { Link } from 'react-router-dom'

export default function TeachersSidebar() {
 return (
  <div className="dlabnav">
   <div className="dlabnav-scroll">
    <ul className="metismenu" id="menu">
     <li className="nav-label first">Main Menu</li>
     <li><Link className="has-arrow" to="/teachers/home" aria-expanded="false">
      <i className="la la-home"></i>
      <span className="nav-text">Dashboard</span>
     </Link>
      {/* <ul aria-expanded="false">
                            <li><a href="index.html">Dashboard 1</a></li>
                            <li><a href="index-2.html">Dashboard 2</a></li>
                            <li><a href="index-3.html">Dashboard 3</a></li>
                        </ul> */}
     </li>
     <li><Link className="ai-icon" to="/teachers/event-management" aria-expanded="false">
      <i className="la la-calendar"></i>
      <span className="nav-text">Event Management</span>
     </Link>
     </li>
     <li><Link className="has-arrow" to="/teachers/all-students" aria-expanded="false">
      <i className="la la-users"></i>
      <span className="nav-text">Students</span>
     </Link>
      <ul aria-expanded="false">
       <li><Link to="/teachers/all-students">All Students</Link></li>
      </ul>
     </li>
     <li><Link className="has-arrow" to="/teachers/all-results" aria-expanded="false">
      <i className="la la-users"></i>
      <span className="nav-text">Exams Grades</span>
     </Link>
      <ul aria-expanded="false">
       <li><Link to="/teachers/all-results">Result List</Link></li>
       <li><Link to="/teachers/add-new-result">Add New Result</Link></li>
       {/* <li><Link to="/edit-grade">Edit Grade List</Link></li> */}
       {/* <li><Link to="about-student.html">About Students</Link></li> */}
      </ul>
     </li>
     <li><Link className="has-arrow" to="#" aria-expanded="false">
      <i className="la la-users"></i>
      <span className="nav-text">Homework</span>
     </Link>
      <ul aria-expanded="false">
       <li><Link to="/teachers/grade-5">Grade 5</Link></li>
       <li><Link to="/teachers/grade-4">Grade 4</Link></li>
       <li><Link to="/teachers/grade-3">Grade 3</Link></li>
       <li><Link to="/teachers/grade-2">Grade 2</Link></li>
       <li><Link to="/teachers/grade-1">Grade 1</Link></li>
       <li><Link to="/teachers/nursery-1">Nursery 1</Link></li>
       <li><Link to="/teachers/nursery-2">Nursery 2</Link></li>
       <li><Link to="/teachers/nursery-3">Nursery 3</Link></li>
      </ul>
     </li>
    </ul>
   </div>
  </div>
 )
}