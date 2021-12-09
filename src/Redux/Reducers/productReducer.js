import {
	CTPRODUCT_FAILED,
	CTPRODUCT_REQUESTED,
	CTPRODUCT_SUCCEED,
	PRODUCT_FAILED,
	PRODUCT_REQUESTED,
	PRODUCT_SUCCEED
} from '../Constants/constant';

const initialState = {
	ds_product: {
		san_pham: [],
		is_loading: true,
		errors: {}
	},
	ct_product: {
		san_pham: {},
		is_loading: true,
		errors: {}
	}
};
const productReducer = (state = initialState, action) => {
	switch (action.type) {
		// SANPHAM
		case PRODUCT_REQUESTED:
			return {
				...state,
				ds_product: {
					...state.ds_product,
					is_loading: true
				}
			};
		case PRODUCT_SUCCEED:
			return {
				...state,
				ds_product: {
					...state.ds_product,
					san_pham: action.payload.san_pham,
					is_loading: false
				}
			};
		case PRODUCT_FAILED:
			return {
				...state,
				ds_product: {
					...state.ds_product,
					errors: action.payload.errors
				}
			};
		// CTPRODUCT
		case CTPRODUCT_REQUESTED:
			return {
				...state,
				ct_product: {
					...state.ct_product,
					is_loading: true
				}
			};
		case CTPRODUCT_SUCCEED:
			return {
				...state,
				ct_product: {
					...state.ct_product,
					san_pham: action.payload.san_pham,
					is_loading: false
				}
			};
		case CTPRODUCT_FAILED:
			return {
				...state,
				ct_product: {
					...state.ct_product,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};
export default productReducer;
