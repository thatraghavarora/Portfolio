import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogPost from './pages/BlogPost.jsx'

const blogMatch = window.location.pathname.match(/^\/blog\/([^/]+)/)

createRoot(document.getElementById('root')).render(
  <StrictMode>{blogMatch ? <BlogPost slug={blogMatch[1]} /> : <App />}</StrictMode>,
)
