import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosInstance } from "@/shared/api/axiosInstance";
import { SearchUsersResponse } from "@/entities/User/types";

interface UsersState {
  searchResults: SearchUsersResponse | null;
  searchLoading: boolean;
  searchError: string | null;
  selectedUser: string | null;
}

const initialState: UsersState = {
  searchResults: null,
  searchLoading: false,
  searchError: null,
  selectedUser: null,
};

export const searchUsers = createAsyncThunk(
  "users/searchUsers",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/search/users", {
        params: {
          q: query,
          per_page: 10,
          page: 1,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.searchResults = null;
      state.searchError = null;
    },
    setSelectedUser: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.searchLoading = true;
        state.searchError = null;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchError = action.payload as string;
      });
  },
});

export const { clearSearch, setSelectedUser } = usersSlice.actions;
export default usersSlice.reducer;
