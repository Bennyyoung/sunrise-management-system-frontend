import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import TeachersSidebar from '../ForTeachers/TeachersSidebar'
import TeachersAddNewResult from './TeachersAddNewResult'
import TeachersEventManagement from './TeachersEventManagement'
import TeachersHome from './TeachersHome'
import TeachersSeeAllResult from './TeachersSeeAllResult'
import TeachersSeeAllStudent from './TeachersSeeAllStudents'

export default class ForTeachers extends Component {
 render() {
  return (
   <div>
    <TeachersSidebar />
    {/* <TeachersHome /> */}
    <Switch>
     <Route path="/teachers/home" component={TeachersHome} />
     <Route path="/teachers/event-management" component={TeachersEventManagement}/>
     <Route path="/teachers/all-results" component={TeachersSeeAllResult} />
     <Route path="/teachers/add-new-result" component={TeachersAddNewResult} />
     <Route path="/teachers/all-students" component={TeachersSeeAllStudent} />


    </Switch>
   </div>
  )
 }
}
