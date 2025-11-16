# Cruise0 – React + Auth0 Demo Application - Written by Joseph Graham

Cruise0 is a simple React Single Page Application (SPA) integrated with Auth0 and deployed on AWS S3.  
This project demonstrates user authentication (email/password + Google), MFA, basic branding, and redirect handling.

---

## Live Demo

You can access the hosted version here:
https://cruise0-app-demo-jgraham.s3.us-east-2.amazonaws.com/index.html

### How to Test the Demo
1. Click **Log In / Sign Up**
2. Use the test credentials provided in the submission email
3. Complete MFA (Google Authenticator)
4. You’ll be redirected back into the app and shown a welcome message
5. Click **Log Out** to return to the landing page

_No local setup is required to use the hosted demo._

---

## Features

- React SPA (Create React App)
- Customized Auth0 Universal Login (email/password + Google)
  - Cruise ship logo
  - Title: "Welcome Aboard."
  - Description: "Log in to book your travel with Cruise0."
  - Cruise ship background image
- MFA support
- Email verification handling
- Basic Cruise0 branding
- Hosted as an S3 static website
- Redirect logic supporting both local dev and S3 hosting
- Auth0 Actions:
  - Add `country` to user metadata from IP (`event.request.geoip.country`)
  - Block disposable/burner emails during signup
  - Conditional MFA for non-social (database) users only

---

## Running the App Locally (Not Required)

If you want to run the code on your own machine:

### 1. Clone the repository
```bash
git clone <repo-url>
cd cruise0-app

### 2. Install dependencies
npm install

### 3. Create a .env.local file - Add your own Auth0 tenant values:
REACT_APP_AUTH0_DOMAIN=<your-auth0-domain>
REACT_APP_AUTH0_CLIENT_ID=<your-auth0-client-id>

### 4. Auth0 settings for localhost - In your Auth0 Application settings, add:

Allowed Callback URLs
http://localhost:3000

Allowed Logout URLs
http://localhost:3000

Allowed Web Origins
http://localhost:3000

### 5. Start the development server
npm start

Open:
http://localhost:3000

Important Files
src/index.js – Auth0Provider setup + redirect logic
src/App.js – UI + login/logout + error handling
src/assets/ – Cruise0 images (logo + hero background)

Summary

The app is fully deployed and testable using the live demo link.
Running locally is optional and requires your own Auth0 tenant values.
The full source code is included here for review.
If you run into any issues accessing the demo or running it locally, feel free to reach out.