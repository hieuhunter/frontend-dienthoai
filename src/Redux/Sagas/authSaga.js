import axios from 'axios';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import {
	login_FailedAction,
	login_SucceedAction,
	logout_FailedAction,
	logout_SucceedAction,
	register_FailedAction,
	register_SucceedAction
} from '../Action/authAction';
import { CHECK_LOGIN, LOGIN_REQUESTED, LOGOUT_REQUESTED, REGISTER_REQUESTED } from '../Constants/constant';

//DANGKY
async function apiRegister(user) {
	const { data } = await axios({
		method: 'POST',
		url: `${process.env.REACT_APP_API_URL}/register`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	return data;
}

function* authRegister(action) {
	try {
		const { user } = action.payload;
		const res = yield call(apiRegister, user);
		if (res.success) {
			yield put(register_SucceedAction(res.data));
			window.location.replace('/Login');
		} else {
			yield put(register_FailedAction(res.errors));
		}
	} catch (err) {
		yield put(register_FailedAction(err.message));
	}
}

export function* auth_RegisterWatcher() {
	yield takeLatest(REGISTER_REQUESTED, authRegister);
}

// LOGIN

async function apiLogin(user) {
	const { data } = await axios({
		method: 'POST',
		url: `${process.env.REACT_APP_API_URL}/login`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	return data;
}

function* authLogin(action) {
	try {
		const { user } = action.payload;
		const res = yield call(apiLogin, user);
		if (res.success) {
			const user = {
				id: res.data.id,
				user_name: res.data.user_name
			};
			yield put(login_SucceedAction(user));
			window.localStorage.setItem('token', res.data.access_token);
			window.location.replace('/');
		} else {
			yield put(login_FailedAction(res.errors));
		}
	} catch (err) {
		yield put(login_FailedAction(err.message));
	}
}

export function* auth_LoginWatcher() {
	yield takeLatest(LOGIN_REQUESTED, authLogin);
}

// check_login

async function api_checklogin(user) {
	const { data } = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_API_URL}/user`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* auth_checkLogin() {
	try {
		if (window.localStorage.getItem('token')) {
			const res = yield call(api_checklogin);
			if (res.success) {
				const user = {
					id: res.data.id,
					user_name: res.data.user_name
				};
				yield put(login_SucceedAction(user));
			}
		}
	} catch (err) {
		yield put(login_FailedAction(err.message));
	}
}

export function* auth_checkLoginWatcher() {
	yield takeLatest(CHECK_LOGIN, auth_checkLogin);
}

// logout

async function api_logout(user) {
	const { data } = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_API_URL}/logout`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}
function* logoutUser() {
	try {
		const res = yield call(api_logout);
		if (res.success) {
			yield put(logout_SucceedAction(res.data));
			window.location.replace('/login');
		}
	} catch (err) {
		yield put(logout_FailedAction(err.message));
	}
}
export function* logout_UserWatcher() {
	yield takeLatest(LOGOUT_REQUESTED, logoutUser);
}
