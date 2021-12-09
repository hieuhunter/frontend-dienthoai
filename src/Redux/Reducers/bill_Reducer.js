import { BILL_FAILED, BILL_REQUESTED, BILL_RESETED, BILL_SUCCEED } from '../Constants/constant';

const initialState = {
	hoa_don: {
		cthd: {
			sanpham: []
		},
		isLoading: true,
		errorMessage: {}
	}
};
const billReducer = (state = initialState, action) => {
	switch (action.type) {
		case BILL_REQUESTED:
			return {
				...state,
				hoa_don: {
					...state.hoa_don,
					is_loading: true
				}
			};
		case BILL_SUCCEED:
			return {
				...state,
				hoa_don: {
					...state.hoa_don,
					cthd: action.payload.hoa_don,
					is_loading: false
				}
			};
		case BILL_FAILED:
			return {
				...state,
				hoa_don: {
					...state.hoa_don,
					errors: action.payload.errors
				}
			};
		case BILL_RESETED:
			return {
				...state,
				hoa_don: {
					...state.hoa_don,
					sanpham: action.payload.sanpham,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default billReducer;
