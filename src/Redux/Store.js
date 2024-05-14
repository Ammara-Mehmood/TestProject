import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    removeUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUser(state, action) {
      const { id, data } = action.payload;
      const userToUpdate = state.users.find(user => user.id === id);
      if (userToUpdate) {
        Object.assign(userToUpdate, data);
      }
    },
  },
});

// Export actions
export const { addUser, removeUser, updateUser } = userSlice.actions;

// Export reducer
export default configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});
