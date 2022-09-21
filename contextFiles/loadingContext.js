import React, { createContext, useState } from 'react';
export const LoadingContext = createContext();

export function LoadingProvider(props) {

  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {props?.children}
    </LoadingContext.Provider>
  );
};