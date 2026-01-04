const storeItems = [
  {
    title: 'Bug Hunter Launch Kit',
    description:
      'Checklists, report templates, and recon automations I use to land Hall of Fame mentions.',
  },
  {
    title: 'Secure Site Starter Pack',
    description:
      'UI wireframes + hardening guide to launch a blazing fast and safe portfolio or store.',
  },
]

function StoreSection() {
  return (
    <section id="store" className="store-section">
      <div className="section-header">
        <p className="eyebrow">My Store</p>
        <h2>Digital resources built for makers & hunters.</h2>
        <p>Grab the same systems I use to secure products and ship experiences that stand out.</p>
      </div>
      <div className="store-grid">
        {storeItems.map((item) => (
          <article key={item.title} className="store-card">
            <p className="card-title">{item.title}</p>
            <p>{item.description}</p>
            <button type="button">Get It</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StoreSection
