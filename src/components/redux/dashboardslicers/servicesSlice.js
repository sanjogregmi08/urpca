// servicesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/service';

// Define the initial state
const initialState = {
	formData: null,
	status: 'idle',
	error: null,
};

// Define a thunk for fetching the initial form data
export const fetchServiceFormData = createAsyncThunk(
	'services/fetchServiceFormData',
	async () => {
		try {
			const response = await fetch(API_URL);
			if (!response.ok) {
				throw new Error('Fetching data failed');
			}

			const data = await response.json();
			return data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

// Define a thunk for submitting service form data
export const submitServiceForm = createAsyncThunk(
	'services/submitServiceForm',
	async (formData) => {
		console.log(formData, 'inside the data');
		try {
			const formDataObj = new FormData();
			for (const key in formData) {
				formDataObj.append(key, formData[key]);
			}

			const response = await fetch('http://localhost:3000/tax', {
				method: 'POST',
				body: formDataObj,
			});
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			console.log(data);
			return data;
		} catch (error) {
			throw error;
		}
	}
);

const servicesSlice = createSlice({
	name: 'services',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchServiceFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchServiceFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.formData = action.payload;
			})
			.addCase(fetchServiceFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitServiceForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitServiceForm.fulfilled, (state) => {
				state.status = 'succeeded';
			})
			.addCase(submitServiceForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			});
	},
});

export const selectServiceForm = (state) => state.services.formData;
export const selectServiceFormStatus = (state) => state.services.status;
export const selectServiceFormError = (state) => state.services.error;

export default servicesSlice.reducer;
