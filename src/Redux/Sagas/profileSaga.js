import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
	personal_FailedAction,
	personal_SucceedAction,
	update_FailedAction,
	update_SucceedAction
} from '../Action/profileAction';
import { PERSONAL_REQUESTED, UPDATE_REQUESTED } from '../Constants/constant';

async function apiPersonal(user) {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/profile`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* Personal() {
	try {
		const res = yield call(apiPersonal);
		if (res.success) {
			yield put(personal_SucceedAction(res.data));
		}
	} catch (err) {
		yield put(personal_FailedAction(err.message));
	}
}

export function* Personal_Watcher() {
	yield takeLatest(PERSONAL_REQUESTED, Personal);
}
//
async function apiUpdate(user) {
	const { data } = await axios({
		method: 'PUT',
		url: `http://127.0.0.1:8000/api/profile`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* Update_tt(action) {
	try {
		const { tt } = action.payload;
		const res = yield call(apiUpdate, tt);
		if (res.success) {
			yield put(update_SucceedAction(res.data));
		}
	} catch (err) {
		yield put(update_FailedAction(err.message));
	}
}

export function* Updatett_Watcher() {
	yield takeLatest(UPDATE_REQUESTED, Update_tt);
}
