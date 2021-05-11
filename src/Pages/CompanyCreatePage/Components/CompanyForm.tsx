import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';

import RichEditor from './RichEditor';
import ReactSelect from './ReactSelect';
import ImageUploader from "react-images-upload";
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/dist/yup';
import * as yup from 'yup';
import { TextField } from '../../../Components/TextField';
import FormEditor from '../../../Components/Form/FormEditor';

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

  const onSubmit = (values: any) => {
    console.log(values)
  }

  const schema = yup.object().shape({
    name: yup.string().required('This is a required field.'),
    size: yup.string().required('This is a required field.'),
    address: yup.string().required('This is a required field.'),
    founded: yup.string().required('This is a required field.'),
  });

  const methods = useForm({
    // defaultValues: {
    //   name: props.postState !== null ? props.postState.position : '',
    //   size: props.postState !== null ? props.postState.experience : '',
    //   address: props.postState !== null ? props.postState.description : ''
    // },
    resolver: yupResolver(schema),
  });
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
        <FormProvider {...methods}>
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
              <TextField type="text" name="name" placeholder="Company name"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Industry</h4>
            <div className="col-10 pl-0">
              <TextField type="text" name="industry" placeholder="Financial Industry"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Size</h4>
            <div className="col-10 pl-0">
              <TextField type="text" name="size" placeholder="50-100"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Founded</h4>
            <div className="col-10 pl-0">
              <TextField type="text" name="founded" placeholder="2010"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Headquaters</h4>
            <div className="col-10 pl-0">
              <TextField type="text" name="address" placeholder="Address"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Facebook</h4>
            <div className="col-10 pl-0">
              <TextField type="text" name="facebook" placeholder="www.facebook.com"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Linkedin</h4>
            <div className="col-10 pl-0">
              <TextField type="text" name="linkedin" placeholder="www.linkedin.com"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Twitter</h4>
            <div className="col-10 pl-0">
              <TextField type="text" name="twitter" placeholder="www.twitter.com"/>
            </div>
          </div>
          <div className="pb-10 col-6">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Website</h4>
            <div className="col-10 pl-0">
              <TextField type="text" name="website" placeholder="www.company.com"/>
            </div>
          </div>
          <div className="pb-10 col-12">
            <h4 className="font-size-6 font-weight-semibold mb-6">Company Description</h4>
            <div className="col-12 pl-0">
              <FormEditor name="description"/>
            </div>
          </div>
          <div className="col-12 my-15">
            <button className="btn btn-primary btn-xl w-10 text-uppercase" onClick={methods.handleSubmit(onSubmit)}><span className="mr-5 d-inline-block">+</span>Create company</button>
          </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default CompanyForm;
