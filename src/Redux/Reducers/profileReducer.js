import { PERSONAL_FAILED, PERSONAL_REQUESTED, PERSONAL_SUCCEED, UPDATE_FAILED, UPDATE_REQUESTED, UPDATE_SUCCEED } from '../Constants/constant';

const initialState = {
	thong_tin: {
		tt: {},
		is_loading: false,
		errors: {}
	},
	cap_nhat: {
		tt: {},
		is_loading: false,
		errors: {}
	}
};
const personal_Reducer = (state = initialState, action) => {
	switch (action.type) {
		case PERSONAL_REQUESTED:
			return {
				...state,
				thong_tin: {
					...state.thong_tin,
					is_loading: true
				}
			};
		case PERSONAL_SUCCEED:
			return {
				...state,
				thong_tin: {
					...state.thong_tin,
					tt: action.payload.tt,
					is_loading: false
				}
			};
		case PERSONAL_FAILED:
			return {
				...state,
				thong_tin: {
					...state.thong_tin,
					errors: action.payload.errors
				}
			};
			//
			case UPDATE_REQUESTED:
				return {
					...state,
					cap_nhat: {
						...state.cap_nhat,
						is_loading: true
					}
				};
			case UPDATE_SUCCEED:
				return {
					...state,
					cap_nhat: {
						...state.cap_nhat,
						tt: action.payload.tt,
						is_loading: false
					}
				};
			case UPDATE_FAILED:
				return {
					...state,
					cap_nhat: {
						...state.cap_nhat,
						errors: action.payload.errors
					}
				};

		default:
			return state;
	}
};

export default personal_Reducer;
