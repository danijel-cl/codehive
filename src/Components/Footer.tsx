import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '../utils/css';

const buttonContainer = styled.cssStyle`
  border: none;
  background-color: transparent;
`;

const Footer = () => {
  const [render, setRender] = useState(true);
  let location = useLocation()
  let paths = ["tasks", "dashboard","account","posts"]
  useEffect(() => {
    if (paths.some(path => location.pathname.includes(path))) {
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
                    <img src="image/logo-main-white.png" alt="" className="footer-logo mb-14" />
                    <div className="media mb-11">
                      <img src="image/l1/png/message.png" className="align-self-center mr-3" alt="" />
                      <div className="media-body pl-5">
                        <p className="mb-0 font-size-4 text-white">Contact us at</p>
                        <button style={buttonContainer} className="mb-0 font-size-5 font-weight-bold text-white">support@codehive.net</button>
                      </div>
                    </div>
                    <div className="social-icons">
                      <ul className="pl-0 list-unstyled d-flex align-items-end ">
                        <li className="d-flex flex-column justify-content-center px-3 mr-3 font-size-4 heading-default-color">Follow us on:</li>
                        <li className="d-flex flex-column justify-content-center px-3 mr-3"><button style={buttonContainer} className="hover-color-primary heading-default-color"><i className="fab fa-facebook-f font-size-3 pt-2" /></button></li>
                        <li className="d-flex flex-column justify-content-center px-3 mr-3"><button style={buttonContainer} className="hover-color-primary heading-default-color"><i className="fab fa-twitter font-size-3 pt-2" /></button></li>
                        <li className="d-flex flex-column justify-content-center px-3 mr-3"><button style={buttonContainer} className="hover-color-primary heading-default-color"><i className="fab fa-linkedin-in font-size-3 pt-2" /></button></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                        <div className="footer-widget widget2 mb-md-0 mb-13">
                          <p className="widget-title font-size-5 text-white mb-md-8 mb-7"><strong>Company</strong></p>
                          <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">About us</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Contact us</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Careers</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Press</button></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                        <div className="footer-widget widget3 mb-sm-0 mb-13">
                          <p className="widget-title font-size-5 text-white mb-md-8 mb-7"><strong>Product</strong></p>
                          <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Features </button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Pricing</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">News</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Help desk</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Support</button></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                        <div className="footer-widget widget4 mb-sm-0 mb-13">
                          <p className="widget-title font-size-5 text-white mb-md-8 mb-7"><strong>Services</strong></p>
                          <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Digital Marketing</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">SEO for Business</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Avasta Dash</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">UI Design</button></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                        <div className="footer-widget widget4">
                          <p className="widget-title font-size-5 text-white mb-md-8 mb-7"><strong>Legal</strong></p>
                          <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Privacy Policy</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Terms &amp; Conditions</button></li>
                            <li className="mb-6"><button style={buttonContainer} className="heading-default-color font-size-4 font-weight-normal">Return Policy</button></li>
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
