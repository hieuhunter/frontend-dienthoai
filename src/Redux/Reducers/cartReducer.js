import {
	ADDCART_FAILED,
	ADDCART_REQUESTED,
	ADDCART_SUCCEED,
	CART_FAILED,
	CART_REQUESTED,
	CART_SUCCEED,
	DELETEALLCART_FAILED,
	DELETEALLCART_REQUESTED,
	DELETEALLCART_SUCCEED,
	DELETECART_FAILED,
	DELETECART_REQUESTED,
	DELETECART_SUCCEED
} from '../Constants/constant';

const initialState = {
	gio_hang: {
		cart: {
			ctcart: []
		},
		isLoading: true,
		errorMessage: {}
	},
	add_cart: {
		cart: {},
		isLoading: true,
		errorMessage: {}
	},
	xoa_cart: {
		cart: {},
		isLoading: true,
		errorMessage: {}
	},
	xoa_cartALL: {
		cart: {},
		isLoading: true,
		errorMessage: {}
	}
};
const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		// GIOHANG
		case CART_REQUESTED:
			return {
				...state,
				gio_hang: {
					...state.gio_hang,
					is_loading: true
				}
			};
		case CART_SUCCEED:
			return {
				...state,
				gio_hang: {
					...state.gio_hang,
					cart: action.payload.gio_hang,
					is_loading: false
				}
			};
		case CART_FAILED:
			return {
				...state,
				gio_hang: {
					...state.gio_hang,
					errors: action.payload.errors
				}
			};
		// THEM GIO HANG
		case ADDCART_REQUESTED:
			return {
				...state,
				add_cart: {
					...state.add_cart,
					is_loading: true
				}
			};
		case ADDCART_SUCCEED:
			return {
				...state,
				add_cart: {
					...state.add_cart,
					cart: action.payload.cart,
					is_loading: false
				}
			};
		case ADDCART_FAILED:
			return {
				...state,
				add_cart: {
					...state.add_cart,
					errors: action.payload.errors
				}
			};

		// XOA GIO HANG
		case DELETECART_REQUESTED:
			return {
				...state,
				xoa_cart: {
					...state.xoa_cart,
					is_loading: true
				}
			};
		case DELETECART_SUCCEED:
			return {
				...state,
				xoa_cart: {
					...state.xoa_cart,
					cart: action.payload.cart,
					is_loading: false
				}
			};
		case DELETECART_FAILED:
			return {
				...state,
				xoa_cart: {
					...state.xoa_cart,
					errors: action.payload.errors
				}
			};
		// xoa tat ca gh
		case DELETEALLCART_REQUESTED:
			return {
				...state,
				xoa_cartALL: {
					...state.xoa_cartALL,
					is_loading: true
				}
			};
		case DELETEALLCART_SUCCEED:
			return {
				...state,
				xoa_cartALL: {
					...state.xoa_cartALL,
					ghang: action.payload.ghang,
					is_loading: false
				}
			};
		case DELETEALLCART_FAILED:
			return {
				...state,
				xoa_cartALL: {
					...state.xoa_cartALL,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};
export default cartReducer;
