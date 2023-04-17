import { configureStore } from '@reduxjs/toolkit';
import locFilterRoad from './locFilter';
import supFilterRoad from './supFilter';
import modalRoad from './modal';

export const store = configureStore({
	reducer: {
		modalRoad,
		locFilterRoad,
		supFilterRoad,
	},
});
