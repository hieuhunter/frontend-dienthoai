import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { bill_FailedAction, bill_SucceedAction } from '../Action/billAction';
import { BILL_REQUESTED } from '../Constants/constant';

async function apiBill(checkout) {
	const { data } = await axios({
		method: 'POST',
		url: `${process.env.REACT_APP_API_URL}/pay`,
		data: checkout,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* Bill(action) {
	try {
		const { checkout } = action.payload;
		const res = yield call(apiBill, checkout);
		if (res.success) {
			yield put(bill_SucceedAction(res.data));
			window.location.replace('/');
		}
	} catch (err) {
		yield put(bill_FailedAction(err.message));
	}
}

export function* Bill_Watcher() {
	yield takeLatest(BILL_REQUESTED, Bill);
}
