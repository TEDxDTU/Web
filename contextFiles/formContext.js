import React, { createContext, useState } from 'react';
export const FormContext = createContext();

export function FormProvider(props) {

  const [form, setForm] = useState([]);

  return (
    <FormContext.Provider value={[form, setForm]}>
      {props?.children}
    </FormContext.Provider>
  );
};