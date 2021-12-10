import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AddNewExpense extends Component {
 constructor(props) {
  super(props)

  this.onChangeName = this.onChangeName.bind(this);
  this.onChangeExpenseType = this.onChangeExpenseType.bind(this);
  this.onChangeAmount = this.onChangeAmount.bind(this);
  this.onChangePhone = this.onChangePhone.bind(this);
  this.onChangeEmail = this.onChangeEmail.bind(this);
  this.onChangeStatus = this.onChangeStatus.bind(this);
  this.onChangeDate = this.onChangeDate.bind(this);

  this.state = {
   name: '',
   expensetype: '',
   amount: '',
   phone: '',
   email: '',
   status: '',
   date: ''
  }
 }

 onChangeName(e) {
  this.setState({
   name: e.target.name
  })
 }

 onChangeExpenseType(e) {
  this.setState({
   expensetype: e.target.expensetype
  })
 }

 onChangeAmount(e) {
  this.setState({
   amount: e.target.amount
  })
 }

 onChangePhone(e) {
  this.setState({
   phone: e.target.phone
  })
 }

 onChangeEmail(e) {
  this.setState({
   email: e.target.email
  })
 }

 onChangeStatus(e) {
  this.setState({
   status: e.target.status
  })
 }

 onChangeDate(e) {
  this.setState({
   date: e.target.date
  })
 }

 onSubmit(e) {
  e.preventDefault();

  const expense = {
   name: this.state.name,
   expensetype: this.state.expensetype,
   amount: this.state.amount,
   phone: this.state.phone,
   email: this.state.email,
   status: this.state.status,
   date: this.state.date
  }

  console.log(expense);

  axios.post('https://sunrise-management-system.herokuapp.com/expenses/add', expense)
   .then(res => console.log(res.data))
   .catch(function (error) {
    console.log(error)
   })

  this.setState({
   name: '',
   expensetype: '',
   amount: '',
   phone: '',
   email: '',
   status: '',
   date: ''
  })
 }

 render() {
  return (
   <div className="content-body">
    <div className="container-fluid">

     <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
       <div className="welcome-text">
        <h4>Add New Expense</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-new-expense">Expense</Link></li>
        <li className="breadcrumb-item active"><Link to="/add-new-expense">Add New Expense</Link></li>
       </ol>
      </div>
     </div>

     <div className="row">
      <div className="col-xl-12 col-xxl-12 col-sm-12">
       <div className="card">
        <div className="card-header">
         <h5 className="card-title">Basic Info</h5>
        </div>
        <div className="card-body">
         <form onSubmit={this.onSubmit}>
          <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Name</label>
             <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Expense Type</label>
             <select className="form-control" value={this.state.expensetype} onChange={this.onChangeExpenseType} required>
              <option value="Class">Please Select</option>
              <option value="html">Salary</option>
              <option value="css">Transport</option>
              <option value="javascript">Maintenance</option>
              <option value="angular">Purchase</option>
              <option value="angular">Utilities</option>
             </select>
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Amount</label>
             <input type="text" className="form-control" value={this.state.amount} onChange={this.onChangeAmount} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Phone</label>
             <input type="Number" className="form-control" value={this.state.phone} onChange={this.onChangePhone} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">E-Mail Address</label>
             <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Status</label>
             <select className="form-control" value={this.state.status} onChange={this.onChangeStatus} required>
              <option value="Please Select">Please Select</option>
              <option value="paid">Paid</option>
              <option value="due">Due</option>
              <option value="others">Others</option>
             </select>
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Date</label>
             <input name="datepicker" className="datepicker-default form-control" id="datepicker" value={this.state.date} onChange={this.onChangeDate} required />
            </div>
           </div>
           <div className="col-lg-12 col-md-12 col-sm-12">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="submit" className="btn btn-light">Cancel</button>
           </div>
          </div>
         </form>
        </div>
       </div>
      </div>
     </div>

    </div>
   </div>
  )
 }
}

