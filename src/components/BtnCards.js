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

const BtnCards = () => {
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
        <div className="" >
             <div className="text-center  my-5" >
                {/* <img className="mb-3 app-logo" src={umglogo} alt="React logo" width="200" /> */}
                <h1 className="mb-4">Branding using custom query parameters with NUL</h1>

                <p className="lead">
                    This is done using page templates. This demos 4 different branding experiences within the same tenant. 
                </p>
                </div>
        <MDBRow center>
        <MDBCol >
          <MDBCard>
            <MDBCardImage src='https://mfc.fit/resetpwd.png' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Reset Pwd &amp; MFA Branding</MDBCardTitle>
              <MDBCardText>
                Example of having different branding than the login prompt. Click on forget password to see an example. Notice button color changes as well. 
              </MDBCardText>
              <MDBBtn id="qsLoginBtn"
                color="primary"
                className="btn-margin btn-pad"
                    onClick={() => loginWithRedirect({ authorizationParams: { 'ext-app': 'app_1' } })}>MFA & Reset Pwd Branding</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol><MDBCard>
            <MDBCardImage src='https://mfc.fit/difffont2.png' position='top' alt='...' style={{height: '248.91px'}}/>
            <MDBCardBody>
              <MDBCardTitle>Same Tenant, Different Font &amp; Color</MDBCardTitle>
              <MDBCardText>
                This demonstrates the ability to change the font and color scheme within the same tenant. 
              </MDBCardText>
              <MDBBtn id="qsLoginBtn"
                color="primary"
                    className="btn-margin btn-pad"
                    style={{margin: '10px'}}
                    onClick={() => loginWithRedirect({ authorizationParams: { 'ext-app': 'app_2' } })}>Diff Font &amp; Color</MDBBtn>
            </MDBCardBody>
                </MDBCard></MDBCol>
                <MDBCol >
          <MDBCard>
            <MDBCardImage src='https://mfc.fit/branding3.png' position='top' alt='...' style={{height: '248.91px'}}/>
            <MDBCardBody>
              <MDBCardTitle>Different layout</MDBCardTitle>
              <MDBCardText>
              Different font, colors and layout.
              </MDBCardText>
              <MDBBtn id="qsLoginBtn"
                color="primary"
                    className="btn-margin btn-pad"
                    style={{margin: '10px'}}
                    onClick={() => loginWithRedirect({ authorizationParams: { 'ext-app': 'auth0FB' } })}>Different Layout</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
          </MDBRow>
      </div>
        );
   

  
};



export default BtnCards;