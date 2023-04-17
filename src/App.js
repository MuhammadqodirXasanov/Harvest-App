import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from './layout/Layout';
import {
	LocationModal,
	SuperModal,
	SuperFilter,
	LocationFilter,
} from './components';
import {
	Dashboard,
	Login,
	Observers,
	Locations,
	Supervisors,
	NoPage,
} from './pages';

function App() {
	const supModal = useSelector((state) => state.modalRoad.supModal);
	const locModal = useSelector((state) => state.modalRoad.locModal);
	const supFilter = useSelector((state) => state.modalRoad.supFilter);
	const locFilter = useSelector((state) => state.modalRoad.locFilter);

	return (
		<div className='App'>
			<div className='width'>
				{locModal ? <LocationModal /> : ''}
				{supModal ? <SuperModal /> : ''}

				{locFilter ? <LocationFilter /> : ''}
				{supFilter ? <SuperFilter /> : ''}
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='home' element={<Layout />}>
							<Route index element={<Dashboard />} />
							<Route path='locations' element={<Locations />} />
							<Route path='supervisors' element={<Supervisors />} />
							<Route path='observers' element={<Observers />} />
						</Route>
						<Route path='*' element={<NoPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
