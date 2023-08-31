import React from "react";
import { GoogleLogout } from "react-google-login";
const clientId =
  "1055122908965-vne6enrsenkpfic0vm6j5lqumdfcs2hk.apps.googleusercontent.com";
const GoogleLogoutButton = () => {
  const onSuccess = () => {
    alert("Logout made successfully");
  };
  return (
    <>
      <div className="container">
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        ></GoogleLogout>
      </div>
    </>
  );
};
export default GoogleLogoutButton;
