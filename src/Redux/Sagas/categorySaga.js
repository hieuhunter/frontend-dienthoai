import axios from 'axios';
import { category_FailedAction, category_SucceedAction } from '../Action/categoryAction';
import { CATEGORY_REQUESTED } from '../Constants/constant';
import { call, put, takeLatest } from '@redux-saga/core/effects';

async function api_Category() {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/category`
	});
	return data;
}
function* ds_Category() {
	try {
		const res = yield call(api_Category);
		console.log(res);
		if (res.success) {
			yield put(category_SucceedAction(res.data));
		}
	} catch (err) {
		yield put(category_FailedAction(err.message));
	}
}
export function* ds_CategoryWatcher() {
	yield takeLatest(CATEGORY_REQUESTED, ds_Category);
}
