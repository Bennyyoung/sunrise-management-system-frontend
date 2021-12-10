import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Expense = props => (
 <tr>
  <td>{props.expense.name}</td>
  <td>{props.expense.expensetype}</td>
  <td>{props.expense.amount}</td>
  <td>{props.expense.phone}</td>
  <td>{props.expense.email}</td>
  <td>{props.expense.status}</td>
  <td>{props.expense.date}</td>
 </tr>
)


export default class AllExpenses extends Component {
 constructor(props) {
  super(props);

  this.deleteExpense = this.deleteExpense.bind(this)

  this.state = { expenses: [] };
 }

 componentDidMount() {
  axios.get('http://localhost:5000/expenses/')
   .then(response => {
    this.setState({ expenses: response.data })
   })
   .catch((error) => {
    console.log(error)
   })
 }

 deleteExpense(id) {
  axios.delete('https://sunrise-management-system.herokuapp.com/expenses/' + id)
   .then(res => console.log(res.data));

  this.setState({
   expense: this.state.expenses.filter(el => el._id !== id)
  })
 }

 expenseList() {
  return this.state.expenses.map(
   currentexpense => {
    return <Expense expense={currentexpense} deleteExpense={this.deleteExpense} key={currentexpense._id} />
   }
  )
 }
 render() {
  return (
   <div className="content-body">
    {/* <!-- row --> */}
    <div className="container-fluid">

     <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
       <div className="welcome-text">
        <h4>All Expenses</h4>
       </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
       <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-expenses">Expenses</Link></li>
        <li className="breadcrumb-item active"><Link to="/all-expenses">All Expenses</Link></li>
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
           <h4 className="card-title">All Expenses  </h4>
           <Link to="/add-expense" className="btn btn-primary">+ Add new</Link>
          </div>
          <div className="card-body">
           <div className="table-responsive">
            <table className="display" style={{ minWidth: "845px" }}>
             <thead>
              <tr>
               <th style={{ textAlign: 'center', paddingLeft: '1rem' }}>Name</th>
               <th style={{ textAlign: 'center', paddingLeft: '1rem' }}>Expense Type</th>
               <th style={{ textAlign: 'center', paddingLeft: '1rem' }}>Amount</th>
               <th style={{ textAlign: 'center', paddingLeft: '1rem' }}>Phone</th>
               <th style={{ textAlign: 'center', paddingLeft: '1rem' }}>Email</th>
               <th style={{ textAlign: 'center', paddingLeft: '1rem' }}>Status</th>
               <th style={{ textAlign: 'center', paddingLeft: '1rem' }}>Date</th>
               {/* <td>Action</td> */}
              </tr>
             </thead>
             <tbody style={{ textAlign: 'center', paddingLeft: '1rem' }}>
              {this.expenseList()}
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
