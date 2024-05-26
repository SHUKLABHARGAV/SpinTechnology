import React, { useEffect } from 'react';
 
 const Login = () => {
 

  useEffect(() => {
    window.location.href = 'http://localhost:1337/admin/auth/login' ,'_blank' ;
  }, []);

  
   return (
   <> </>
   )
 }
 
 export default Login
 