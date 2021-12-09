import { BILL_FAILED, BILL_REQUESTED, BILL_RESETED, BILL_SUCCEED } from '../Constants/constant';

export const bill_RequestedAction = (checkout) => ({
	type: BILL_REQUESTED,
	payload: {
		checkout: checkout
	}
});
export const bill_SucceedAction = (hoa_don) => ({
	type: BILL_SUCCEED,
	payload: {
		hoa_don: hoa_don
	}
});
export const bill_FailedAction = (errors) => ({
	type: BILL_FAILED,
	payload: {
		errors: errors
	}
});
export const billResetedAction = () => ({
	type: BILL_RESETED
});
