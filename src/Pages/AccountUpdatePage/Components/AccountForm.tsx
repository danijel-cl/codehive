import React, {useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import EditTable from './EditTable';
import EducationForm from './EducationForm'
import ExperienceForm from './ExperienceForm'

import FormImageUploader from '../../../Components/Form/FormImageUploader';
import FormUploader from '../../../Components/Form/FormUploader';
import { FormEditor, textToEditorState, editorStateToText } from '../../../Components/Form/FormEditor';
import FormInput from '../../../Components/Form/FormInput';
import FormTagInput from '../../../Components/Form/FormTagInput';

import {http} from "../../../api/http"



const backButtonContentStyle = "d-flex align-items-center ml-4"
const backButtonIconStyle = "icon icon-small-left bg-white circle-40 mr-5 font-size-7 \                             text-black font-weight-bold shadow-8"
const backButtonTextStyle = "text-uppercase font-size-3 font-weight-bold text-gray"
const containerContentStyle = "bg-white rounded-4 border border-mercury shadow-9 pl-10 pr-10"
const upperContainerContentStyle = "pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom \
                                  border-width-1 border-default-color light-mode-texts"
const lowerContainerContentStyle = "pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 light-mode-texts"

export const AccountForm = (props) => {

  const [educationStates, setEducationStates] = useState(Array())
  const [educationIndex,  setEducationIndex] = useState(-1)
  const [experienceStates, setExperienceStates] = useState(Array())
  const [experienceIndex, setExperienceIndex] = useState(-1)

  const methods = useForm({
    defaultValues: {
      image: Array(),
      first: '',
      last: '',
      about: ''
    },
  });

  const onSubmit = (values) => {
    let education = Object.assign({}, educationStates)
    let experiences = Object.assign({}, experienceStates)
    let account = Object.assign({}, values)
    account["about"] = editorStateToText(account["about"])
    account["education"] = education
    account["experiences"] = experiences
    //http.updateProfile(id, account)
  }

  return (
    <>
      <div className={ containerContentStyle }>
        <div className={ upperContainerContentStyle }>
          <h3 className="font-size-6 mb-0">Create Task</h3>
        </div>
        <div className={ lowerContainerContentStyle }>
          <div className="row pl-5 pr-5">
            <FormProvider {...methods}>
              <div className="pb-10 col-6 offset-3">
                <h4 className="font-size-6 font-weight-semibold mb-6">Profile image</h4>
                <FormImageUploader
                  name="image"
                />
              </div>
              <div className="pb-10 col-6">
                <h4 className="font-size-6 font-weight-semibold mb-6">First name</h4>
                <FormInput name="first" />
              </div>
              <div className="pb-10 col-6">
                <h4 className="font-size-6 font-weight-semibold mb-6">Last name</h4>
                <FormInput name="last" />
              </div>
              <div className="pb-10 col-6">
                <h4 className="font-size-6 font-weight-semibold mb-6">Location</h4>
                <FormInput name="location" />
              </div>
              <div className="pb-10 col-6">
                <h4 className="font-size-6 font-weight-semibold mb-6">E-mail</h4>
                <FormInput name="email" />
              </div>
              <div className="pb-10 col-12">
                <h4 className="font-size-6 font-weight-semibold mb-6">Description</h4>
                <FormEditor name="about"/>
              </div>
              <div className="pb-10 col-6">
                <h4 className="font-size-6 font-weight-semibold mb-6">Phone</h4>
                <FormInput name="phone" />
              </div>
              <div className="pb-10 col-6">
                <h4 className="font-size-6 font-weight-semibold mb-6">Github</h4>
                <FormInput name="github" />
              </div>
              <div className="pb-10 col-6">
                <h4 className="font-size-6 font-weight-semibold mb-6">Linkedin</h4>
                <FormInput name="linkedin" />
              </div>
              <div className="pb-10 col-6">
                <h4 className="font-size-6 font-weight-semibold mb-6">Website</h4>
                <FormInput name="website" />
              </div>
              <div className="pb-10 col-12">
                <EditTable
                  states = {educationStates}
                  setStates = {setEducationStates}
                  index = {educationIndex}
                  setIndex = {setEducationIndex}
                  title = "title"
                  header="Education"
                />
              </div>
              {educationIndex!==-1 &&
                <EducationForm
                  educationStates = {educationStates}
                  setEducationStates = {setEducationStates}
                  educationIndex = {educationIndex}
                  setEducationIndex = {setEducationIndex}
                />
              }
              <div className="pb-10 col-12">
                <EditTable
                  states = {experienceStates}
                  setStates = {setExperienceStates}
                  index = {experienceIndex}
                  setIndex = {setExperienceIndex}
                  title = "title"
                  header = "Experience"
                />
              </div>
              {experienceIndex!==-1 &&
                <ExperienceForm
                  states = {experienceStates}
                  setStates = {setExperienceStates}
                  index = {experienceIndex}
                  setIndex = {setExperienceIndex}
                />
              }
              <div className="col-12 my-15">
                <button
                  className="btn btn-primary btn-xl w-10 text-uppercase"
                  onClick={methods.handleSubmit(onSubmit)}>
                  <span className="mr-5 d-inline-block">+</span>Create Task
                </button>
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
      </>
  );
};
