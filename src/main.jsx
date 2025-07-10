import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContextProvider } from './contexts/auth-context.jsx'
import worker from './mocks/index.js'

worker.start({ onUnhandledRequest: "bypass" }).then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Router>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Router>
    </StrictMode>
  );
})
