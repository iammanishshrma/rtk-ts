import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0
}

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.count = state.count + 1;
			return state
		},
		decrement: state => {
			state.count = state.count - 1;
			return state
		}
	}
});

export const { increment, decrement } = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;