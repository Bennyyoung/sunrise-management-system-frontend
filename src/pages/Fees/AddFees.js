import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AddFees extends Component {
 constructor(props) {
  super(props)

  this.onChangeStudentName = this.onChangeStudentName.bind(this);
  this.onStudentClass = this.onChangeStudentClass.bind(this)
  this.onChangeFeesType = this.onChangeFeesType.bind(this);
  this.onChangeAmountPaid = this.onChangeAmountPaid.bind(this);
  this.onChangeCollectionDate = this.onChangeCollectionDate.bind(this)
  this.onChangePaymentType = this.onChangePaymentType.bind(this)
  this.onChangePaymentReferenceNumber = this.onChangePaymentReferenceNumber.bind(this)
  this.onChangeStatus = this.onChangeStatus.bind(this);
  this.onChangePaymentDetails = this.onChangePaymentDetails.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
   studentname: '',
   studentclass: '',
   feestype: '',
   amountpaid: '',
   collectiondate: '',
   paymenttype: '',
   paymentreferencenumber: '',
   status: '',
   paymentdetails: '',
  }
 }

 onChangeStudentName(e) {
  this.setState({
   studentname: e.target.value
  })
 }

 onChangeStudentClass(e) {
  this.setState({
   studentclass: e.target.value
  })
 }

 onChangeFeesType(e) {
  this.setState({
   feestype: e.target.value
  })
 }

 onChangeAmountPaid(e) {
  this.setState({
   amountpaid: e.target.value
  })
 }

 onChangeCollectionDate(e) {
  this.setState({
   collectiondate: e.target.value
  })
 }

 onChangePaymentType(e) {
  this.setState({
   paymenttype: e.target.value
  })
 }

 onChangePaymentReferenceNumber(e) {
  this.setState({
   paymentreferencenumber: e.target.value
  })
 }

 onChangeStatus(e) {
  this.setState({
   status: e.target.value
  })
 }

 onChangePaymentDetails(e) {
  this.setState({
   paymentdetails: e.target.value
  })
 }

 onSubmit(e) {
  e.preventDefault();

  const fees = {
   studentname: this.state.studentname,
   studentclass: this.state.studentclass,
   feestype: this.state.feestype,
   amountpaid: this.state.amountpaid,
   collectiondate: this.state.collectiondate,
   paymenttype: this.state.paymenttype,
   paymentreferencenumber: this.state.paymentreferencenumber,
   status: this.state.status,
   paymentdetails: this.status.paymentdetails,
  }

  console.log(fees);

  axios.post(process.env.REACT_APP_BACK_END + '/fees/add', fees)
   .then(res => console.log(res.data))
   .catch(function (error) {
    console.log(error)
   })

   this.setState({
    studentname: '',
    studentclass: '',
    feestype: '',
    amountpaid: '',
    collectiondate: '',
    paymenttype: '',
    paymentreferencenumber: '',
    status: '',
    paymentdetails: '',
   })
 }

 render() {
  return (
   <div className="content-body">
    <div className="container-fluid">

     <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
       <div className="welcome-text">
        <h4>Add Fees</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item"><Link to="/add-fees">Fees</Link></li>
        <li className="breadcrumb-item active"><Link to="/add-fees">Add Fees</Link></li>
       </ol>
      </div>
     </div>

     <div className="row">
      <div className="col-xl-12 col-xxl-12 col-sm-12">
       <div className="card">
        <div className="card-header">
         <h5 className="card-title">Add Fees</h5>
        </div>
        <div className="card-body">
         <form onSubmit={this.onSubmit}>
          <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label" value={this.state.studentname} onChange={this.onChangeStudentName}>Student Name</label>
             <input type="text" className="form-control" />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Student Class</label>
             <select className="form-control" value={this.state.studentclass} onChange={this.onChangeStudentClass}>
              <option value="Class">Class</option>
              <option value="Computer">Computer</option>
              <option value="Arts">Arts</option>
              <option value="Commerce">Commerce</option>
             </select>
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group mb-4">
             <label className="form-label"></label>
             <select className="form-control" value={this.state.feestype} onChange={this.onChangeFeesType}>
              <option value="Fess Type">Fess Type</option>
              <option value="Annual">Annual</option>
              <option value="Exam">Exam</option>
              <option value="Other">Other</option>
             </select>
            </div>
           </div>
           <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-group">
             <label className="form-label">Amount Paid</label>
             <input type="text" className="form-control" value={this.state.amountpaid} onChange={this.onChangeAmountPaid}/>
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group mb-4">
             <label className="form-label">Collection Date</label>
             <input name="datepicker" className="datepicker-default form-control" id="datepicker" value={this.state.collectiondate} onChange={this.onChangeCollectionDate} />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group mb-4">
             <label className="form-label"></label>
             <select className="form-control" value={this.state.paymenttype} onChange={this.onChangePaymentType}>
              <option value="Payment Type">Payment Type</option>
              <option value="Annual">Cash</option>
              <option value="Exam">Cheque</option>
              <option value="Other">Other</option>
             </select>
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group">
             <label className="form-label">Payment Reference Number</label>
             <input type="text" className="form-control" value={this.state.paymentreferencenumber} onChange={this.onChangePaymentReferenceNumber} />
            </div>
           </div>
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form-group mb-4">
             <label className="form-label">Status</label>
             <select className="form-control" value={this.state.status} onChange={this.onChangeStatus}>
              <option value="Status">Status</option>
              <option value="Annual">Paid</option>
              <option value="Exam">Unpaid</option>
              <option value="Exam">Pending</option>
             </select>
            </div>
           </div>
           <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-group">
             <label className="form-label">Payment Details</label>
             <textarea className="form-control" rows="5" value={this.state.paymentdetails} onChange={this.onChangePaymentDetails}></textarea>
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
