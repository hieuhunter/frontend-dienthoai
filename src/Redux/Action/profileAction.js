import {
	PERSONAL_FAILED,
	PERSONAL_REQUESTED,
	PERSONAL_SUCCEED,
	UPDATE_FAILED,
	UPDATE_REQUESTED,
	UPDATE_SUCCEED
} from '../Constants/constant';

export const personal_RequestedAction = () => ({
	type: PERSONAL_REQUESTED
});
export const personal_SucceedAction = (tt) => ({
	type: PERSONAL_SUCCEED,
	payload: {
		tt: tt
	}
});
export const personal_FailedAction = (errors) => ({
	type: PERSONAL_FAILED,
	payload: {
		errors: errors
	}
});
//
export const update_RequestedAction = (tt) => ({
	type: UPDATE_REQUESTED,
	payload: {
		tt: tt
	}
});
export const update_SucceedAction = (tt) => ({
	type: UPDATE_SUCCEED,
	payload: {
		tt: tt
	}
});
export const update_FailedAction = (errors) => ({
	type: UPDATE_FAILED,
	payload: {
		errors: errors
	}
});
