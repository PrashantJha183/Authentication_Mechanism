import React, { useState } from "react";
import GoogleLoginButton from "./GoogleLoginButton";
const Profile = () => {
  const [userData, setUserData] = useState(null);
  const handleGoogleLogin = (res) => {
    setUserData(res.profileObj);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      {userData ? (
        <div>
          <img src={userData.imageUrl} alt="Profile" />
          <p>Welcome, {userData.name}!</p>
        </div>
      ) : (
        <GoogleLoginButton onLogin={handleGoogleLogin} />
      )}
    </div>
  );
};
export default Profile;
