import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { product_RequestedAction } from '../../Redux/Action/productAction';
const Productnew = () => {
	const dispatch = useDispatch();
	const dsProduct = useSelector((state) => state.san_pham.ds_product);
	const formatter = new Intl.NumberFormat('vi', {
		style: 'currency',
		currency: 'VND'
	});

	console.log(dsProduct);
	useEffect(() => {
		dispatch(product_RequestedAction());
	}, [dispatch]);
	return (
		<>
			<div className='box-accessories-body'>
				<div className='box-content'>
					<div className='grid-style-min'>
						<div className='list_product_base grid-bound-home'>
							{dsProduct.san_pham.map((sp) => (
								<div className='item product-base-grid' key={sp.id}>
									<div className='boxItem'>
										<div className='pic'>
											<Link to={`/Detail/${sp.id}`}>
												<img src={`${sp.image_url}`} alt='iPhone 12 64GB (Cũ 99%)' title='iPhone 12 64GB (Cũ 99%)' />
											</Link>
											<div className='group-flag-top'>
												<span className='flag flag-installment'>Trả góp 0%</span>
												<span className='flag-discount'>-16%</span>
											</div>
										</div>
										<div className='info'>
											<h3>
												<Link to={`/Detail/${sp.id}`}>{sp.ten_sp}</Link>
											</h3>
											<div className='div_price'>
												<p className='price'>
													{formatter.format(sp.gia)}
													<span>
														{formatter.format(sp.gia_goc)}<span className='mobile-discount'> -16%</span>
													</span>
												</p>
											</div>
											<p className='nt-prepaid-installment'>
												Trả trước <strong>4.917.000 đ</strong>
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Productnew;
