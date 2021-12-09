import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ctproduct_RequestedAction, product_RequestedAction } from '../../Redux/Action/productAction';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Layout from '../Layout';
import { addcart_RequestedAction, cart_RequestedAction } from '../../Redux/Action/cartAction';
const Detail = () => {
	const dispatch = useDispatch();
	const ct_Product = useSelector((state) => state.san_pham.ct_product);
	const dsProduct = useSelector((state) => state.san_pham.ds_product);
	let { id } = useParams();
	const formatter = new Intl.NumberFormat('vi', {
		style: 'currency',
		currency: 'VND'
	});
	const addToCart = (id, gia) => {
		const gio_hang = {
			id_sp: id,
			so_luong: 1,
			gia: gia
		};
		dispatch(addcart_RequestedAction(gio_hang));
		dispatch(cart_RequestedAction());
	};

	const [isZoomed, setIsZoomed] = useState(false);

	const handleImgLoad = useCallback(() => {
		setIsZoomed(true);
	}, []);

	const handleZoomChange = useCallback((shouldZoom) => {
		setIsZoomed(shouldZoom);
	}, []);

	console.log(ct_Product);
	console.log(dsProduct);

	useEffect(() => {
		dispatch(ctproduct_RequestedAction(id), product_RequestedAction());
	}, [dispatch, id]);
	return (
		<Layout>
			<div className='true' id='xtm-container'>
				<div className='navation '>
					<a href='/' className='home'>
						Trang chủ
					</a>{' '}
					<span className='true'> &nbsp;/&nbsp; </span> <a href='/'>Điện thoại</a>{' '}
					<span className='true'> &nbsp;/&nbsp; </span> <a href='/'>Samsung</a>{' '}
					<span className='true'> &nbsp;/&nbsp; </span> <a href='/'>Galaxy S10 | S10 Plus</a>
				</div>
				<div className='bg-white padding-top-10' id='xtm-content'>
					<div className='container'>
						<div className='abccc'>
							<div className='true' id='divInfo'>
								<meta itemProp='url' />
								<meta itemProp='mpn' />
								<meta itemProp='brand' content='Galaxy' />
								<meta itemProp='sku' content='SAMS10-128B-NB-HQ' />
								<div className='product-top clearfix'>
									<div className='name-title'>
										<div className='product-top1'>
											<div className='product-top-title'>
												<h1 className='name-sp' itemProp='name'>
													{ct_Product.san_pham.ten_sp}
												</h1>

												<div className='item-review-info clearfix' itemProp='aggregateRating'>
													<meta itemProp='worstRating' />
													<meta itemProp='bestRating' />
													<meta itemProp='ratingValue' />
													<span className='abc'>
														<span className='abc' itemProp='ratingCount'>
															<div className='rating-product'>
																<span className='abc' style={{ paddingLeft: '5px' }}>
																	4.5/5
																</span>
																<span className='rating-content' style={{ paddingLeft: '5px' }}>
																	<span className='abc' style={{ width: '90%' }}>
																		<i className='star-full' />
																		<i className='star-full' />
																		<i className='star-full' />
																		<i className='star-full' />
																		<i className='star-full' />
																	</span>
																</span>
																<span className='abc' style={{ paddingLeft: '5px' }}>
																	50 đánh giá
																</span>
															</div>
														</span>
													</span>
												</div>
											</div>
										</div>
										<div className='product-top2 nopadding social'>
											<div
												className='fb-like'
												data-layout='button_count'
												data-size='small'
												data-show-faces='false'
												data-share='true'
											/>
										</div>
										<div className='clear' />
									</div>
									<div className='col-detail-top1'>
										<div className='product-image'>
											<div className='fs-dtstd2' style={{ position: 'relative' }}>
												<div className='easyzoom easyzoom--with-thumbnails easyzoom--adjacent'>
													<a className='p-picture' href='images/sanpham/600x600_crop_s10_pink_800x800_min.jpg'>
														<ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
															<img
																onLoad={handleImgLoad}
																className='lazy'
																src={`${ct_Product.san_pham.image_url}`}
																alt=''
															/>
														</ControlledZoom>
													</a>
												</div>
											</div>
											<div className='fs-dtstd1'>
												<div className='thum-pic'>
													<ul className='fs-dtsul thumbnails'>
														<li className='active'>
															<a href='#!' data-standard='images/sanpham/600_600x600_crop_s10_pink_800x800_min.jpg'>
																<img
																	alt=''
																	className='lazy'
																	src='images/sanpham/80_600x600_crop_s10_pink_800x800_min.jpg'
																/>
															</a>
															<p>Màu Hồng</p>
														</li>
														<li>
															<a href='#!' data-standard='images/sanpham/80_s10_den_800x800_min.jpg'>
																<img alt='' className='lazy' src='images/sanpham/80_s10_den_800x800_min.jpg' />
															</a>
															<p>Màu Trắng</p>
														</li>
														<li>
															<a href='#!' data-standard='images/sanpham/80_s10_green_800x800_min.jpg'>
																<img alt='' className='lazy' src='images/sanpham/80_s10_green_800x800_min.jpg' />
															</a>
															<p>Màu Đen</p>
														</li>
														<li>
															<a href='#!' data-standard='images/sanpham/80_s10_white_800x800_min.jpg'>
																<img alt='' className='lazy' src='images/sanpham/80_s10_white_800x800_min.jpg' />
															</a>
															<p>Xanh Lá</p>
														</li>
													</ul>
												</div>
												<ul className='fs-dtsul vdpics'></ul>
											</div>
										</div>
										<input type='hidden' id='view_detail' />
										<div className='color_gallery_sp sp clearfix'>
											<div className='icon_gl_v' />{' '}
										</div>
										<div className='bn-detail'>
											<p className='advertise'>
												<a href='#!' target='_blank'>
													<img border={0} src='images/mua-ol-13-11_1.jpg' width={410} alt='' />
												</a>
											</p>
										</div>
									</div>
									<div className='col-detail-top2'>
										<form className='f_addcart' method='post' id='form_order'>
											<div className='abccc' itemProp='offers'>
												<meta content='VND' itemProp='priceCurrency' />
												<div className='prod_dt_price'>
													<span className='price' id='price' itemProp='price'>
														{formatter.format(ct_Product.san_pham.gia)}
													</span>
													<span className='price_old'>
														<del>{formatter.format(ct_Product.san_pham.gia_goc)}</del>
													</span>
												</div>
											</div>
											<p className='nt-prepaid-installment'>
												Chỉ cần trả trước: <strong>1.797.000đ</strong>.{' '}
												<a href='tel:19002043'>Liên hệ tư vấn qua điện thoại</a>
											</p>
											<div className='featured-promotion'>
												<div className='inner'>
													<p>
														<strong>
															[Từ ngày 13 - 14/11]{' '}
															<span className='abc' style={{ color: 'rgb(178, 34, 34)' }}>
																Giá giảm sốc
															</span>
														</strong>{' '}
														chỉ còn{' '}
														<span className='abc' style={{ color: 'rgb(255, 0, 0)' }}>
															<strong>{formatter.format(ct_Product.san_pham.gia)}</strong>
														</span>{' '}
														<em>*Số lượng có hạn</em>
													</p>
												</div>
											</div>
											<div className='promotion-list'>
												<span className='title_km'>
													<span className='abc'>Khuyến mãi - Ưu đãi</span>
												</span>
												<div className='box-inner-product'>
													{' '}
													<div className='promotion-detail'>
														<p>
															<strong>Từ ngày 01 - 30/11/2021</strong>
														</p>
														<ul>
															<li>
																Tặng thêm&nbsp;
																<span className='abc' style={{ color: 'rgb(255, 0, 0)' }}>
																	<em>Phiếu mua hàng 200.000đ</em>
																</span>
																&nbsp;(áp dụng mua pin dự phòng Innostyle, Umetravel)&nbsp;
															</li>
														</ul>
														<hr />
														<ul>
															<li>
																Mua&nbsp;
																<span className='abc' style={{ color: 'rgb(0, 0, 255)' }}>
																	Bộ cáp sạc&nbsp;Samsung
																</span>
																&nbsp;chính hãng giá chỉ&nbsp;
																<span className='abcccc' style={{ color: 'rgb(255, 0, 0)' }}>
																	<strong>320.000đ</strong>
																</span>
																&nbsp;(giá niêm yết&nbsp;<s>550.000đ</s>)
															</li>
															<li>
																Mua&nbsp;
																<span className='abc' style={{ color: 'rgb(0, 0, 255)' }}>
																	Bộ cáp sạc Samsung&nbsp;
																</span>
																+
																<span className='abc' style={{ color: 'rgb(0, 0, 255)' }}>
																	&nbsp;Tai nghe AKG 3.5mm
																</span>
																&nbsp;chính hãng giá chỉ&nbsp;
																<span className='abc' style={{ color: 'rgb(255, 0, 0)' }}>
																	<strong>520.000đ</strong>
																</span>
																&nbsp;(giá niêm yết&nbsp;<s>900.000đ</s>)
															</li>
															<li>Mua cường lực, ốp lưng (kèm điện thoại)&nbsp;được&nbsp;giảm&nbsp;10%.</li>
														</ul>
													</div>
												</div>
											</div>
											<div className='product-note'>
												Xem&nbsp;
												<a href='#!' target='_blank'>
													bảng giá thu cũ đổi mới
												</a>
												&nbsp;tại XTmobile
											</div>
											<div className='xtmember'>
												* Giảm thêm tới 1,2% cho{' '}
												<a href='#!' target='_blank'>
													thành viên XTMember
												</a>
											</div>
											<div className='product-color'>
												<div className='tit_color'>
													Chọn màu sắc: <span className='abc' id='color_name' />
												</div>
												<ul className='color-list-show'>
													<li data-ma='SAMS10-128B-NB-HQ' data-qty={20} id='color_id_12' className='color-active'>
														<p>Màu Đen</p>
														<b className='price'>5.990.000đ</b>
													</li>
													<li data-ma='SAMS10-128W-NB-HQ' data-qty={21} id='color_id_8'>
														<p>Màu Trắng</p>
														<b className='price'>6.090.000đ</b>
													</li>
													<li data-ma='SAMS10-128GR-NB-HQ' data-qty={20} id='color_id_5'>
														<p>Xanh Lá</p>
														<b className='price'>6.090.000đ</b>
													</li>
												</ul>
											</div>

											<a
												className='btn-buy btn-buy-cart btn-tragop'
												href='/Cart'
												onClick={addToCart.bind(this, ct_Product.san_pham.id, ct_Product.san_pham.gia)}
											>
												Mua ngay<p>Giao hàng tận nơi hoặc nhận tại cửa hàng</p>
											</a>
											<div className='div_btn_order clearfix'>
												<div className='pull-left'>
													<a className='btn-tragop' href='#!'>
														Trả góp<p>Mua trả góp lãi suất thấp</p>
													</a>
												</div>
												<div className='pull-right'>
													<a
														className='btn-tragop'
														href='#!'
														onClick={addToCart.bind(this, ct_Product.san_pham.id, ct_Product.san_pham.gia)}
													>
														Thêm giỏ hàng<p>Thêm sản phẩm vô giỏ hàng</p>
													</a>
												</div>
											</div>
											<div className='call_me'>
												<p>
													Hỗ trợ trực tuyến tốt nhất <a href='tel:1800.6229'>1800.6229</a> | Cần Tư vấn{' '}
													<a
														href='#!'
														className='btn_default'
														id='send_consultancy'
														data-toggle='modal'
														data-target='#order-product-old'
													>
														tại đây
													</a>
													.
												</p>
												<p>
													Giờ làm việc : <strong>09h00 đến 21h00</strong>
												</p>
											</div>
										</form>
									</div>
									<div className='col-detail-top3'>
										<div className='box-info box-info-more'>
											<div className='box-info-body'>
												<ul>
													<li className='icon-info-status'>
														<strong>Bộ sản phẩm:</strong> Máy, cây lấy sim
													</li>
													<li className='icon-info-freeship'>Giao hàng miễn phí nội thành TP.HCM</li>
													<li className='icon-info-installment'>
														<span className='abc'>
															<strong>Trả trước 30%</strong> qua FE Credit, Home Credit. Thủ tục chỉ cần CMND + GPLX;
														</span>
														<span className='abc'>
															{' '}
															Hoặc <strong>trả trước 0Đ</strong> qua công ty tài chính FE Credit;
														</span>
														<span className='abc'>
															Hoặc trả góp <strong>lãi suất 0%</strong> qua thẻ tín dụng Visa, Master, JCB.
														</span>
													</li>
													<li className='icon-info-auth'>
														1 đổi 1 trong <strong>30 ngày</strong>, bảo hành <strong>6 tháng</strong>
													</li>
												</ul>
											</div>
										</div>
										<div className='abccc' id='Store'>
											<div className='box_store'>
												<label>7 Cửa hàng có sẵn sản phẩm này</label>
												<ul className='list_store '>
													<li>
														<span className='abc'>
															<a href='tel:028 7109 7898'>
																<i className='bi bi-telephone'></i>
																028 7109 1999
															</a>
														</span>
														437 Quang Trung, Phường 10, Quận Gò Vấp, HCM
													</li>
													<li>
														<span className='abc'>
															<a href='tel:028 7109 8898'>
																<i className='bi bi-telephone'></i>
																028 7109 1999
															</a>
														</span>
														50 Trần Quang Khải, Phường Tân Định, Quận 1, HCM
													</li>
													<li>
														<span className='abc'>
															<a href='tel:028 7108 6898'>
																<i className='bi bi-telephone'></i>
																028 7108 1999
															</a>
														</span>
														43 Lê Văn Việt, Phường Hiệp Phú, Quận 9, HCM
													</li>
													<li>
														<span className='abc'>
															<a href='tel:028 7100 6898 '>
																<i className='bi bi-telephone'></i>
																028 7100 1999{' '}
															</a>
														</span>
														650 Lê Hồng Phong, Phường 10, Quận 10, HCM
													</li>
													<li>
														<span className='abc'>
															<a href='tel:028 7106 6898'>
																<i className='bi bi-telephone'></i>
																028 7106 1999
															</a>
														</span>
														421 Hoàng Văn Thụ, Phường 2, Quận Tân Bình, HCM
													</li>
													<li>
														<span className='abc'>
															<a href='tel:028 7109 8595'>
																<i className='bi bi-telephone'></i>
																028 7109 1999
															</a>
														</span>
														396 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, HCM
													</li>
													<li>
														<span className='abc'>
															<a href='tel:1800.6229'>
																<i className='bi bi-telephone'></i>
																1800.1999
															</a>
														</span>
														Kho online
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div className='bg_info_detail'>
									<div className='row info_dt'>
										<div className='col-md-8 col-xs-12 grid-first10'>
											<div className='box-group-product'>
												<div className='dttabsmain'>
													<div className='dttabsmbox'>
														<ul className='item-control clearfix'>
															<li id='cp-diem-noi-bat' className='active'>
																Đặc điểm nổi bật
															</li>
															<li id='cp-thong-so'>Thông số kỹ thuật</li>
															<li id='cp-anh-thuc-te'>Hình ảnh&amp;Video</li>
															<li id='cp-binh-luan'>Hỏi đáp - Bình luận</li>
															<li className='dttabhide' id='cp-pk'>
																Phụ kiện
															</li>
															<li className='dttabhide' id='cp-news'>
																Tin tức
															</li>
														</ul>
														<a className='fs-mncalls' href='#!'>
															<span className='abc'>GỌI TƯ VẤN</span>
															<strong>1800.6229</strong>
														</a>
														<a className='fs-dttbmua dts-addtocart' href='#!'>
															Mua ngay
														</a>
													</div>{' '}
												</div>
												{/* danh gia chi tiet */}
												<div className='box-detail-desc box-inner mb-15'>
													<div className='evaluation-detail' id='danh-gia'>
														<h2 className='dgctpro'>Đặc điểm nổi bật</h2>
														{/* dac diem noi bat */}
														<div className='abccc' id='diem-noi-bat'>
															<div className='slider-pro' id='slide-dnb'>
																<div className='sp-slides'></div>
																<div className='sp-thumbnails'></div>
															</div>
														</div>
														{/* dac diem noi bat */}
														<div itemProp='description' className='content_hide content-desc'>
															<h2>
																<a href='#!' target='_blank'>
																	<span className='abc' style={{ color: 'rgb(0, 0, 205)' }}>
																		Galaxy S10 128GB
																	</span>
																</a>
																&nbsp;là một trong những phiên bản của S10, máy được xem là bị hạn chế về bộ nhớ so với
																các phiên bản khác nhưng hoàn toàn đáp ứng được nhu cầu lưu trữ của những khác hàng khó
																tính nhất.
															</h2>
															<h3>
																<strong>Thiết kế Galaxy S10 128GB - Vẫn sang như thường</strong>
															</h3>
															<p>
																Galaxy S10 128GB cũng sở hữu thiết kế nguyên khối kim loại và màn hình Infinity-O như
																các phiên bản khác. Phần lưng được ốp kính Gorilla Glass 5 mới nhất, chống trầy xước và
																tăng độ bền cho máy. Theo đó, máy&nbsp;khả năng chống nước, bụi bẩn của máy đạt chuẩn
																IP68. Các phím vật lí thiết kế lại khớp với điện thoại hơn, đồng thời loại jack cắm tai
																nghe 3.5 mm.
															</p>
															<p style={{ textAlign: 'center' }}>
																<img
																	alt='Galaxy S10 8GB cũng sở hữu thiết kế nguyên khối kim loại và màn hình Infinity-O'
																	src={`${ct_Product.san_pham.image_url}`}
																	style={{ width: 680, height: 382 }}
																/>
															</p>
															<p>
																Galaxy S10 128GB được tran bị tấm nền Super AMOLED mới, đảm bảo khả năng hiển thị dưới
																ánh sáng mặt trời. Phiên bản này có kích thước màn hình khá lớn, 6.1 inch, bên cạnh đó,
																Samsung cũng tăng cường độ rộng game màu, độ sáng và độ tương phản giúp người dùng trải
																nghiệm hình ảnh chân thực, sắc nét.
															</p>
															<h3>
																<strong>Cấu hình vẫn nằm trong top đầu</strong>
															</h3>
															<p>
																Samsung đã nâng cấp bộ chip của&nbsp;Galaxy S10 128GB lên Snapdragon 855 hoặc Exynos
																8920. Cả 2 con chíp này đều được sản xuất với quy trình 10nm, bổ sung tốc độ xử lí và
																khả năng tiêt kiệm năng lượng cho các nhân. Kèm theo đó là sự tối ưu đến từ hệ điều hành
																Android 9 Pie, nên máy có thể hoạt động trong thời gian dài với cường độ cao.
															</p>
															<p style={{ textAlign: 'center' }}>
																<img
																	alt='Samsung Galaxy S10 128GB hoạt động nhanh hơn và tiết kiệm hơn nhiều so với thế hệ trước'
																	src={`${ct_Product.san_pham.image_url}`}
																	style={{ width: 680, height: 382 }}
																/>
															</p>
															<p>
																Bên cạnh đó, Samsung cũng cài đặt cho&nbsp;Galaxy S10 RAM 8GB để tăng khả năng đa nhiệm
																của máy, bộ lưu trữ mặc dù chỉ 128GB thấp nhất trong các phiên bản nhưng bạn có thể nâng
																cấp nhờ thẻ MicroSD để tăng không gian. Một điểm đặc biệt nữa là máy có hệ thống làm mát
																bằng nước Carbon, đây thực sự là tin tốt cho game thủ Mobile.
															</p>
															<h3>
																<strong>Camera - Quá&nbsp;khủng, quá thông minh</strong>
															</h3>
															<p>
																Galaxy S10 xách tay, chính hãng đều&nbsp;được tích hợp 3 camera nhằm tối ưu góc chụp và
																điều kiện chụp. Trong đó có một camera góc siêu rộng hỗ trợ chụp phong cảnh, một camera
																chụp xa hỗ trợ góc chụp, một camera sâu để tạo các hiệu ứng chụp. Bạn sẽ trở thành một
																nhiếp ảnh gia với các chế độ chụp như&nbsp;HDR, Camera AI,... Về quay phim, máy cũng có
																nhiều tính năng thú vị như Slow Motion, quay phim 4K...
															</p>
															<p style={{ textAlign: 'center' }}>
																<img
																	alt='Galaxy S10 xách tay, chính hãng đều được tích hợp 3 camera'
																	src={`${ct_Product.san_pham.image_url}`}
																	style={{ width: 680, height: 382 }}
																/>
															</p>
															<p>
																Camera trước của máy cũng được cải thiện về thuật toán và phần mềm so với các thế hệ
																trước. Đặc biệt, Samsung còn bổ sung thêm 1 camera sâu để bạn sáng tạo ra những tấm ảnh
																selfie Bokeh cực chất để khoe với bạn bè.
															</p>
															<h3>
																<strong>Pin và một số công nghệ trên&nbsp;Galaxy S10 128GB</strong>
															</h3>
															<p>
																Có thể Samsung sẽ đưa viên pin 4000 mAh vào&nbsp;Galaxy S10 giá rẻ cũng những công nghệ
																mới nhất như sạc pin nhanh và sặc pin không dây. Bên cạnh đó, hãng cũng phát
																triển&nbsp;thiết bị của mình bở&nbsp;nhiều công nghệ tiên tiến&nbsp;như quét vân tay
																siêu âm, phát triển các tính năng trên Bixby...
															</p>
															<p style={{ textAlign: 'center' }}>
																<img
																	alt='Viên pin mới cho phép Galaxy S10 128GB hoạt động liên tục cả ngày ở cường độ cao'
																	src={`${ct_Product.san_pham.image_url}`}
																	style={{ width: 680, height: 383 }}
																/>
															</p>
															<h3>
																<strong>Làm sao để sở hữu&nbsp;Galaxy S10 128GB?</strong>
															</h3>
															<p>
																Galaxy S10 128GB&nbsp;ra&nbsp;mắt vào đầu năm 2019, tuy nhiên nếu bạn muốn là người sớm
																nhất sở hữu nó, hãy liên hệ đặt hàng với XTmobile. Bạn sẽ chỉ chắc chắc sẽ nắm trong tay
																sản phẩm yêu thích của mình mà còn được nhận các chính sách ưu đãi từ cửa hàng, chắc
																chắn bạn sẽ tiết kiệm một chi phí đáng kể.
															</p>
															<p style={{ textAlign: 'right' }}>XTmobile.vn</p>
														</div>
														<p className='less-evaluation text-center'>
															<span className='close-evaluation' style={{ display: 'none' }}>
																<i className='bi bi-plus-circle-fill'></i> Rút gọn
															</span>
														</p>
														<p className='more-evaluation text-center'>
															<i className='bi bi-plus-circle-fill'></i>
															Xem thêm
														</p>
													</div>
													<div className='sp'>
														<div className='sfsh' id='parameter'></div>
													</div>
													<div className='bottom_order clearfix'>
														<div className='info_sp'>
															<img src={`${ct_Product.san_pham.image_url}`} alt='pic' />
															<h4>Galaxy S10 (8GB|128GB) Hàn Quốc SM-G973N (Cũ 99%)</h4>
															<strong>
																<span className='price' id='price'>
																	5.990.000đ
																</span>
															</strong>
														</div>
														<div className='area_order'>
															<a href='#!' className='buy_now'>
																<b>MUA NGAY</b>
															</a>
															<a href='#!' className='buy_ins '>
																<b>MUA TRẢ GÓP</b>
															</a>
															<a href='#!' className='buy_ins'>
																<b>TRẢ GÓP QUA THẺ</b>
															</a>
														</div>
													</div>
												</div>
												{/* nhận xét bình luận */}
												<div className='box-inner'>
													<div className='abccc' id='binh-luan'>
														<h4 className='title_box_dt_l'>Hỏi đáp - Bình luận</h4>
														<div className='review-summary' id='reviewSubmitArea'>
															<div className='review-sum-box clearfix'>
																<div className='summary_review'>
																	<div className='review-sum-total'>
																		<p className='total-review-point'> 4.5/5 </p>
																		<div className='rating-box'>
																			<div className='rating' style={{ width: '90%' }} />
																		</div>
																		<p>50 đánh giá bình luận</p>
																	</div>
																</div>
																<div className='col_rating'>
																	<ul className='review-percent-detail'>
																		<li className='clearfix'>
																			<span className='rating-num'>
																				5 <i className='bi bi-star-fill'></i>
																			</span>
																			<div className='progress'>
																				<div
																					className='progress-bar progress-bar-success'
																					title='60% đánh giá 5 sao'
																					style={{ width: '60%' }}
																					aria-valuemax={100}
																					aria-valuemin={0}
																					role='progressbar'
																				>
																					<span className='sr-only'>60% Complete</span>
																				</div>
																			</div>
																			<span className='rating-num-total'>30</span>
																		</li>
																		<li className='clearfix'>
																			<span className='rating-num'>
																				4 <i className='bi bi-star-fill'></i>
																			</span>
																			<div className='progress'>
																				<div
																					className='progress-bar progress-bar-success'
																					title='30% đánh giá 4 sao'
																					style={{ width: '30%' }}
																					role='progressbar'
																				>
																					<span className='sr-only'>30% Complete</span>
																				</div>
																			</div>
																			<span className='rating-num-total'>15</span>
																		</li>
																		<li className='clearfix'>
																			<span className='rating-num'>
																				3 <i className='bi bi-star-fill'></i>
																			</span>
																			<div className='progress'>
																				<div
																					className='progress-bar progress-bar-success'
																					title='10% đánh giá 3 sao'
																					style={{ width: '10%' }}
																					role='progressbar'
																				>
																					<span className='sr-only'>10% Complete</span>
																				</div>
																			</div>
																			<span className='rating-num-total'>5</span>
																		</li>
																		<li className='clearfix li_yellow'>
																			<span className='rating-num'>
																				2 <i className='bi bi-star-fill'></i>
																			</span>
																			<div className='progress'>
																				<div
																					className='progress-bar progress-bar-success'
																					title='0% đánh giá 2 sao'
																					style={{ width: '0%' }}
																					role='progressbar'
																				>
																					<span className='sr-only'>0% Complete</span>
																				</div>
																			</div>
																			<span className='rating-num-total'>0</span>
																		</li>
																		<li className='clearfix li_red'>
																			<span className='rating-num'>
																				1 <i className='bi bi-star-fill'></i>
																			</span>
																			<div className='progress'>
																				<div
																					className='progress-bar progress-bar-success'
																					title='0% đánh giá 1 sao'
																					style={{ width: '0%' }}
																					role='progressbar'
																				>
																					<span className='sr-only'>0% Complete</span>
																				</div>
																			</div>
																			<span className='rating-num-total'>0</span>
																		</li>
																	</ul>
																</div>
																<div className='col_button_review'>
																	<p className='fs-dtrtbtnnx'>
																		<span className='abc'>Gửi bình luận của bạn</span>
																	</p>
																</div>
																<p className='fs-dtrtbtnnx sp clearfix'>
																	<span className='abc'>Gửi bình luận của bạn</span>
																</p>
															</div>
															<div className='wrap_form_cmt'>
																<div className='box_mid'>
																	<div className='boxComment'>
																		<div className='divWrite'>
																			<form className='fComment' method='post' id='fComment'>
																				<div className='heading-comment'>Gửi đánh giá của bạn</div>
																				<div className='text_cmt'>
																					<textarea
																						placeholder='Nhập nội dung nhận xét tại đây. Vui lòng viết Tiếng Việt có dấu'
																						id='txtComment'
																						style={{ width: '100%' }}
																						className='textarea'
																						defaultValue={''}
																					/>
																				</div>
																				<div className='dropdown sendclick' id='btnSendCmt'>
																					{' '}
																					<span id='cannel_comment'>Hủy</span>
																					<span className='btn_comment'>Gửi bình luận</span>
																				</div>
																				<div className='showdropdown'>
																					<div className='closeIfo'>X Đóng</div>
																					<div className='row'>
																						<div className='col-md-6 col-sm-12 col-xs-12'>
																							<div className='vote' id='rater'>
																								<p>Đánh giá của bạn về sản phẩm này</p>
																								<div className='abc' id='rater_buttons' style={{ display: 'block' }}>
																									<span className='order_0 rater_button' href='#!' id='rater_1' />
																									<span className='order_1 rater_button' href='#!' id='rater_2' />
																									<span className='order_2 rater_button' href='#!' id='rater_3' />
																									<span className='order_3 rater_button' href='#!' id='rater_4' />
																									<span className='order_4 rater_button' href='#!' id='rater_5' />
																									<input type='hidden' defaultValue name='hvote' id='hvote' />
																								</div>
																							</div>
																						</div>
																						<div className='col-md-6 col-sm-12 col-xs-12 col_info'>
																							<span className='abc'>Nhập thông tin của bạn</span>
																							<p>
																								<input
																									id='name'
																									type='text'
																									className='textfiled'
																									defaultValue={''}
																									style={{ width: '100%' }}
																									placeholder='Họ tên (Bắt buộc)'
																								/>
																							</p>
																							<p>
																								<input
																									id='email'
																									type='text'
																									className='textfiled'
																									defaultValue={''}
																									style={{ width: '100%' }}
																									placeholder='Email'
																								/>
																							</p>
																							<p style={{ textAlign: 'right' }}>
																								<input defaultValue={1852} type='hidden' />
																								<button
																									id='btnSend'
																									value='submit'
																									className='btn_comment'
																									type='submit'
																								>
																									<span className='true'>Gửi bình luận</span>
																								</button>
																							</p>
																						</div>
																					</div>
																				</div>
																			</form>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className='review-show'>
														<div className='title_commet'>
															Có <span className='true'>50</span> bình luận
														</div>
														<div className='abccc' id='ext_comment'>
															<div className='divCommentList'>
																<div className='list_comment' itemProp='review'>
																	<div itemProp='itemReviewed' itemScope>
																		<span className='true' itemProp='name' />
																	</div>
																	<div className='review-name'>
																		<img src='images/no_avatar.gif' width={65} alt='Avatar' />
																	</div>
																	<div className='info_ask'>
																		<div className='c-title'>
																			<span className='name' itemProp='author'>
																				Nguyễn Văn Bằng
																			</span>
																			- <span className='c-date'>Gửi vào lúc 12:41 - 09/10/2021</span>
																			<div className='rating_star' itemProp='reviewRating'>
																				<meta itemProp='ratingValue' />
																			</div>
																			<div className='clear' />
																		</div>
																		<div className='c-desc'>
																			Muốn đến của hàng chọn sp rồi shop ship về quê đc không shop ơi?
																		</div>
																		<div className='answer'>
																			<a href='#!' style={{ color: '#ff4500', fontSize: 13 }}>
																				Trả lời
																			</a>
																		</div>
																		<div className='divWrite_sub' id='write_sub_64706'>
																			<form className='fComment' method='post' id='fComment'>
																				<p>
																					<label>
																						<strong>Họ tên</strong>
																					</label>
																					<input
																						id='name_64706'
																						type='text'
																						className='textfiled'
																						defaultValue
																						style={{ width: '50%' }}
																					/>
																				</p>
																				<p>
																					<label>
																						<strong>Email</strong>
																					</label>
																					<input
																						id='email_64706'
																						type='text'
																						className='textfiled'
																						defaultValue
																						style={{ width: '50%' }}
																					/>
																				</p>
																				<p>
																					<b>Viết trả của bạn vào bên dưới:</b>
																				</p>
																				<textarea
																					id='txtComment_64706'
																					rows={3}
																					style={{ width: '99%' }}
																					className='textarea'
																					defaultValue={''}
																				/>
																				<button id='btnSend' value='submit' className='more' type='submit'>
																					<span className='true'>Gửi trả lời</span>
																				</button>
																			</form>
																		</div>
																		<div className='divSubComment'>
																			<div className='divCommentList_Sub'>
																				<div className='list_comment_sub admin_reply'>
																					<div className='avatar'>
																						<img src='images/avatar-icon-comment.jpg' width={55} alt='Avatar admin' />
																					</div>
																					<div className='info_ct_sub'>
																						<div className='c-title'>
																							<strong className='c-name'>
																								Thùy Dung<span className='abc'>QTV</span>
																							</strong>{' '}
																							- <span className='c-date'>Gửi vào lúc 14:08 - 09/10/2021</span>
																						</div>
																						<div className='c-desc'>
																							Chào anh <br />
																							Hiện bên em có giao hàng , anh cần đặt hàng liên hệ 18006229 ạ<br />
																							Thông tin đến anh
																						</div>
																					</div>
																					<div className='clear' />
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className='clear' />
																</div>
																<div className='list_comment' itemProp='review' itemScope>
																	<div className='abcc' itemProp='itemReviewed'>
																		<span className='true' itemProp='name' />
																	</div>
																	<div className='review-name'>
																		<img src='images/no_avatar.gif' width={65} alt='Avatar' />
																	</div>
																	<div className='info_ask'>
																		<div className='c-title'>
																			<span className='name' itemProp='author'>
																				long
																			</span>
																			- <span className='c-date'>Gửi vào lúc 18:00 - 07/10/2021</span>
																			<div className='rating_star' itemProp='reviewRating'>
																				<meta itemProp='ratingValue' />
																			</div>
																			<div className='clear' />
																		</div>
																		<div className='c-desc' itemProp='reviewBody'>
																			con nay co phu kien theo ko shop
																		</div>
																		<div className='answer'>
																			<a href='#!' style={{ color: '#ff4500', fontSize: 13 }}>
																				Trả lời
																			</a>
																		</div>
																		<div className='divWrite_sub' id='write_sub_64667'>
																			<form className='fComment' method='post' id='fComment'>
																				<p>
																					<label>
																						<strong>Họ tên</strong>
																					</label>
																					<input
																						id='name_64667'
																						type='text'
																						className='textfiled'
																						defaultValue
																						style={{ width: '50%' }}
																					/>
																				</p>
																				<p>
																					<label>
																						<strong>Email</strong>
																					</label>
																					<input
																						id='email_64667'
																						type='text'
																						className='textfiled'
																						defaultValue
																						style={{ width: '50%' }}
																					/>
																				</p>
																				<p>
																					<b>Viết trả của bạn vào bên dưới:</b>
																				</p>
																				<textarea
																					id='txtComment_64667'
																					rows={3}
																					style={{ width: '99%' }}
																					className='textarea'
																					defaultValue={''}
																				/>
																				<button id='btnSend' value='submit' className='more' type='submit'>
																					<span className='true'>Gửi trả lời</span>
																				</button>
																			</form>
																		</div>
																		<div className='divSubComment'>
																			<div className='divCommentList_Sub'>
																				<div className='list_comment_sub admin_reply'>
																					<div className='avatar'>
																						<img src='images/avatar-icon-comment.jpg' width={55} alt='Avatar admin' />
																					</div>
																					<div className='info_ct_sub'>
																						<div className='c-title'>
																							<strong className='c-name'>
																								Thùy Dung<span className='true'>QTV</span>
																							</strong>{' '}
																							- <span className='c-date'>Gửi vào lúc 20:17 - 07/10/2021</span>
																						</div>
																						<div className='c-desc'>
																							Dạ em chào anh Long,
																							<br />
																							Sản phẩm cũ khi mua hàng sẽ không bao gồm phụ kiện ạ, mình có thể lựa chọn
																							mua kèm bộ cáp sạc chính hãng 18w với giá ưu đãi chỉ 320k ạ<br />
																							Thông tin đến anh ạ!
																						</div>
																					</div>
																					<div className='clear' />
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className='clear' />
																</div>
															</div>
															<div className='more-pagi'>
																<a href='#!'>
																	Xem thêm đánh giá <i className='bi bi-caret-down-fill'></i>
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='col-md-4 col-xs-12 grid-last10 ' id='tab-thong-so'>
											<div className='box-group-product'>
												<div className='box-inner mb-15'>
													<h4 className='title_box_dt_r'>Thông số kỹ thuật</h4>
													<div className='option_focus'>
														<div className='heading-top'>
															<i className='bi bi-plus-circle-fill'></i> Tổng quan
														</div>
														<ul className='parametdesc'>
															<li className='row0'>
																<span className='true'>Thông tin màn hình:</span>
																<strong>{ct_Product.san_pham.thong_tin_man_hinh}</strong>
															</li>
															<li className='row1'>
																<span className='true'>CPU:</span>
																<strong>{ct_Product.san_pham.cpu}</strong>
															</li>
															<li className='row0'>
																<span className='true'>RAM:</span>
																<strong>{ct_Product.san_pham.ram}</strong>
															</li>
															<li className='row1'>
																<span className='true'>Camera sau:</span>
																<strong>{ct_Product.san_pham.camera_sau}</strong>
															</li>
															<li className='row0'>
																<span className='true'>Camera trước:</span>
																<strong>{ct_Product.san_pham.camera_truoc}</strong>
															</li>
															<li className='row1'>
																<span className='true'>Bộ nhớ trong:</span>
																<strong>{ct_Product.san_pham.bo_nho_trong}</strong>
															</li>
															<li className='row0'>
																<span className='true'>Thẻ nhớ ngoài:</span>
																<strong>{ct_Product.san_pham.the_nho_ngoai}</strong>
															</li>
															<li className='row1'>
																<span className='true'>Pin:</span>
																<strong>{ct_Product.san_pham.pin}</strong>
															</li>
															<li className='row0'>
																<span className='true'>Hệ điều hành:</span>
																<strong>{ct_Product.san_pham.he_dieu_hanh}</strong>
															</li>
														</ul>
													</div>
													<div className='btn_show_more_info'>
														<b className='btn-paraexpand' data-toggle='modal' data-target='#parameter-detail'>
															<i className='bi bi-plus-circle-fill'></i>
															Xem cấu hình chi tiết
														</b>
													</div>
												</div>
												<div className='box-inner'>
													<h4 className='title_box_dt_r'>
														Tin tức về Galaxy S10 (8GB|128GB) Hàn Quốc SM-G973N (Cũ 99%)
													</h4>
													<div className='box_news_related'>
														<ul className='news-list-thumb'>
															<li>
																<a title='Có nên mua ngay Galaxy S10 mới hay tiếp tục dùng Galaxy S8, S9 cũ?' href='#!'>
																	<div className='col-xs-4 nopadding-left'>
																		<img
																			src='https://www.xtmobile.vn/vnt_upload/news/02_2019/23/thumbs/500_s10-xtmobile.jpg'
																			alt='Có nên mua ngay Galaxy S10 mới hay tiếp tục dùng Galaxy S8, S9 cũ?'
																			title='Có nên mua ngay Galaxy S10 mới hay tiếp tục dùng Galaxy S8, S9 cũ?'
																		/>
																	</div>
																	<span className='col-xs-8 nopadding'>
																		Có nên mua ngay Galaxy S10 mới hay tiếp tục dùng Galaxy S8, S9 cũ?
																	</span>
																</a>
															</li>
															<li>
																<a title='​Ngay khi cầm trên tay Galaxy S10, bạn hãy làm ngay những việc này' href='#!'>
																	<div className='col-xs-4 nopadding-left'>
																		<img
																			src='https://www.xtmobile.vn/vnt_upload/news/02_2019/21/thumbs/500_featured-galaxy-s10-models-xtmobile.jpg'
																			alt='​Ngay khi cầm trên tay Galaxy S10, bạn hãy làm ngay những việc này'
																			title='​Ngay khi cầm trên tay Galaxy S10, bạn hãy làm ngay những việc này'
																		/>
																	</div>
																	<span className='col-xs-8 nopadding'>
																		​Ngay khi cầm trên tay Galaxy S10, bạn hãy làm ngay những việc này
																	</span>
																</a>
															</li>
															<li>
																<a title='Đánh giá Galaxy S10 vừa ra mắt: Quá hoàn hảo và đáng giá' href='#!'>
																	<div className='col-xs-4 nopadding-left'>
																		<img
																			src='https://www.xtmobile.vn/vnt_upload/news/02_2019/21/thumbs/500_featured-galaxy-s10-xtmobile.jpg'
																			alt='Đánh giá Galaxy S10 vừa ra mắt: Quá hoàn hảo và đáng giá'
																			title='Đánh giá Galaxy S10 vừa ra mắt: Quá hoàn hảo và đáng giá'
																		/>
																	</div>
																	<span className='col-xs-8 nopadding'>
																		Đánh giá Galaxy S10 vừa ra mắt: Quá hoàn hảo và đáng giá
																	</span>
																</a>
															</li>
															<li className='last'>
																<a
																	title='Xiaomi Mi 9 ra mắt: Smartphone đầu tiên chạy chip Snapdragon 855, giá chỉ bằng một nửa Galaxy S10'
																	href='#!'
																>
																	<div className='col-xs-4 nopadding-left'>
																		<img
																			src='https://www.xtmobile.vn/vnt_upload/news/02_2019/20/thumbs/500_xiaomi-mi-9-ra-mat-xtmobile.jpg'
																			alt='Xiaomi Mi 9 ra mắt: Smartphone đầu tiên chạy chip Snapdragon 855, giá chỉ bằng một nửa Galaxy S10'
																			title='Xiaomi Mi 9 ra mắt: Smartphone đầu tiên chạy chip Snapdragon 855, giá chỉ bằng một nửa Galaxy S10'
																		/>
																	</div>
																	<span className='col-xs-8 nopadding'>
																		Xiaomi Mi 9 ra mắt: Smartphone đầu tiên chạy chip Snapdragon 855, giá chỉ bằng một
																		nửa Galaxy S10
																	</span>
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
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Detail;
