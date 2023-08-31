import React from "react";
import { signIn } from "./Auth";

const MicrosoftLoginButton = ({ onLogin }) => {
  const handleLogin = async () => {
    const account = await signIn();
    if (account) {
      onLogin(account);
    }
  };

  return <button onClick={handleLogin}>Login with Microsoft</button>;
};

export default MicrosoftLoginButton;
