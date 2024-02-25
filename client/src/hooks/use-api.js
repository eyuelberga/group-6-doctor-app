import { useState, useEffect } from 'react';

const API_ROOT = 'https://fmda-api.vercel.app';

export function useApi({ path } = { path: '' }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch(`${API_ROOT}/${path}`)
      .then(res => res.text())
      .then(res => setResponse(res));
  }, []); // Causing Error

  return {
    response
  };
}
