import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/shared/api/axiosInstance";
import { Repository } from "@/entities/Repositories/types";

interface RepositoriesState {
  data: Repository[];
  loading: boolean;
  error: string | null;
}

const initialState: RepositoriesState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchRepositories = createAsyncThunk(
  "repositories/fetchRepositories",
  async (params: { type: "public" | "private" }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/repos", {
        params: {
          visibility: params.type,
          sort: "updated",
          direction: "desc",
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserRepositories = createAsyncThunk(
  "repositories/fetchUserRepositories",
  async (username: string, { rejectWithValue }) => {
    if (username !== "") {
      try {
        const response = await axiosInstance.get(`/users/${username}/repos`, {
          params: {
            sort: "updated",
            direction: "desc",
          },
        });
        return {
          data: response.data,
          isUserRepos: true,
        };
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }else{
        return {
            data: [],
            isUserRepos: false,
        };
    }
  }
);

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchUserRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchUserRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default repositoriesSlice.reducer;
