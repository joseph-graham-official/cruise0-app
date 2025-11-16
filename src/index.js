import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// Guard to catch misconfiguration (small addition on top of Auth0 docs)
if (!domain || !clientId) {
  throw new Error(
    "Missing Auth0 configuration. Make sure REACT_APP_AUTH0_DOMAIN and " +
      "REACT_APP_AUTH0_CLIENT_ID are set in your .env.local file."
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        // This matches the React Quickstart pattern
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
