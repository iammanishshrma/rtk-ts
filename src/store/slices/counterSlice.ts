import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState = {
	count: 0
}

const counterSlice = createSlice({
	name: 'counters',
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

// To get particular value from store in a component
export const count = (state: RootState) => state.counter.count;

const counterReducer = counterSlice.reducer;

export default counterReducer;