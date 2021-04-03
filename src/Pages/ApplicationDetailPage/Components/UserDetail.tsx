import React from 'react';

const UserDetail = (props) => {
  return (
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">About</h4>
          <p className="font-size-4 mb-8">A talented professional with an academic background in IT and proven
            commercial development experience as C++ developer since 1999. Has a sound knowledge of the software
            development life cycle. Was involved in more than 140 software development outsourcing projects.</p>
          <p className="font-size-4 mb-8">Programming Languages: C/C++, .NET C++, Python, Bash, Shell, PERL, Regular
            expressions, Python, Active-script.</p>
        </div>
        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">Skills</h4>
          <ul className="list-unstyled d-flex align-items-center flex-wrap">
            <li>
              <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Agile</a>
            </li>
            <li>
              <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Wireframing</a>
            </li>
            <li>
              <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Prototyping</a>
            </li>
            <li>
              <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Information</a>
            </li>
            <li>
              <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Waterfall Model</a>
            </li>
            <li>
              <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">New Layout</a>
            </li>
            <li>
              <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Browsing</a>
            </li>
          </ul>
        </div>
        <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">Work Exprerience</h4>
          <div className="w-100">
            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                <img src={process.env.PUBLIC_URL + "/resources/image/l2/png/featured-job-logo-1.png"} alt="" />
              </div>
              <div className="w-100 mt-n2">
                <h3 className="mb-0">
                  <a className="font-size-6 text-black-2 font-weight-semibold" href="#">Lead Product Designer</a>
                </h3>
                <a href="#" className="font-size-4 text-default-color line-height-2">Airabnb</a>
                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                  <a className="font-size-4 text-gray mr-5">Jun 2017 - April 2020- 3 years</a>
                  <a className="font-size-3 text-gray">
                    <span className="mr-4" style={{marginTop: '-2px'}}><img src={process.env.PUBLIC_URL + "/resources/image/svg/icon-loaction-pin-black.svg"} alt="" /></span>New York, USA</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                <img src={process.env.PUBLIC_URL + "/resources/image/l1/png/feature-brand-1.png"} alt="" />
              </div>
              <div className="w-100 mt-n2">
                <h3 className="mb-0">
                  <a className="font-size-6 text-black-2 font-weight-semibold" href="#">Senior UI/UX Designer</a>
                </h3>
                <a href="#" className="font-size-4 text-default-color line-height-2">Google Inc</a>
                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                  <a className="font-size-3 text-gray mr-5">Jun 2017 - April 2020- 3 years</a>
                  <a className="font-size-3 text-gray">
                    <span className="mr-4" style={{marginTop: '-2px'}}><img src={process.env.PUBLIC_URL + "/resources/image/svg/icon-loaction-pin-black.svg"} alt="" /></span>New York, USA</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">Education</h4>
          <div className="w-100">
            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                <img src={process.env.PUBLIC_URL + "/resources/image/svg/harvard.svg"} alt="" />
              </div>
              <div className="w-100 mt-n2">
                <h3 className="mb-0">
                  <a className="font-size-6 text-black-2" href="#">Masters in Art Design</a>
                </h3>
                <a href="#" className="font-size-4 text-default-color line-height-2">Harvard University</a>
                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                  <a className="font-size-3 text-gray mr-5">Jun 2017 - April 2020- 3 years</a>
                  <a className="font-size-3 text-gray">
                    <span className="mr-4" style={{marginTop: '-2px'}}><img src={process.env.PUBLIC_URL + "/resources/image/svg/icon-loaction-pin-black.svg"} alt="" /></span>Brylin, USA</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                <img src={process.env.PUBLIC_URL + "/resources/image/svg/mit.svg"} alt="" />
              </div>
              <div className="w-100 mt-n2">
                <h3 className="mb-0">
                  <a className="font-size-6 text-black-2" href="#">Bachelor in Software Engineering </a>
                </h3>
                <a href="#" className="font-size-4 text-default-color line-height-2">Manipal Institute of Technology</a>
                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                  <a className="font-size-3 text-gray mr-5">Fed 2012 - April 2016 - 4 years</a>
                  <a className="font-size-3 text-gray">
                    <span className="mr-4" style={{marginTop: '-2px'}}><img src={process.env.PUBLIC_URL + "/resources/image/svg/icon-loaction-pin-black.svg"}/></span>New York, USA</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div className="pr-xl-11 p-5 pl-xs-12 pt-9 pb-11">
          <form action="/">
            <div className="row">
              <div className="col-12 mb-7">
                <label htmlFor="name3" className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">Your Name</label>
                <input id="name3" type="text" className="form-control" placeholder="Jhon Doe" />
              </div>
              <div className="col-lg-6 mb-7">
                <label htmlFor="email3" className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">E-mail</label>
                <input id="email3" type="email" className="form-control" placeholder="example@gmail.com" />
              </div>
              <div className="col-lg-6 mb-7">
                <label htmlFor="subject3" className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">Subject</label>
                <input id="subject3" type="text" className="form-control" placeholder="Special contract" />
              </div>
              <div className="col-lg-12 mb-7">
                <label htmlFor="message3" className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">Message</label>
                <textarea name="message" id="message3" placeholder="Type your message" className="form-control h-px-144" defaultValue={""} />
              </div>
              <div className="col-lg-12 pt-4">
                <button className="btn btn-primary text-uppercase w-100 h-px-48">Send Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
