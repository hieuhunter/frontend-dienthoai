import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { search_FailedAction, search_SucceedAction } from '../Action/searchAcction';
import { SEARCH_REQUESTED } from '../Constants/constant';

async function apiSearch(search, currentPage) {
	const { data } = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_API_URL}/search?q=${search}`,
		data: search,
		params: {
			limit: 10,
			offset: currentPage
		}
	});
	return data;
}
function* Search(action) {
	try {
		const { search, currentPage } = action.payload;
		const res = yield call(apiSearch, search, currentPage);
		console.log(res);
		if (res.success) {
			yield put(search_SucceedAction(res.data, res.pagination.total, currentPage));
		}
	} catch (err) {
		yield put(search_FailedAction(err.message));
	}
}
export function* Search_Watcher() {
	yield takeLatest(SEARCH_REQUESTED, Search);
}
