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
															<h3>Deal ch????t l??????ng gi???m ?????n 1.8 tri???u</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Galaxy S21 Ultra 5G gi?? ch??? 20.9 tri???u</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Mua Z Fold3 5G Gi???m ?????n 4 tri???u</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>????ng k?? nh???n th??ng tin AirPod 3</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Tra?? go??p nhanh Thu?? tu??c ????n gia??n</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Mua Galaxy S10 Plus Gi?? ch??? 7,3 tri???u</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Macbook Air | Pro M1 Gi?? t??? 27.2 tri???u</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>iPhone 8 Plus Chi?? co??n 7,6 tri????u</h3>
														</div>
													</div>
													<div className='owl-item active' style={{ width: '146.2px' }}>
														<div className='item'>
															<h3>Xiaomi Mi 11 Lite 5G Chi?? co??n 7,8 tri????u</h3>
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
												<h4>Tin khuy???n m??i</h4>
												<a href='#!'>Xem th??m</a>
											</div>
											<div className='ct_news border-radius-6'>
												<div className='item clearfix'>
													<a title='??u ??a??i h????p d????n: Mua Combo phu?? ki????n iPhone 13 series ti????t ki????m ??????n 680K' href='##!'>
														<span>
															<h4>??u ??a??i h????p d????n: Mua Combo phu?? ki????n iPhone 13 series ti????t ki????m ??????n 680K</h4>
														</span>
													</a>
												</div>
												<div className='item clearfix'>
													<a title='S??n deal c???c s???c: Mua Galaxy Note 10 Plus 5G, S20 5G gia??m ??????n 1,8 tri????u' href='#!'>
														<span>
															<h4>S??n deal c???c s???c: Mua Galaxy Note 10 Plus 5G, S20 5G gia??m ??????n 1,8 tri????u</h4>
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
											<span className='flashsaletext title_product'>S??n deal gi?? h???i - Giao h??ng t???n n??i</span>
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
																					alt='iPhone 12 64GB (C?? 99%)'
																					title='iPhone 12 64GB (C?? 99%)'
																				/>
																			</Link>
																			<div className='group-flag-top'>
																				<span className='flag flag-installment'>Tr??? g??p 0%</span>
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
																				Tr??? tr?????c <strong>5.497.000 ??</strong>
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
											<strong style={{ display: 'contents' }}>??i???n tho???i</strong> n???i b???t
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
											<div className='title_box'>Ph??? ki???n n???i b???t</div>
											<div className='cat-acc-left'>
												<div className='cat-pc'>
													<ul>
														<li>
															<a href='#!'>Pin d??? ph??ng</a>
														</li>
														<li>
															<a href='#!'>Tai nghe</a>
														</li>
														<li>
															<a href='#!'>Loa Bluetooth</a>
														</li>
														<li>
															<a href='#!'>???p l??ng - Bao da</a>
														</li>
														<li>
															<a href='#!'>D??n c?????ng l???c</a>
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
																		alt='Pin d??? ph??ng Anker PowerCore 15.600 mAh'
																		title='Pin d??? ph??ng Anker PowerCore 15.600 mAh'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Pin d??? ph??ng Anker PowerCore 15.600 mAh</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		850.000 ??
																		<span>
																			1.100.000 ??<span className='mobile-discount'> -22%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	??u ??a??i t???? nga??y&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
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
																		alt='Pin d??? ph??ng Anker PowerCore 10.000 mAh'
																		title='Pin d??? ph??ng Anker PowerCore 10.000 mAh'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Pin d??? ph??ng Anker PowerCore 10.000 mAh</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		370.000 ??
																		<span>
																			650.000 ??<span className='mobile-discount'> -43%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	??u ??a??i t???? nga??y&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
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
																		alt='Pin d??? ph??ng Anker Powercore 13.000 mAh'
																		title='Pin d??? ph??ng Anker Powercore 13.000 mAh'
																	/>
																</a>
															</div>
															<div className='ct_info info'>
																<h3>
																	<a href='#!'>Pin d??? ph??ng Anker Powercore 13.000 mAh</a>
																</h3>
																<div className='div_price'>
																	<p className='price'>
																		790.000 ??
																		<span>
																			950.000 ??<span className='mobile-discount'> -16%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	??u ??a??i t???? nga??y&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
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
																		320.000 ??
																		<span>
																			600.000 ??<span className='mobile-discount'> -46%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	??u ??a??i t???? nga??y&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
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
																		720.000 ??
																		<span>
																			1.300.000 ??<span className='mobile-discount'> -44%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	??u ??a??i t???? nga??y&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
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
																		570.000 ??
																		<span>
																			790.000 ??<span className='mobile-discount'> -27%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	??u ??a??i t???? nga??y&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
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
																		790.000 ??
																		<span>
																			1.250.000 ??<span className='mobile-discount'> -36%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	??u ??a??i t???? nga??y&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
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
																		1.990.000 ??
																		<span>
																			2.890.000 ??<span className='mobile-discount'> -31%</span>
																		</span>
																	</p>
																</div>
																<div className='note-pro'>
																	??u ??a??i t???? nga??y&nbsp;<strong>01&nbsp;- 14/11/2021</strong>
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
							<div className='title_box'>Tin khuy???n m??i trong tu???n</div>
							<div className='sl-promotion owl-carousel'>
								<div className='owl-stage-outer'>
									<div className='owl-stage' style={{ width: '6507px' }}>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a title='??u ??a??i h????p d????n: Mua Combo phu?? ki????n iPhone 13 series ti????t ki????m ??????n 680K' href='#!'>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/11_2021/04/thumbs/(480x480)_crop_pk-13.jpg'
															alt='??u ??a??i h????p d????n: Mua Combo phu?? ki????n iPhone 13 series ti????t ki????m ??????n 680K'
															title='??u ??a??i h????p d????n: Mua Combo phu?? ki????n iPhone 13 series ti????t ki????m ??????n 680K'
														/>
													</div>
													<h4>??u ??a??i h????p d????n: Mua Combo phu?? ki????n iPhone 13 series ti????t ki????m ??????n 680K</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a title='S??n deal c???c s???c: Mua Galaxy Note 10 Plus 5G, S20 5G gia??m ??????n 1,8 tri????u' href='#!'>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/11_2021/03/thumbs/(480x480)_crop_tt-sale-dautuan-3-11-min.jpg'
															alt='S??n deal c???c s???c: Mua Galaxy Note 10 Plus 5G, S20 5G gia??m ??????n 1,8 tri????u'
															title='S??n deal c???c s???c: Mua Galaxy Note 10 Plus 5G, S20 5G gia??m ??????n 1,8 tri????u'
														/>
													</div>
													<h4>S??n deal c???c s???c: Mua Galaxy Note 10 Plus 5G, S20 5G gia??m ??????n 1,8 tri????u</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a title='Mua tra?? go??p ta??i XTmobile: ????n gia??n - Ti????n l????i - Nhanh cho??ng' href='#!'>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/31/thumbs/(480x480)_crop_tt-muatragop.png'
															alt='Mua tra?? go??p ta??i XTmobile: ????n gia??n - Ti????n l????i - Nhanh cho??ng'
															title='Mua tra?? go??p ta??i XTmobile: ????n gia??n - Ti????n l????i - Nhanh cho??ng'
														/>
													</div>
													<h4>Mua tra?? go??p ta??i XTmobile: ????n gia??n - Ti????n l????i - Nhanh cho??ng</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a title='Ph??? ki???n gi???m s???c: Pin d??? ph??ng, tai nghe Bluetooth gi???m ?????n 57%' href='#!'>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/30/thumbs/(480x480)_crop_tt-phukien-1-14-min.jpg'
															alt='Ph??? ki???n gi???m s???c: Pin d??? ph??ng, tai nghe Bluetooth gi???m ?????n 57%'
															title='Ph??? ki???n gi???m s???c: Pin d??? ph??ng, tai nghe Bluetooth gi???m ?????n 57%'
														/>
													</div>
													<h4>Ph??? ki???n gi???m s???c: Pin d??? ph??ng, tai nghe Bluetooth gi???m ?????n 57%</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a
													title='??u ??a??i kha??ch ti??nh - Sale c????c ??i??nh: Mua Galaxy Note 10 Plus 5G chi?? t???? 7,9 tri????u'
													href='#!'
												>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/28/thumbs/(480x480)_crop_tt-uudai-27-10_1.png'
															alt='??u ??a??i kha??ch ti??nh - Sale c????c ??i??nh: Mua Galaxy Note 10 Plus 5G chi?? t???? 7,9 tri????u'
															title='??u ??a??i kha??ch ti??nh - Sale c????c ??i??nh: Mua Galaxy Note 10 Plus 5G chi?? t???? 7,9 tri????u'
														/>
													</div>
													<h4>??u ??a??i kha??ch ti??nh - Sale c????c ??i??nh: Mua Galaxy Note 10 Plus 5G chi?? t???? 7,9 tri????u</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a
													title='S??n deal cu????i tha??ng: Mua Galaxy Note 10 Plus 5G, S20 5G gia??m ??????n 2 tri????u ??????ng'
													href='#!'
												>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/28/thumbs/(480x480)_crop_tt-sale-samsung-29-10.png'
															alt='S??n deal cu????i tha??ng: Mua Galaxy Note 10 Plus 5G, S20 5G gia??m ??????n 2 tri????u ??????ng'
															title='S??n deal cu????i tha??ng: Mua Galaxy Note 10 Plus 5G, S20 5G gia??m ??????n 2 tri????u ??????ng'
														/>
													</div>
													<h4>S??n deal cu????i tha??ng: Mua Galaxy Note 10 Plus 5G, S20 5G gia??m ??????n 2 tri????u ??????ng</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a
													title='S??n deal gia?? h????i: Mua Redmi K40 5G, Black Shark 4, Xiaomi Mi 11 Lite gia??m ??????n 1,7 tri????u'
													href='#!'
												>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/21/thumbs/(480x480)_crop_tt-xiaomi-21-10.png'
															alt='S??n deal gia?? h????i: Mua Redmi K40 5G, Black Shark 4, Xiaomi Mi 11 Lite gia??m ??????n 1,7 tri????u'
															title='S??n deal gia?? h????i: Mua Redmi K40 5G, Black Shark 4, Xiaomi Mi 11 Lite gia??m ??????n 1,7 tri????u'
														/>
													</div>
													<h4>
														S??n deal gia?? h????i: Mua Redmi K40 5G, Black Shark 4, Xiaomi Mi 11 Lite gia??m ??????n 1,7 tri????u
													</h4>
												</a>
											</div>
										</div>
										<div className='owl-item cloned' style={{ width: '386.667px', marginRight: '20px' }}>
											<div className='item-promotion'>
												<a
													title='Ph??? ki???n x???n gi?? s???c: Pin d??? ph??ng, tai nghe Bluetooth, c??p s???c gi???m ?????n 58%'
													href='#!'
												>
													<div className='image'>
														<img
															src='https://www.xtmobile.vn/vnt_upload/news/10_2021/17/thumbs/(480x480)_crop_tt-pk-18-10-min.jpg'
															alt='Ph??? ki???n x???n gi?? s???c: Pin d??? ph??ng, tai nghe Bluetooth, c??p s???c gi???m ?????n 58%'
															title='Ph??? ki???n x???n gi?? s???c: Pin d??? ph??ng, tai nghe Bluetooth, c??p s???c gi???m ?????n 58%'
														/>
													</div>
													<h4>Ph??? ki???n x???n gi?? s???c: Pin d??? ph??ng, tai nghe Bluetooth, c??p s???c gi???m ?????n 58%</h4>
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
										<a title='iPhone 14 series ra m???t c?? th??? s??? l??? h???n v???i t??nh n??ng m????i la?? n??y' href='#!'>
											<div className='image'>
												<img
													src='images/(480x2)_crop_tinh-nang-moi-tren-iphone-14-xtmobile.jpg'
													alt='iPhone 14 series ra m???t c?? th??? s??? l??? h???n v???i t??nh n??ng m????i la?? n??y'
													title='iPhone 14 series ra m???t c?? th??? s??? l??? h???n v???i t??nh n??ng m????i la?? n??y'
												/>
											</div>
											<div className='ninfo'>
												<h4>iPhone 14 series ra m???t c?? th??? s??? l??? h???n v???i t??nh n??ng m????i la?? n??y</h4>

												<p>Sau khi iPhone 13 series ??a?? co?? ma??n cha??o s??n ????n t??????ng thi?? th??ng tin v???? model ...</p>
											</div>
										</a>
									</div>
									<div className='item'>
										<a title='N??n mua Macbook Air M1 hay Macbook Pro M1 2020 ????? c?? tr???i nghi???m t???t nh???t?' href='#!'>
											<div className='image'>
												<img
													src='images/(480x2)_crop_macbook-air-m1-va-macbook-pro-m1-xtmobile.jpg'
													alt='N??n mua Macbook Air M1 hay Macbook Pro M1 2020 ????? c?? tr???i nghi???m t???t nh???t?'
													title='N??n mua Macbook Air M1 hay Macbook Pro M1 2020 ????? c?? tr???i nghi???m t???t nh???t?'
												/>
											</div>
											<div className='ninfo'>
												<h4>N??n mua Macbook Air M1 hay Macbook Pro M1 2020 ????? c?? tr???i nghi???m t???t nh???t?</h4>

												<p>Macbook Air M1 v?? Macbook Pro M1 ?????u ???????c ph??t tri???n nh???m v??o ph???n kh??c t???m cao. ...</p>
											</div>
										</a>
									</div>
								</div>
								<div className='latest-news'>
									<div className='inner'>
										<h2>Tin t???c</h2>
										<div className='item'>
											<a title='L?? do iPhone 13 series ??a??ng mua du?? kh??ng nhi????u n??ng c????p ??????t pha???' href='#!'>
												<h4>L?? do iPhone 13 series ??a??ng mua du?? kh??ng nhi????u n??ng c????p ??????t pha???</h4>

												<p>M???c d?? kh??ng nhi???u n??ng c???p ?????t ph?? nh??ng lo???t iPhone 13 v???n l?? c??i t??n ...</p>
											</a>
										</div>
										<div className='item'>
											<a title='Th??ng s??? k??? thu???t Redmi K50 ro?? ri?? ????n t??????ng v???i camera 108MP' href='#!'>
												<h4>Th??ng s??? k??? thu???t Redmi K50 ro?? ri?? ????n t??????ng v???i camera 108MP</h4>

												<p>Redmi K50 v????a l???? di????n th??ng s???? ky?? thu????t ????n t??????ng v????i camera 108MP ...</p>
											</a>
										</div>
										<div className='item'>
											<a title='??u ??a??i h????p d????n: Mua Combo phu?? ki????n iPhone 13 series ti????t ki????m ??????n 680K' href='#!'>
												<h4>??u ??a??i h????p d????n: Mua Combo phu?? ki????n iPhone 13 series ti????t ki????m ??????n 680K</h4>

												<p>S???m tr???n b??? ph??? ki???n thi???t y???u cho iPhone 13 series gi?? r??? b???t ng??? t???i ...</p>
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
