import { SEARCH_FAILED, SEARCH_REQUESTED, SEARCH_SUCCEED, TOTAL_RESETED } from '../Constants/constant';

export const search_RequestedAction = (search) => ({
	type: SEARCH_REQUESTED,
	payload: {
		search: search
	}
});
export const search_SucceedAction = (search, total) => ({
	type: SEARCH_SUCCEED,
	payload: {
		search: search,
		total: total
	}
});
export const search_FailedAction = (errors) => ({
	type: SEARCH_FAILED,
	payload: {
		errors: errors
	}
});
export const search_ResetedAction = (search) => ({
	type: TOTAL_RESETED,
	payload: {
		search: search
	}
});
