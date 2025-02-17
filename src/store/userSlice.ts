import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify'

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, { dispatch }) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setTimeout(() => {
      dispatch(finishLoading(response.data))
    }, 650)
  } catch (error) {
    throw new Error("Error al cargar los datos")
  }
})

const finishLoading = (payload: any) => ({
  type: "users/finishLoading",
  payload,
})

// Slice de usuarios
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null as string | null,
    currentPage: 1, // Estado para la paginación
    userPerPage: 5, // Número de usuarios por página
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload // Actualiza la página actual
    },
    finishLoading: (state, action) => {
      state.loading = false,
        state.users = action.payload // Carga los usuarios
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Error desconocido"
        toast.error("Error al cargar los datos. Compruebe la conexión de la API", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored"
        })
      })
  }
})

export const { setCurrentPage } = userSlice.actions
export default userSlice.reducer
