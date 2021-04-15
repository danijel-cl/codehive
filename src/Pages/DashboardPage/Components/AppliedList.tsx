import React from 'react';
import AppliedRow from './AppliedRow';
import ReactSelect from './ReactSelect'

const AppliedList = (props) => {
  return (
    <div>
      <div className="row mb-11 align-items-center">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <h3 className="font-size-6 mb-0">{props.title}</h3>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
            <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
            <div className="h-px-48">
              <div className="pl-7 h-100 arrow-3 arrow-3-black min-width-px-273 font-weight-semibold text-black-2">
                <ReactSelect />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-13 rounded-4 pb-8 px-11">
        <div className="table-responsive" style={{ borderRadius:"5px"}}>
          <table className="table table-striped table-borderless table-hover">
            <thead style={{backgroundColor:"rgba(0, 176, 116, 0.7)"}} className="font-size-4 text-white">
              <tr>
                <th scope="col" className="pl-17">Name</th>
                <th scope="col">Applied as</th>
                <th scope="col">Applied on</th>
                <th scope="col">Tests Passed</th>
                <th scope="col">Code Quality</th>
                <th scope="col"/>
                <th scope="col"/>
                <th scope="col"/>
              </tr>
            </thead>
            <tbody>
              <AppliedRow />
              <AppliedRow />
              <AppliedRow />
              <AppliedRow />
              <AppliedRow />
              <AppliedRow />
            </tbody>
          </table>
        </div>
        <div className="pt-2">
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-hover-primary rounded-0 ml-n2">
              <li className="page-item rounded-0 flex-all-center">
                <a className="page-link rounded-0 border-0 px-3active" href="#" aria-label="Previous">
                  <i className="fas fa-chevron-left" />
                </a>
              </li>
              <li className="page-item"><a className="page-link border-0 font-size-4 font-weight-semibold px-3" href="#">1</a></li>
              <li className="page-item"><a className="page-link border-0 font-size-4 font-weight-semibold px-3" href="#">2</a></li>
              <li className="page-item"><a className="page-link border-0 font-size-4 font-weight-semibold px-3" href="#">3</a></li>
              <li className="page-item disabled"><a className="page-link border-0 font-size-4 font-weight-semibold px-3" href="#">...</a></li>
              <li className="page-item "><a className="page-link border-0 font-size-4 font-weight-semibold px-3" href="#">7</a></li>
              <li className="page-item rounded-0 flex-all-center">
                <a className="page-link rounded-0 border-0 px-3" href="#" aria-label="Next">
                  <i className="fas fa-chevron-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AppliedList;
