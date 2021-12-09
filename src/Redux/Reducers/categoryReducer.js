import { CATEGORY_FAILED, CATEGORY_REQUESTED, CATEGORY_SUCCEED } from '../Constants/constant';

const initialState = {
	ds_category: {
		danh_muc: [],
		is_loading: true,
		errors: {}
	},
	ct_category: {
		danh_muc: {},
		is_loading: true,
		errors: {}
	}
};
const category_Reducer = (state = initialState, action) => {
	switch (action.type) {
		// SANPHAM
		case CATEGORY_REQUESTED:
			return {
				...state,
				ds_category: {
					...state.ds_category,
					is_loading: true
				}
			};
		case CATEGORY_SUCCEED:
			return {
				...state,
				ds_category: {
					...state.ds_category,
					danh_muc: action.payload.danh_muc,
					is_loading: false
				}
			};
		case CATEGORY_FAILED:
			return {
				...state,
				ds_category: {
					...state.ds_category,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};
export default category_Reducer;
