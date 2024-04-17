import "./App.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login";

function App() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <button
            className="button-33"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;
