import React, { useEffect, useState } from 'react'

function PostCard({ post }) {
  return (
    <article className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
    </article>
  )
}

export default function PostList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPosts = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setPosts(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="center">
        <div className="spinner" aria-hidden="true"></div>
        <p>Loading posts…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="center">
        <p className="error">Error: {error}</p>
        <button className="btn" onClick={fetchPosts}>Retry</button>
      </div>
    )
  }

  return (
    <section className="posts-grid">
      {posts.map(p => (
        <PostCard key={p.id} post={p} />
      ))}
    </section>
  )
}
