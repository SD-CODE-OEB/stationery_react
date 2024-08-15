import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GLogin from "./GLogin";

function GoogleAuth() {
  const clientId =
    "395343569388-e9oh328p9unah8hs3g8r44s803nj8r6j.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GLogin />
      </GoogleOAuthProvider>
    </>
  );
}

export default GoogleAuth;
