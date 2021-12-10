import React, { Component } from 'react'

export default class ParentsHome extends Component {
 render() {
  return (
   <div className="content-body">
    {/* <!-- row --> */}
    <div className="container-fluid">

     <div className="row">
      <div className="col-xl-3 col-xxl-3 col-sm-6">
       <div className="widget-stat card bg-secondary">
        <div className="card-body">
         <div className="media">
          <span className="mr-3">
           <i className="la la-graduation-cap"></i>
          </span>
          <div className="media-body text-white">
           <p className="mb-1">Total Subject</p>
           <h3 className="text-white">19</h3>
           <div className="progress mb-2 bg-white">
            <div className="progress-bar progress-animated bg-light" style={{ width: '76%' }}></div>
           </div>
           {/* <small>76% Increase in 20 Days</small> */}
          </div>
         </div>
        </div>
       </div>
      </div>
      <div className="col-xl-6 col-xxl-6 col-lg-12 col-sm-12">
       <div className="card">
        <div className="card-header">
         <h3 className="card-title">University Survey</h3>
        </div>
        <div className="card-body">
         <div id="morris_bar_stalked" className="morris_chart_height" style={{ height: '300px !important' }}></div>
        </div>
       </div>
      </div>
      <div className="col-xl-3 col-xxl-3 col-sm-6">
       <div className="card">
        <div className="card-header">
         <h3 className="card-title">Donught Chart</h3>
        </div>
        <div className="card-body">
         <div id="morris_donught_2" className="morris_chart_height" style={{ height: '300px !important' }}></div>
        </div>
       </div>
      </div>
      <div className="col-xl-3 col-xxl-3 col-sm-6">
       <div className="card">
        <div className="card-header">
         <h3 className="card-title">University Survey</h3>
        </div>
        <div className="card-body">
         <div id="morris_area" className="morris_chart_height" style={{ height: '300px !important' }}></div>
        </div>
       </div>
      </div>
      <div className="col-xl-3 col-xxl-4 col-lg-6 col-md-6">
       <div className="card">
        <img className="img-fluid" src="images/courses/pic1.jpg" alt="" />
        <div className="card-body">
         <h4><a href="about-courses.html">Why is Early Education Essential?</a></h4>
         <ul className="list-group mb-3 list-group-flush">
          <li className="list-group-item px-0 border-top-0 d-flex justify-content-between"><span className="mb-0 text-muted">April 23</span>
           <a href="javascript:void(0);"><i className="la la-heart-o mr-1"></i><strong>230</strong></a></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span className="mb-0">Duration :</span><strong>12 Months</strong></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span className="mb-0">Professor :</span><strong>Jack Ronan</strong></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span><i className="fa fa-graduation-cap text-primary mr-2"></i>Student</span><strong>+120</strong></li>
         </ul>
         <a href="about-courses.html" className="btn btn-primary">Read More</a>
        </div>
       </div>
      </div>
      <div className="col-xl-3 col-xxl-4 col-lg-6 col-md-6">
       <div className="card">
        <img className="img-fluid" src="images/courses/pic2.jpg" alt="" />
        <div className="card-body">
         <h4><a href="about-courses.html">The Shocking Revelation of Education.</a></h4>
         <ul className="list-group mb-3 list-group-flush">
          <li className="list-group-item px-0 border-top-0 d-flex justify-content-between"><span className="mb-0 text-muted">April 23</span>
           <a href="javascript:void(0);"><i className="la la-heart-o mr-1"></i><strong>230</strong></a></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span class="mb-0">Duration :</span><strong>12 Months</strong></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span className="mb-0">Professor :</span><strong>Jimmy Morris</strong></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span><i className="fa fa-graduation-cap text-primary mr-2"></i>Student</span><strong>+120</strong></li>
         </ul>
         <a href="about-courses.html" className="btn btn-primary">Read More</a>
        </div>
       </div>
      </div>
      <div className="col-xl-3 col-xxl-4 col-lg-6 col-md-6">
       <div className="card">
        <img className="img-fluid" src="images/courses/pic3.jpg" alt="" />
        <div className="card-body">
         <h4><a href="about-courses.html">Five Things Nobody Told You About</a></h4>
         <ul className="list-group mb-3 list-group-flush">
          <li className="list-group-item px-0 border-top-0 d-flex justify-content-between"><span className="mb-0 text-muted">April 23</span>
           <a href="javascript:void(0);"><i className="la la-heart-o mr-1"></i><strong>230</strong></a></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span className="mb-0">Duration :</span><strong>12 Months</strong></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span className="mb-0">Professor :</span><strong>Konne Backfield</strong></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span><i className="fa fa-graduation-cap text-primary mr-2"></i>Student</span><strong>+120</strong></li>
         </ul>
         <a href="about-courses.html" className="btn btn-primary">Read More</a>
        </div>
       </div>
      </div>
      <div className="col-xl-3 col-xxl-4 col-lg-6 col-md-6">
       <div className="card">
        <img className="img-fluid" src="images/courses/pic4.jpg" alt="" />
        <div className="card-body">
         <h4><a href="about-courses.html">Learn Python – Interactive Python Tutorial</a></h4>
         <ul className="list-group mb-3 list-group-flush">
          <li className="list-group-item px-0 border-top-0 d-flex justify-content-between"><span className="mb-0 text-muted">April 23</span>
           <a href="javascript:void(0);"><i className="la la-heart-o mr-1"></i><strong>230</strong></a></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span className="mb-0">Duration :</span><strong>12 Months</strong></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span class="mb-0">Professor :</span><strong>Nashid Martines</strong></li>
          <li className="list-group-item px-0 d-flex justify-content-between">
           <span><i className="fa fa-graduation-cap text-primary mr-2"></i>Student</span><strong>+120</strong></li>
         </ul>
         <a href="about-courses.html" className="btn btn-primary">Read More</a>
        </div>
       </div>
      </div>

      <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-12 col-sm-12">
       <div className="card">
        <div className="card-body">
         <form action="#" method="post">
          <div className="form-group">
           <div className="input-group">
            <div className="input-group-prepend">
             <span className="input-group-text">To</span>
            </div>
            <input type="text" class="form-control" />
           </div>
          </div>
          <div className="form-group">
           <div className="input-group">
            <div className="input-group-prepend">
             <span className="input-group-text">Subject</span>
            </div>
            <input type="text" class="form-control" />
           </div>
          </div>
          <div className="form-group">
           <div className="summernote"></div>
          </div>
          <div className="row align-items-center">
           <div className="col-lg-6">
            <div className="fallback w-100">
             <input type="file" className="dropify" data-default-file="" />
            </div>
           </div>
           <div className="col-lg-6">
            <button type="button" className="btn btn-primary float-right">
             Send <i className="fa fa-paper-plane-o"></i>
            </button>
           </div>
          </div>
         </form>
        </div>
       </div>
      </div>
      <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-12 col-sm-12">
       <div className="card">
        <div className="card-header">
         <h4 className="card-title">Exam Toppers</h4>
        </div>
        <div className="card-body">
         <div className="table-responsive">
          <table className="table verticle-middle">
           <thead>
            <tr>
             <th scope="col">Roll No.</th>
             <th scope="col">Name</th>
             <th scope="col">Status</th>
             <th scope="col">Edit</th>
            </tr>
           </thead>
           <tbody>
            <tr>
             <td>542</td>
             <td>Jack Ronan</td>
             <td><span id="widget_sparklinedash"><canvas></canvas></span></td>
             <td>
              <a href="javascript:void(0);" className="btn btn-sm btn-primary"><i className="la la-pencil"></i></a>
              <a href="javascript:void(0);" className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></a>
             </td>
            </tr>
            <tr>
             <td>243 </td>
             <td>Jimmy Morris</td>
             <td><div className="ico-sparkline"><div id="widget_spark-bar"></div></div></td>
             <td>
              <a href="javascript:void(0);" className="btn btn-sm btn-primary"><i className="la la-pencil"></i></a>
              <a href="javascript:void(0);" className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></a>
             </td>
            </tr>
            <tr>
             <td>452 </td>
             <td>Nashid Martines</td>
             <td><div class="ico-sparkline"><div id="widget_StackedBarChart"></div></div></td>
             <td>
              <a href="javascript:void(0);" className="btn btn-sm btn-primary"><i className="la la-pencil"></i></a>
              <a href="javascript:void(0);" className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></a>
             </td>
            </tr>
            <tr>
             <td>124</td>
             <td>Roman Aurora</td>
             <td> <div className="ico-sparkline"> <div id="widget_tristate"></div></div></td>
             <td>
              <a href="javascript:void(0);" className="btn btn-sm btn-primary"><i className="la la-pencil"></i></a>
              <a href="javascript:void(0);" className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></a>
             </td>
            </tr>
            <tr>
             <td>234</td>
             <td>Samantha</td>
             <td> <div className="ico-sparkline"> <div id="widget_composite-bar"></div> </div> </td>
             <td>
              <a href="javascript:void(0);" className="btn btn-sm btn-primary"><i className="la la-pencil"></i></a>
              <a href="javascript:void(0);" className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></a>
             </td>
            </tr>
           </tbody>
          </table>
         </div>
        </div>
       </div>
      </div>
      <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12">
       <div className="card">
        <div className="card-header">
         <h4 className="card-title">New Student List</h4>
        </div>
        <div className="card-body">
         <div className="table-responsive recentOrderTable">
          <table className="table verticle-middle table-responsive-md">
           <thead>
            <tr>
             <th scope="col">No.</th>
             <th scope="col">Name</th>
             <th scope="col">Assigned Professor</th>
             <th scope="col">Date Of Admit</th>
             <th scope="col">Status</th>
             <th scope="col">Subject</th>
             <th scope="col">Fees</th>
             <th scope="col">Edit</th>
            </tr>
           </thead>
           <tbody>
            <tr>
             <td>01</td>
             <td>Jack Ronan</td>
             <td>Airi Satou</td>
             <td>01 August 2020</td>
             <td><span className="badge badge-rounded badge-primary">Checkin</span></td>
             <td>Commerce</td>
             <td>120$</td>
             <td>
              <a href="edit-student.html" className="btn btn-sm btn-primary"><i className="la la-pencil"></i></a>
              <a href="javascript:void(0);" className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></a>
             </td>
            </tr>
            <tr>
             <td>02 </td>
             <td>Jimmy Morris</td>
             <td>Angelica Ramos</td>
             <td>31 July 2020</td>
             <td><span className="badge badge-rounded badge-warning">Panding</span></td>
             <td>Mechanical</td>
             <td>120$</td>
             <td>
              <a href="edit-student.html" className="btn btn-sm btn-primary"><i className="la la-pencil"></i></a>
              <a href="javascript:void(0);" className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></a>
             </td>
            </tr>
            <tr>
             <td>03 </td>
             <td>Nashid Martines</td>
             <td>Ashton Cox</td>
             <td>30 July 2020</td>
             <td><span className="badge badge-rounded badge-danger">Canceled</span></td>
             <td>Science</td>
             <td>520$</td>
             <td>
              <a href="edit-student.html" className="btn btn-sm btn-primary"><i className="la la-pencil"></i></a>
              <a href="javascript:void(0);" className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></a>
             </td>
            </tr>
            <tr>
             <td>04</td>
             <td>Roman Aurora</td>
             <td>Cara Stevens</td>
             <td>29 July 2020</td>
             <td><span className="badge badge-rounded badge-success">Checkin</span></td>
             <td>Arts</td>
             <td>220$</td>
             <td>
              <a href="edit-student.html" className="btn btn-sm btn-primary"><i className="la la-pencil"></i></a>
              <a href="javascript:void(0);" className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></a>
             </td>
            </tr>
            <tr>
             <td>05</td>
             <td>Samantha</td>
             <td>Bruno Nash </td>
             <td>28 July 2020</td>
             <td><span className="badge badge-rounded badge-success">Checkin</span></td>
             <td>Maths</td>
             <td>130$</td>
             <td>
              <a href="edit-student.html" className="btn btn-sm btn-primary"><i className="la la-pencil"></i></a>
              <a href="javascript:void(0);" className="btn btn-sm btn-danger"><i className="la la-trash-o"></i></a>
             </td>
            </tr>
           </tbody>
          </table>
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
