import type Auth0Config from './models/auth-config.model';

const auth0Domain = import.meta.env ? import.meta.env['VITE_AUTH0_DOMAIN'] : '';
const auth0ClientId = import.meta.env ? import.meta.env['VITE_AUTH0_CLIENT_ID'] : '';
const auth0RedirectUri = import.meta.env ? import.meta.env['VITE_AUTH0_REDIRECT_URI'] : '';

const config: Auth0Config = {
	domain: auth0Domain,
	clientId: auth0ClientId,
	redirectUri: auth0RedirectUri
};

export default config;
