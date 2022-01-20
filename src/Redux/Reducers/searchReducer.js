import {
	SEARCH_CURRENT_PAGE_REQUESTED,
	SEARCH_FAILED,
	SEARCH_REQUESTED,
	SEARCH_SUCCEED,
	TOTAL_RESETED
} from '../Constants/constant';

const initialState = {
	search: {
		search: [],
		total: 0,
		currentPage: 1,
		is_loading: true,
		errors: {}
	}
};
const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		// SANPHAM
		case SEARCH_CURRENT_PAGE_REQUESTED:
			return {
				...state,
				search: {
					...state.search,
					currentPage: action.payload.currentPage
				}
			};
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
					total: action.payload.total,
					currentPage: action.payload.currentPage,
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
		case TOTAL_RESETED:
			return {
				...state,
				search: {
					...state.search,
					total: action.payload.total,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};
export default searchReducer;
