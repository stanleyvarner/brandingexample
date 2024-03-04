import React from "react";


import { Link } from 'react-router-dom';

import {
  
  Button,

} from "reactstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer
} from 'mdb-react-ui-kit';

import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
// const toggle = () => setIsOpen(!isOpen);
const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });

  return (
  <div className="text-center hero my-5">
      {/* <img className="mb-3 app-logo" src={umglogo} alt="React logo" width="200" /> */}
      <h1 className="mb-4">Branding using custom query parameters with NUL</h1>

      <p className="lead">
        This is done using page templates.
      </p>

       {/* <Button
      id="qsLoginBtn"
      color="primary"
      className="btn-margin btn-pad"
        onClick={() => loginWithRedirect({ authorizationParams: { 'ext-app': 'app_1' } })}
    >  
      MFA & Reset Pwd Branding
      </Button>
      <br></br>
       <Button
      id="qsLoginBtn"
      color="primary"
        className="btn-margin btn-pad"
        style={{margin: '10px'}}
        onClick={() => loginWithRedirect({ authorizationParams: { 'ext-app': 'app_2' } })}
    >
       Diff Font &amp; Color
      </Button>
      
     <Button
      id="qsLoginBtn"
      color="primary"
        className="btn-margin btn-pad"
        style={{margin: '10px'}}
        onClick={() => loginWithRedirect({ authorizationParams: { 'ext-app': 'auth0FB' } })}
    >
       Stanley's Favorite Clone
      </Button>
       <div className="" style={{ marginBottom: "100px" }}>
        
    
       
    </div> */}
      {/* <LoginModal /> */}
      <br></br>
      
     
      
    </div>  
    
  );
   

  
};



export default Hero;
