import { DatePicker, Space } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import 'antd/dist/antd.css';

const FormDatePicker = ({name}) => {

  const { errors, control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange, value }) => (
        <>
          <DatePicker
            value={value}
            onChange={onChange}
            className="input-group"
            size="large"
          />
          {errors[name] && <p className="pt-2">{errors[name].message}</p>}
        </>
      )}
    />
  );
}

export default FormDatePicker;
