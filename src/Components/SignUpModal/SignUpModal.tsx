import { RegistrationForm } from "./Components/RegistrationForm"
import { styled } from '../../utils/css';

export const SignUpModal = (props) => {
  const {signupClicked, setSignupClicked} = props
  const modalContainer = styled.cssStyle`
  display: block ;
  overflow: initial;
  height: 100vh;
  width:100vw;
  background-color:rgba(0,0,0,0.3);
`;
  return (
    <div className={`modal fade form-modal pt-15 ${signupClicked ? "show" : ""}`} style={modalContainer} id="signup" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog max-width-px-840 position-relative">
        <button type="button" className="circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10" style={{zIndex: 1}} onClick={() => setSignupClicked(!signupClicked)}><i className="fas fa-times"></i></button>
        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
          <div className="row no-gutters">
            <div className="col-lg-5 col-md-6">
              <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                <div className="pb-9">
                  <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                    Create a free account today
                  </h3>
                  <p className="mb-0 font-size-4 text-white">Create your account to continue
                    and explore new jobs.</p>
                </div>
                <div className="border-top border-default-color-2 mt-auto">
                  <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">
                        295
                      </h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">New jobs
                        posted today</p>
                    </div>
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">
                        14
                      </h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">New companies
                        registered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                <div className="row">
                  <div className="col-4 col-xs-12">
                    <button className="font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"><i className="fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4"></i> <span className="d-none d-xs-block">Import from LinkedIn</span></button>
                  </div>
                  <div className="col-4 col-xs-12">
                    <button className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"><i className="fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4"></i> <span className="d-none d-xs-block">Import from Google</span></button>
                  </div>
                  <div className="col-4 col-xs-12">
                    <button className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"><i className="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4"></i> <span className="d-none d-xs-block">Import from Facebook</span></button>
                  </div>
                </div>
                <div className="or-devider">
                  <span className="font-size-3 line-height-reset">Or</span>
                </div>
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
