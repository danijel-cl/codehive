import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import {Link} from "react-router-dom";

export const UserJobsPage = () => {
  return (
    <div className="site-wrapper overflow-hidden ">
      {/* Navbar- */}
      <Navbar />
      {/* Main Content Start */}
      <div className="bg-default-2 pt-19 pt-lg-22 pb-7 pb-lg-23">
        <div className="container">
          {/* back Button */}
          <div className="row">
            <div className="col-12 mt-13 dark-mode-texts">
              <div className="mb-9">
                <Link className="d-flex align-items-center ml-4" to="/"> <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8">
                  </i><span className="text-uppercase font-size-3 font-weight-bold text-gray">Back</span></Link>
              </div>
            </div>
          </div>
          {/* back Button End */}
          <div className="row">
            {/* Sidebar Start */}
            <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-xs-10 mb-11 mb-lg-0">
              <div className="mr-0 mr-xl-17">
                <div className="pl-lg-5">
                  {/* Top Start */}
                  <div className="bg-white shadow-9 rounded-4">
                    <div className="px-5 py-11 text-center border-bottom border-mercury">
                      <a className="mb-4" href="#"><img className="circle-54" src="./image/l3/png/pro-img.png" alt="" /></a>
                      <h4 className="mb-0"><a className="text-black-2 font-size-6 font-weight-semibold" href="#">David Henricks</a></h4>
                      <p className="mb-8"><a className="text-gray font-size-4" href="#">Product Designer</a></p>
                      <div className="icon-link d-flex align-items-center justify-content-center flex-wrap">
                        <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#"><i className="fab fa-linkedin-in" /></a>
                        <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#"><i className="fab fa-facebook-f" /></a>
                        <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#"><i className="fab fa-twitter" /></a>
                        <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#"><i className="fab fa-dribbble" /></a>
                        <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#"><i className="fab fa-behance" /></a>
                      </div>
                    </div>
                    {/* Top End */}
                    {/* Bottom Start */}
                    <div className="px-9 pt-lg-5 pt-9 pt-xl-9 pb-5">
                      <h5 className="text-black-2 mb-8 font-size-5">Contact Info</h5>
                      {/* Single List */}
                      <div className="mb-7">
                        <p className="font-size-4 mb-0">Location</p>
                        <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">New York , USA</h5>
                      </div>
                      {/* Single List */}
                      {/* Single List */}
                      <div className="mb-7">
                        <p className="font-size-4 mb-0">E-mail</p>
                        <h5 className="font-size-4 font-weight-semibold mb-0"><a className="text-black-2 text-break" href="mailto:name_ac@gmail.com">name_ac@gmail.com</a></h5>
                      </div>
                      {/* Single List */}
                      {/* Single List */}
                      <div className="mb-7">
                        <p className="font-size-4 mb-0">Phone</p>
                        <h5 className="font-size-4 font-weight-semibold mb-0"><a className="text-black-2 text-break" href="tel:+999565562">+999 565 562</a></h5>
                      </div>
                      {/* Single List */}
                      {/* Single List */}
                      <div className="mb-7">
                        <p className="font-size-4 mb-0">Website Linked</p>
                        <h5 className="font-size-4 font-weight-semibold mb-0"><a className="text-break" href="#">www.nameac.com</a></h5>
                      </div>
                      {/* Single List */}
                    </div>
                    {/* Bottom End */}
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar End */}
            <div className="col-12 col-xl-8 col-lg-8">
              {/* Top Start */}
              <div className="mb-5">
                <h4 className="font-size-7 mb-9">Applied Jobs</h4>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                    {/* Single Featured Job */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                      <div className="media align-items-center">
                        <div className="square-52 bg-indigo mr-8 rounded">
                          <a href="#"><img src="./image/l3/png/fimize.png" alt="" /></a>
                        </div>
                        <div>
                          <a href="#" className="font-size-3 text-default-color line-height-2">Fimize</a>
                          <h3 className="font-size-6 mb-0"><a className="heading-default-color font-weight-semibold" href="#">Senior Marketing Expert</a></h3>
                        </div>
                      </div>
                      <div className="d-flex pt-17">
                        <ul className="list-unstyled mb-1 d-flex flex-wrap">
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="icon icon-pin-3 mr-2 font-weight-bold" /> London
                            </a>
                          </li>
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
                            </a>
                          </li>
                        </ul>
                        <a href="javascript:" className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  clicked  ">
                        </a>
                      </div>
                    </div>
                    {/* End Single Featured Job */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                    {/* Single Featured Job */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                      <div className="media align-items-center">
                        <div className="square-52 bg-regent mr-8 rounded">
                          <a href="#"><img src="./image/svg/icon-shark-2.svg" alt="" /></a>
                        </div>
                        <div>
                          <a href="#" className="font-size-3 text-default-color line-height-2">Shark</a>
                          <h3 className="font-size-6 mb-0"><a className="heading-default-color font-weight-semibold" href="#">3D Artist</a></h3>
                        </div>
                      </div>
                      <div className="d-flex pt-17">
                        <ul className="list-unstyled mb-1 d-flex flex-wrap">
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="icon icon-pin-3 mr-2 font-weight-bold" /> California
                            </a>
                          </li>
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="fa fa-briefcase mr-2 font-weight-bold" /> Remote
                            </a>
                          </li>
                        </ul>
                        <a href="javascript:" className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  ">
                        </a>
                      </div>
                    </div>
                    {/* End Single Featured Job */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                    {/* Single Featured Job */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                      <div className="media align-items-center">
                        <div className="square-52 bg-orange-2 mr-8 rounded">
                          <a href="#"><img src="./image/svg/icon-thunder.svg" alt="" /></a>
                        </div>
                        <div>
                          <a href="#" className="font-size-3 text-default-color line-height-2">Thunder</a>
                          <h3 className="font-size-6 mb-0"><a className="heading-default-color font-weight-semibold" href="#">Product Manager</a></h3>
                        </div>
                      </div>
                      <div className="d-flex pt-17">
                        <ul className="list-unstyled mb-1 d-flex flex-wrap">
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="icon icon-pin-3 mr-2 font-weight-bold" /> London
                            </a>
                          </li>
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
                            </a>
                          </li>
                        </ul>
                        <a href="javascript:" className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  ">
                        </a>
                      </div>
                    </div>
                    {/* End Single Featured Job */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                    {/* Single Featured Job */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                      <div className="media align-items-center">
                        <div className="square-52 bg-helio mr-8 rounded">
                          <a href="#"><img src="./image/l3/png/asios.png" alt="" /></a>
                        </div>
                        <div>
                          <a href="#" className="font-size-3 text-default-color line-height-2">Shark</a>
                          <h3 className="font-size-6 mb-0"><a className="heading-default-color font-weight-semibold" href="#">Front-end Developer</a></h3>
                        </div>
                      </div>
                      <div className="d-flex pt-17">
                        <ul className="list-unstyled mb-1 d-flex flex-wrap">
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="icon icon-pin-3 mr-2 font-weight-bold" /> Alabama
                            </a>
                          </li>
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
                            </a>
                          </li>
                        </ul>
                        <a href="javascript:" className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  clicked  ">
                        </a>
                      </div>
                    </div>
                    {/* End Single Featured Job */}
                  </div>
                </div>
              </div>
              {/* Top End */}
              {/* Bottom Start */}
              <div>
                <h4 className="font-size-7 mb-9">Saved Jobs</h4>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                    {/* Single Featured Job */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                      <div className="media align-items-center">
                        <div className="square-52 bg-orange-2 mr-8 rounded">
                          <a href="#"><img src="./image/svg/icon-thunder.svg" alt="" /></a>
                        </div>
                        <div>
                          <a href="#" className="font-size-3 text-default-color line-height-2">Thunder</a>
                          <h3 className="font-size-6 mb-0"><a className="heading-default-color font-weight-semibold" href="#">Product Manager</a></h3>
                        </div>
                      </div>
                      <div className="d-flex pt-17">
                        <ul className="list-unstyled mb-1 d-flex flex-wrap">
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="icon icon-pin-3 mr-2 font-weight-bold" /> New York
                            </a>
                          </li>
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="fa fa-briefcase mr-2 font-weight-bold" /> Part-time
                            </a>
                          </li>
                        </ul>
                        <a href="javascript:" className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  ">
                        </a>
                      </div>
                    </div>
                    {/* End Single Featured Job */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                    {/* Single Featured Job */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                      <div className="media align-items-center">
                        <div className="square-52 bg-helio mr-8 rounded">
                          <a href="#"><img src="./image/l3/png/asios.png" alt="" /></a>
                        </div>
                        <div>
                          <a href="#" className="font-size-3 text-default-color line-height-2">Shark</a>
                          <h3 className="font-size-6 mb-0"><a className="heading-default-color font-weight-semibold" href="#">Front-end Developer</a></h3>
                        </div>
                      </div>
                      <div className="d-flex pt-17">
                        <ul className="list-unstyled mb-1 d-flex flex-wrap">
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="icon icon-pin-3 mr-2 font-weight-bold" /> Alabama
                            </a>
                          </li>
                          <li>
                            <a href="#" className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                              <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
                            </a>
                          </li>
                        </ul>
                        <a href="javascript:" className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  ">
                        </a>
                      </div>
                    </div>
                    {/* End Single Featured Job */}
                  </div>
                </div>
              </div>
              {/* Bottom End */}
            </div>
          </div>
        </div>
      </div>
      {/* Main Content end */}
      {/* footer area function start */}
      <Footer />
      {/* footer area function end */}
    </div>
  )
}