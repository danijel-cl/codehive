import { useFormContext } from 'react-hook-form';

const FormInput = ({name}) => {

  const { errors, register } = useFormContext();

  const placeholder = name.charAt(0).toUpperCase() + name.slice(1)+"...";
  return (
    <>
      <input
        className="form-control"
        placeholder={placeholder}
        name={name}
        ref={register}
      />
      {errors[name] && <p className="pt-2">{errors[name].message}</p>}
    </>
  );
}

export default FormInput;
