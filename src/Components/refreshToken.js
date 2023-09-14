export const refreshTokenSetUp = (res) => {
  //Timing to renew access token
  let refreshingTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    const refreshingTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log("newAuthRes: ", newAuthRes);

    //saveUserToken(newAuthRes.access_token);    <--- save new token
    console.log("new Auth Token: ", newAuthRes.id_token);

    //Setup the other timer after the first one
    setTimeout(refreshToken, refreshingTiming);
  };

  //Setup first refresh timer
  setTimeout(refreshToken, refreshingTiming);
};
