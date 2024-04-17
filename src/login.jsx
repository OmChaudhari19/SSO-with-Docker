import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./App.css";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="App">
      <button className="button-33" onClick={() => loginWithRedirect()}>
        Log In
      </button>
      ;
    </div>
  );
};

export default LoginButton;
