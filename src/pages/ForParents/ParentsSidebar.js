import React from 'react'
import { Link } from 'react-router-dom'

export default function ParentsSidebar() {
 return (
  <div className="dlabnav">
   <div className="dlabnav-scroll">
    <ul className="metismenu" id="menu">
     <li className="nav-label first">Main Menu</li>
     <li><Link className="has-arrow" to="/parents/home" aria-expanded="false">
      <i className="la la-home"></i>
      <span className="nav-text">Dashboard</span>
     </Link>
      {/* <ul aria-expanded="false">
                            <li><a href="index.html">Dashboard 1</a></li>
                            <li><a href="index-2.html">Dashboard 2</a></li>
                            <li><a href="index-3.html">Dashboard 3</a></li>
                        </ul> */}
     </li>
     <li><Link className="ai-icon" to="/parents/event-management" aria-expanded="false">
      <i className="la la-calendar"></i>
      <span className="nav-text">Event Management</span>
     </Link>
     </li>
     {/* <li><Link className="has-arrow" to="/parents/all-students" aria-expanded="false">
      <i className="la la-users"></i>
      <span className="nav-text">Students</span>
     </Link>
      <ul aria-expanded="false">
       <li><Link to="/parents/all-students">All Students</Link></li>
      </ul>
     </li> */}
     <li><Link className="has-arrow" to="/parents/all-results" aria-expanded="false">
      <i className="la la-users"></i>
      <span className="nav-text">Exams Grades</span>
     </Link>
      <ul aria-expanded="false">
       <li><Link to="/parents/all-results">Result List</Link></li>
      </ul>
     </li>
     <li><Link className="has-arrow" to="/parents/view-all-homework" aria-expanded="false">
      <i className="la la-users"></i>
      <span className="nav-text">View Homework</span>
      </Link>
      <ul aria-expanded="false">
       <li><Link to="/parents/view-grade-5">Grade 5</Link></li>
       <li><Link to="/parents/view-grade-4">Grade 4</Link></li>
       <li><Link to="/parents/view-grade-3">Grade 3</Link></li>
       <li><Link to="/parents/view-grade-2">Grade 2</Link></li>
       <li><Link to="/parents/view-grade-1">Grade 1</Link></li>
       <li><Link to="/parents/view-nursery-1">Nursery 1</Link></li>
       <li><Link to="/parents/view-nursery-2">Nursery 2</Link></li>
       <li><Link to="/parents/view-nursery-3">Nursery 3</Link></li>
      </ul>
     </li>

     <li><Link className="has-arrow" to="/parents/upload-assignment" aria-expanded="false">
      <i className="la la-users"></i>
      <span className="nav-text">Assignment Upload</span>
     </Link>
     </li>
    </ul>
   </div>
  </div>
 )
}