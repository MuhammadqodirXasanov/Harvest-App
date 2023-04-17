import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	locFilterList: [],
};

export const locFilter = createSlice({
	name: 'Loc. filter',
	initialState,
	reducers: {
		addLocFilterItem: (state, action) => {
			state.locFilterList.push(action.payload);
		},
	},
});

export const { addLocFilterItem } = locFilter.actions;
export default locFilter.reducer;
