import React, {useState, useEffect } from 'react';
import { EditorState } from 'draft-js';

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


export const AccountForm = ({id}) => {
  const [profile, setProfile] = useState(null)
  const [educationStates, setEducationStates] = useState(Array())
  const [educationIndex,  setEducationIndex] = useState(-1)
  const [experienceStates, setExperienceStates] = useState(Array())
  const [experienceIndex, setExperienceIndex] = useState(-1)

  const schema = yup.object().shape({
    first_name: yup.string().required('This is a required field.'),
    last_name: yup.string().required('This is a required field.'),
    about: yup.object().required('This is a required field.')
  });

  const methods = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      about: EditorState.createEmpty(),
      image: Array()
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    let education = educationStates.map(state => Object.assign({}, state));
    education.map((data)=>{
      data.institution_id = data.institution_id?.value||data.institution.id
      data.start_date = typeof data.start_date==="string" ? null : data.start_date.format('YYYY-MM-DD').toString()
      data.end_date = typeof data.end_date==="string" ? null : data.end_date.format('YYYY-MM-DD').toString()
    })
    let experiences =  experienceStates.map(state => Object.assign({}, state));
    experiences.forEach((data)=>{
      data.company_id = data.company_id?.value||data.company.id
      data.start_date = typeof data.start_date==="string" ? null : data.start_date.format('YYYY-MM-DD').toString()
      data.end_date = typeof data.end_date==="string" ? null : data.end_date.format('YYYY-MM-DD').toString()
    })
    let account = Object.assign({}, values)
    account["about"] = editorStateToText(account["about"])
    console.log(account.image)
    if(typeof account.image!=="string"){
      account["image"] = account["image"][0]
      console.log("here",account.image)
    }else{
      delete account["image"]
    }
    http.getProfileId(id).then((id)=>{
      if (id){
        http.updateProfile(id, account, education, experiences)
      }else{
        http.createProfile(account, education, experiences)
      }
    })
  }

  useEffect(() => {
    if (!profile){
      http.getProfileId(id).then((id)=>{
        if(id){
          setProfile(id)
          http.getProfile(id).then(
            (profile)=>{
              if(profile){
                methods.setValue("first_name",profile.first_name)
                methods.setValue("last_name",profile.last_name)
                methods.setValue("location",profile.location)
                methods.setValue("email",profile.user.email)
                methods.setValue("image",profile.image)
                methods.setValue("phone",profile.phone)
                methods.setValue("github",profile.github)
                methods.setValue("linkedin",profile.linkedin)
                methods.setValue("website",profile.website)
                methods.setValue("about",textToEditorState(profile.about))
              }
            }
          )
          http.getProfileEducation(id).then((education)=>{
            setEducationStates(education)
          })
          http.getProfileExperiences(id).then((experiences)=>{
            setExperienceStates(experiences)
          })
        }
      })
    }
  },[]);

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
                <FormInput name="first_name" />
              </div>
              <div className="pb-10 col-6">
                <h4 className="font-size-6 font-weight-semibold mb-6">Last name</h4>
                <FormInput name="last_name" />
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
                  id = {profile}
                  deleteId = {http.deleteProfileEducation}
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
              <div className="pt-10 pb-10 col-12">
                <EditTable
                  states = {experienceStates}
                  setStates = {setExperienceStates}
                  index = {experienceIndex}
                  setIndex = {setExperienceIndex}
                  title = "title"
                  header = "Experience"
                  id = {profile}
                  deleteId = {http.deleteProfileExperiences}
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
                  className="btn btn-primary btn-lg w-10 text-uppercase"
                  onClick={methods.handleSubmit(onSubmit)}>
                  Save
                </button>
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
      </>
  );
};
