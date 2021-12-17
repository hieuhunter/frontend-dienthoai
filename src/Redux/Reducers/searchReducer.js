import { SEARCH_FAILED, SEARCH_REQUESTED, SEARCH_SUCCEED } from '../Constants/constant';

const initialState = {
	search: {
		search: [],
		is_loading: true,
		errors: {}
	}
};
const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		// SANPHAM
		case SEARCH_REQUESTED:
			return {
				...state,
				search: {
					...state.search,
					is_loading: true
				}
			};
		case SEARCH_SUCCEED:
			return {
				...state,
				search: {
					...state.search,
					search: action.payload.search,
					is_loading: false
				}
			};
		case SEARCH_FAILED:
			return {
				...state,
				search: {
					...state.search,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};
export default searchReducer;
