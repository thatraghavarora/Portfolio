import { useEffect, useState } from 'react'
import heroPortrait from '../assets/RAGHAV_ARORA.jpeg'

const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/' },
  { label: 'LinkedIn', url: 'https://linkedin.com/' },
  { label: 'Medium', url: 'https://medium.com/' },
  { label: 'Instagram', url: 'https://instagram.com/' },
  { label: 'Twitter', url: 'https://x.com/' },
]

const heroLine =
  '18 Yr || Founder @ Webpeaker || React JS || Ethical Hacker || Writer || SEO || Secured: WHO, JIO, SWIGGY, ZEPTO, PANASONIC, NOKIA ⚠️ BREAK CODE NOT LAW 🇮🇳'

const socialIcons = {
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.28 23.2c.58.11.79-.25.79-.56v-2c-3.35.73-4.06-1.45-4.06-1.45-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.18.09 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.26 3.39.96.1-.76.41-1.26.75-1.55-2.67-.3-5.48-1.34-5.48-5.94 0-1.31.47-2.38 1.22-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.2 11.2 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.65.25 2.87.13 3.17.76.84 1.22 1.9 1.22 3.22 0 4.61-2.82 5.63-5.5 5.92.42.36.8 1.06.8 2.15v3.18c0 .31.2.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        fill="currentColor"
      />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.45 20.45h-3.55v-5.25c0-1.25-.02-2.86-1.75-2.86s-2.01 1.37-2.01 2.77v5.34H9.59V9h3.4v1.56h.05c.47-.89 1.63-1.83 3.36-1.83 3.6 0 4.27 2.37 4.27 5.45v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.57 20.45h3.55V9H3.57v11.45ZM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z"
        fill="currentColor"
      />
    </svg>
  ),
  Medium: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m4.52 6.03-.02-.34H1.14v.43l1.08 1.3c.11.1.16.25.13.4v8.55c.03.18-.03.37-.16.51L1 18.68v.43h3.6v-.43l-1.18-1.26a.68.68 0 0 1-.2-.52V8.27l4.51 10.84h.52l3.92-10.84v8.9c0 .14 0 .17-.09.26l-.9.87v.44h5.23v-.43l-.87-.9a.27.27 0 0 1-.1-.25v-11l3.04 11.6h.6L22.5 6.03v11.9c0 .2 0 .23-.12.34l-.68.65v.45H24v-.44l-.68-.65c-.12-.11-.12-.15-.12-.34V2.33c0-.2 0-.23.12-.34l.68-.65V.9h-4.67l-3.35 10.58L12.66.9H8.53l-3.4 10.75-2.58-3.44Z"
        fill="currentColor"
      />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4Zm6.4-8.9a1.17 1.17 0 1 0 0 2.34 1.17 1.17 0 0 0 0-2.34ZM21.8 7.5c-.05-1.09-.28-2.06-1.02-2.8-.74-.75-1.7-.98-2.8-1.03C16.9 3.6 7.1 3.6 6.02 3.67 4.94 3.72 3.96 3.95 3.22 4.7c-.75.74-.98 1.7-1.03 2.8C2.13 8.58 2.13 15.4 2.2 16.5c.05 1.08.28 2.06 1.02 2.8.75.75 1.71.98 2.8 1.03 1.08.07 10.88.07 11.96 0 1.09-.05 2.06-.28 2.8-1.03.75-.74.98-1.7 1.03-2.8.07-1.08.07-7.92 0-9Zm-1.99 10.32c-.26.66-.77 1.18-1.43 1.43-.99.39-3.33.3-4.38.3s-3.4.09-4.39-.3a2.4 2.4 0 0 1-1.43-1.43c-.39-.99-.3-3.33-.3-4.39 0-1.05-.09-3.4.3-4.39.26-.66.78-1.18 1.43-1.43.99-.4 3.33-.3 4.39-.3s3.4-.1 4.38.3c.66.25 1.18.77 1.43 1.43.4.99.3 3.33.3 4.39 0 1.05.1 3.4-.3 4.39Z"
        fill="currentColor"
      />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M18.25 2h3.3l-7.2 8.23 8.47 11.77h-6.63L11.8 16l-5.96 6H2.52l7.67-8.1L1.98 2h6.77l4.54 6.3zm-1.16 19h1.83L7.03 4.97H5.08z"
        fill="currentColor"
      />
    </svg>
  ),
}

function HeroSection() {
  const [typedLine, setTypedLine] = useState('')

  useEffect(() => {
    if (typedLine.length === heroLine.length) {
      return
    }

    const timeout = setTimeout(() => {
      setTypedLine(heroLine.slice(0, typedLine.length + 1))
    }, 30)

    return () => clearTimeout(timeout)
  }, [typedLine])

  return (
    <section id="home" className="hero-section">
      <div className="hero-simple">
        <div className="hero-avatar" aria-label="Portrait of Raghav Arora">
          <img src={heroPortrait} alt="Raghav Arora portrait" />
        </div>
        <div className="hero-text">
          <p className="eyebrow">⚠️ Break Code Not Law · 🇮🇳</p>
          <h1>Raghav Arora</h1>
          <p className="hero-pronouns">He/Him</p>
          <p className="hero-subtitle typing">
            {typedLine}
            <span className={`cursor ${typedLine.length === heroLine.length ? 'done' : ''}`} />
          </p>
          <div className="hero-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                className="social-icon"
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {socialIcons[social.label]}
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-btn" href="mailto:raghav@example.com?subject=Hire%20Me">
              Hire Me
            </a>
            <a className="ghost-btn" href="/Raghav-Arora-CV.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
