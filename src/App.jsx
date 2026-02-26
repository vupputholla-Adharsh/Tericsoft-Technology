import React from 'react'
import PostList from './components/PostList'

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Public Posts</h1>
        <p className="subtitle">Fetched from JSONPlaceholder — responsive, with loading and error states.</p>
      </header>
      <main>
        <PostList />
      </main>
      <footer className="app-footer">Built with React + Vite</footer>
    </div>
  )
}
