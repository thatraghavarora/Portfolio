import { useState } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Journey', href: '#journey' },
  // { label: 'My Store', href: '#store' },
  { label: 'Work', href: '#work' },
  { label: 'Resources', href: '#resources' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="brand" aria-label="Raghav Arora">
        <span className="brand-accent" />
        Raghav Arora <img src="" alt="" srcset="" />
      </div>

      <button
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="primary-navigation" className="site-nav">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-download">
            <a href="/Raghav-Arora-CV.pdf" download onClick={closeMenu}>
              Download CV
            </a>
          </li>
        </ul>
      </nav>

      <a className="download-btn" href="/Raghav-Arora-CV.pdf" download>
        Download CV
      </a>
    </header>
  )
}

export default Header
