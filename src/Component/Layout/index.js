import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();
	const dsCategory = useSelector((state) => state.danh_muc.ds_category);
	const dsBrand = useSelector((state) => state.thuong_hieu.ds_brand);
	const login = useSelector((state) => state.auth.login);
	const dsCart = useSelector((state) => state.gio_hang.gio_hang);

	const [searchParams] = useSearchParams();
	const [search, setSearch] = useState(searchParams.get('q') || '');

	const onSearchSubmit = (e) => {
		e.preventDefault();
		try {
			navigate(`/search?q=${search}`);
		} catch (error) {
			console.log(error);
		}
	};
	const handleChangeSearch = (event) => {
		let q = event.target.value;
		console.log(q);
		if (q) {
			setSearch(q);
		} else {
			setSearch('');
		}
	};
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
			<div className='header-bn-top' style={{ background: '#ff3c12' }}>
				<div className='header-bn-normal'>
					<a className='abc'href='/' target='_blank'>
						<img src='images/header-43lvv.png' alt='' />
					</a>
				</div>

				<style dangerouslySetInnerHTML={{ __html: '.header-mobile-textlinks{background:#f99817;color:#c20000}' }} />
			</div>

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
											<strong>T???ng ????i mi???n ph??</strong>
										</span>
									</div>
								</div>
								<div className='header-search'>
									<div className='box_search'>
										<form id='formSearch' name='formSearch' onSubmit={onSearchSubmit}>
											<input
												name='keyword'
												id='search-keyword'
												type='text'
												className='text_search'
												placeholder='B???n mu???n t??m g?? ?'
												onChange={handleChangeSearch}
												value={search}
											/>
											<button id='do_submit' name='do_submit' type='submit' className='btn_search' value='T??m ki???m' />
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
												<span>H??? th???ng</span>
												<b style={{ display: 'block' }}>06 c???a h??ng</b>
											</button>
											<ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
												<li>
													<button className='dropdown-item' type='button'>
														396 Nguy???n Th??? Th???p, Ph?????ng T??n Quy, Qu???n 7, HCM
													</button>
												</li>
												<li>
													<button className='dropdown-item' type='button'>
														50 Tr???n Quang Kh???i, Ph?????ng T??n ?????nh, Qu???n 1, HCM
													</button>
												</li>
												<li>
													<button className='dropdown-item' type='button'>
														43 L?? V??n Vi???t, Ph?????ng Hi???p Ph??, Qu???n 9, HCM
													</button>
												</li>
												<li>
													<button className='dropdown-item' type='button'>
														437 Quang Trung, Ph?????ng 10, Qu???n G?? V???p, HCM
													</button>
												</li>
												<li>
													<button className='dropdown-item' type='button'>
														421 Ho??ng V??n Th???, Ph?????ng 2, Qu???n T??n B??nh, HCM
													</button>
												</li>
												<li>
													<button className='dropdown-item' type='button'>
														650 L?? H???ng Phong, Ph?????ng 10, Qu???n 10, HCM
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
												<span style={{ color: 'white' }}>Gi??? h??ng</span>
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
															<Link to='/Profile'>Th??ng tin</Link>
														</button>
													</li>
													<li>
														<button className='dropdown-item' type='button'>
															<Link to='/' onClick={handleLogout}>
																????ng xu???t
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
													<span>T??i kho???n</span>
												</button>
												<ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
													<li>
														<button className='dropdown-item' type='button'>
															<a href='/Login'>????ng nh???p</a>
														</button>
													</li>
													<li>
														<button href='/Register' className='dropdown-item' type='button'>
															<a href='/Register'>????ng k??</a>
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
								<span style={{ color: 'white' }}>Danh m???c s???n ph???m</span>
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
								<label>Th????ng Hi???u</label>
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
										<h4 className='tit'>H??? tr??? kh??ch h??ng</h4>
										<div className='inner'>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Mua h??ng tr??? g??p
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													H?????ng d???n mua h??ng online
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													B???o h??nh m??? r???ng
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Ch??nh s??ch b???o h??nh
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Ch??nh s??ch ?????i tr???
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Quy ?????nh h??nh th???c thanh to??n
												</a>
											</p>
										</div>
										<p className='view-more-links'>
											<a href='#!'>
												Xem th??m <i className='fa fa-caret-down' />
											</a>
										</p>
									</div>
									<div className='col-md-6 col-sm-6 col-xs-12 nopadding-left col-footer-2'>
										<h4 className='tit'>XTmobile</h4>
										<div className='inner'>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													V??? XTmobile
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Tuy???n d???ng
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Khuy???n m??i
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Li??n h???
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													H???i ????p
												</a>
											</p>
											<p>
												<a rel='nofollow' href='#!' target='_self'>
													Tra c???u b???o h??nh
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='col_ft col_payment_ft'>
								<div className='box_address_footer'>
									<div className='title_address'>T???ng ????i h??? tr???</div>
									<div className='content'>
										<div className='hotline-footer'>
											<p>
												T?? v???n mua h??ng (mi???n ph??): <strong>1800.6229</strong> (8h - 20h)
											</p>
											<p>
												H??? tr??? k??? thu???t: <strong> 1900.2043</strong> (8h - 20h)
											</p>
											<p>
												Khi???u n???i - G??p ??: <strong>088.9999933</strong> (8h - 20h)
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
									<div className='title_address'>H??? th???ng showroom ??i???n tho???i di ?????ng XTMOBILE</div>
									<div className='content'>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												396 Nguy???n Th??? Th???p, Ph?????ng T??n Quy, Qu???n 7, TP.HCM
											</a>
										</p>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												50 Tr???n Quang Kh???i, Ph?????ng T??n ?????nh, Qu???n 1, TP.HCM
											</a>
											&nbsp;
										</p>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												650 L?? H???ng Phong, Ph?????ng 10, Qu???n 10, TP.HCM
											</a>
											&nbsp;
										</p>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												421 Ho??ng V??n Th???, Ph?????ng 2, Q.T??n B??nh, TP.HCM (n???m gi???a nh?? h??ng Adora v?? CGV Ho??ng V??n Th???)
											</a>
										</p>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												43 L?? V??n Vi???t, Ph?????ng Hi???p Ph??, Qu???n 9, TP.HCM
											</a>
										</p>
										<p>
											<a rel='nofollow' href='#!' target='_self'>
												437 Quang Trung, Ph?????ng 10, Q.G?? V???p, TP.HCM
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
							<span>T?? v???n mua h??ng:</span>
							<a href='tel:1800.6229'>1800.1999 (mi???n ph??)</a>
						</div>
						<div className='footer-support row'>
							<span>Khi???u n???i, g??p ??:</span>
							<a href='tel:0889991999'>088.9991999 </a>
						</div>
						<div className='box_mnft row'>
							<h3 className='tit_mft' data-toggle='collapse' data-target='#address_ftm'>
								H??? th???ng showroom ??TDD XTMOBILE
							</h3>
							<div className='content collapse' id='address_ftm'>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										396 Nguy???n Th??? Th???p, Ph?????ng T??n Quy, Qu???n 7, TP.HCM
									</a>
								</p>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										{' '}
										50 Tr???n Quang Kh???i, Ph?????ng T??n ?????nh, Qu???n 1, TP.HCM
									</a>
									&nbsp;
								</p>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										650 L?? H???ng Phong, Ph?????ng 10, Qu???n 10, TP.HCM
									</a>
									&nbsp;
								</p>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										421 Ho??ng V??n Th???, Ph?????ng 2, Q.T??n B??nh, TP.HCM (n???m gi???a nh?? h??ng Adora v?? CGV Ho??ng V??n Th???)
									</a>
								</p>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										43 L?? V??n Vi???t, Ph?????ng Hi???p Ph??, Qu???n 9, TP.HCM
									</a>
								</p>
								<p>
									<a rel='nofollow' href='#!' target='_self'>
										437 Quang Trung, Ph?????ng 10, Q.G?? V???p, TP.HCM
									</a>
								</p>
							</div>
						</div>
						<div className='menu_footer row'>
							<div className='box_mnft'>
								<h3 className='tit_mft' data-toggle='collapse' data-target='#ftm_89'>
									H??? tr??? kh??ch h??ng
								</h3>{' '}
								<div id='ftm_89' className='collapse content'>
									{' '}
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Mua h??ng tr??? g??p
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											H?????ng d???n mua h??ng online
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											B???o h??nh m??? r???ng
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Ch??nh s??ch b???o h??nh
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Ch??nh s??ch ?????i tr???
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Quy ?????nh h??nh th???c thanh to??n
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
											V??? XTmobile
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Tuy???n d???ng
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Khuy???n m??i
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Li??n h???
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											H???i ????p
										</a>
									</p>
									<p>
										<a rel='nofollow' href='#!' target='_self'>
											Tra c???u b???o h??nh
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
									XTmobile.vn - H??? th???ng c???a h??ng b??n l??? <a href='/'>??i???n tho???i</a>, <a href='/'>ph??? ki???n</a> ch??nh
									h??ng. Cam k???t gi?? t???t v???i 7 c???a h??ng t???i Tp. H??? Ch?? Minh.
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
						<i>T??nh tr???ng ????n h??ng</i>
						<div className='box_tracking_order'>
							<h4>Tra c???u ????n h??ng</h4>
							<form name='tracking' action='/tinh-trang-don-hang' method='post'>
								<div className='input_order_code'>
									<input type='text' name='order_code' defaultValue placeholder='M?? ????n h??ng' required />
								</div>
								<div className='div_sm'>
									{' '}
									<input type='submit' name='tracking' defaultValue='T??m' className='btn_submit' />
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
						<i>C???p ????? th??nh vi??n</i>
					</li>
				</ul>
			</div>
		</>
	);
};
export default Layout;
