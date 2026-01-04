import { useEffect } from 'react'
import './BlogPost.css'
import { getPostBySlug } from '../utils/blogData'
import Header from '../components/Header'

function BlogPost({ slug }) {
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="blog-post-shell">
        <Header />
        <main className="blog-post-main">
          <p className="eyebrow">Blog</p>
          <h1>Post not found</h1>
          <a className="primary-btn" href="/">
            Back to Home
          </a>
        </main>
      </div>
    )
  }

  const paragraphs = post.content?.split('\n\n').filter(Boolean) ?? []

  useEffect(() => {
    const prevTitle = document.title
    document.title = `${post.title} · Raghav Arora`
    const desc = post.excerpt || post.content?.slice(0, 140)
    let metaTag = document.querySelector('meta[name="description"]')
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('name', 'description')
      document.head.appendChild(metaTag)
    }
    const prevDescription = metaTag.getAttribute('content')
    metaTag.setAttribute('content', desc)
    return () => {
      document.title = prevTitle
      if (prevDescription) {
        metaTag.setAttribute('content', prevDescription)
      } else {
        metaTag.remove()
      }
    }
  }, [post.title, post.excerpt, post.content])

  return (
    <div className="blog-post-shell">
      <Header />
      <main className="blog-post-main">
        <p className="eyebrow">Blog</p>
        <h1>{post.title}</h1>
        <p className="blog-meta">
          {post.date} · {post.readTime}
        </p>
        <div className="blog-tags detail">
          {post.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {post.excerpt && <p className="blog-excerpt detail">{post.excerpt}</p>}
        {post.image && (
          <div className="blog-hero-image">
            <img src={post.image} alt={post.title} />
          </div>
        )}
        <article className="blog-detail-body">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
        <div className="blog-actions">
          <a className="ghost-btn" href="/">
            ← Back to Portfolio
          </a>
          <a className="primary-btn" href={`/blogs/${post.slug}/content.md`} download>
            Download Markdown
          </a>
        </div>
      </main>
    </div>
  )
}

export default BlogPost
