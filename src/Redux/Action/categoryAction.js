import { CATEGORY_FAILED, CATEGORY_REQUESTED, CATEGORY_SUCCEED } from '../Constants/constant';

export const category_RequestedAction = () => ({
	type: CATEGORY_REQUESTED
});
export const category_SucceedAction = (danh_muc) => ({
	type: CATEGORY_SUCCEED,
	payload: {
		danh_muc: danh_muc
	}
});
export const category_FailedAction = (errors) => ({
	type: CATEGORY_FAILED,
	payload: {
		errors: errors
	}
});
