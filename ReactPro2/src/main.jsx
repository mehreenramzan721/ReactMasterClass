import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ConditionalComponent from './components/ConditionalComponent.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
