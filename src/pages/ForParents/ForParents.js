import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ParentsEventManagement from './ParentsEventManagement'
import ParentsHome from './ParentsHome'
import ParentsSeeAllStudent from './ParentsSeeAllResults'
import ParentsSidebar from './ParentsSidebar'
import ParentsUploadAssignment from './ParentsUploadAssignment'

export default class ForParents extends Component {
 render() {
  return (
   <div>
    <ParentsSidebar />
    <Switch>
     <Route path="/parents/home" component={ParentsHome} />
     <Route path="/parents/event-management" component={ParentsEventManagement} />
     <Route path="/parents/all-results" component={ParentsSeeAllStudent} />
     <Route path="/parents/upload-assignment" component={ParentsUploadAssignment} />
     {/* <Route path="/parents/add-new-result" component={TeachersAddNewResult} /> */}
    </Switch>
   </div>
  )
 }
}
