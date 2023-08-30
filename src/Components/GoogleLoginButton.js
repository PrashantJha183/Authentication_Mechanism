import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { refreshTokenSetUp } from "./refreshToken";

const googleLogin = () => {
  const onSuccess = (response) => {
    console.log("Login Successful: ", response.profileobj);

    //Intializing the setup
    refreshTokenSetUp(response);
  };
  const OnFailure = (error) => {
    console.log("Login failed", error);
  };

  return (
    <GoogleLogin
      clientId="1055122908965-vne6enrsenkpfic0vm6j5lqumdfcs2hk.apps.googleusercontent.com"
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          GB
        </button>
      )}
      onSuccess={onSuccess}
      onError={OnFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default googleLogin;
