import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { search_FailedAction, search_SucceedAction } from '../Action/searchAcction';
import { SEARCH_REQUESTED } from '../Constants/constant';

async function apiSearch(search) {
	const { data } = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_API_URL}/search?q=${search}`,
		data: search
	});
	return data;
}
function* Search(action) {
	try {
		const { search } = action.payload;
		const res = yield call(apiSearch, search);
		console.log(res);
		if (res.success) {
			yield put(search_SucceedAction(res.data,res.pagination.total));
		}
	} catch (err) {
		yield put(search_FailedAction(err.message));
	}
}
export function* Search_Watcher() {
	yield takeLatest(SEARCH_REQUESTED, Search);
}
