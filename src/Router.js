import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Component/Home';

import Detail from './Component/Detail';
import Cart from './Component/Cart';
import Login from './Component/Login&&Register/Login';
import Register from './Component/Login&&Register/Register';
import Product from './Component/Product/Product';
import ProductTH from './Component/Product/index_th';
import Profile from './Component/Profile';
import Search from './Component/Search';

const Routers = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Detail/:id' element={<Detail />} />
				<Route path='/Cart' element={<Cart />} />
				<Route path='/Login' element={<Login />} />
				<Route path='/Register' element={<Register />} />
				<Route path='/Profile' element={<Profile />} />
				<Route path='/Search' element={<Search />} />
				<Route path='/Product/:id' element={<Product />} />
				<Route path='/ProductTH/:id' element={<ProductTH />} />
			</Routes>
		</Router>
	);
};
export default Routers;
