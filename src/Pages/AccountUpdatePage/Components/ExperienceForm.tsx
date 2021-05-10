import React, {useState, useCallback} from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {http} from "../../../api/http"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../../../Components/Form/FormInput';
import FormSelect from '../../../Components/Form/FormSelect';
import FormDatePicker from '../../../Components/Form/FormDatePicker';

const ExperienceForm = (props) => {
  const {states, setStates, index, setIndex} = props

  const schema = yup.object().shape({
    title: yup.string().required('This is a required field.'),
    company_id: yup.object().required('This is a required field.'),
  });

  const methods = useForm({
    defaultValues: {
      title: states[index] ? states[index].title : '',
      company_id: states[index] ? states[index].company : null,
      start_date: states[index] ? states[index].start : null,
      end_date: states[index] ? states[index].end : null
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values)
    if(states[index]){
      states[index] = values
      setStates(states)
    }else{
      setStates([...states, values])
    }
    setIndex(-1)
  }

  return (
    <FormProvider {...methods}>
      <div className="pb-10 col-6">
        <h4 className="font-size-6 font-weight-semibold mb-6">Title</h4>
        <FormInput name="title" />
      </div>
      <div className="pb-10 col-6">
        <h4 className="font-size-6 font-weight-semibold mb-6">Company</h4>
        <FormSelect name="company_id" query={http.getAllCompanies}/>
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

export default ExperienceForm;
