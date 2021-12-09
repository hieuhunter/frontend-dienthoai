import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
	ctproduct_FailedAction,
	ctproduct_SucceedAction,
	product_FailedAction,
	product_SucceedAction
} from '../Action/productAction';
import { CTPRODUCT_REQUESTED, PRODUCT_REQUESTED } from '../Constants/constant';



async function apiProduct() {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/product`
	});
	return data;
}
function* dsProduct() {
	try {
		const res = yield call(apiProduct);
		console.log(res);
		if (res.success) {
			yield put(product_SucceedAction(res.data));
		}
	} catch (err) {
		yield put(product_FailedAction(err.message));
	}
}
export function* dsProductWatcher() {
	yield takeLatest(PRODUCT_REQUESTED, dsProduct);
}
// ct_product
async function apictProduct(id) {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/product/${id}`
	});
	return data;
}
function* ct_Product(action) {
	try {
		const { id } = action.payload;
		const res = yield call(apictProduct, id);
		console.log(res);
		if (res.success) {
			yield put(ctproduct_SucceedAction(res.data));
		}
	} catch (err) {
		yield put(ctproduct_FailedAction(err.message));
	}
}
export function* ct_ProductWatcher() {
	yield takeLatest(CTPRODUCT_REQUESTED, ct_Product);
}
