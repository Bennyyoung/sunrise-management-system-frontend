import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import swal from 'sweetalert'

export default class AddNewResult extends Component {
  constructor(props) {
    super(props)

    this.onChangeStudentFullName = this.onChangeStudentFullName.bind(this)
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeTest = this.onChangeTest.bind(this);
    this.onChangeExam = this.onChangeExam.bind(this);
    this.onChangeResultDate = this.onChangeResultDate.bind(this);
    this.onChangeResponsible = this.onChangeResponsible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentfullname: [],
      subject: '',
      test: '',
      exam: '',
      resultdate: new Date(),
      responsible: ''
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_BACK_END + '/students')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ snames: response.data.map(sname => sname.firstname + ' ' + sname.lastname)})
          console.log("Response data length:"+ response.data.length)


        }
      })
  }

  onChangeStudentFullName(e) {
    this.setState({
      studentfullname: e.target.value
    })
  }

  onChangeStudentClass(e) {
    this.setState({
      studentclass: e.target.value
    })
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value
    })
  }

  onChangeTest(e) {
    this.setState({
      test: e.target.value
    })
  }

  onChangeExam(e) {
    this.setState({
      exam: e.target.value
    })
  }

  onChangeResultDate(resultdate) {
    this.setState({
      resultdate: resultdate
    })
  }

  onChangeResponsible(e) {
    this.setState({
      responsible: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const result = {
      studentfullname: this.state.studentfullname,
      subject: this.state.subject,
      test: this.state.test,
      exam: this.state.exam,
      resultdate: this.state.resultdate,
      responsible: this.state.responsible
    }

    console.log(result);

    axios.post(process.env.REACT_APP_BACK_END + '/results/add', result)
      .then(res => {
        console.log(res.data)
        swal("Good job", "Student Result Successfully Uploaded", "success")

      })
      .catch(function (error) {
        console.log(error)
        swal("Couldn't upload student result", "Please input or check all fields properly", "error")
      })

    this.setState({
      studentfullname: '',
      studentclass: '',
      subject: '',
      test: '',
      exam: '',
      resultdate: new Date(),
      responsible: ''
    })
  }

  render() {
    return (
      <div className="content-body">
        <div className="container-fluid">

          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4>Add New Result</h4>
              </div>
            </div>
            <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active"><Link to="/all-result">Exam Grade</Link></li>
                <li className="breadcrumb-item active"><Link to="/add-new-result">Add New Result</Link></li>
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
                          <label className="form-label">Student Name</label>
                          <select className="form-control" value={this.state.studentfullname} onChange={this.onChangeStudentFullName} required>
                            {this.state.snames.map(function (sname) {
                              return (
                                <option
                                key={sname}
                                value={sname}
                                >
                                  <option>Select a Student Name</option>
                                  {sname}

                                </option>
                              )

                            })}
                          </select>
                        </div>
                      </div>



                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Class</label>
                          <select className="form-control" value={this.state.studentclass} onChange={this.onChangeStudentClass} required>
                            <option value="Class">Please select a class</option>
                            <option value="creche">Creche/Pre-School</option>
                            <option value="Nursery 1">Nursery 1</option>
                            <option value="Nursery 2">Nursery 2</option>
                            <option value="Grade 1">Grade 1</option>
                            <option value="Grade 2">Grade 2</option>
                            <option value="Grade 3">Grade 3</option>
                            <option value="Grade 4">Grade 4</option>
                            <option value="Grade 5">Grade 5</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Test</label>
                          <input type="number" className="form-control" value={this.state.test} onChange={this.onChangeTest} required />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Exam</label>
                          <input type="number" className="form-control" value={this.state.exam} onChange={this.onChangeExam} required />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Result Date</label><br />
                          <DatePicker
                            selected={this.state.resultdate}
                            onChange={this.onChangeResultDate}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Responsible</label>
                          <input type="text" className="form-control" value={this.state.responsible} onChange={this.onChangeResponsible} required />
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
