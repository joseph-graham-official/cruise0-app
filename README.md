# Cruise0 – Auth0 Modernization PoC

This repo contains a React Single-Page Application (SPA) used as a proof of concept for Travel0's Cruise0 modernization project using Auth0.

## What this demo shows

- React SPA integrated with Auth0 (Auth0 React SDK)
- Email/password signup & login
- Google social login
- Email verification required before login
- Customized Universal Login:
  - Cruise ship logo
  - Title: "Welcome Aboard."
  - Description: "Log in to book your travel with Cruise0."
  - Cruise ship background image
- Auth0 Actions:
  - Add `country` to user metadata from IP (`event.request.geoip.country`)
  - Block disposable/burner emails during signup
  - Conditional MFA for non-social (database) users only

## Running locally

1. Install dependencies:

   ```bash
   npm install

