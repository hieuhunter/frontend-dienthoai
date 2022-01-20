import React from 'react';
import getPageNumbers from '../utils/getPageNumbers';

const Pagination = ({ total, limit, currentPage, onChangePage }) => {
	const totalPage = Math.ceil(total / limit);
	const pageNumbers = getPageNumbers({ currentPage, limit, total });

	const onChangePageHandle = (event, page) => {
		event.preventDefault();
		onChangePage(page);
	};

	return (
		<div className='pagination paginationn'>
			{currentPage !== 1 ? (
				<>
					<button
						type='button'
						className='btnPage'
						aria-label='First page'
						onClick={(event) => onChangePageHandle(event, 1)}
					>
						{'<<'}
					</button>
					
					<button
						type='button'
						className='btnPage'
						aria-label='Previous page'
						onClick={(event) => onChangePageHandle(event, currentPage === 1 ? 1 : currentPage - 1)}
					>
						{'<'}
					</button>
				</>
			) : (
				<>
					<button type='button' className='btnPage' label='No first page available' disabled>
						{'<<'}
					</button>
				
					<button type='button' className='btnPage' label='No previous page available' disabled>
						{'<'}
					</button>
				</>
			)}
			{pageNumbers.map((pageNumber, i) =>
				pageNumber === '...' ? (
				
						
						<button type='button' className='pagelink' aria-label='ellipsis' disabled key={`${pageNumber}${i}`}>
							...
						</button>
                        
					
				) : pageNumber === currentPage ? (
					
						<span className='pagecur' key={pageNumber}>
							{pageNumber}
						</span>
					
				) : (
					
						<button
							type='button'
							className='pagelink'
							aria-label={`Page ${pageNumber}`}
							onClick={(event) => onChangePageHandle(event, pageNumber)}
							key={pageNumber}
						>
							{pageNumber}
						</button>
					
				)
			)}
			{currentPage !== totalPage ? (
				<>
				
					<button
						type='button'
						className='btnPage'
						aria-label='Previous page'
						onClick={(event) => onChangePageHandle(event, currentPage + 1)}
					>
						{'>'}
					</button>
				
					<button
						type='button'
						className='btnPage'
						aria-label='First page'
						onClick={(event) => onChangePageHandle(event, totalPage)}
					>
						{'>>'}
					</button>
				</>
			) : (
				<>
				
					<button type='button' className='btn page-link' label='No next page available' disabled>
						{'>'}
					</button>
				
					<button type='button' className='btn page-link' label='No last page available' disabled>
						{'>>'}
					</button>
				</>
			)}
		</div>
	);
};

export default Pagination;
