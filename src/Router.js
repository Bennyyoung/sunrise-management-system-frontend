import React, { useContext } from 'react'
import AuthContext from './context/AuthContext'
import { BrowserRouter, HashRouter,Switch, Route } from "react-router-dom"
// import TeachersHome from "./pages/ForTeachers/TeachersHome";

import { Home, EventManagement, AllStaffs, AddStaff, EditStaff, AllStudents, AddStudent, EditStudent, AddNewResult, AllResult, AddNewExpense, ForTeachers, ForParents, EditResult, AllExpenses, AddFees, UploadAssignment } from './pages'

import { Navbar, Sidebar, Login, Register } from './components'

function Router() {
 const { loggedIn } = useContext(AuthContext);
 return (
  <div>
   <BrowserRouter>
    <Navbar />
    <Sidebar />
    <Switch>
     <Route exact path="/" component={Home} />
     {
      loggedIn === false && (
       <>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
       </>
      )
     }

     {
      loggedIn === true && (
       <>
        <Route path="/event-management" component={EventManagement} />

        {/* Staff Frontend Routes */}
        <Route path="/all-staffs" component={AllStaffs} />
        <Route path="/add-staff" component={AddStaff} />
        <Route path="/edit-staff/:id" component={EditStaff} />

        {/* Student Frontend Route */}
        <Route path="/all-students" component={AllStudents} />
        <Route path="/add-student" component={AddStudent} />
        <Route path="/edit-student/:id" component={EditStudent} />

        {/* Result Frontend Route */}
        <Route path="/all-results" component={AllResult} />
        <Route path="/add-new-result" component={AddNewResult} />
        <Route path="/edit-result/:id" component={EditResult} />


        <Route path="/add-new-expense" component={AddNewExpense} />
        <Route path="/all-expenses" component={AllExpenses} />

        <Route path="/add-fees" component={AddFees} />
        <Route path="/upload-assignment" component={UploadAssignment} />

        <Route path="/teachers" component={ForTeachers} />

        {/* <Route path="/teachers/:home/" component={TeachersHome} /> */}

        <Route path="/parents" component={ForParents} />

       </>
      )
     }

    </Switch>
   </BrowserRouter>
   {/* <Footer /> */}
  </div>
 )
}

export default Router