import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './containers/Home/main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
