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
    // eslint-disable-next-line no-console
    console.error('App crashed:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-comic-cream">
          <div className="max-w-xl w-full comic-panel p-6 bg-comic-cream">
            <h1 className="font-bangers text-xl text-comic-black mb-2">Halaman error</h1>
            <p className="text-comic-black font-comic mb-4">
              Ada error JavaScript yang bikin halaman tidak tampil.
            </p>
            <pre className="text-xs whitespace-pre-wrap comic-border bg-comic-white rounded-xl p-4 overflow-auto text-comic-black font-mono">
              {this.state.message || 'Unknown error'}
            </pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
