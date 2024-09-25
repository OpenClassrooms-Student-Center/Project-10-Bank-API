import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface AuthState {
	user: string;
	token: string;
	firstName: string;
	lastName: string;
}

const initialState: AuthState = {
	user: '',
	token: '',
	firstName: '',
	lastName: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		clearToken: state => {
			state.token = '';
		},
		setUser: (
			state,
			action: PayloadAction<{ firstName: string; lastName: string }>
		) => {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
		},
		clearUser: state => {
			state.firstName = '';
			state.lastName = '';
			state.token = '';
		},
	},
});

export const { setToken, clearToken, setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
export const updateUserProfile =
	(firstName: string, lastName: string) => async (dispatch, getState) => {
		try {
			const token = getState().auth.token;
			if (!token) {
				console.log('No token found in state');
				return;
			}

			const response = await axios.put(
				'http://localhost:3001/api/v1/user/profile',
				{ firstName, lastName },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			console.log('Profile updated successfully:', response.data);
			dispatch(setUser({ firstName, lastName }));
		} catch (error) {
			console.error('Error updating profile:', error);
		}
	};
