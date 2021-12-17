import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { slproduct_RequestedAction } from '../../Redux/Action/productAction';

import Layout from '../Layout';
import Productnew from '../Product/product_new';

const Home = () => {
	const dispatch = useDispatch();
	const SLProduct = useSelector((state) => state.san_pham.sl_product);

	const formatter = new Intl.NumberFormat('vi', {
		style: 'currency',
		currency: 'VND'
	});
	console.log(SLProduct);
	useEffect(() => {
		dispatch(slproduct_RequestedAction());
	}, [dispatch]);
	return (
		<>
			<Layout isHome>
				<div id='main-body'>
					<div className='box-main-body'>
						<div className='container-fluid nopadding' />
					</div>
					<div id='xtm-container'>
						<div className='xt-body-top'>
							<div className='container'>
								<div className='banner_news row'>
									<div className='column pull-left column-first'>
										<div className='skSliderHome'>
											<div id='sync1' className='owl-carousel owl-theme'>
												<div className='owl-stage' style={{ width: '13889' }}>
													<div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
														<div className='carousel-indicators'>
															<button
																type='button'
																data-bs-target='#carouselExampleCaptions'
																data-bs-slide-to={0}
																className='active'
																aria-current='true'
																aria-label='Slide 1'
															/>
															<button
																type='button'
																data-bs-target='#carouselExampleCaptions'
																data-bs-slide-to={1}
																aria-label='Slide 2'
															/>
															<button
																type='button'
																data-bs-target='#carouselExampleCaptions'
																data-bs-slide-to={2}
																aria-label='Slide 3'
															/>
															<button
																type='button'
																data-bs-target='#carouselExampleCaptions'
																data-bs-slide-to={3}
																aria-label='Slide 4'
															/>
															<button
																type='button'
																data-bs-target='#carouselExampleCaptions'
																data-bs-slide-to={4}
																aria-label='Slide 5'
															/>
														</div>
														<div className='carousel-inner'>
															<div className='carousel-item active' style={{ width: '731 !important' }}>
																<img src='images/zfold3-3-11.png' className='d-block w-100' alt='...' />
															</div>
															<div className='carousel-item' style={{ width: '731 !important' }}>
																<img src='images/ip13p-min.jpg' className='d-block w-100' alt='...' />
															</div>
															<div className='carousel-item' style={{ width: '731' }}>
																<img src='images/4-11-s21utra5.png' className='d-block w-100' alt='...' />
															</div>
															<div className='carousel-item' style={{ width: '731' }}>
																<img src='images/21MI11LITE5G.png' className='d-block w-100' alt='...' />
															</div>
															<div className='carousel-item' style={{ width: '731' }}>
																<img src='images/4-11iphone8plus-1-11-min_1.jpg' className='d-block w-100' alt='...' />
															</div>
														</div>
														<button
															className='carousel-control-prev'
															type='button'
															data-bs-target='#carouselExampleCaptions'
															data-bs-slide='prev'
														>
															<span className='carousel-control-prev-icon' aria-hidden='true' />
															<span className='visually-hidden'>Previous</span>
														</button>
														<button
															className='carousel-control-next'
															type='button'
															data-bs-target='#carouselExampleCaptions'
															data-bs-slide='next'
														>
															<span className='carousel-control-next-icon' aria-hidden='true' />
															<span className='visually-hidden'>Next</span>
														</button>
													</div>
													{/* */}
												</div>
											</div>
											<div id='sync2' className='owl-carousel owl-theme'>
												<div className='owl-stage' style={{ width: '1316px' }}>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Deal chất lượng giảm đến 1.8 triệu</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Galaxy S21 Ultra 5G giá chỉ 20.9 triệu</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Mua Z Fold3 5G Giảm đến 4 triệu</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Đăng kí nhận thông tin AirPod 3</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Trả góp nhanh Thủ tục đơn giản</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Mua Galaxy S10 Plus Giá chỉ 7,3 triệu</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Macbook Air | Pro M1 Giá từ 27.2 triệu</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>iPhone 8 Plus Chỉ còn 7,6 triệu</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Xiaomi Mi 11 Lite 5G Chỉ còn 7,8 triệu</h3>
														</div>
													</div>
												</div>
											</div>
										</div>
										<input type='hidden' id='total_banner' defaultValue={9} />
									</div>
									<div className='column pull-right column-last' style={{ paddingLeft: '10px' }}>
										<div className='advertise_main clearfix'>
											<p className='advertise'>
												<a href='#!' target='_blank'>
													<img border={0} src='images/bn-right-trang_chu-min.jpg' width={390} alt='' />
												</a>
											</p>
											<p className='advertise'>
												<a href='#!' target='_blank'>
													<img border={0} src='images/4-11combo-ip13-bnright-min.jpg' width={390} alt='' />
												</a>
											</p>
										</div>
										<div className='box-news-focus'>
											<div className='news-focus-head'>
												<h4>Tin khuyến mãi</h4>
												<a href='#!'>Xem thêm</a>
											</div>
											<div className='ct_news border-radius-6'>
												<div className='item clearfix'>
													<a title='Ưu đãi hấp dẫn: Mua Combo phụ kiện iPhone 13 series tiết kiệm đến 680K' href='##!'>
														<span>
															<h4>Ưu đãi hấp dẫn: Mua Combo phụ kiện iPhone 13 series tiết kiệm đến 680K</h4>
														</span>
													</a>
												</div>
												<div className='item clearfix'>
													<a title='Săn deal cực sốc: Mua Galaxy Note 10 Plus 5G, S20 5G giảm đến 1,8 triệu' href='#!'>
														<span>
															<h4>Săn deal cực sốc: Mua Galaxy Note 10 Plus 5G, S20 5G giảm đến 1,8 triệu</h4>
														</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div id='xtm-content' className='bg-white padding-top-10'>
						<div className='container'>
							<div className='mainn'>
								<p className='p-bottom-10'>
									<a href='#!' target='_blank'>
										{' '}
										<img src='images/ip13-1.png' width={1200} alt='' className='png' />
									</a>
								</p>
								<div className='box-flashsale box-flashsale-ip12'>
									<div className='box-flash-sell  group-slide-featured'>
										<div className='title_box clearfix'>
											<span className='flashsaletext title_product'>Săn deal giá hời - Giao hàng tận nơi</span>
										</div>
										<div className='box-body-flashsale'>
											<div className='owl-product-flash-sell  owl-carousel '>
												<div className='owl-stage-outer'>
													<div className='owl-stage' style={{ width: '1428px' }}>
														{SLProduct.san_pham.map((sp) => (
															<div className='owl-item' style={{ width: '228px', marginRight: '10px' }} key={sp.id}>
																<div className='item product-grid'>
																	<div className='boxItem'>
																		<div className='div_images'>
																			<Link to={`/Detail/${sp.id}`}>
																				<img
																					src={`${sp.image_url}`}
																					alt='iPhone 12 64GB (Cũ 99%)'
																					title='iPhone 12 64GB (Cũ 99%)'
																				/>
																			</Link>
																			<div className='group-flag-top'>
																				<span className='flag flag-installment'>Trả góp 0%</span>
																				<span className='flag-discount'>-16%</span>
																			</div>
																		</div>
																		<div className='ct_info info'>
																			<h3>
																				<Link to={`/Detail/${sp.id}`}>{sp.ten_sp}</Link>
																			</h3>
																			<div className='div_price'>
																				<p className='price'>
																					{formatter.format(sp.gia)}
																					<span>
																						{formatter.format(sp.gia_goc)}
																						<span className='mobile-discount'> -16%</span>
																					</span>
																				</p>
																			</div>
																			<p className='nt-prepaid-installment'>
																				Trả trước <strong>5.497.000 đ</strong>
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='box-slider-center'>
									<div className='slideshow-center owl-carousel'>
										<div className='owl-stage-outer'>
											<div className='owl-stage' style={{ width: '1460px' }}>
												<div className='owl-item' style={{ width: '386.667px', marginRight: '20px' }}>
													<div className='item'>
														<a href='#!' target='_blank'>
															{' '}
															<img src='images/poco-x3-1-11.jpg' width={400} alt='' className='png' />
														</a>
													</div>
												</div>
												<div className='owl-item' style={{ width: '386.667px', marginRight: '20px' }}>
													<div className='item'>
														<a href='#!' target='_blank'>
															{' '}
															<img src='images/s105g-29-min.jpg' width={400} alt='' className='png' />
														</a>
													</div>
												</div>
												<div className='owl-item' style={{ width: '386.667px', marginRight: '20px' }}>
													<div className='item'>
														<a href='#!' target='_blank'>
															{' '}
															<img src='images/web-tuyendung-2021.jpg' width={400} alt='' className='png' />
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='box_accessories'>
									<div className='box-accessories-head'>
										<span className='title_product'>
											<strong style={{ display: 'contents' }}>Điện thoại</strong> nổi bật
										</span>
										<div className='title_box clearfix'>
											<div>
												<span>
													<a href='#!'>iPhone 12 Pro | 12 Pro Max</a> <a href='#!'>iPhone 11 | 11 Pro | 11 Pro Max</a>{' '}
													<a href='##!'>iPhone Xs | Xs Max Max</a> <a href='#!'>Galaxy S21+ | S21 Ultra</a>{' '}
													<a href='#!'>Galaxy S10 | S10+</a>
												</span>
											</div>
										</div>
									</div>

									<Productnew />
								</div>
								<div className='box-accessories-featured-main'>
									<div className='box_accessories_homepage'>
										<div className='box_accessories_homepage_head'>
											<div className='title_box'>Phụ kiện nổi bật</div>
											<div className='cat-acc-left'>
												<div className='cat-pc'>
													<ul>
														<li>
															<a href='#!'>Pin dự phòng</a>
														</li>
														<li>
															<a href='#!'>Tai nghe</a>
														</li>
														<li>
															<a href='#!'>Loa Bluetooth</a>
														</li>
														<li>
															<a href='#!'>Ốp lưng - Bao da</a>
														</li>
														<li>
															<a href='#!'>Dán cường lực</a>
														</li>
													</ul>
												</div>
												<div className='cat-mb' />
											</div>
										</div>
										<div className='box-content'>
											<div className='box-product-tab'>
												<div className='list_product_base grid-bound-home  grid-product-accessories'>
													<div className='item item product-base-grid'>
														<div className='boxItem-acc'>
															<div className='div_images pic'>
																<a target='_blank' href='##!'>
																	<img
																		src='images/sanpham/(600x600)_crop_anker-powercore-15600-mah-black-xtmobile_2.jpg'
																		alt='Pin dự phòng Anker PowerCore 15.600 mAh'
																		title='Pin dự phòng Anker PowerCore 15.600 mAh'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Pin dự phòng Anker PowerCore 15.600 mAh</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		850.000 đ
																		<span>
																			1.100.000 đ<span className='mobile-discount'> -22%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	Ưu đãi từ ngày&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
																</div>
															</div>
														</div>
													</div>
													<div className='item item product-base-grid'>
														<div className='boxItem-acc'>
															<div className='div_images pic'>
																<a href='#!'>
																	<img
																		src='images/sanpham/(600x600)_crop_anker-powercore-10mah-red-xtmobile.jpg'
																		alt='Pin dự phòng Anker PowerCore 10.000 mAh'
																		title='Pin dự phòng Anker PowerCore 10.000 mAh'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Pin dự phòng Anker PowerCore 10.000 mAh</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		370.000 đ
																		<span>
																			650.000 đ<span className='mobile-discount'> -43%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	Ưu đãi từ ngày&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
																</div>
															</div>
														</div>
													</div>
													<div className='item item product-base-grid'>
														<div className='boxItem-acc'>
															<div className='div_images pic'>
																<a href='#!'>
																	<img
																		src='images/sanpham/(600x600)_crop_pin-du-phong-anker-powercore-13-000-mah-xtmobile.jpg'
																		alt='Pin dự phòng Anker Powercore 13.000 mAh'
																		title='Pin dự phòng Anker Powercore 13.000 mAh'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Pin dự phòng Anker Powercore 13.000 mAh</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		790.000 đ
																		<span>
																			950.000 đ<span className='mobile-discount'> -16%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	Ưu đãi từ ngày&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
																</div>
															</div>
														</div>
													</div>
													<div className='item item product-base-grid'>
														<div className='boxItem-acc'>
															<div className='div_images pic'>
																<a href='#!'>
																	<img
																		src='images/sanpham/(600x600)_crop_600_tai_nghe_beats_monster_xtmobile.jpg'
																		alt='Tai nghe iBeats Monster'
																		title='Tai nghe iBeats Monster'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Tai nghe iBeats Monster</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		320.000 đ
																		<span>
																			600.000 đ<span className='mobile-discount'> -46%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	Ưu đãi từ ngày&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
																</div>
															</div>
														</div>
													</div>
													<div className='item item product-base-grid'>
														<div className='boxItem-acc'>
															<div className='div_images pic'>
																<a href='#!'>
																	<img
																		src='images/sanpham/(600x600)_crop_tai_nghe_true_wireless_soundpeats_true_air_2_xtmobile_den-min.jpg'
																		alt='Tai nghe True Wireless Earbuds SoundPeats TrueAir 2'
																		title='Tai nghe True Wireless Earbuds SoundPeats TrueAir 2'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Tai nghe True Wireless Earbuds SoundPeats TrueAir 2</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		720.000 đ
																		<span>
																			1.300.000 đ<span className='mobile-discount'> -44%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	Ưu đãi từ ngày&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
																</div>
															</div>
														</div>
													</div>
													<div className='item item product-base-grid'>
														<div className='boxItem-acc'>
															<div className='div_images pic'>
																<a href='#!'>
																	<img
																		src='images/sanpham/(600x600)_crop_tai-nghe-true-wireless-aukey-ep-m1-xtmobile.jpg'
																		alt='Tai nghe True Wireless Aukey EP-M1'
																		title='Tai nghe True Wireless Aukey EP-M1'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Tai nghe True Wireless Aukey EP-M1</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		570.000 đ
																		<span>
																			790.000 đ<span className='mobile-discount'> -27%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	Ưu đãi từ ngày&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
																</div>
															</div>
														</div>
													</div>
													<div className='item item product-base-grid'>
														<div className='boxItem-acc'>
															<div className='div_images pic'>
																<a href='#!'>
																	<img
																		src='images/sanpham/(600x600)_crop_600_soundpeats_true_wing_xtmobile.jpg'
																		alt='Tai nghe True Wireless Earbuds SoundPeats TrueWings'
																		title='Tai nghe True Wireless Earbuds SoundPeats TrueWings'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Tai nghe True Wireless Earbuds SoundPeats TrueWings</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		790.000 đ
																		<span>
																			1.250.000 đ<span className='mobile-discount'> -36%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	Ưu đãi từ ngày&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
																</div>
															</div>
														</div>
													</div>
													<div className='item item product-base-grid'>
														<div className='boxItem-acc'>
															<div className='div_images pic'>
																<a href='#!'>
																	<img
																		src='images/sanpham/(600x600)_crop_tai-nghe-true-wireless-jbl-tune-220.jpg'
																		alt='Tai nghe True Wireless JBL Tune 220'
																		title='Tai nghe True Wireless JBL Tune 220'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Tai nghe True Wireless JBL Tune 220</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		1.990.000 đ
																		<span>
																			2.890.000 đ<span className='mobile-discount'> -31%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	Ưu đãi từ ngày&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='news-promotion'>
						<div className='container'>
							<div className='title_box'>Tin khuyến mãi trong tuần</div>
							<div className='sl-promotion owl-carousel'>
								<div className='owl-stage-outer'>
									<div className='owl-stage' style={{ width: '6507px' }}>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a title='Ưu đãi hấp dẫn: Mua Combo phụ kiện iPhone 13 series tiết kiệm đến 680K' href='#!'>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/11_2021/04/thumbs/(480x480)_crop_pk-13.jpg'
															alt='Ưu đãi hấp dẫn: Mua Combo phụ kiện iPhone 13 series tiết kiệm đến 680K'
															title='Ưu đãi hấp dẫn: Mua Combo phụ kiện iPhone 13 series tiết kiệm đến 680K'
														/>
													</div>
													<h4>Ưu đãi hấp dẫn: Mua Combo phụ kiện iPhone 13 series tiết kiệm đến 680K</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a title='Săn deal cực sốc: Mua Galaxy Note 10 Plus 5G, S20 5G giảm đến 1,8 triệu' href='#!'>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/11_2021/03/thumbs/(480x480)_crop_tt-sale-dautuan-3-11-min.jpg'
															alt='Săn deal cực sốc: Mua Galaxy Note 10 Plus 5G, S20 5G giảm đến 1,8 triệu'
															title='Săn deal cực sốc: Mua Galaxy Note 10 Plus 5G, S20 5G giảm đến 1,8 triệu'
														/>
													</div>
													<h4>Săn deal cực sốc: Mua Galaxy Note 10 Plus 5G, S20 5G giảm đến 1,8 triệu</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a title='Mua trả góp tại XTmobile: Đơn giản - Tiện lợi - Nhanh chóng' href='#!'>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/31/thumbs/(480x480)_crop_tt-muatragop.png'
															alt='Mua trả góp tại XTmobile: Đơn giản - Tiện lợi - Nhanh chóng'
															title='Mua trả góp tại XTmobile: Đơn giản - Tiện lợi - Nhanh chóng'
														/>
													</div>
													<h4>Mua trả góp tại XTmobile: Đơn giản - Tiện lợi - Nhanh chóng</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a title='Phụ kiện giảm sốc: Pin dự phòng, tai nghe Bluetooth giảm đến 57%' href='#!'>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/30/thumbs/(480x480)_crop_tt-phukien-1-14-min.jpg'
															alt='Phụ kiện giảm sốc: Pin dự phòng, tai nghe Bluetooth giảm đến 57%'
															title='Phụ kiện giảm sốc: Pin dự phòng, tai nghe Bluetooth giảm đến 57%'
														/>
													</div>
													<h4>Phụ kiện giảm sốc: Pin dự phòng, tai nghe Bluetooth giảm đến 57%</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a
													title='Ưu đãi khách tỉnh - Sale cực đỉnh: Mua Galaxy Note 10 Plus 5G chỉ từ 7,9 triệu'
													href='#!'
												>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/28/thumbs/(480x480)_crop_tt-uudai-27-10_1.png'
															alt='Ưu đãi khách tỉnh - Sale cực đỉnh: Mua Galaxy Note 10 Plus 5G chỉ từ 7,9 triệu'
															title='Ưu đãi khách tỉnh - Sale cực đỉnh: Mua Galaxy Note 10 Plus 5G chỉ từ 7,9 triệu'
														/>
													</div>
													<h4>Ưu đãi khách tỉnh - Sale cực đỉnh: Mua Galaxy Note 10 Plus 5G chỉ từ 7,9 triệu</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a
													title='Săn deal cuối tháng: Mua Galaxy Note 10 Plus 5G, S20 5G giảm đến 2 triệu đồng'
													href='#!'
												>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/28/thumbs/(480x480)_crop_tt-sale-samsung-29-10.png'
															alt='Săn deal cuối tháng: Mua Galaxy Note 10 Plus 5G, S20 5G giảm đến 2 triệu đồng'
															title='Săn deal cuối tháng: Mua Galaxy Note 10 Plus 5G, S20 5G giảm đến 2 triệu đồng'
														/>
													</div>
													<h4>Săn deal cuối tháng: Mua Galaxy Note 10 Plus 5G, S20 5G giảm đến 2 triệu đồng</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a
													title='Săn deal giá hời: Mua Redmi K40 5G, Black Shark 4, Xiaomi Mi 11 Lite giảm đến 1,7 triệu'
													href='#!'
												>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/21/thumbs/(480x480)_crop_tt-xiaomi-21-10.png'
															alt='Săn deal giá hời: Mua Redmi K40 5G, Black Shark 4, Xiaomi Mi 11 Lite giảm đến 1,7 triệu'
															title='Săn deal giá hời: Mua Redmi K40 5G, Black Shark 4, Xiaomi Mi 11 Lite giảm đến 1,7 triệu'
														/>
													</div>
													<h4>
														Săn deal giá hời: Mua Redmi K40 5G, Black Shark 4, Xiaomi Mi 11 Lite giảm đến 1,7 triệu
													</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a
													title='Phụ kiện xịn giá sốc: Pin dự phòng, tai nghe Bluetooth, cáp sạc giảm đến 58%'
													href='#!'
												>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/17/thumbs/(480x480)_crop_tt-pk-18-10-min.jpg'
															alt='Phụ kiện xịn giá sốc: Pin dự phòng, tai nghe Bluetooth, cáp sạc giảm đến 58%'
															title='Phụ kiện xịn giá sốc: Pin dự phòng, tai nghe Bluetooth, cáp sạc giảm đến 58%'
														/>
													</div>
													<h4>Phụ kiện xịn giá sốc: Pin dự phòng, tai nghe Bluetooth, cáp sạc giảm đến 58%</h4>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='section-news-latest'>
						<div className='box-group-news'>
							<div className='container'>
								<div className='hot-news'>
									<div className='item'>
										<a title='iPhone 14 series ra mắt có thể sẽ lỡ hẹn với tính năng mới là này' href='#!'>
											<div className='image'>
												<img
													src='images/(480x2)_crop_tinh-nang-moi-tren-iphone-14-xtmobile.jpg'
													alt='iPhone 14 series ra mắt có thể sẽ lỡ hẹn với tính năng mới là này'
													title='iPhone 14 series ra mắt có thể sẽ lỡ hẹn với tính năng mới là này'
												/>
											</div>
											<div className='ninfo'>
												<h4>iPhone 14 series ra mắt có thể sẽ lỡ hẹn với tính năng mới là này</h4>

												<p>Sau khi iPhone 13 series đã có màn chào sân ấn tượng thì thông tin về model ...</p>
											</div>
										</a>
									</div>
									<div className='item'>
										<a title='Nên mua Macbook Air M1 hay Macbook Pro M1 2020 để có trải nghiệm tốt nhất?' href='#!'>
											<div className='image'>
												<img
													src='images/(480x2)_crop_macbook-air-m1-va-macbook-pro-m1-xtmobile.jpg'
													alt='Nên mua Macbook Air M1 hay Macbook Pro M1 2020 để có trải nghiệm tốt nhất?'
													title='Nên mua Macbook Air M1 hay Macbook Pro M1 2020 để có trải nghiệm tốt nhất?'
												/>
											</div>
											<div className='ninfo'>
												<h4>Nên mua Macbook Air M1 hay Macbook Pro M1 2020 để có trải nghiệm tốt nhất?</h4>

												<p>Macbook Air M1 và Macbook Pro M1 đều được phát triển nhằm vào phần khúc tầm cao. ...</p>
											</div>
										</a>
									</div>
								</div>
								<div className='latest-news'>
									<div className='inner'>
										<h2>Tin tức</h2>
										<div className='item'>
											<a title='Lý do iPhone 13 series đáng mua dù không nhiều nâng cấp đột phá?' href='#!'>
												<h4>Lý do iPhone 13 series đáng mua dù không nhiều nâng cấp đột phá?</h4>

												<p>Mặc dù không nhiều nâng cấp đột phá nhưng loạt iPhone 13 vẫn là cái tên ...</p>
											</a>
										</div>
										<div className='item'>
											<a title='Thông số kỹ thuật Redmi K50 rò rỉ ấn tượng với camera 108MP' href='#!'>
												<h4>Thông số kỹ thuật Redmi K50 rò rỉ ấn tượng với camera 108MP</h4>

												<p>Redmi K50 vừa lộ diện thông số kỹ thuật ấn tượng với camera 108MP ...</p>
											</a>
										</div>
										<div className='item'>
											<a title='Ưu đãi hấp dẫn: Mua Combo phụ kiện iPhone 13 series tiết kiệm đến 680K' href='#!'>
												<h4>Ưu đãi hấp dẫn: Mua Combo phụ kiện iPhone 13 series tiết kiệm đến 680K</h4>

												<p>Sắm trọn bộ phụ kiện thiết yếu cho iPhone 13 series giá rẻ bất ngờ tại ...</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='qc-bottom'>
							<div className='container'>
								<div className='item'>
									<a href='#!' target='_blank'>
										{' '}
										<img src='images/23airpod2-chantrang.jpg' width={1200} alt='' className='png' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};
export default Home;
