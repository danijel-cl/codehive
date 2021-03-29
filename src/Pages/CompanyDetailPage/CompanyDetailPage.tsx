import {Link} from "react-router-dom";
import CompanyList from "./Components/CompanyList"

export const CompanyDetailPage = () => {
  const companyName = "Airbnb INC."
  const companyLabel = "Software Company"
  const companySize = "11-50"
  const companyAge = "2010"
  const companyLocation = "New York City"
  const companyDescription = "If you’re like most of my clients, you know creative content marketing and\
    killer copywriting are fundamental to the success of your business.\n\nBut with so much to do to keep \
    your business growing, you don’t have time to learn how to write sales copy that actually sells, or \
    create a content marketing strategy that resonates with your target audience.\n\nYou’ve been disappointed\
    with your traffic and conversions so far, but with an overwhelming number of things to do, you’ve put off \
    doing anything about it until now.\n\nSo you’ve come to Upwork, looking for someone that can craft creative\
    content and killer sales copy to help you reach more people and make more sales.\n\n But your troubles aren’t \
    over just yet; it isn’t easy to find someone who can create the high-quality content you need. But your \
    troubles aren’t over just yet."
  return (
    <div className="site-wrapper overflow-hidden ">
      {/* Main Content Start */}
      <div className="bg-default-2 pt-16 pt-lg-22 pb-lg-27">
        <div className="container">
          {/* back Button */}
          <div className="row justify-content-center">
            <div className="col-12 mt-13 dark-mode-texts">
              <div className="mb-9">
                <a className="d-flex align-items-center ml-4">
                  <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8">
                  </i>
                  <span className="text-uppercase font-size-3 font-weight-bold text-gray">Back</span>
                </a>
              </div>
            </div>
          </div>
          {/* back Button End */}
          <div className="row ">
            {/* Company Profile */}
            <div className="col-12 col-xl-9 col-lg-8">
              <div className="bg-white rounded-4 pt-11 shadow-9">
                <div className="d-xs-flex align-items-center pl-xs-12 mb-8 text-center text-xs-left">
                  <a className="mr-xs-7 mb-5 mb-xs-0" href="#">
                    <img className="square-72 rounded-6" src={process.env.PUBLIC_URL + "/resources/image/l2/png/featured-job-logo-1.png"} alt="" />
                  </a>
                  <div>
                    <h2 className="mt-xs-n5">
                      <a className="font-size-6 text-black-2 font-weight-semibold">{companyName}</a>
                    </h2>
                    <span className="mb-0 text-gray font-size-4">{companyLabel}</span>
                  </div>
                </div>
                {/* Tab Section Start */}
                <ul className="nav border-bottom border-mercury pl-12" id="myTab" role="tablist">
                  <li className="tab-menu-items nav-item pr-12">
                    <a className="active text-uppercase font-size-3 font-weight-bold text-default-color py-3">Company</a>
                  </li>
                  <li className="tab-menu-items nav-item pr-12">
                    <Link to={"/posts?search="+companyName} className="text-uppercase font-size-3 font-weight-bold text-default-color py-3">Jobs</Link>
                  </li>
                </ul>
                {/* Tab Content */}
                <div className="tab-content pl-12 pt-10 pb-7 pr-12 pr-xxl-24" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    {/* Middle Body Start */}
                    <div className="row">
                      {/* Single Widgets Start */}
                      <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                        <div className="mb-8">
                          <p className="font-size-4">Company size</p>
                          <h5 className="font-size-4 font-weight-semibold text-black-2">{companySize} employees</h5>
                        </div>
                        <div className="mb-8">
                          <p className="font-size-4">Est. Since</p>
                          <h5 className="font-size-4 font-weight-semibold text-black-2">{companyAge}</h5>
                        </div>
                      </div>
                      {/* Single Widgets End */}
                      {/* Single Widgets Start */}
                      <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                        <div className="mb-8">
                          <p className="font-size-4">Type of corporation</p>
                          <h5 className="font-size-4 font-weight-semibold text-black-2">B2B &amp; B2C</h5>
                        </div>
                        <div className="mb-8">
                          <p className="font-size-4">Social Media</p>
                          <div className="icon-link d-flex align-items-center">
                            <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#">
                              <i className="fa fa-globe" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Single Widgets End */}
                      {/* Single Widgets Start */}
                      <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                        <div className="mb-8">
                          <p className="font-size-4">Location</p>
                          <h5 className="font-size-4 font-weight-semibold text-black-2">{companyLocation}</h5>
                        </div>
                      </div>
                      {/* Single Widgets End */}
                    </div>
                    {/* Middle Body End */}
                    {/* Excerpt Start */}
                    <h4 className="font-size-6 mb-7 text-black-2 font-weight-semibold">About {companyName}</h4>
                    <div className="pt-5 ">
                      <p className="font-size-4 mb-8" style={{whiteSpace: "pre-line"}}>
                        {companyDescription}
                      </p>
                    </div>
                    {/* Excerpt End */}
                  </div>
                </div>
                {/* Tab Content End */}
                {/* Tab Section End */}
              </div>
            </div>
            {/* Company Profile End */}
            {/* Sidebar */}
            <div className="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6">
              <div className="pt-11 pt-lg-0 pl-lg-5">
                <h4 className="font-size-6 font-weight-semibold mb-0">Similar Companies</h4>
                <CompanyList />
              </div>
            </div>
            {/* end Sidebar */}
          </div>
        </div>
      </div>
      {/* Main Content end */}
    </div>
  )
}
