export const UpdateForm = () => {
    return (
      <div className="mb-15 mb-lg-23">
        <div className="row">
          <div className="col-xxxl-9 px-lg-13 px-6">
            <h5 className="font-size-6 font-weight-semibold mb-11">Update User Profile</h5>
            <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
              <div className="upload-file mb-16 text-center">
                <div id="userActions" className="square-144 m-auto px-6 mb-7">
                  <label htmlFor="fileUpload" className="mb-0 font-size-4 text-smoke">Browse or
                    Drag and Drop</label>
                  <input type="file" id="fileUpload" className="sr-only" />
                </div>
              </div>
              <form action="/">
                <fieldset>
                  <div className="row mb-xl-1 mb-9">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="namedash" className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Company Name</label>
                        <input type="text" className="form-control h-px-48" id="namedash" placeholder="eg. Apple" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="select2" className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Corporate Type</label>
                        <select id="select2" className="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4">
                          <option>B2B</option>
                          <option>B3B</option>
                          <option>B4B</option>
                          <option>B5B</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-8">
                    <div className="col-lg-6 mb-xl-0 mb-7">
                      <div className="form-group position-relative">
                        <label htmlFor="select3" className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Employee Size </label>
                        <select id="select3" className="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4">
                          <option>10-50</option>
                          <option>50-70</option>
                          <option>70-80</option>
                          <option>80-90</option>
                          <option>90-100</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group position-relative">
                        <label htmlFor="address" className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Location or (Remote)</label>
                        <select name="address" id="address" className="form-control nice-select pl-6 h-px-48 arrow-3 w-100 font-size-4">
                          <option>eg. New York, Namiv 201, USA</option>
                          <option>eg. New York, Namiv 202, USA</option>
                          <option>eg. New York, Namiv 203, USA</option>
                          <option>eg. New York, Namiv 204, USA</option>
                          <option>eg. New York, Namiv 205, USA</option>
                        </select>
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="aboutTextarea" className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">About Comapny</label>
                        <textarea name="textarea" id="aboutTextarea" cols={30} rows={7} className="border border-mercury text-gray w-100 pt-4 pl-6" placeholder="Describe about the company what make it unique" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-11">
                        <label htmlFor="formGroupExampleInput" className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Company Website Link</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="https://www.example.com" />
                      </div>
                      <input type="button" defaultValue="Update Profile" className="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase" />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default UpdateForm;
