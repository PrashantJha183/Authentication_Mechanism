import React from "react";
import { signIn } from "./Auth";

const MicrosoftLoginButton = ({ onLogin }) => {
  const handleLogin = async () => {
    const account = await signIn();
    if (account) {
      onLogin(account);
    }
  };

  return (
    <button
      onClick={handleLogin}
      style={{ padding: "8px", fontSize: "14px", color: "grey" }}
    >
      {/* <i className="bi bi-microsoft">Login with Microsoft</i> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-microsoft"
        viewBox="0 0 16 16"
      >
        <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z" />
      </svg>
      &nbsp; &nbsp;Continue with Microsoft
    </button>
  );
};

export default MicrosoftLoginButton;
