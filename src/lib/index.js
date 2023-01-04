// Reexport your entry components here

import auth, {
	getUser,
	getUserValue,
	getIsAuthenticated,
	getIsAuthenticatedValue,
	getPopupOpen,
	getPopupOpenValue,
	getError,
	getErrorValue
} from './auth0/auth-service';

export {
	getUser,
	getUserValue,
	getIsAuthenticated,
	getIsAuthenticatedValue,
	getPopupOpen,
	getPopupOpenValue,
	getError,
	getErrorValue
};

export default auth;
