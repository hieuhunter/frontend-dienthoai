import axios from 'axios';
import { brand_FailedAction, brand_SucceedAction } from '../Action/brandAction';
import { BRAND_REQUESTED } from '../Constants/constant';
import { call, put, takeLatest } from '@redux-saga/core/effects';

async function apiBrand() {
	const { data } = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_API_URL}/brand`
	});
	return data;
}
function* dsBrand() {
	try {
		const res = yield call(apiBrand);
		console.log(res);
		if (res.success) {
			yield put(brand_SucceedAction(res.data));
		}
	} catch (err) {
		yield put(brand_FailedAction(err.message));
	}
}
export function* ds_BrandWatcher() {
	yield takeLatest(BRAND_REQUESTED, dsBrand);
}
