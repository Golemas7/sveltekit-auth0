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

1. In your root layout file import the auth object that is the default export like this:
```import auth from 'sveltekit-auth0'```
2. Use the onMount hook and call ```auth.initializeAuth0()``` to initialize the `Auth0` client

## Using the initialized Auth0
You should now be able to use the main methods for interacting with Auth0

Two other methods are bundled in the default export:
1. `loginWithPopup` - will attempt to log the user in by providing a popup with a login window from Auth0
2. `logout` - will log the user out

You would use them as such:
```
import auth from 'sveltekit-auth0'

auth.loginWithPopup()

// AND

auth.logout()
```


All other methods can be imported as such:

```
import { getIsAuthenticatedValue, getIsAuthenticated } from 'sveltekit-auth0'

// And used like

const isAuthenticatedValue = getIsAuthenticatedValue();

// OR

const isAuthenticated = getIsAuthenticated();

// Listen for changes on the value
isAuthenticated.subscribe((value: boolean) => {
   // Do something with the value
})
```

Methods available:

* `getUser` - will return the Readable<User> object from Auth0 which you can subscribe for changes
* `getUserValue` - will return the User object from Auth0
* `getIsAuthenticated` - will return Readable<boolean> object which you can subscribe for changes in isAuthenticated. 
Ex. after login/logout it would get the new value.
* `getIsAuthenticatedValue` - will return if the user is authenticated or not at this point in time
* `getPopupOpen` - will return Readable<boolean> object which you can subscribe for changes of login popup is it open or not
* `getPopupOpenValue` - will return if the login popup is open or not at this point in time
* `loginWithPopup` - will attempt to log the user in by providing a popup with a login window from Auth0
* `logout` - will log the user out


## Reporting issues, asking for features

If you find any issues, please open up an issue on the [repository](https://github.com/Golemas7/sveltekit-auth0).
You can also post anny feature suggestions or improvements there.

## Happy coding!