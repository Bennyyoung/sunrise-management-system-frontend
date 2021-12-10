import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../context/AuthContext";
import LogoutBtn from './auth/LogoutBtn';


export default function Sidebar() {
 const [isOpen, setIsOpen] = useState(false)


 const handleToggle = () => {
  setIsOpen(!isOpen)
 }

 const { loggedIn } = useContext(AuthContext)

 return (
  <>
   <button type="button" className="btn btn-primary" onClick={handleToggle}>
    Toggle SideBar
   </button><br />
   <div className={isOpen ? "dlabnav" : "show-nav"} id="menu">
    <div className="dlabnav-scroll">
     <ul className="metismenu" id="menu">
      {
       loggedIn === false && (
        <>
         <li className="nav-label first">Register</li>
         <li><Link className="has-arrow" to="/register" aria-expanded="false">
          <i className="la la-register"></i>
          <span className="nav-text">Register</span>
         </Link>
         </li>

         <li className="nav-label first">Login</li>
         <li><Link className="has-arrow" to="/login" aria-expanded="false">
          <i className="la la-login"></i>
          <span className="nav-text">Login</span>
         </Link>
         </li>
        </>
       )
      }

      {
       loggedIn === true && (
        <>

         <li>Main Menu</li>
         <li><Link className="has-arrow" to="/" aria-expanded="false">
          <i className="la la-home"></i>
          <span className="nav-text">Dashboard</span>
         </Link>
          {/* <ul aria-expanded="false">
                       <li><a href="index.html">Dashboard 1</a></li>
                       <li><a href="index-2.html">Dashboard 2</a></li>
                       <li><a href="index-3.html">Dashboard 3</a></li>
                   </ul> */}
         </li>
         <li><Link className="ai-icon" to="/event-management" aria-expanded="false">
          <i className="la la-calendar"></i>
          <span className="nav-text">Event Management</span>
         </Link>
         </li>
         <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">
          <i className="la la-user"></i>
          <span className="nav-text">Staff</span>
         </a>
          <ul aria-expanded="false">
           <li><Link to="/all-staffs">All Staffs</Link></li>
           <li><Link to="/add-staff">Add Staff</Link></li>
           {/* <li><Link to="/edit-staff">Edit Staff</Link></li> */}
           {/* <li><a href="professor-profile.html">Staff Profile</a></li> */}
          </ul>
         </li>
         <li><Link className="has-arrow" to="/all-students" aria-expanded="false">
          <i className="la la-users"></i>
          <span className="nav-text">Students</span>
         </Link>
          <ul aria-expanded="false">
           <li><Link to="/all-students">All Students</Link></li>
           <li><Link to="/add-student">Add Students</Link></li>
           {/* <li><Link to="/edit-student">Edit Students</Link></li> */}
           {/* <li><Link to="about-student.html">About Students</Link></li> */}
          </ul>
         </li>
         <li><Link className="has-arrow" to="/all-students" aria-expanded="false">
          <i className="la la-users"></i>
          <span className="nav-text">Exams Grades</span>
         </Link>
          <ul aria-expanded="false">
           <li><Link to="/all-results">Result List</Link></li>
           <li><Link to="/add-new-result">Add New Result</Link></li>
           {/* <li><Link to="/edit-grade">Edit Grade List</Link></li> */}
           {/* <li><Link to="about-student.html">About Students</Link></li> */}
          </ul>
         </li>
         <li><Link className="has-arrow" to="/all-students" aria-expanded="false">
          <i className="la la-users"></i>
          <span className="nav-text">Homework</span>
         </Link>
          <ul aria-expanded="false">
           <li><Link to="/grade-5">Grade 5</Link></li>
           <li><Link to="/grade-4">Grade 4</Link></li>
           <li><Link to="/grade-3">Grade 3</Link></li>
           <li><Link to="/grade-2">Grade 2</Link></li>
           <li><Link to="/grade-1">Grade 1</Link></li>
           <li><Link to="/nursery-1">Nursery 1</Link></li>
           <li><Link to="/nursery-2">Nursery 2</Link></li>
           <li><Link to="/nursery-3">Nursery 3</Link></li>

           {/* <li><Link to="/edit-grade">Edit Grade List</Link></li> */}
           {/* <li><Link to="about-student.html">About Students</Link></li> */}
          </ul>
         </li>
         <li><Link className="has-arrow" to="/upload-assignment" aria-expanded="false">
          <i className="la la-users"></i>
          <span className="nav-text">Assignment Upload</span>
         </Link>
          <ul aria-expanded="false">
           {/* <li><Link to="/upload-assignment">Upload Assignment</Link></li> */}
           {/* <li><Link to="/edit-grade">Edit Grade List</Link></li> */}
           {/* <li><Link to="about-student.html">About Students</Link></li> */}
          </ul>
         </li>

         <LogoutBtn />
         {/* <li><Link className="has-arrow" to="/all-students" aria-expanded="false">
 <i className="la la-users"></i>
 <span className="nav-text">Accounts</span>
</Link>
 <ul aria-expanded="false">
  <li><Link to="/all-expenses">Expenses</Link></li>
  <li><Link to="/add-new-expense">Add New Expense</Link></li>
  <li><Link to="/edit-expense">Edit Expense List</Link></li>
  <li><Link to="about-student.html">About Students</Link></li>
 </ul>
</li> */}
         {/* <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">
 <i className="la la-graduation-cap"></i>
 <span className="nav-text">Courses</span>
</a>
 <ul aria-expanded="false">
  <li><a href="all-courses.html">All Courses</a></li>
  <li><a href="add-courses.html">Add Courses</a></li>
  <li><a href="edit-courses.html">Edit Courses</a></li>
  <li><a href="about-courses.html">About Courses</a></li>
 </ul>
</li> */}
         {/* <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">
 <i className="la la-book"></i>
 <span className="nav-text">Library</span>
</a>
 <ul aria-expanded="false">
  <li><a href="all-library.html">All Library</a></li>
  <li><a href="add-library.html">Add Library</a></li>
  <li><a href="edit-library.html">Edit Library</a></li>
 </ul>
</li> */}
         {/* <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">
 <i className="la la-dollar"></i>
 <span className="nav-text">Fees</span>
</a>
 <ul aria-expanded="false">
  <li><Link to="/add-fees">Fees Collection</Link></li>
  <li><Link to="/add-fees">Add Fees</Link></li>
  <li><Link to="fees-receipt.html">Fees Receipt</Link></li>
 </ul>
</li> */}
        </>
       )
      }
     </ul>
    </div>
   </div>
  </>
 )
}