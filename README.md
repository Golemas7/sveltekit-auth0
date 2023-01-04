# Introduction

This package is designed to provide you with auth0 authentication for your svelte-kit app

[Github repository](https://github.com/Golemas7/sveltekit-auth0)

# Setting up this package

1. Create an Application in [Auth0 website](https://auth0.com/)

2. Under the settings tab of you application, find the Basic Information section. Then find the `Domain` and `Client ID` strings. You will need these later.

3. Under the settings tab of you application, find the Application URIs section. 
   Then find the `Allowed Logout URLs`, `Allowed Web Origins` and `Allowed Origins (CORS)` inputs. 
   Fill these inputs with the url that your app is running locally ( e.x. `http://localhost:3000` ).
   There is an additional input `Allowed Callback URLs`, fill this when needed.

4. Create an .env file for your project and declare these variables:

* `VITE_PUBLIC_AUTH0_DOMAIN` - Fill with the `Domain` data from step 1
* `VITE_PUBLIC_AUTH0_CLIENT_ID` - Fill with the `Domain` data from step 1
* `VITE_PUBLIC_AUTH0_REDIRECT_URI` - Fill if your app has a `redirect URI` ( optional )

## Initializing the Auth0

In your root layout file use the onMount hook and call initializeAuth0

## Using the initialized Auth0

You should now be able to use the main methods for interacting with Auth0:

* `getUser` - will return the User object from Auth0
* `getIsAuthenticated` - will return if the user is authenticated or not
* `getPopupOpen` - will return if the login popup is open or not
* `loginWithPopup` - will attempt to log the user in by providing a popup with a login window from Auth0
* `logout` - will log the user out


## Reporting issues, asking for features

If you find any issues, please open up an issue on the [repository](https://github.com/Golemas7/sveltekit-auth0).
You can also post anny feature suggestions or improvements there.

## Happy coding!