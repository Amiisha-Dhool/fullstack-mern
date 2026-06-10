import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

 import { BrowserRouter } from "react-router-dom";
 import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
 import { Toaster } from "@/components/ui/sonner";
import { QueryClientProvider } from '@tanstack/react-query';
  
 import { QueryClient} from "@tanstack/react-query";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster position={"top-center"} />
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)