import React from 'react';
import './styles.scss';

const FormInput = ({ handleChange, label, type, ...otherProps }) => {
  return (
    <div className="formRow">
      {label && <label>{label}</label>}
      <input
        className="formInput"
        onChange={handleChange}
        {...otherProps}
        type={type}
      />
    </div>
  );
};

export default FormInput;
