import React from 'react'

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
  message?: string
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: unknown): State {
    const message = error instanceof Error ? error.message : String(error)
    return { hasError: true, message }
  }

  componentDidCatch(error: unknown) {
    // Keep console logging for debugging in dev
    // eslint-disable-next-line no-console
    console.error('App crashed:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-xl w-full glass rounded-2xl p-6">
            <h1 className="text-xl font-bold mb-2">Halaman error</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Ada error JavaScript yang bikin halaman tidak tampil.
            </p>
            <pre className="text-xs whitespace-pre-wrap bg-black/5 dark:bg-white/5 rounded-xl p-4 overflow-auto">
              {this.state.message || 'Unknown error'}
            </pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
