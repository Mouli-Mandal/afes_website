import { useState, useRef, useEffect } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: '📸', url: 'https://instagram.com' },
  { label: 'YouTube', icon: '▶️', url: 'https://youtube.com' },
  { label: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
  { label: 'Twitter / X', icon: '🐦', url: 'https://twitter.com' },
]

const TOP_LINKS = ['Students', 'Faculty & Staff', 'Visitors', 'Alumni']

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Administration', to: '/administration' },
  { label: 'Vision', to: '/vision' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Feedback', to: '/feedback' },
]

// Map top-bar labels to routes
const TOP_LINK_ROUTES = {
  'Students': '/students',
  'Faculty & Staff': '/faculty',
  'Visitors': '/visitors',
  'Alumni': '/alumni',
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [socialOpen, setSocialOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [topBarOpen, setTopBarOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const socialRef = useRef(null)

  // Close social dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (socialRef.current && !socialRef.current.contains(e.target)) {
        setSocialOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleSearch(e) {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <header className={styles.header}>

      {/* ── TOP UTILITY BAR (like IIT KGP orange bar) ── */}
      <div className={styles.topBar}>

        {/* Mobile toggle button for top bar — hidden on desktop */}
        <button
          className={styles.topBarToggle}
          onClick={() => setTopBarOpen((v) => !v)}
          aria-label={topBarOpen ? 'Close quick links' : 'Open quick links'}
          aria-expanded={topBarOpen}
        >
          <span className={styles.topBarToggleIcon}>{topBarOpen ? '✕' : '☰'}</span>
          <span className={styles.topBadge}>AY 2025–26</span>
          {/* <span className={styles.topBarToggleLabel}>Quick Links</span> */}
        </button>

        {/* Desktop: always visible | Mobile: toggled by button above */}
        <div className={`${styles.topBarInner} ${topBarOpen ? styles.topBarInnerOpen : ''}`}>

          <div className={styles.topBarLeft}>
            {TOP_LINKS.map((l) => {
              const route = TOP_LINK_ROUTES[l]
              const isActive = route && pathname === route
              const cls = [styles.topLink, isActive ? styles.topLinkActive : ''].join(' ')
              return route
                ? <Link key={l} to={route} className={cls} onClick={() => setTopBarOpen(false)}>{l}</Link>
                : <span key={l} className={cls}>{l}</span>
            })}
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.topBadge}>AY 2025–26</span>

            {/* ── SOCIAL DROPDOWN ── */}
            <div className={styles.socialWrapper} ref={socialRef}>
              <span
                className={[styles.topLink, socialOpen ? styles.topLinkActive : ''].join(' ')}
                onClick={() => setSocialOpen((v) => !v)}
              >
                Social ▾
              </span>
              {socialOpen && (
                <div className={styles.socialDropdown}>
                  {SOCIAL_LINKS.map(({ label, icon, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialItem}
                      onClick={() => setSocialOpen(false)}
                    >
                      <span className={styles.socialIcon}>{icon}</span>
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* ── SEARCH ── */}
            {searchOpen
              ? <form className={styles.searchForm} onSubmit={handleSearch}>
                <input
                  autoFocus
                  className={styles.searchInput}
                  placeholder="Search…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className={styles.searchBtn} aria-label="Search">🔍</button>
                <button type="button" className={styles.searchBtn} onClick={() => { setSearchOpen(false); setSearchQuery('') }} aria-label="Close">✕</button>
              </form>
              : <span className={styles.topLink} onClick={() => setSearchOpen(true)} aria-label="Open search">🔍</span>
            }
          </div>
        </div>

      </div>

      {/* ── MAIN BRAND BAR ── */}
      <div className={styles.brandBar}>
        <div className={styles.brandBarInner}>

          {/* Left: logo */}
          <div className={styles.brandLeft}>
            <Link to="/" className={styles.brand}>
              <div className={styles.logoCircle}>
                <img src="/logo.png" />
              </div>
            </Link>
          </div>

          {/* Center: site name */}
          <div className={styles.brandCenter}>
            <div className={styles.brandName}>Agricultural &amp; Food Engineering Society</div>
            <div className={styles.brandSub}>Indian Institute of Technology Kharagpur</div>
          </div>

          {/* Right: nav links + hamburger */}
          <div className={styles.brandControls}>
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
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={styles.hamburgerIcon} aria-hidden="true">
                {menuOpen ? '✕' : '☰'}
              </span>
              <span className={styles.hamburgerLabel}>
                {menuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
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