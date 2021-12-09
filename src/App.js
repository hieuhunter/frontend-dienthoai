import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Routers from './Router';

function App() {
	return(
	<Provider store={store}>
		<Routers />
	</Provider>
	);
}
export default App;
