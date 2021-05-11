import React, {useState, useCallback} from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {http} from "../../../api/http"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../../../Components/Form/FormInput';
import FormSelect from '../../../Components/Form/FormSelect';
import FormDatePicker from '../../../Components/Form/FormDatePicker';

const EducationForm = (props) => {
  const {educationStates, setEducationStates, educationIndex, setEducationIndex} = props

  const schema = yup.object().shape({
    title: yup.string().required('This is a required field.'),
    institution_id: yup.object().required('This is a required field.'),
  });

  const methods = useForm({
    defaultValues: {
      title: educationStates[educationIndex] ? educationStates[educationIndex].title : '',
      institution_id: educationStates[educationIndex] ? educationStates[educationIndex].institution : '',
      start_date: educationStates[educationIndex] ? educationStates[educationIndex].start : null,
      end_date: educationStates[educationIndex] ? educationStates[educationIndex].end : null
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    if(educationStates[educationIndex]){
      educationStates[educationIndex] = values
      setEducationStates(educationStates)
    }else{
      setEducationStates([...educationStates, values])
    }
    setEducationIndex(-1)
  }

  return (
    <FormProvider {...methods}>
      <div className="pb-10 col-6">
        <h4 className="font-size-6 font-weight-semibold mb-6">Title</h4>
        <FormInput name="title" />
      </div>
      <div className="pb-10 col-6">
        <h4 className="font-size-6 font-weight-semibold mb-6">Institution</h4>
        <FormSelect name="institution_id" query={http.getAllEducation}/>
      </div>
      <div className="pb-10 col-6">
        <h4 className="font-size-6 font-weight-semibold mb-6">Start date</h4>
        <FormDatePicker name="start_date" />
      </div>
      <div className="pb-10 col-6">
        <h4 className="font-size-6 font-weight-semibold mb-6">End date</h4>
        <FormDatePicker name="end_date" />
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary w-10 text-uppercase"
          onClick={methods.handleSubmit(onSubmit)}>
          Save
        </button>
      </div>
    </FormProvider>
  );
}

export default EducationForm;
