import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { search_ChangeCurrentPageAction, search_RequestedAction } from '../../Redux/Action/searchAcction';
import Layout from '../Layout';
import Pagination from '../Pagination';

const Search = () => {
	const dispatch = useDispatch();

	const ds_search = useSelector((state) => state.search.search);
	/* 	const pageNumbers = getPageNumbers({ currentPage, limit, total }); */
	const formatter = new Intl.NumberFormat('vi', {
		style: 'currency',
		currency: 'VND'
	});
	const [searchParams] = useSearchParams();

	const onChangePage = (page) => {
		dispatch(search_ChangeCurrentPageAction(page));
	};

	useEffect(() => {
		dispatch(search_RequestedAction(searchParams.get('q') || '', ds_search.currentPage));
	}, [dispatch, ds_search.currentPage, searchParams]);

	return (
		<Layout>
			<div id='xtm-container'>
				<div id='xtm-content' className='bg-white padding-top-10'>
					<div className='container'></div>
				</div>
			</div>

			<main style={{ paddingLeft: '75px' }}>
				<div className='title_search'>
					Kết quả tìm kiếm "<span>{searchParams.get('q') || ''}</span>"
				</div>
				<div className='boxProduct'>
					<div className='total_pro'>
						<a href='#!'>({ds_search.total}) Sản phẩm được tìm thấy</a>
					</div>
					<div className='title_s'>
						<h3>Sản phẩm</h3>
					</div>
					<div className='content_s'>
						<div id='List_Product' className='list_product_base clearfix'>
							{ds_search.search.map((sp) => (
								<div className='product-base-grid' key={sp.id}>
									<div className='boxItem'>
										<div className='pic'>
											<Link to={`/Detail/${sp.id}`}>
												<img src={`${sp.image_url}`} alt='iPhone 12 64GB (Cũ 99%)' title='iPhone 12 64GB (Cũ 99%)' />
											</Link>
										</div>
										<div className='pinfo'>
											<div className='product-info-top'>
												<h3>
													<Link to={`/Detail/${sp.id}`}>{sp.ten_sp}</Link>
												</h3>
											</div>
											<div className='div_price'>
												<div className='price'>
													{formatter.format(sp.gia)}
													<span>
														{formatter.format(sp.gia_goc)}
														<span className='mobile-discount'> -16%</span>
													</span>
												</div>
											</div>
											<p className='nt-prepaid-installment'>
												Trả trước <strong>4.917.000 đ</strong>
											</p>
											<p className='note_out_stock'>Giao hàng từ 3 tiếng - 7 ngày</p>
										</div>
									</div>
								</div>
							))}
						</div>
						<Pagination
							total={ds_search.total}
							limit={10}
							currentPage={ds_search.currentPage}
							onChangePage={onChangePage}
						/>
					</div>
				</div>
			</main>
		</Layout>
	);
};
export default Search;
