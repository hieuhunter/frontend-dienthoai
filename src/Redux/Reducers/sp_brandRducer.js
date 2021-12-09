import { SP_BRAND_FAILED, SP_BRAND_REQUESTED, SP_BRAND_SUCCEED } from '../Constants/constant';

const initialState = {
	sp_brand: {
		san_pham: [],
		is_loading: true,
		errors: {}
	}
};
const sp_brandReducer = (state = initialState, action) => {
	switch (action.type) {
		// sptheodm
		case SP_BRAND_REQUESTED:
			return {
				...state,
				sp_brand: {
					...state.sp_brand,
					is_loading: true
				}
			};
		case SP_BRAND_SUCCEED:
			return {
				...state,
				sp_brand: {
					...state.sp_brand,
					san_pham: action.payload.san_pham,
					is_loading: false
				}
			};
		case SP_BRAND_FAILED:
			return {
				...state,
				sp_brand: {
					...state.sp_brand,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};
export default sp_brandReducer;
