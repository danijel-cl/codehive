import React, {useState} from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import ImageUploader from "react-images-upload";

export const FormImageUploader = ({name}) => {

  const { errors, control } = useFormContext();

  const imageUploaded = (picture) =>{
    console.log(picture)
    if (picture.length===0){
      return "Upload Image"
    }else{
      return "Image Uploaded"
    }
  }
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Please input file"}}
        render={({ onChange, value }) => (
          <ImageUploader
            withIcon={true}
            withPreview={true}
            label = {imageUploaded(value)}
            singleImage={true}
            onChange={onChange}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        )}
      />
      {errors[name] && <p className="pt-2">{errors[name].message}</p>}
    </>
  );
};

export default FormImageUploader;
