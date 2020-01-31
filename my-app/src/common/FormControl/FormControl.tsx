/* eslint-disable one-var */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import style from './FormControl.module.css';

interface IProps {
  meta: {touched: boolean, error: undefined | string};
  input: {name: string};
}

const FormControl = (Element) => ({ input, meta, ...props }:IProps) => {
  const showError = meta.touched && meta.error;
  return (
    <div className={`${style.formControl} ${(showError && style.error)}`}>
      <Element {...input} {...props} />
      {showError && (
      <span>
        { meta.error }
      </span>
      )}
    </div>
  );
};

export const LoginInputControl = FormControl('input'),
  DateInputControl = FormControl('input');
