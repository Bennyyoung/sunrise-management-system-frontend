import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TeachersEventManagement extends Component {
 render() {
  return (
   <div className="content-body">
    <div className="container-fluid">
     <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
       <div className="welcome-text">
        <h4>Events</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/teachers/event-management">Events</Link></li>
        <li className="breadcrumb-item active"><Link to="teachers/event-management">Events Management</Link></li>
       </ol>
      </div>
     </div>

     <div className="row">
      <div className="col-lg-9">
       <div className="card">
        <div className="card-body">
         <div id="calendar" className="app-fullcalendar"></div>
        </div>
       </div>
      </div>
      <div className="col-lg-3">
       <div className="card">
        <div className="card-body">
         <h4 className="card-intro-title">Calendar</h4>

         <div className="">
          <div id="external-events" className="my-3">
           <p>Drag and drop your event or click in the calendar</p>
           <div className="external-event" data-class="bg-primary"><i className="fa fa-move"></i>New Theme Release</div>
           <div className="external-event" data-class="bg-success"><i className="fa fa-move"></i>My Event
           </div>
           <div className="external-event" data-class="bg-warning"><i className="fa fa-move"></i>Meet manager</div>
           <div className="external-event" data-class="bg-dark"><i class="fa fa-move"></i>Create New theme</div>
          </div>
          {/* <!-- checkbox --> */}
          <div className="checkbox custom-control checkbox-event custom-checkbox pt-3 pb-5">
           <input type="checkbox" class="custom-control-input" id="drop-remove" />
           <label className="custom-control-label" for="drop-remove">Remove After Drop</label>
          </div>
          <a href="javascript:void()" data-toggle="modal" data-target="#add-category" className="btn btn-primary btn-event w-100">
           <span className="align-middle"><i className="ti-plus"></i></span> Create New
                                    </a>
         </div>
        </div>
       </div>
      </div>
      {/* <!-- BEGIN MODAL --> */}
      <div className="modal fade none-border" id="event-modal">
       <div className="modal-dialog">
        <div className="modal-content">
         <div className="modal-header">
          <h4 className="modal-title"><strong>Add New Event</strong></h4>
         </div>
         <div className="modal-body"></div>
         <div className="modal-footer">
          <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-success save-event waves-effect waves-light">Create event</button>

          <button type="button" className="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
         </div>
        </div>
       </div>
      </div>
      {/* <!-- Modal Add Category --> */}
      <div className="modal fade none-border" id="add-category">
       <div className="modal-dialog">
        <div className="modal-content">
         <div className="modal-header">
          <h4 className="modal-title"><strong>Add a category</strong></h4>
         </div>
         <div className="modal-body">
          <form>
           <div className="row">
            <div className="col-md-6">
             <label className="control-label">Category Name</label>
             <input className="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
            </div>
            <div className="col-md-6">
             <label className="control-label">Choose Category Color</label>
             <select className="form-control form-white" data-placeholder="Choose a color..." name="category-color">
              <option value="success">Success</option>
              <option value="danger">Danger</option>
              <option value="info">Info</option>
              <option value="pink">Pink</option>
              <option value="primary">Primary</option>
              <option value="warning">Warning</option>
             </select>
            </div>
           </div>
          </form>
         </div>
         <div className="modal-footer">
          <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
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
