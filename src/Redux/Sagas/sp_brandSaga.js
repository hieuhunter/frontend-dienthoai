import axios from 'axios';
import { sp_brandFailedAction, sp_brandSucceedAction } from '../Action/sp_brandAction';
import { SP_BRAND_REQUESTED } from '../Constants/constant';
import { call, put, takeLatest } from '@redux-saga/core/effects';

async function apisp_Brand(id) {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/brand/${id}`
	});
	return data;
}
function* sp_Brand(action) {
	try {
		const { id } = action.payload;
		const res = yield call(apisp_Brand, id);
		console.log(res);
		if (res.success) {
			yield put(sp_brandSucceedAction(res.data));
		}
	} catch (err) {
		yield put(sp_brandFailedAction(err.message));
	}
}
export function* sp_BrandWatcher() {
	yield takeLatest(SP_BRAND_REQUESTED, sp_Brand);
}
