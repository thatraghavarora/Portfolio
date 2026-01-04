const processSteps = [
  {
    title: 'Discover',
    copy: 'Understand your product, audience, and risk surface before touching a single line of code.',
  },
  {
    title: 'Build',
    copy: 'Design, develop, and test with a secure-by-default mindset backed by automation.',
  },
  {
    title: 'Secure',
    copy: 'Pentest, optimize, and document so your launch is unstoppable and future-proof.',
  },
]

function ProcessSection() {
  return (
    <section className="process-section">
      <div className="section-header">
        <p className="eyebrow">The Process</p>
        <h2>How I Bring Digital Solutions to Life</h2>
        <p>From discovery calls to post-launch security, everything follows a clear map.</p>
      </div>
      <div className="process-steps">
        {processSteps.map((step) => (
          <article key={step.title}>
            <p className="card-title">{step.title}</p>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
      <div className="quote-card">
        <p>“Project Manager, ACME Works”</p>
        <p>“Raghav blended branding, product, and cyber rigor better than any freelancer we’ve met.”</p>
      </div>
    </section>
  )
}

export default ProcessSection
