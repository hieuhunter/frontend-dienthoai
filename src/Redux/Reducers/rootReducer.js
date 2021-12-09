import { combineReducers } from 'redux';
import authReducer from './authReducer';
import billReducer from './bill_Reducer';

import brand_Reducer from './brandReducer';
import cartReducer from './cartReducer';
import category_Reducer from './categoryReducer';
import productReducer from './productReducer';
import personal_Reducer from './profileReducer';
import sp_brandReducer from './sp_brandRducer';
import sp_categoryReducer from './sp_categoryReducer';

const rootReducer = combineReducers({
	san_pham: productReducer,
	danh_muc: category_Reducer,
	thuong_hieu: brand_Reducer,
	ds_category: sp_categoryReducer,
	ds_brand: sp_brandReducer,
	auth: authReducer,
	gio_hang: cartReducer,
	hoa_don: billReducer,
	thong_tin: personal_Reducer
	
});
export default rootReducer;
