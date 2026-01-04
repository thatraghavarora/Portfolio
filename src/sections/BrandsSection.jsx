const secureBrands = [
  {
    name: 'NASA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
    blurb: 'Reported vulnerabilities for NASA web properties via responsible disclosure.',
  },
  {
    name: 'WHO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/WHO_logo.svg',
    blurb: 'Security review support for the World Health Organization platforms.',
  },
  {
    name: 'Nokia',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg',
    blurb: 'Assisted Nokia in patching high severity issues.',
  },
  {
    name: 'Panasonic',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Panasonic_logo_(Blue).svg',
    blurb: 'Disclosed credential flaws that impacted customer portals.',
  },
  {
    name: 'Jio',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Reliance_Jio_Logo.svg',
    blurb: 'Helped Reliance Jio secure consumer-facing applications.',
  },
  {
    name: 'Ola',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/OLA_Cabs_logo.svg',
    blurb: 'Audited Ola flows to prevent data leaks and privilege escalation.',
  },
  {
    name: 'Swiggy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Swiggy_logo.svg',
    blurb: 'Ensured Swiggy ordering journeys are hardened.',
  },
  {
    name: 'Zepto',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Zepto_logo.svg',
    blurb: 'Partnered with Zepto on rapid-response bug fixes.',
  },
]

function BrandsSection() {
  const sliderItems = [...secureBrands, ...secureBrands]

  return (
    <section id="hall-of-fame" className="brands-section">
      <div className="section-header brand-header">
        <p className="eyebrow">Happy To Secured</p>
        <h2>Trusted by global teams.</h2>
        <a className="view-more" href="#contact">
          View All
        </a>
      </div>
      <div className="logo-slider">
        <div className="slider-track">
          {sliderItems.map((brand, index) => (
            <article key={`${brand.name}-${index}`} className="logo-pill">
              <div className="logo-mark">
                <img src={brand.logo} alt={`${brand.name} logo`} />
              </div>
              <div className="logo-copy">
                <p className="card-title">{brand.name}</p>
                <p>{brand.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
