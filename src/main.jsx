import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RickAndMortyFetcher from './Components/RickAndMortyFetcher.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RickAndMortyFetcher />
    {/* <App /> */}
  </StrictMode>,
)
