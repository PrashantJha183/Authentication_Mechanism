import React from "react";
import { signOut } from "./Auth";

const MicrosoftLogoutButton = () => {
  const handleLogout = () => {
    signOut();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default MicrosoftLogoutButton;
