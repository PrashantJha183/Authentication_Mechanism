import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./Components/GoogleLoginButton";

const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Toasted Media</h1>
        <GoogleOAuthProvider clientId="1055122908965-vne6enrsenkpfic0vm6j5lqumdfcs2hk.apps.googleusercontent.com">
          <GoogleLoginButton />
        </GoogleOAuthProvider>
      </div>
    </>
  );
};

export default App;
