const posts = [
  {
    title: '💻 At 17, I Hacked My School — In Class 12',
    tag: 'Dream To Aim',
    link: '#',
  },
  {
    title: 'Latest Recon Stack for Responsible Disclosure',
    tag: 'thatraghavarora',
    link: '#',
  },
]

function PostsSection() {
  return (
    <section id="blogs" className="posts-section">
      <div className="section-header">
        <p className="eyebrow">Latest Posts</p>
        <h2>Get insights and ideas from my blog.</h2>
        <a href="#" className="text-link">
          More Posts →
        </a>
      </div>
      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.title} className="post-card">
            <p className="post-tag">{post.tag}</p>
            <p className="card-title">{post.title}</p>
            <a href={post.link} className="text-link">
              Read →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PostsSection
