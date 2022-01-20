import {
	SEARCH_CURRENT_PAGE_REQUESTED,
	SEARCH_FAILED,
	SEARCH_REQUESTED,
	SEARCH_SUCCEED,
	TOTAL_RESETED
} from '../Constants/constant';

export const search_ChangeCurrentPageAction = (currentPage) => ({
	type: SEARCH_CURRENT_PAGE_REQUESTED,
	payload: {
		currentPage: currentPage
	}
});

export const search_RequestedAction = (search, currentPage) => ({
	type: SEARCH_REQUESTED,
	payload: {
		search: search,
		currentPage: currentPage
	}
});
export const search_SucceedAction = (search, total, currentPage) => ({
	type: SEARCH_SUCCEED,
	payload: {
		search: search,
		total: total,
		currentPage: currentPage
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
