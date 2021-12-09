import { BRAND_FAILED, BRAND_REQUESTED, BRAND_SUCCEED } from '../Constants/constant';

export const brand_RequestedAction = () => ({
	type: BRAND_REQUESTED
});
export const brand_SucceedAction = (thuong_hieu) => ({
	type: BRAND_SUCCEED,
	payload: {
		thuong_hieu: thuong_hieu
	}
});
export const brand_FailedAction = (errors) => ({
	type: BRAND_FAILED,
	payload: {
		errors: errors
	}
});
