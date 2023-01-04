import type Auth0Config from './models/auth-config.model';

const config: Auth0Config = {
	domain: process.env['PUBLIC_VITE_AUTH0_DOMAIN'] as string,
	clientId: process.env['PUBLIC_VITE_AUTH0_CLIENT_ID'] as string,
	redirectUri: process.env['PUBLIC_VITE_AUTH0_REDIRECT_URI'] as string
};

export default config;
