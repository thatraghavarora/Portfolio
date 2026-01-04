import useGithubRepos from '../hooks/useGithubRepos'

function ProjectsSection() {
  const { repos, loading } = useGithubRepos('thatraghavarora')

  if (loading || repos.length === 0) {
    return null
  }

  const sliderItems = [...repos, ...repos]

  return (
    <section id="projects" className="brands-section">
      <div className="section-header brand-header">
        <p className="eyebrow">Live From GitHub</p>
        <h2>Recent public repositories.</h2>
        <a
          className="view-more"
          href="https://github.com/thatraghavarora?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          View All
        </a>
      </div>
      <div className="logo-slider projects-slider">
        <div className="slider-track">
          {sliderItems.map((repo, index) => (
            <article key={`${repo.id}-${index}`} className="logo-pill project-pill">
              <div className="project-image">
                <img
                  src={`https://opengraph.githubassets.com/1/${repo.owner?.login}/${repo.name}`}
                  alt={`${repo.name} preview`}
                />
              </div>
              <div className="logo-copy">
                <p className="card-title">{repo.name}</p>
                <p>{repo.description || 'No description provided.'}</p>
                <small>
                  ★ {repo.stargazers_count} · {repo.language || 'Mixed'} · Updated{' '}
                  {new Date(repo.updated_at).toLocaleDateString()}
                </small>
                <a className="text-link" href={repo.html_url} target="_blank" rel="noreferrer">
                  Open Repository →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
