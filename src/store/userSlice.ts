import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  return response.data
})

// Slice de usuarios
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
    currentPage: 1, // Estado para la paginación
    userPerPage: 5, // Número de usuarios por página
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload // Actualiza la página actual
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false
      })
  }
})

export const { setCurrentPage } = userSlice.actions
export default userSlice.reducer
