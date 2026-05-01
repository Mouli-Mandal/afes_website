import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const TOP_LINKS = ['Students', 'Faculty & Staff', 'Visitors', 'Alumni']

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Administration', to: '/administration' },
  { label: 'Vision', to: '/vision' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Feedback', to: '/feedback' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>

      {/* ── TOP UTILITY BAR (like IIT KGP orange bar) ── */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarLeft}>
            <Link to="/" className={styles.topHomeIcon} aria-label="Home">🏠</Link>
            {TOP_LINKS.map((l) => (
              <span key={l} className={styles.topLink}>{l}</span>
            ))}
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.topBadge}>AY 2025–26</span>
            <span className={styles.topLink}>Social</span>
            <span className={styles.topLink}>🔍</span>
          </div>
        </div>
      </div>

      {/* ── MAIN BRAND BAR ── */}
      <div className={styles.brandBar}>
        <div className={styles.brandBarInner}>

          {/* Logo + Name */}
          <Link to="/" className={styles.brand}>
            <div className={styles.logoCircle}>
              <span className={styles.logoText}>AFES</span>
              <span className={styles.logoSub}>IIT KGP</span>
            </div>
            <div className={styles.brandText}>
              <div className={styles.brandName}>Agricultural &amp; Food Engineering Society</div>
              <div className={styles.brandSub}>Indian Institute of Technology Kharagpur</div>
            </div>
          </Link>

          {/* Main nav links */}
          <nav className={styles.mainNav}>
            <ul className={styles.navList}>
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [styles.mobileLink, isActive ? styles.mobileLinkActive : ''].join(' ')
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}