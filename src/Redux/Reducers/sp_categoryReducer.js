import { SP_CATEGORY_FAILED, SP_CATEGORY_REQUESTED, SP_CATEGORY_SUCCEED } from '../Constants/constant';

const initialState = {
	sp_category: {
		san_pham: [],
		is_loading: true,
		errors: {}
	}
};
const sp_categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		// sptheodm
		case SP_CATEGORY_REQUESTED:
			return {
				...state,
				sp_category: {
					...state.sp_category,
					is_loading: true
				}
			};
		case SP_CATEGORY_SUCCEED:
			return {
				...state,
				sp_category: {
					...state.sp_category,
					san_pham: action.payload.san_pham,
					is_loading: false
				}
			};
		case SP_CATEGORY_FAILED:
			return {
				...state,
				sp_category: {
					...state.sp_category,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default sp_categoryReducer;
