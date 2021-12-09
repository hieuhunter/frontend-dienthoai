import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register_RequestedAction } from '../../Redux/Action/authAction';
import Layout from '../Layout';
import * as yup from 'yup';
import { Formik } from 'formik';
import classNames from 'classnames';
const Register = () => {
	const dispatch = useDispatch();
	const register = useSelector((state) => state.auth.register);

	const initialValues = {
		ho_ten: '',
		user_name: '',
		email: '',
		password: '',
		password_confirm: '',
		sdt: '',
		dia_chi: '',
		is_admin: '0'
	};
	const validationSchema = yup.object().shape({
		ho_ten: yup
			.string()
			.min(6, 'Họ và tên ít nhất phải có 6 ký tự')
			.max(16, 'Họ và tên phải có nhiều nhất 16 ký tự')
			.required('Họ và tên là bắt buộc'),
		user_name: yup
			.string()
			.min(6, 'Tài khoản ít nhất phải có 6 ký tự')
			.max(16, 'Tài khoản phải có nhiều nhất 16 ký tự')
			.matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Tai khoan invalid')
			.required('Tài khoản là bắt buộc'),
		email: yup
			.string()
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Email invalid'
			)
			.required('Email là bắt buộc'),
		password: yup.string().required('Mật khẩu là bắt buộc'),
		password_confirm: yup
			.string()
			.required('Xác nhận mật khẩu là bắt buộc')
			.oneOf([yup.ref('password')], 'Mat khau is not match'),
		sdt: yup
			.string()
			.min(10, 'Sdt ít nhất phải có 10 ký tự')
			.matches(/^[0-9]+$/, 'Sdt invalid')
			.nullable(),
		dia_chi: yup
			.string()

			.min(6, 'Địa chỉ ít nhất phải có 6 ký tự')
			.max(66, 'Địa chỉ phải có nhiều nhất 16 ký tự')
			.required('Địa chỉ là bắt buộc')
			.nullable()
	});

	const onSubmit = (values) => {
		const user = {
			ho_ten: values.ho_ten,
			user_name: values.user_name,
			email: values.email,
			password: values.password,
			sdt: values.sdt,
			dia_chi: values.dia_chi
		};
		console.log(user);
		dispatch(register_RequestedAction(user));
	};
	return (
		<Layout>
			<div className='form-wrap login'>
				<main className='main'>
					<section className='section-login' id='main_login'>
						<div className='container'>
							<div id='ceNotification_nk' />
							<div className='login-wrapper'>
								<div className='alert alert-warning alert-dismissible fade ' role='alert'>
									<span className='message' />
								</div>
								<ul className='nav nav-tabs' id='navsTab' role='tablist'>
									<li className='nav-item' role='tab'>
										<a
											rel='nofollow'
											href='/Register'
											className='nav-link active'
											id='registerTab'
											data-toggle='tab'
											data-tabpane='registerTabContent'
											role='tab'
											aria-controls='registerForm'
											aria-selected='false'
										>
											Đăng ký
										</a>
									</li>
									<li className='nav-item' role='tab'>
										<a
											rel='nofollow'
											href='/Login'
											className='nav-link'
											id='loginTab'
											data-toggle='tab'
											data-tabpane='loginTabContent'
											role='tab'
											aria-controls='loginForm'
											aria-selected='false'
										>
											Đăng nhập
										</a>
									</li>
								</ul>
								<div className='tab-content' id='navsTabContent'>
									<div
										style={{ display: 'block' }}
										className='tab-pane'
										data-tabpane='registerTabContent'
										role='tabpanel'
										aria-labelledby='register-tab'
									>
										<div className='register-form' id='register-form'>
											<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
												{(props) => (
													<form onSubmit={props.handleSubmit} action='#!' className='cm-ajax cm-ajax-full-render'>
														<div className='form-group'>
															<input
																type='text'
																className={classNames('form-control', {
																	'is-invalid': props.touched.ho_ten && props.errors.ho_ten
																})}
																placeholder='Họ và tên'
																id='ho_ten'
																name='ho_ten'
																required
																onChange={props.handleChange}
																onBlur={props.handleBlur}
																value={props.values.ho_ten}
															/>
															{props.touched.ho_ten && props.errors.ho_ten && (
																<div id='invalid-feedback'>{props.errors.ho_ten}</div>
															)}
														</div>
														<div className='form-group'>
															<input
																type='text'
																className={classNames('form-control', {
																	'is-invalid':
																		(props.touched.user_name && props.errors.user_name) || register.errors?.user_name
																})}
																placeholder='Tài khoản'
																id='user_name'
																name='user_name'
																onChange={props.handleChange}
																onBlur={props.handleBlur}
																value={props.values.user_name}
															/>
															{props.touched.user_name && props.errors.user_name && (
																<div id='invalid-feedback'>{props.errors.user_name}</div>
															)}
															{register.errors?.user_name && (
																<div className='invalid-feedback'>{register.errors?.user_name}</div>
															)}
														</div>
														<div className='form-group position-relative'>
															<input
																type='password'
																className={classNames('form-control input-password', {
																	'is-invalid': props.touched.password && props.errors.password
																})}
																placeholder='Mật khẩu'
																id='password'
																name='password'
																onChange={props.handleChange}
																onBlur={props.handleBlur}
																value={props.values.password}
															/>
															{props.touched.password && props.errors.password && (
																<div id='invalid-feedback'>{props.errors.password}</div>
															)}
															<div className='view-password-wrapper'>
																<i className='fa fa-eye-slash hide-password active' />
																<i href='#!' className='bi bi-eye'></i>
															</div>
														</div>
														<div className='form-group position-relative'>
															<input
																type='password'
																className={classNames('form-control input-password-repeat', {
																	'is-invalid': props.touched.password_confirm && props.errors.password_confirm
																})}
																placeholder='Nhập lại mật khẩu'
																id='password_confirm'
																name='password_confirm'
																onChange={props.handleChange}
																onBlur={props.handleBlur}
																value={props.values.password_confirm}
															/>
															{props.touched.password_confirm && props.errors.password_confirm && (
																<div id='invalid-feedback'>{props.errors.password_confirm}</div>
															)}
															<div className='view-password-wrapper'>
																<i className='fa fa-eye-slash hide-password active' />
																<i className='bi bi-eye'></i>
															</div>
														</div>
														<div className='form-group'>
															<input
																type='text'
																className={classNames('form-control', {
																	'is-invalid': props.touched.sdt && props.errors.sdt
																})}
																placeholder='So dien thoai'
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
														<div className='form-group'>
															<input
																type='text'
																className={classNames('form-control', {
																	'is-invalid': (props.touched.email && props.errors.email) || register.errors?.email
																})}
																placeholder='Email'
																id='email'
																name='email'
																onChange={props.handleChange}
																onBlur={props.handleBlur}
																value={props.values.email}
															/>
															{props.touched.email && props.errors.email && (
																<div id='invalid-feedback'>{props.errors.email}</div>
															)}
															{register.errors?.email && (
																<div className='invalid-feedback'>{register.errors?.email}</div>
															)}
														</div>
														<div className='form-group'>
															<input
																type='text'
																className={classNames('form-control', {
																	'is-invalid': props.touched.dia_chi && props.errors.dia_chi
																})}
																placeholder='Dia chi'
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

														<div className='form-main-actions'>
															{register.is_loading ? (
																<button disabled={props} className='checkout_register reg-button button' type='submit'>
																	Đăng ký
																	<img src='images/icon/arrow-right.svg' width={15} height={20} alt='arrow-right' />
																</button>
															) : (
																<button className='checkout_register reg-button button' type='submit'>
																	Đăng ký
																	<img src='images/icon/arrow-right.svg' width={15} height={20} alt='arrow-right' />
																</button>
															)}
														</div>
													</form>
												)}
											</Formik>
											{/*register-form*/}
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*main_login*/}
					</section>
				</main>
			</div>

			<div className='support-message'>
				Bạn gặp khó khăn khi đăng nhập, đăng ký? Gọi <a href='tel:18006800'>1800 6800</a>
				để được hỗ trợ tốt nhất.
			</div>
		</Layout>
	);
};
export default Register;
