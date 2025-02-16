import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from "./App.tsx"
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
)
