import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import logo from "./assets/cruise0-logo.png";
import hero from "./assets/hero-cruise.jpg";

function App() {
  const {
    isAuthenticated,
    isLoading,
    user,
    loginWithRedirect,
    logout,
    error,
  } = useAuth0();

  const [authError, setAuthError] = useState(null);

  // Helper to map raw error codes into friendly messages
  const mapErrorToMessage = (err, desc) => {
    if (desc && desc !== err) {
      return desc;
    }

    if (err === "access_denied") {
      // Friendly default for our "Require Verified Email" Action
      return "Please verify your email address via the link we emailed you before logging in.";
    }

    // Fallback to whatever we have
    return desc || err || "Authentication error";
  };

  // Parse error from URL (e.g., access_denied from Actions)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const err = params.get("error");
    const desc = params.get("error_description");

    if (err) {
      const message = mapErrorToMessage(err, desc);
      setAuthError(message);

      // Clean up the URL so the error doesn't persist on refresh
      params.delete("error");
      params.delete("error_description");

      const newUrl =
        window.location.origin +
        window.location.pathname +
        (params.toString() ? "?" + params.toString() : "");

      window.history.replaceState({}, "", newUrl);
    }
  }, []);

  // Surface SDK-level errors (like invalid_state) in the same banner
  useEffect(() => {
    if (error) {
      setAuthError(mapErrorToMessage(error.error || "", error.message));
    }
  }, [error]);

  // Auth0 docs pattern: loginWithRedirect is called from a click handler.
  // We add prompt: "login" so you always see Universal Login.
  const handleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: window.location.origin },
    });
  };

  if (isLoading) {
    return (
      <div className="app-root loading-container">
        <div className="loading-card">Loading…</div>
      </div>
    );
  }

  return (
    <div
      className="app-root"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Top-left logo only (no text) */}
      <header className="brand-header">
        <img src={logo} alt="Cruise0" className="logo" />
      </header>

      <main className="card-container">
        {authError && <div className="error-banner">{authError}</div>}

        <div className="card">
          <h1>Welcome to Cruise0</h1>
          <p>Log in to book your travel with Cruise0.</p>

          {!isAuthenticated ? (
            <button
              type="button"
              className="primary-btn"
              onClick={handleLogin}
            >
              Log In / Sign Up
            </button>
          ) : (
            <>
              <p>
                Ahoy, {user?.name || user?.email}! You are successfully logged
                in.
              </p>

              <button
                type="button"
                className="secondary-btn"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
