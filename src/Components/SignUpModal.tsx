export const SignUpModal = (props) => {
  const {signupClicked, setSignupClicked} = props
  return (
    <div className={`modal fade form-modal ${signupClicked ? "show" : ""}`} id="signup" tabIndex={-1} aria-hidden="true">
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
                <form action="/">
                <div className="form-group">
                    <label htmlFor="firstName" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">First Name</label>
                    <input type="firstName" className="form-control" placeholder="First Name" id="firstName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">Last Name</label>
                    <input type="lastName" className="form-control" placeholder="Last Name" id="lastName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email2" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">E-mail</label>
                    <input type="email" className="form-control" placeholder="example@gmail.com" id="email2" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password2" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">Password</label>
                    <div className="position-relative">
                      <input type="password" className="form-control" id="password2" placeholder="Enter password" />
                      <a href="#" className="show-password pos-abs-cr fas mr-6 text-black-2" data-show-pass="password2"></a>
                    </div>
                  </div>
                  <div className="form-group d-flex flex-wrap justify-content-between mb-1">
                    <label htmlFor="terms-check2" className="gr-check-input d-flex  mr-3">
                      <input className="d-none" type="checkbox" id="terms-check2" />
                      <span className="checkbox mr-5"></span>
                      <span className="font-size-3 mb-0 line-height-reset d-block">Agree to the <a className="text-primary">Terms & Conditions</a></span>
                    </label>
                    <a className="font-size-3 text-dodger line-height-reset">Forget Password?</a>
                  </div>
                  <div className="form-group mb-8">
                    <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">Sign Up </button>
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