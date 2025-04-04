import React from 'react'
import { Navigate } from 'react-router-dom';

export default function UnAuthProtectiveRoute({children}) {
    if (! localStorage.getItem("tkn")) {
      return children;
    }
    return  <> 
    
    <Navigate to={"/home"} />
    </>;
}
