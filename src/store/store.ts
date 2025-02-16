import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
  }
})

// Exportar tipos de TypeScript
export type RootState = ReturnType<typeof store.getState> // Tipo estado global
export type AppDispatch = typeof store.dispatch // Tipo dispatch personalizado
