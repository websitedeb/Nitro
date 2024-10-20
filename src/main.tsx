import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import generalStore from "./stores/generalStore.ts"
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={generalStore}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </QueryClientProvider>,
)
