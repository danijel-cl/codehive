import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';

import RichEditor from './RichEditor';
import ReactSelect from './ReactSelect';
import ImageUploader from "react-images-upload";

const CompanyForm = (props) => {
  const [picture, setPicture] = useState([]);
  const imageUploaded = () =>{
    console.log(picture)
    if (picture.length===0){
      return "Upload Image"
    }else{
      return "Image Uploaded"
    }
  }

  const onDrop = (picture) => {
    setPicture(picture);
  };
  return (
    <div className="bg-white rounded-4 border border-mercury shadow-9">
      <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
        <h3 className="font-size-6 mb-0">Create Company</h3>
      </div>
      <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
        <div className="row pl-10 pr-10">
          <div className="pb-10 col-12">
            <div className="col-12 text-center">
              <h4 className="font-size-6 font-weight-semibold mb-6">Company Image</h4>
            </div>
            <div className="offset-3 col-6 pl-0">
              <ImageUploader
                {...props}
                withIcon={true}
                withPreview={true}
                label = {imageUploaded()}
                singleImage={true}
                onChange={onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Name</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="Facebook..."/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Industry</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="Financial Industry..."/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Size</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="50-100"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Founded</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="2010"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Headquaters</h4>
            <div className="col-10 pl-0">
              <ReactSelect />
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Facebook</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="www.facebook.com"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Linkedin</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="www.linkedin.com"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Twitter</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="www.twitter.com"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Website</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="www.company.com"/>
            </div>
          </div>
          <div className="pb-10 col-12">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Description</h4>
            <div className="col-12 pl-0">
              <RichEditor />
            </div>
          </div>
          <div className="col-12 my-15">
            <a className="btn btn-primary btn-xl w-10 text-uppercase"><span className="mr-5 d-inline-block">+</span>Create company</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyForm;
