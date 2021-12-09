import axios from 'axios';
import { sp_categoryFailedAction, sp_categorySucceedAction } from '../Action/sp_categoryAction';
import { SP_CATEGORY_REQUESTED } from '../Constants/constant';
import { call, put, takeLatest } from '@redux-saga/core/effects';

async function apisp_Category(id) {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/category/${id}`
	});
	return data;
}
function* sp_category(action) {
	try {
		const { id } = action.payload;
		const res = yield call(apisp_Category, id);
		console.log(res);
		if (res.success) {
			yield put(sp_categorySucceedAction(res.data));
		}
	} catch (err) {
		yield put(sp_categoryFailedAction(err.message));
	}
}
export function* sp_CategoryWatcher() {
	yield takeLatest(SP_CATEGORY_REQUESTED, sp_category);
}
