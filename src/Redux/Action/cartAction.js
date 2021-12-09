import { ADDCART_FAILED, ADDCART_REQUESTED, ADDCART_SUCCEED, CART_FAILED, CART_REQUESTED, CART_SUCCEED, DELETEALLCART_FAILED, DELETEALLCART_REQUESTED, DELETEALLCART_SUCCEED, DELETECART_FAILED, DELETECART_REQUESTED, DELETECART_SUCCEED } from "../Constants/constant";



export const cart_RequestedAction = () => ({
	type: CART_REQUESTED
});
export const cart_SucceedAction = (gio_hang) => ({
	type: CART_SUCCEED,
	payload: {
		gio_hang: gio_hang
	}
});
export const cart_FailedAction = (errors) => ({
	type: CART_FAILED,
	payload: {
		errors: errors
	}
});
// THEM CART
export const addcart_RequestedAction = (gio_hang) => ({
	type: ADDCART_REQUESTED,
	payload: {
		gio_hang: gio_hang
	}
});
export const addcart_SucceedAction = (gio_hang) => ({
	type: ADDCART_SUCCEED,
	payload: {
		gio_hang: gio_hang
	}
});
export const addcart_FailedAction = (errors) => ({
	type: ADDCART_FAILED,
	payload: {
		errors: errors
	}
});
// XOA CART
export const deletecart_RquestedAction = (gio_hang) => ({
	type: DELETECART_REQUESTED,
	payload: {
		gio_hang: gio_hang
	}
});
export const deletecart_SucceedAction = (gio_hang) => ({
	type: DELETECART_SUCCEED,
	payload: {
		gio_hang: gio_hang
	}
});
export const deletecart_FailedAction = (errors) => ({
	type: DELETECART_FAILED,
	payload: {
		errors: errors
	}
});
// XOA TAT CA GH
export const deletecartall_RequestedAction = (gio_hang) => ({
	type: DELETEALLCART_REQUESTED,
	payload: {
		gio_hang: gio_hang
	}
});
export const deletecartall_SucceedAction = (gio_hang) => ({
	type: DELETEALLCART_SUCCEED,
	payload: {
		gio_hang: gio_hang
	}
});
export const deletecartall_FailedAction = (errors) => ({
	type: DELETEALLCART_FAILED,
	payload: {
		errors: errors
	}
});