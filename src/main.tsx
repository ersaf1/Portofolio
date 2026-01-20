import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

const rootEl = document.getElementById('root')

if (!rootEl) {
  throw new Error('Root element (#root) not found')
}

// Prevent a totally blank page if the app crashes before first paint
rootEl.innerHTML = '<div style="padding:16px;font-family:system-ui">Loading…</div>'

const showFatal = (err: unknown) => {
  const message = err instanceof Error ? err.stack || err.message : String(err)
  rootEl.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;font-family:system-ui">
      <div style="max-width:720px;width:100%;border-radius:16px;padding:16px;background:rgba(0,0,0,0.04)">
        <div style="font-weight:700;margin-bottom:8px">App crashed</div>
        <pre style="white-space:pre-wrap;word-break:break-word;font-size:12px;margin:0">${message}</pre>
      </div>
    </div>
  `
}

window.addEventListener('error', (e) => {
  showFatal((e as ErrorEvent).error || (e as ErrorEvent).message)
})

window.addEventListener('unhandledrejection', (e) => {
  showFatal((e as PromiseRejectionEvent).reason)
})

createRoot(rootEl).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
