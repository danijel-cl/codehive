import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const [render, setRender] = useState(true);
  let location = useLocation()
  useEffect(() => {
    if (location.pathname.includes("tasks")|| location.pathname.includes("dashboard")){
      setRender(false)
    }else{
      setRender(true)
    }
  });
  return (
    <div>
    {(() => {
        if (render===true) {
          return (
            <footer className="footer bg-ebony-clay dark-mode-texts">
              <div className="container  pt-12 pt-lg-19 pb-10 pb-lg-19">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 mb-lg-0 mb-9">
                    {/* footer logo start */}
                    <img src="image/logo-main-white.png" alt="" className="footer-logo mb-14" />
                    {/* footer logo End */}
                    {/* media start */}
                    <div className="media mb-11">
                      <img src="image/l1/png/message.png" className="align-self-center mr-3" alt="" />
                      <div className="media-body pl-5">
                        <p className="mb-0 font-size-4 text-white">Contact us at</p>
                        <a className="mb-0 font-size-4 font-weight-bold">support@codehive.net</a>
                      </div>
                    </div>
                    {/* media start */}
                    {/* widget social icon start */}
                    <div className="social-icons">
                      <ul className="pl-0 list-unstyled d-flex align-items-end ">
                        <li className="d-flex flex-column justify-content-center px-3 mr-3 font-size-4 heading-default-color">Follow us on:</li>
                        <li className="d-flex flex-column justify-content-center px-3 mr-3"><a href="#" className="hover-color-primary heading-default-color"><i className="fab fa-facebook-f font-size-3 pt-2" /></a></li>
                        <li className="d-flex flex-column justify-content-center px-3 mr-3"><a href="#" className="hover-color-primary heading-default-color"><i className="fab fa-twitter font-size-3 pt-2" /></a></li>
                        <li className="d-flex flex-column justify-content-center px-3 mr-3"><a href="#" className="hover-color-primary heading-default-color"><i className="fab fa-linkedin-in font-size-3 pt-2" /></a></li>
                      </ul>
                    </div>
                    {/* widget social icon end */}
                  </div>
                  <div className="col-lg-8 col-md-6">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                        <div className="footer-widget widget2 mb-md-0 mb-13">
                          {/* footer widget title start */}
                          <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">Company</p>
                          {/* footer widget title end */}
                          {/* widget social menu start */}
                          <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">About us</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Contact us</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Careers</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Press</a></li>
                          </ul>
                          {/* widget social menu end */}
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                        <div className="footer-widget widget3 mb-sm-0 mb-13">
                          {/* footer widget title start */}
                          <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">Product</p>
                          {/* footer widget title end */}
                          {/* widget social menu start */}
                          <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Features </a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Pricing</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">News</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Help desk</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Support</a></li>
                          </ul>
                          {/* widget social menu end */}
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                        <div className="footer-widget widget4 mb-sm-0 mb-13">
                          {/* footer widget title start */}
                          <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">Services</p>
                          {/* footer widget title end */}
                          {/* widget social menu start */}
                          <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Digital Marketing</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">SEO for Business</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Avasta Dash</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">UI Design</a></li>
                          </ul>
                          {/* widget social menu end */}
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                        <div className="footer-widget widget4">
                          {/* footer widget title start */}
                          <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">Legal</p>
                          {/* footer widget title end */}
                          <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Privacy Policy</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Terms &amp; Conditions</a></li>
                            <li className="mb-6"><a className="heading-default-color font-size-4 font-weight-normal">Return Policy</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          )
        }else {
          return (
            null
          )
        }
      })()
    }
    </div>
  );
};

export default Footer;
