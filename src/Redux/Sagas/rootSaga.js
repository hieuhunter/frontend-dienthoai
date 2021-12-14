import { all } from 'redux-saga/effects';
import { auth_checkLoginWatcher, auth_LoginWatcher, auth_RegisterWatcher, logout_UserWatcher } from './authSaga';
import { Bill_Watcher } from './bill_Saga';

import { ds_BrandWatcher } from './brandSaga';
import { addCart_Watcher, Cart_Watcher, deleteallCart_Watcher, xoaCart_Watcher } from './cartSaga';
import { ds_CategoryWatcher } from './categorySaga';
import { ct_ProductWatcher, dsProductWatcher, dsSLProductWatcher } from './productSaga';
import { Personal_Watcher, Updatett_Watcher } from './profileSaga';
import { sp_BrandWatcher } from './sp_brandSaga';
import { sp_CategoryWatcher } from './sp_categorySaga';

function* rootSaga() {
	yield all([
		dsProductWatcher(),
		ct_ProductWatcher(),
		ds_CategoryWatcher(),
		ds_BrandWatcher(),
		sp_CategoryWatcher(),
		sp_BrandWatcher(),
		logout_UserWatcher(),
		auth_checkLoginWatcher(),
		auth_LoginWatcher(),
		auth_RegisterWatcher(),
		addCart_Watcher(),
		Cart_Watcher(),
		xoaCart_Watcher(),
		deleteallCart_Watcher(),
		Bill_Watcher(),
		Personal_Watcher(),
		Updatett_Watcher(),
		dsSLProductWatcher()
	]);
}
export default rootSaga;
