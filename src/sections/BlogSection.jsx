import { useMemo } from 'react'
import { getAllPosts } from '../utils/blogData'

function BlogSection() {
  const posts = useMemo(() => getAllPosts(), [])

  if (!posts.length) return null

  return (
    <section id="blogs" className="posts-section">
      <div className="section-header">
        <p className="eyebrow">Latest Blog Drops</p>
        <h2>Stories straight from my GitHub blog folder.</h2>
      </div>

      <div className="logo-slider blog-slider">
        <div className="slider-track">
          {[...posts, ...posts].map((post, idx) => (
            <a key={`${post.slug}-${idx}`} className="blog-pill" href={`/blog/${post.slug}`}>
              {post.image && (
                <div className="blog-thumb">
                  <img src={post.image} alt={post.title} />
                </div>
              )}
              <div className="blog-card-body">
                <p className="card-title">{post.title}</p>
                <p className="blog-meta">
                  {post.date} · {post.readTime}
                </p>
                <p className="blog-excerpt">
                  {post.excerpt || post.content?.slice(0, 140) || 'Read full story →'}
                </p>
                <div className="blog-tags">
                  {post.tags?.map((tag) => (
                    <span key={`${post.slug}-${tag}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
