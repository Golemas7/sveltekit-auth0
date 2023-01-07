import type Auth0Config from './models/auth-config.model';

const auth0Domain = process?.env
	? process.env['VITE_AUTH0_DOMAIN']
	: import.meta.env['VITE_AUTH0_DOMAIN'];

const auth0ClientId = process?.env
	? process.env['VITE_AUTH0_CLIENT_ID']
	: import.meta.env['VITE_AUTH0_CLIENT_ID'];

const auth0RedirectUri = process?.env
	? process.env['VITE_AUTH0_REDIRECT_URI']
	: import.meta.env['VITE_AUTH0_DOMAIN'];

const config: Auth0Config = {
	domain: auth0Domain,
	clientId: auth0ClientId,
	redirectUri: auth0RedirectUri
};

export default config;
