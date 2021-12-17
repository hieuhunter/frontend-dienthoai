import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { category_RequestedAction } from '../../Redux/Action/categoryAction';
import { slproduct_RequestedAction } from '../../Redux/Action/productAction';
import { sp_brandRequestedAction } from '../../Redux/Action/sp_brandAction';
import Layout from '../Layout';
const ProductTH = () => {
	const dispatch = useDispatch();
	const sp_brand = useSelector((state) => state.ds_brand.sp_brand.san_pham);
	const SLProduct = useSelector((state) => state.san_pham.sl_product);
	let { id } = useParams();
	const formatter = new Intl.NumberFormat('vi', {
		style: 'currency',
		currency: 'VND'
	});

	useEffect(() => {
		dispatch(sp_brandRequestedAction(id));
		dispatch(category_RequestedAction());
		dispatch(slproduct_RequestedAction());
	}, [dispatch, id]);
	return (
		<Layout>
			<div id='main-body'>
				<div id='main-body'>
					<div className='box-main-body'>
						<div className='container-fluid nopadding' />
					</div>
					<div>
						<div id='xtm-container'>
							<div className='navation ' />
							<div id='xtm-content' className='bg-white padding-top-10'>
								<div className='container'>
									<div className='mainn'>
										<div className='banner_product_base'>
											<div className='box-bn'>
												<div className='bn-left'>
													<div className='box-slider-category'>
														<div className='slideshow-category owl-carousel'>
															<div className='owl-stage-outer'>
																<div className='owl-stage' style={{ width: '1627px' }}>
																	<div className='owl-item' style={{ width: '386.667px', marginRight: '20px' }}>
																		<div className='item'>
																			<a href='#!' target='_blank'>
																				{' '}
																				<img src='images/-sale-1111-min.jpg' width={771} alt='' className='png' />
																			</a>
																		</div>
																	</div>
																	<div className='owl-item' style={{ width: '386.667px', marginRight: '20px' }}>
																		<div className='item'>
																			<a href='#!' target='_blank'>
																				{' '}
																				<img src='images/19zfold3-11-10.png' width={771} alt='' className='png' />
																			</a>
																		</div>
																	</div>
																	<div className='owl-item' style={{ width: '386.667px', marginRight: '20px' }}>
																		<div className='item'>
																			<a href='#!' target='_blank'>
																				{' '}
																				<img src='images/po.jpg' width={771} alt='' className='png' />
																			</a>
																		</div>
																	</div>
																	<div className='owl-item' style={{ width: '386.667px', marginRight: '20px' }}>
																		<div className='item'>
																			<a href='#!' target='_blank'>
																				{' '}
																				<img src='images/1-7aw-se-12-5-min.jpg' width={771} alt='' className='png' />
																			</a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='row_base_product clearfix'>
											<div className='col-main-base-product '>
												{/*start box filter*/}
												<div className='main-box-filter'>
													<div className='group-box-category-logo'>
														<div className='box-category-logo'>
															<a href='#!'>
																<img src='images/icon/dt-samsung.jpg' alt='' />
															</a>
															<a href='#!'>
																<img src='images/icon/lg.png' alt='' />
															</a>
															<a href='#!'>
																<img src='images/icon/xiaomi.jpg' alt='' />
															</a>
															<a href='#!'>
																<img src='images/icon/oneplus.jpg' alt='' />
															</a>
															<a href='#!'>
																<img src='images/icon/asus_1.jpg' alt='' />
															</a>
															<a href='#!'>
																<img src='images/icon/google-pixel.jpg' alt='' />
															</a>
															<a href='#!'>
																<img src='images/icon/icgaming-1.jpg' alt='' />
															</a>
															<a href='#!'>
																<img src='images/icon/xa-kho.png' alt='' />
															</a>
														</div>
													</div>
													<div className='box-filter'>
														<div className='filter_main'>
															<div className='group-filter'>
																<div className='group-filter-item'>
																	<div className='item-col-filter'>
																		<div className='item-col-filterbox collapse in' id='muc-gia'>
																			<div className='fs-ctf-scroll mCustomScrollbar'>
																				<ul className='listfilterv4' data-query='price'>
																					<label>Chọn mức giá:</label>
																					<li>
																						<a rel='nofollow' href='#!' data-value='gia-tu-min-5-trieu'>
																							Dưới 5 triệu
																						</a>
																					</li>
																					<li>
																						<a rel='nofollow' href='#!' data-value='gia-tu-5-trieu-7-trieu'>
																							Từ 5 triệu - 7 triệu
																						</a>
																					</li>
																					<li>
																						<a rel='nofollow' href='#!' data-value='gia-tu-7-trieu-9-trieu'>
																							Từ 7 triệu - 9 triệu
																						</a>
																					</li>
																					<li>
																						<a rel='nofollow' href='#!' data-value='gia-tu-9-trieu-15-trieu'>
																							Từ 9 triệu - 15 triệu
																						</a>
																					</li>
																					<li>
																						<a rel='nofollow' href='#!' data-value='gia-tu-15-trieu-max'>
																							Trên 15 triệu
																						</a>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													{/*end box filter*/}
													<div className='fs-ctf-head clearfix'>
														<div className='heading-flow'>
															<h1>Điện thoại</h1>
														</div>
														<div className='group-filter-item filter-sort'>
															<div className='box_sort'>
																<div className='box_content'>
																	<a href='#!'>Nổi bật nhất</a>
																	<a className='selected' href='#!'>
																		Giá từ thấp đến cao
																	</a>
																	<a href='#!'>Giá từ cao đến thấp</a>
																</div>
															</div>
														</div>
													</div>
													<div className='box-filter-mobile'> </div>
												</div>
												<div className='box-flashsale box-flashsale-ip12'>
													<div className='box-flash-sell  group-slide-featured'>
														<div className='title_box clearfix' style={{ background: '#d40101' }}>
															<span className='flashsaletext title_product'>GIÁ TỐT CHỈ CÓ TRONG TUẦN</span>
														</div>
														<div className='box-body-flashsale'>
															<div className='owl-product-flash-sell  owl-carousel '>
																<div className='owl-stage-outer'>
																	<div className='owl-stage' style={{ width: '1428px' }}>
																		{SLProduct.san_pham.map((sp) => (
																			<div
																				className='owl-item'
																				style={{ width: '228px', marginRight: '10px' }}
																				key={sp.id}
																			>
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
																								<a href='#!'>{sp.ten_sp}</a>
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
																								Trả trước <strong>7.497.000 đ</strong>
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
												<div id='List_Product' className='list_product_base'>
													{sp_brand.map((sp) => (
														<div className='product-base-grid' key={sp.id}>
															<div className='boxItem'>
																<div className='pic'>
																	<Link
																		to={`/Detail/${sp.id}`}
																		title='Galaxy Note 10 5G (12GB|256GB) Hàn Quốc SM-N971N (Cũ 99%)'
																	>
																		<img
																			src={`${sp.image_url}`}
																			alt='Galaxy Note 10 5G (12GB|256GB) Hàn Quốc SM-N971N (Cũ 99%)'
																			title='Galaxy Note 10 5G (12GB|256GB) Hàn Quốc SM-N971N (Cũ 99%)'
																		/>
																	</Link>
																	<div className='group-flag-top'>
																		<span className='flag flag-installment'>Trả góp 0%</span>
																		<span className='flag-discount'>
																			<span>Giảm</span>10%
																		</span>
																	</div>
																</div>
																<div className='pinfo'>
																	<div className='product-info-top'>
																		<h3>
																			<Link
																				to={`/Detail/${sp.id}`}
																				title='Galaxy Note 10 5G (12GB|256GB) Hàn Quốc SM-N971N (Cũ 99%)'
																			>
																				{sp.ten_sp}
																			</Link>{' '}
																		</h3>
																	</div>
																	<div className='div_price'>
																		<div className='price'>
																			{formatter.format(sp.gia)}
																			<span>
																				{formatter.format(sp.gia_goc)}
																				<span className='mobile-discount'>- 10%</span>
																			</span>
																		</div>
																	</div>
																	<p className='nt-prepaid-installment'>
																		Trả trước <strong style={{ display: 'contents' }}>2.427.000đ</strong>
																	</p>
																</div>
															</div>
														</div>
													))}
												</div>
												<div className='pagination-more'>
													<form>
														<a href='#!'>
															Xem thêm <strong>24</strong> sản phẩm <i className='bi bi-caret-down-fill'></i>
														</a>
													</form>
												</div>
											</div>
										</div>
									</div>
									<div className='clear' />
								</div>
							</div>
						</div>
						<div className='container-fluid nopadding' />
					</div>
				</div>
				<div>
					<div className='category-note'>
						<div className='container'>
							<div className='box-note-item'>
								<ul>
									<li>
										<img alt='#!' src='images/icon/category-footer-note-1.png' style={{ width: 40, height: 29 }} />
										<span>
											Giao Hàng Miễn Phí
											<br />
											Nội Thành TP.HCM
										</span>
									</li>
									<li>
										<img alt='#!' src='images/icon/category-footer-note-2.png' style={{ width: 37, height: 31 }} />
										<span>
											1 Đổi 1&nbsp;
											<br />
											trong vòng&nbsp;30 nngày
										</span>
									</li>
									<li>
										<img alt='#!' src='images/icon/category-footer-note-3.png' style={{ width: 28, height: 32 }} />
										<span>
											Máy Cũ Bảo Hành 6 Tháng
											<br />
											Máy Mới&nbsp;Bảo Hành 12 Tháng
										</span>
									</li>
									<li>
										<img alt='#!' src='images/icon/category-footer-note-4.png' style={{ width: 33, height: 33 }} />
										<span>
											Hỗ Trợ CSKH Trực Tuyến&nbsp;
											<br />
											Giờ làm việc : 8h đến 21h30
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<style dangerouslySetInnerHTML={{ __html: '#vnt-footer{margin-top:0}' }} />

					<div className='call_us hidden-md hidden-lg'></div>
					<div id='dlding' className='none'>
						Bạn vui lòng chờ trong giây lát...
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default ProductTH;
