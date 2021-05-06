import React, {useState} from 'react';

import TagInput from './TagInput';
import ImageUploader from "react-images-upload";

const UserForm = (props) => {
  const [picture, setPicture] = useState([]);
  const [skills, setSkills] = useState([]);
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
              <h4 className="font-size-6 font-weight-semibold mb-6">Profile picture</h4>
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
            <h4 className="font-size-6 font-weight-semibold mb-6">First Name</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="Adam..."/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Last Name</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="Sandler..."/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Location</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="Zagreb.."/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">E-mail</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="Harvard.."/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Phone</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="2015.."/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">GitHub</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="2021.."/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Linkedin</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="2010"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Website</h4>
            <div className="col-10 pl-0">
              <input className="form-control" placeholder="2010"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Soft skills</h4>
            <div className="col-10 pl-0">
              <TagInput />
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Skills</h4>
            <div className="col-10 pl-0">
              <TagInput />
            </div>
          </div>
          <div className="row pb-10 col-12">
            <div className="col-2">
              <h4 className="font-size-6 font-weight-semibold mb-6">Education</h4>
            </div>
            <div className="col-2">
              <button className="btn btn-primary text-uppercase" type="submit"><span className="mr-5 d-inline-block">+</span>Add</button>
            </div>
          </div>
          <div className="col-12 my-15">
            <a className="btn btn-primary btn-xl w-10 text-uppercase"><span className="mr-5 d-inline-block">+</span>Update user</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
