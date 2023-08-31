import { UserAgentApplication } from "msal";

const msalConfig = {
  auth: {
    clientId: "bec88cb2-9243-4796-88dd-4bd4d0e24038",
    redirectUri: "http://localhost:3000/ToastedMedia",
  },
};

const msalApp = new UserAgentApplication(msalConfig);

export const signIn = async () => {
  try {
    await msalApp.loginPopup();
    return msalApp.getAccount();
  } catch (error) {
    console.error("Error signing in:", error);
    return null;
  }
};

export const signOut = () => {
  msalApp.logout();
};

const getAccessToken = async () => {
  const response = await msalApp.acquireTokenSilent({
    scopes: ["openid", "profile", "User.Read"], // Add required scopes
  });
  return response.accessToken;
};

export default getAccessToken;
