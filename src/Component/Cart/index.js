import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bill_RequestedAction } from '../../Redux/Action/billAction';
import classNames from 'classnames';
import {
	addcart_RequestedAction,
	cart_RequestedAction,
	deletecart_RquestedAction
} from '../../Redux/Action/cartAction';
import { product_RequestedAction } from '../../Redux/Action/productAction';
import Layout from '../Layout';
const total_price = function (arr, qty, price) {
	return arr.reduce(function (a, b) {
		return a + b[qty] * b.product[price];
	}, 0);
};
const Cart = () => {
	const dispatch = useDispatch();
	const dsCart = useSelector((state) => state.gio_hang.gio_hang);
	/* const bill = useSelector((state) => state.hoa_don.hoa_don); */
	const formatter = new Intl.NumberFormat('vi', {
		style: 'currency',
		currency: 'VND'
	});

	const delete_Cart = (id) => {
		const gio_hang = {
			id_sp: id
		};
		dispatch(deletecart_RquestedAction(gio_hang));
		dispatch(cart_RequestedAction());
	};
	const addToCart = (id, count) => {
		const gio_hang = {
			id_sp: id,
			so_luong: count
		};
		console.log('gio_hang', gio_hang);
		dispatch(addcart_RequestedAction(gio_hang));
		dispatch(cart_RequestedAction());
	};
	const [myValue, setMyValue] = useState('');

	useEffect(() => {
		dispatch(product_RequestedAction());
		dispatch(cart_RequestedAction());
	}, [dispatch]);

	const initialValues = {
		id_kh: '',
		ho_ten: '',
		sdt: '',
		email: '',
		ngay_dat: '',
		ngay_giao: '',
		dia_chi: '',
		da_duyet: '',
		da_thanh_toan: '',
		da_giao_hang: ''
	};

	const onSubmit = (values) => {
		const checkout = {
			ho_ten: values.ho_ten,
			email: values.email,
			sdt: values.sdt,
			dia_chi: values.dia_chi,
			gio_hang: dsCart.cart.ctcart
		};
		console.log(checkout);
		dispatch(bill_RequestedAction(checkout));
	};

	return (
		<Layout>
			<div id='main-body'>
				<div className='box-main-body'>
					<div className='container-fluid nopadding' />
					<div id='xtm-container'>
						<div className='navation ' />
						<div id='xtm-content' className='bg-white padding-top-10'>
							<div className='container'>
								<div className='order_default'>
									<div className='form_order'>
										<Formik initialValues={initialValues} onSubmit={onSubmit}>
											{(props) => (
												<form
													onSubmit={props.handleSubmit}
													name='f_confirm'
													className='form-horizontal'
													id='installmentForm'
												>
													<div className='order-head'>
														<div className='heading-cart'>
															<i className='bi bi-chevron-double-left'></i> Tiếp tục tìm kiếm sản phẩm
														</div>
														<div className='more-buy'>Giỏ hàng của bạn</div>
													</div>
													<div className='box_info_pro'>
														{dsCart.cart.ctcart.map((sp) => (
															<div className='item-cp  box-flex' key={sp.id}>
																<div className='product-image'>
																	<div className='img' style={{ textAlign: 'center', paddingBottom: 25 }}>
																		<img
																			src={`${sp.product.image_url}`}
																			alt='iPhone 13 Pro Max 256GB Chu00ednh hu00e3ng (VN/A)'
																			title='iPhone 13 Pro Max 256GB Chu00ednh hu00e3ng (VN/A)'
																		/>
																		<a className='removeitem' href='#!' onClick={delete_Cart.bind(this, sp.product.id)}>
																			Xóa khỏi giỏ hàng
																		</a>
																	</div>
																</div>{' '}
																<div className='product-info'>
																	<div className='top'>
																		{' '}
																		<h3 href='/' className='p_name'>
																			{sp.product.ten_sp}
																		</h3>
																		<span style={{ padding: '0px' }} id='price' className='price'>
																			{formatter.format(sp.product.gia)}
																		</span>
																	</div>{' '}
																	<div className='promotion' />
																	<div className='cp-toolbar'>
																		{' '}
																		<select
																			onChange={(e) => setMyValue(e.target.value)}
																			defaultValue={myValue}
																			className='form-select form-select-sm'
																		>
																			<option>Chọn màu</option>
																			<option>Màu trắng</option>
																			<option>Màu đen</option>
																			<option>Màu xanh dương</option>
																		</select>
																		<div className='choose-qty'>
																			<div className='minus' onClick={addToCart.bind(this, sp.product.id, -1)}>
																				<i />
																			</div>
																			<div className='number'>{sp.so_luong}</div>
																			<div className='plus' onClick={addToCart.bind(this, sp.product.id, 1)}>
																				<i />
																				<i />
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														))}
													</div>
													<div className='cart-summary'>
														<div className='box-flex grand-cart'>
															<div className='cart-label'>Tổng tiền</div>
															<div className='price'>
																{' '}
																{formatter.format(parseInt(total_price(dsCart.cart.ctcart, 'so_luong', 'gia')))}
															</div>
														</div>
													</div>
													<div className='group-form-input'>
														<h3 style={{ paddingTop: '0px' }} className='title_cart'>
															Thông tin khách hàng
														</h3>
														<div className='row_input'>
															<input
																type='text'
																className={classNames('form-control', {
																	'is-invalid': props.touched.ho_ten && props.errors.ho_ten
																})}
																placeholder='Họ và tên *'
																id='ho_ten'
																name='ho_ten'
																onChange={props.handleChange}
																onBlur={props.handleBlur}
																value={props.values.ho_ten}
															/>
															{props.touched.ho_ten && props.errors.ho_ten && (
																<div id='invalid-feedback'>{props.errors.ho_ten}</div>
															)}
														</div>
														<div className='row'>
															<div className='col-sm-6'>
																<div className='row_input '>
																	<input
																		type='text'
																		className={classNames('form-control', {
																			'is-invalid': props.touched.email && props.errors.email
																		})}
																		placeholder='Email * '
																		id='email'
																		name='email'
																		onChange={props.handleChange}
																		onBlur={props.handleBlur}
																		value={props.values.email}
																	/>
																	{props.touched.email && props.errors.email && (
																		<div id='invalid-feedback'>{props.errors.email}</div>
																	)}
																</div>
															</div>
															<div className='col-sm-6'>
																<div className=' row_input'>
																	<input
																		type='text'
																		className={classNames('form-control', {
																			'is-invalid': props.touched.sdt && props.errors.sdt
																		})}
																		placeholder='Số điện thoại * '
																		id='sdt'
																		name='sdt'
																		onChange={props.handleChange}
																		onBlur={props.handleBlur}
																		value={props.values.sdt}
																	/>
																	{props.touched.sdt && props.errors.sdt && (
																		<div id='invalid-feedback'>{props.errors.sdt}</div>
																	)}
																</div>
															</div>
														</div>
														<h3 tyle={{ paddingTop: '0px' }} className='title_cart'>
															Phương thức nhận hàng
														</h3>
														<p className='p-bottom-10'>
															Chọn phương thức nhận hàng sẽ giúp bạn nhận được sản phẩm nhanh hơn
														</p>
														<div className='  row_choose_option'>
															<label className='mt-radio padding-right-20'>
																<input
																	type='radio'
																	defaultChecked
																	name='where_get'
																	id='delivery-label'
																	defaultValue='at_home'
																/>
																<i />
																<span>Địa chỉ giao hàng</span>
															</label>
															<label className='mt-radio'>
																<input type='radio' name='where_get' id='pick-label' defaultValue='at_store' />
																<i />
																<span>Nhận tại cửa hàng</span>
															</label>
														</div>

														<div id='address' className='row_input form-group'>
															<input
																type='text'
																className={classNames('form-control notNull*', {
																	'is-invalid': props.touched.dia_chi && props.errors.dia_chi
																})}
																placeholder='Số nhà, tên đường, phường / xã'
																id='dia_chi'
																name='dia_chi'
																onChange={props.handleChange}
																onBlur={props.handleBlur}
																value={props.values.dia_chi}
															/>
															{props.touched.dia_chi && props.errors.dia_chi && (
																<div id='invalid-feedback'>{props.errors.dia_chi}</div>
															)}
														</div>
														<div className='row_input form-group'>
															<textarea
																name='note'
																id='note'
																rows={3}
																className='form-control'
																style={{ width: '100%' }}
																placeholder='Yêu cầu khác'
															
															/>
														</div>

														<div className='group-button'>
															<button type='submit' className='btn-order'>
																Đặt hàng
															</button>
														</div>
													</div>
												</form>
											)}
										</Formik>
									</div>
								</div>
								<div className='clear' />
							</div>
						</div>
					</div>
					<div className='container-fluid nopadding' />
				</div>
			</div>
		</Layout>
	);
};
export default Cart;
