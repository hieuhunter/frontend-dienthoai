import { SP_CATEGORY_FAILED, SP_CATEGORY_REQUESTED, SP_CATEGORY_SUCCEED } from '../Constants/constant';

export const sp_categoryRequestedAction = (id) => ({
	type: SP_CATEGORY_REQUESTED,
	payload: {
		id: id
	}
});
export const sp_categorySucceedAction = (san_pham) => ({
	type: SP_CATEGORY_SUCCEED,
	payload: {
		san_pham: san_pham
	}
});
export const sp_categoryFailedAction = (error) => ({
	type: SP_CATEGORY_FAILED,
	payload: {
		error: error
	}
});
