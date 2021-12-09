import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkloginAction, logout_RequestedAction } from '../../Redux/Action/authAction';
import { brand_RequestedAction } from '../../Redux/Action/brandAction';
import { category_RequestedAction } from '../../Redux/Action/categoryAction';

const Total = function (arr, prop) {
	return arr.reduce(function (a, b) {
		return a + b[prop];
	}, 0);
};
const Layout = ({ children, isHome = false }) => {
	const dispatch = useDispatch();
	const dsCategory = useSelector((state) => state.danh_muc.ds_category);
	const dsBrand = useSelector((state) => state.thuong_hieu.ds_brand);
	const login = useSelector((state) => state.auth.login);
	const dsCart = useSelector((state) => state.gio_hang.gio_hang);

	console.log(dsBrand);

	useEffect(() => {
		dispatch(category_RequestedAction());
		dispatch(brand_RequestedAction());
		dispatch(checkloginAction());
	}, [dispatch]);
	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout_RequestedAction());
	};
	return (
		<>
			<div className='mf-overlay' />
			<header className='header'>
				<div className='div_menu'>
					<div id='vnt-menutop' className='header_nav'>
						<div className='container'>
							<div className='header-top'>
								<div className='header-left'>
									<div className='logo'>
										<h1>
											<a href='/' target='_self'>
												<img src='/images/logoxt-01-01_1.png' width={172} alt='' className='png' />
											</a>{' '}
										</h1>
									</div>
									<div className='callcenter'>
										<i />
										<span>
											<a href='#!'>1800.1999</a>
											<strong>Tổng đài miễn phí</strong>
										</span>
									</div>
								</div>
								<div className='header-search'>
									<div className='box_search'>
										<form id='formSearch' name='formSearch' method='post' autoComplete='off'>
											<input name='do_search' defaultValue={1} type='hidden' />
											<input
												name='keyword'
												id='search-keyword'
												type='text'
												required
												className='text_search'
												placeholder='Bạn muốn tìm gì ?'
												defaultValue={''}
												autoComplete='off'
											/>
											<input type='hidden' id='fpc_id' name='fpc_id' />
											<button id='do_submit' name='do_submit' type='submit' className='btn_search' value='Tìm kiếm' />
										</form>
										<div id='SuggestSearch' />
										<div className='clear' />
									</div>
								</div>
								<div className='header-right'>
									<div className='header-inner'>
										<div className='dropdown'>
											<button
												style={{ height: '40px' }}
												className='btn btn-secondary dropdown-toggle'
												type='button'
												id='dropdownMenu2'
												data-bs-toggle='dropdown'
												aria-expanded='false'
											>
												<span>Hệ thống</span>
												<b style={{ display: 'block' }}>06 cửa hàng</b>
											</button>
											<ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
												<li>
													<button className='dropdown-item' type='button'>
														396 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, HCM
													</button>
												</li>
												<li>
													<button className='dropdown-item' type='button'>
														50 Trần Quang Khải, Phường Tân Định, Quận 1, HCM
													</button>
												</li>
												<li>
													<button className='dropdown-item' type='button'>
														43 Lê Văn Việt, Phường Hiệp Phú, Quận 9, HCM
													</button>
												</li>
												<li>
													<button className='dropdown-item' type='button'>
														437 Quang Trung, Phường 10, Quận Gò Vấp, HCM
													</button>
												</li>
												<li>
													<button className='dropdown-item' type='button'>
														421 Hoàng Văn Thụ, Phường 2, Quận Tân Bình, HCM
													</button>
												</li>
												<li>
													<button className='dropdown-item' type='button'>
														650 Lê Hồng Phong, Phường 10, Quận 10, HCM
													</button>
												</li>
											</ul>
										</div>
										<div className='header-item header-box-cart'>
											<a href='/Cart' className='border-radius-5'>
												<i>
													<strong style={{ display: 'block' }} className='qty-cart'>
														{Total(dsCart.cart.ctcart, 'so_luong')}
													</strong>
												</i>
												<span style={{ color: 'white' }}>Giỏ hàng</span>
											</a>
										</div>
										{login.is_authenticated ? (
											<div className='dropdown'>
												<button
													style={{ height: '40px' }}
													className='btn btn-secondary dropdown-toggle'
													type='button'
													id='dropdownMenu2'
													data-bs-toggle='dropdown'
													aria-expanded='false'
												>
													<span>{login.user.user_name}</span>
												</button>
												<ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
													<li>
														<button className='dropdown-item' type='button'>
															<Link to='/Profile'>Thông tin</Link>
														</button>
													</li>
													<li>
														<button className='dropdown-item' type='button'>
															<Link to='/' onClick={handleLogout}>
																Đăng xuất
															</Link>
														</button>
													</li>
												</ul>
											</div>
										) : (
											<div className='dropdown'>
												<button
													style={{ height: '40px' }}
													className='btn btn-secondary dropdown-toggle'
													type='button'
													id='dropdownMenu2'
													data-bs-toggle='dropdown'
													aria-expanded='false'
												>
													<span>Tài khoản</span>
												</button>
												<ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
													<li>
														<button className='dropdown-item' type='button'>
															<a href='/Login'>Đăng nhập</a>
														</button>
													</li>
													<li>
														<button href='/Register' className='dropdown-item' type='button'>
															<a href='/Register'>Đăng ký</a>
														</button>
													</li>
												</ul>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='header-nav'>
					<div className='container'>
						<div className={`menutop ${isHome ? '' : 'menutop-hover'}`}>
							<a href='#!' className='menu-button border-radius-6'>
								<i />
								<span style={{ color: 'white' }}>Danh mục sản phẩm</span>
							</a>
							<div className={`box-submenu border-radius-5 ${isHome ? 'showMenu' : ''}`}>
								<ul className='dropdown '>
									{dsCategory.danh_muc.map((dm) => (
										<li className='icon_1' id='menu_1' key={dm.id}>
											<Link to={`/Product/${dm.id}`} target='_self'>
												<i className='bi bi-cpu'></i>
												<span>{dm.ten_dm}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='header-links border-radius-5'>
							<div className='inner'>
								<label>Thương Hiệu</label>
								<ul>
									{dsBrand.thuong_hieu.map((th) => (
										<li key={th.id}>
											<Link to={`/ProductTH/${th.id}`}>{th.ten_th}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='clearfix' />
			</header>
			{children}
			<div id='vnt-footer'>
				<div className='info_footer pc'>
					<div className='container'>
						<div className='row'>
							<div className='col_ft col_menu_ft'>
								<div className='menu_footer row'>
									<div className='col-md-6 col-sm-6 col-xs-12 col-footer-1'>
										<h4 className='tit'>Hỗ trợ khách hàng</h4>
										<div className='inner'>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Mua hàng trả góp
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Hướng dẫn mua hàng online
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Bảo hành mở rộng
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Chính sách bảo hành
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Chính sách đổi trả
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Quy định hình thức thanh toán
												</a>
											</p>
										</div>
										<p className='view-more-links'>
											<a href='#!'>
												Xem thêm <i className='fa fa-caret-down' />
											</a>
										</p>
									</div>
									<div className='col-md-6 col-sm-6 col-xs-12 nopadding-left col-footer-2'>
										<h4 className='tit'>XTmobile</h4>
										<div className='inner'>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Về XTmobile
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Tuyển dụng
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Khuyến mãi
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Liên hệ
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Hỏi đáp
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Tra cứu bảo hành
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='col_ft col_payment_ft'>
								<div className='box_address_footer'>
									<div className='title_address'>Tổng đài hỗ trợ</div>
									<div className='content'>
										<div className='hotline-footer'>
											<p>
												Tư vấn mua hàng (miễn phí): <strong>1800.6229</strong> (8h - 20h)
											</p>
											<p>
												Hỗ trợ kỹ thuật: <strong> 1900.2043</strong> (8h - 20h)
											</p>
											<p>
												Khiếu nại - Góp ý: <strong>088.9999933</strong> (8h - 20h)
											</p>
										</div>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												<img alt='bct' src='images/icon/dathongbao.jpg' style={{ width: 115, height: 43 }} />
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className='col_ft col_address_ft'>
								<div className='box_address_footer'>
									<div className='title_address'>Hệ thống showroom điện thoại di động XTMOBILE</div>
									<div className='content'>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												396 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP.HCM
											</a>
										</p>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												50 Trần Quang Khải, Phường Tân Định, Quận 1, TP.HCM
											</a>
											&nbsp;
										</p>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												650 Lê Hồng Phong, Phường 10, Quận 10, TP.HCM
											</a>
											&nbsp;
										</p>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												421 Hoàng Văn Thụ, Phường 2, Q.Tân Bình, TP.HCM (nằm giữa nhà hàng Adora và CGV Hoàng Văn Thụ)
											</a>
										</p>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												43 Lê Văn Việt, Phường Hiệp Phú, Quận 9, TP.HCM
											</a>
										</p>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												437 Quang Trung, Phường 10, Q.Gò Vấp, TP.HCM
											</a>
										</p>
										<p>
											<img alt='chapnhanhthanhtoan' src='images/icon/icon-thanhtoan-2020.jpg' />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='footer-links'></div>
				</div>
				<footer className='m_footer_menu sp'>
					<div className='container'>
						<div className='footer-support row'>
							<span>Tư vấn mua hàng:</span>
							<a href='tel:1800.6229'>1800.1999 (miễn phí)</a>
						</div>
						<div className='footer-support row'>
							<span>Khiếu nại, góp ý:</span>
							<a href='tel:0889991999'>088.9991999 </a>
						</div>
						<div className='box_mnft row'>
							<h3 className='tit_mft' data-toggle='collapse' data-target='#address_ftm'>
								Hệ thống showroom ĐTDD XTMOBILE
							</h3>
							<div className='content collapse' id='address_ftm'>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										396 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP.HCM
									</a>
								</p>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										{' '}
										50 Trần Quang Khải, Phường Tân Định, Quận 1, TP.HCM
									</a>
									&nbsp;
								</p>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										650 Lê Hồng Phong, Phường 10, Quận 10, TP.HCM
									</a>
									&nbsp;
								</p>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										421 Hoàng Văn Thụ, Phường 2, Q.Tân Bình, TP.HCM (nằm giữa nhà hàng Adora và CGV Hoàng Văn Thụ)
									</a>
								</p>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										43 Lê Văn Việt, Phường Hiệp Phú, Quận 9, TP.HCM
									</a>
								</p>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										437 Quang Trung, Phường 10, Q.Gò Vấp, TP.HCM
									</a>
								</p>
							</div>
						</div>
						<div className='menu_footer row'>
							<div className='box_mnft'>
								<h3 className='tit_mft' data-toggle='collapse' data-target='#ftm_89'>
									Hỗ trợ khách hàng
								</h3>{' '}
								<div id='ftm_89' className='collapse content'>
									{' '}
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Mua hàng trả góp
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Hướng dẫn mua hàng online
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Bảo hành mở rộng
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Chính sách bảo hành
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Chính sách đổi trả
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Quy định hình thức thanh toán
										</a>
									</p>
								</div>
							</div>
							<div className='box_mnft'>
								<h3 className='tit_mft' data-toggle='collapse' data-target='#ftm_90'>
									XTmobile
								</h3>{' '}
								<div id='ftm_90' className='collapse content'>
									{' '}
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Về XTmobile
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Tuyển dụng
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Khuyến mãi
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Liên hệ
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Hỏi đáp
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Tra cứu bảo hành
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</footer>
				<div className='div_copyright'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-12 text-center'>
								<p className='note_slogan_footer'>
									XTmobile.vn - Hệ thống cửa hàng bán lẻ <a href='/'>điện thoại</a>, <a href='/'>phụ kiện</a> chính
									hãng. Cam kết giá tốt với 7 cửa hàng tại Tp. Hồ Chí Minh.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='box_shortcut pc'>
				<ul>
					<li>
						<img src='images/icon/icon_top_box_shortcut.png' alt='' />{' '}
					</li>
					<li className='div_li_tracking'>
						<a href='#!'> </a>
						<i>Tình trạng đơn hàng</i>
						<div className='box_tracking_order'>
							<h4>Tra cứu đơn hàng</h4>
							<form name='tracking' action='/tinh-trang-don-hang' method='post'>
								<div className='input_order_code'>
									<input type='text' name='order_code' defaultValue placeholder='Mã đơn hàng' required />
								</div>
								<div className='div_sm'>
									{' '}
									<input type='submit' name='tracking' defaultValue='Tìm' className='btn_submit' />
								</div>
							</form>
						</div>
					</li>
					<li className='shortcut_news'>
						<a href='#!'> </a>
						<i>Feedback</i>
					</li>
					<li className='shortcut_level_member'>
						<a href='#!'> </a>
						<i>Cấp độ thành viên</i>
					</li>
				</ul>
			</div>
		</>
	);
};
export default Layout;
