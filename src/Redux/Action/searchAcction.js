import { SEARCH_FAILED, SEARCH_REQUESTED, SEARCH_SUCCEED } from '../Constants/constant';

export const search_RequestedAction = (search) => ({
	type: SEARCH_REQUESTED,
	payload: {
		search: search
	}
});
export const search_SucceedAction = (search) => ({
	type: SEARCH_SUCCEED,
	payload: {
		search: search
	}
});
export const search_FailedAction = (errors) => ({
	type: SEARCH_FAILED,
	payload: {
		errors: errors
	}
});
