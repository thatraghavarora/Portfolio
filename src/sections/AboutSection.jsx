function AboutSection() {
  return (
    <section id="portfolio" className="about-section">
      <div className="about-simple">
        <div className="about-copy">
          <p>
            I’m Raghav Arora, an 18-year-old based in India and the founder of Webpeaker. My day flips between
            hardening products through responsible disclosure, crafting React-driven marketing sites, and
            helping brands tell stories that don’t compromise on speed or security.
          </p>
          <p>
            Every project is treated like a live engagement: recon first, UX second, automation always. That
            mindset has helped me secure 28+ organizations, from WHO and Nokia to Swiggy and Zepto, while still
            shipping web experiences that convert.
          </p>

          <p className="about-line">
            <strong>Name:</strong> Raghav Arora · He/Him · Founder @ Webpeaker
          </p>
          <p className="about-line">
            <strong>Skill Stack:</strong> React JS · Ethical Hacking · SEO · Content Systems · Web Automation
          </p>
          <p className="about-line">
            <strong>Highlights:</strong> Responsible disclosures for WHO, Jio, Swiggy, Zepto, Panasonic, Nokia
          </p>
          <p className="about-line">
            <strong>10th RBSE (Commerce + Computer):</strong> 62%
          </p>
          <p className="about-line">
            <strong>12th RBSE (Commerce + Computer):</strong> 79.40% · Computer 99/100
          </p>
          <p className="about-line">
            <strong>Motto:</strong> Working since 2024 · ⚠️ Break Code Not Law · 🇮🇳
          </p>

          <div className="about-actions">
            <a className="primary-btn" href="mailto:raghav@example.com?subject=Let%27s%20Talk">
              Work With Me
            </a>
            <a className="ghost-btn" href="/Raghav-Arora-CV.pdf" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="about-photo" aria-label="Raghav portrait">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
            alt="Raghav smiling"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
