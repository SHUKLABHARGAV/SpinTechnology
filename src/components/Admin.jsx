import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Admin = () => {
  const strapiUrl = process.env.REACT_APP_STRAPI_URL;
  const history = useHistory();

  useEffect(() => {
    window.location.href = "http://localhost:1337/admin/";
  }, [strapiUrl]);

  return null;
};

export default AdminRedirect;

