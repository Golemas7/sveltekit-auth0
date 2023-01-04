import config from './auth-config.js';
import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';
import { get } from 'svelte/store';
import { popupOpen, user, isAuthenticated, error, client } from '../store';

import type { PopupLoginOptions, User } from '@auth0/auth0-spa-js';
import type { Readable } from 'svelte/store';

async function createClient() {
	const auth0Client = await createAuth0Client({
		domain: config.domain,
		client_id: config.clientId,
		redirect_uri: config.redirectUri
	});

	return auth0Client;
}

async function initializeAuth0() {
	client.set(await createClient());

	const auth0Client: Auth0Client = get(client) as Auth0Client;

	isAuthenticated.set(await auth0Client.isAuthenticated());
	user.set((await auth0Client.getUser()) as User);
}

async function loginWithPopup(options: PopupLoginOptions) {
	const auth0Client = get(client) as Auth0Client;

	popupOpen.set(true);
	try {
		await auth0Client.loginWithPopup(options);

		user.set((await auth0Client.getUser()) as User);
		isAuthenticated.set(true);
	} catch (e) {
		console.error(e);
	} finally {
		popupOpen.set(false);
	}
}

function logout() {
	const auth0Client = get(client) as Auth0Client;

	return auth0Client.logout();
}

export function getUserValue(): User {
	return get(user);
}

export function getUser(): Readable<User> {
	return user;
}

export function getIsAuthenticatedValue(): boolean {
	return get(isAuthenticated);
}

export function getIsAuthenticated(): Readable<boolean> {
	return isAuthenticated;
}

export function getPopupOpenValue(): boolean {
	return get(popupOpen);
}

export function getPopupOpen(): Readable<boolean> {
	return popupOpen;
}

export function getErrorValue(): boolean {
	return get(error);
}

export function getError(): Readable<boolean> {
	return error;
}

const auth = {
	initializeAuth0,
	loginWithPopup,
	logout
};

export default auth;
