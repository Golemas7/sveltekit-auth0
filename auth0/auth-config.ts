import Auth0Config from './models/auth-config.model';

const config: Auth0Config = {
	domain: import.meta.env.VITE_PUBLIC_AUTH0_DOMAIN,
	clientId: import.meta.env.VITE_PUBLIC_AUTH0_CLIENT_ID,
	redirectUri: import.meta.env.VITE_PUBLIC_AUTH0_REDIRECT_URI
};

export default config;
