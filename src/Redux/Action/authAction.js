import {
	CHECK_LOGIN,
	LOGIN_FAILED,
	LOGIN_REQUESTED,
	LOGIN_SUCCEED,
	LOGOUT_FAILED,
	LOGOUT_REQUESTED,
	LOGOUT_SUCCEED,
	REGISTER_FAILED,
	REGISTER_REQUESTED,
	REGISTER_SUCCEED
} from '../Constants/constant';

export const register_RequestedAction = (user) => ({
	type: REGISTER_REQUESTED,
	payload: {
		user: user
	}
});
export const register_SucceedAction = (user) => ({
	type: REGISTER_SUCCEED,
	payload: {
		user: user
	}
});
export const register_FailedAction = (errors) => ({
	type: REGISTER_FAILED,
	payload: {
		errors: errors
	}
});

// Login
export const login_RequestedAction = (user) => ({
	type: LOGIN_REQUESTED,
	payload: {
		user: user
	}
});
export const login_SucceedAction = (user, is_authenticated) => ({
	type: LOGIN_SUCCEED,
	payload: {
		user: user,
		is_authenticated: is_authenticated
	}
});
export const login_FailedAction = (errors) => ({
	type: LOGIN_FAILED,
	payload: {
		errors: errors
	}
});
export const checkloginAction = () => ({
	type: CHECK_LOGIN
});

// logout
export const logout_RequestedAction = (router) => ({
	type: LOGOUT_REQUESTED,
	payload: {
		router: router
	}
});
export const logout_SucceedAction = () => ({
	type: LOGOUT_SUCCEED
});
export const logout_FailedAction = (errors) => ({
	type: LOGOUT_FAILED,
	payload: {
		errors: errors
	}
});
