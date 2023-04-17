import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	locModal: false,
	locFilter: false,

	supModal: false,
	supFilter: false,
};

export const slice = createSlice({
	name: 'modal ',
	initialState,
	reducers: {
		locOpen: (state) => {
			state.locModal = true;
		},
		locClose: (state) => {
			state.locModal = false;
		},
		supOpen: (state) => {
			state.supModal = true;
		},
		supClose: (state) => {
			state.supModal = false;
		},

		locFilter: (state) => {
			state.locFilter = true;
		},
		locFilterClose: (state) => {
			state.locFilter = false;
		},
		supFilter: (state) => {
			state.supFilter = true;
		},
		supFilterClose: (state) => {
			state.supFilter = false;
		},
	},
});

export const {
	locOpen,
	locClose,
	supOpen,
	supClose,

	locFilter,
	locFilterClose,
	supFilter,
	supFilterClose,
} = slice.actions;

export default slice.reducer;
