import { SP_BRAND_FAILED, SP_BRAND_REQUESTED, SP_BRAND_SUCCEED } from '../Constants/constant';

export const sp_brandRequestedAction = (id) => ({
	type: SP_BRAND_REQUESTED,
	payload: {
		id: id
	}
});
export const sp_brandSucceedAction = (san_pham) => ({
	type: SP_BRAND_SUCCEED,
	payload: {
		san_pham: san_pham
	}
});
export const sp_brandFailedAction = (error) => ({
	type: SP_BRAND_FAILED,
	payload: {
		error: error
	}
});
