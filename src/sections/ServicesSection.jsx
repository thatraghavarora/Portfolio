const services = [
  {
    number: '01',
    title: 'Web Development',
    copy: 'Bring your digital dream to life with performant, modern web experiences.',
  },
  {
    number: '02',
    title: 'Web Pentesting',
    copy: 'Protecting what you build online through proactive security testing.',
  },
  {
    number: '03',
    title: 'SEO Specialist',
    copy: 'Let your website speak loudly on Google with data-backed SEO.',
  },
  {
    number: '04',
    title: 'Content Writer',
    copy: 'Your brand has a voice. I help it speak with purpose and clarity.',
  },
]

function ServicesSection() {
  return (
    <section id="work" className="services-section">
      <div className="section-header">
        <p className="eyebrow">Services</p>
        <h2>Your dream, my mission.</h2>
        <p>Your vision deserves airtight security, unforgettable UX, and consistent growth.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.number} className="service-card">
            <p className="service-number">{service.number}</p>
            <div>
              <p className="card-title">{service.title}</p>
              <p>{service.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
