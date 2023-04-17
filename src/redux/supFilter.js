import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	supFilterList: [],
};

export const supFilter = createSlice({
	name: 'Sup. filter',
	initialState,
	reducers: {
		addSupFilterItem: (state, action) => {
			state.supFilterList.push(action.payload);
		},
	},
});

export const { addSupFilterItem } = supFilter.actions;
export default supFilter.reducer;
