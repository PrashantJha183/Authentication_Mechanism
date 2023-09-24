import React from "react";
// import { GoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetUp } from "../refreshToken";
const clientId =
  "1055122908965-vne6enrsenkpfic0vm6j5lqumdfcs2hk.apps.googleusercontent.com";

const googleLogin = () => {
  const onSuccess = (res) => {
    console.log("Login Successful: ", res.profileobj);

    //Intializing the setup
    refreshTokenSetUp(res);
  };
  const OnFailure = (res) => {
    console.log("Login failed", res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Login
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
