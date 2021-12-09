import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login_RequestedAction } from '../../Redux/Action/authAction';
import Layout from '../Layout';
import * as yup from 'yup';
import { Formik } from 'formik';
import classNames from 'classnames';
const Login = () => {
	const dispatch = useDispatch();
	const login = useSelector((state) => state.auth.login);

	const initialValues = {
		user_name: '',
		password: ''
	};
	const validationSchema = yup.object({
		user_name: yup.string().required('Tài khoản là bắt buộc'),
		password: yup.string().required('Mật khẩu là bắt buộc')
	});

	const onSubmit = (values) => {
		const user = {
			user_name: values.user_name,
			password: values.password
		};
		console.log(user);
		dispatch(login_RequestedAction(user));
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
											className='nav-link'
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
											className='nav-link active'
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
										data-tabpane='loginTabContent'
										role='tabpanel'
										aria-labelledby='login-tab'
										id='login-tab'
									>
										<div className='login-form' id='login_from'>
											<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
												{(props) => (
													<form
														onSubmit={props.handleSubmit}
														className='login-width-password cm-ajax'
														name='main_login_form'
														action='#!'
													>
														<div id='cofirm_email'></div>

														<div className='form-group emailInput'>
															<input
																type='text'
																className={classNames('form-control', {
																	'is-invalid':
																		(props.touched.user_name && props.errors.user_name) || login.errors?.user_name
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
															{login.errors?.user_name && (
																<div className='invalid-feedback'>{login.errors?.user_name}</div>
															)}
														</div>
														<div className='form-group position-relative passwordInput'>
															<input
																type='password'
																className={classNames('form-control rounded-left', {
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
															{login.errors?.user && <div className='invalid-feedback'>{login.errors?.user}</div>}
															<div className='view-password-wrapper'>
																<i className='fa fa-eye-slash hide-password active' />
																<i className='bi bi-eye'></i>
															</div>
														</div>
														<div className='form-sub-actions sublinklogin'>
															<a href='#!' className='link-forget-password' data-tabpane='forgotPasswordTabContent'>
																Quên mật khẩu?
															</a>
															<a href='#!' className='link-login btn-login-sms' data-tabpane='loginTabContent'>
																Đăng nhập với SMS
															</a>
														</div>
														<div className='form-main-actions'>
														{login.is_loading ? (
															<button disabled={props} className='checkout_login login-button button login-width-password'>
																Đăng nhập
																<img src='images/icon/arrow-right.svg' width={15} height={20} alt='arrow-right' />
															</button>
														) : (
															<button className='checkout_login login-button button login-width-password'>
															Đăng nhập
															<img src='images/icon/arrow-right.svg' width={15} height={20} alt='arrow-right' />
														</button>
														)}
														</div>
													</form>
												)}
											</Formik>
											<div className='login-social-box'>
												<input type='hidden' id='return_url_social' defaultValue='#!' />
												<div className='other-login-method__wrapper'>
													<div className='other-login-method'>Hoặc</div>
												</div>
												<a
													href='#!'
													data-idp='facebook'
													className='checkout_login nk-text-facebook facebook-link cm-login-provider login-social button login-fb'
												>
													<img src='images/icon/icon-fb.svg' width={30} height={30} alt='icon-fb' />
													Đăng nhập bằng facebook
													<span className='ripple-animatee'></span>
												</a>
												<a
													href='#!'
													data-idp='google'
													className='checkout_login nk-text-google google-link cm-login-provider login-social button login-gg'
												>
													<img
														src='images/icon/30x30xicon-gg.png.pagespeed.ic.5MNmYFIWdX.webp'
														width={30}
														height={30}
														alt='icon-gg'
													/>
													Đăng nhập bằng google
												</a>
											</div>
											{/*login_from*/}
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*main_login*/}
					</section>
				</main>
				<div className='support-message'>
					Bạn gặp khó khăn khi đăng nhập, đăng ký? Gọi <a href='tel:18006800'>1800 6800</a>
					để được hỗ trợ tốt nhất.
				</div>
			</div>
		</Layout>
	);
};
export default Login;
