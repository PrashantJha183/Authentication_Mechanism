// import React from "react";
// import { GoogleLogin } from "react-google-login";
// import RefreshToken from "./RefreshToken";

// const GoogleLoginButton = ({ onLogin }) => {
//   const clientId =
//     "1055122908965-vne6enrsenkpfic0vm6j5lqumdfcs2hk.apps.googleusercontent.com";
//   const onSuccess = (res) => {
//     console.log("Login Successful: ", res.profileobj);

//     //Intializing the setup
//     RefreshToken(res);
//   };
//   const OnFailure = (res) => {
//     console.log("Login failed", res);
//   };

//   return (
//     <GoogleLogin
//       clientId={clientId}
//       // render={(renderProps) => (
//       //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
//       //     Login
//       //   </button>
//       // )}
//       // buttonText="Signup with google"
//       onSuccess={onSuccess}
//       onError={OnFailure}
//       cookiePolicy={"single_host_origin"}
//       isSignedIn={true}
//       style={{ fontSize: "50px" }}
//     />
//   );
// };
// export default GoogleLoginButton;

import React from "react";
import GoogleLogin from "react-google-login";
import RefreshToken from "./RefreshToken";

const GoogleLoginButton = ({ onLogin }) => {
  const clientId =
    "1055122908965-vne6enrsenkpfic0vm6j5lqumdfcs2hk.apps.googleusercontent.com";

  const handleSuccess = (res) => {
    onLogin(res); // Pass the response to the parent component
    RefreshToken(res);
  };

  const handleFailure = (error) => {
    console.error("Login failed:", error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Continue with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
