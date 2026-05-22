import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About AFES', to: '/about' },
  { label: 'Administration', to: '/administration' },
  { label: 'Our Vision', to: '/vision' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Feedback', to: '/feedback' },
]

const RESOURCES = [
  { label: 'Academic Calendar', to: 'https://www.iitkgp.ac.in/academic-calendar-ug' },
  { label: 'Placement Portal', to: '/' },
  { label: 'Alumni Network', to: 'https://www.iitkgp.ac.in/navpage/outreach' },
  { label: 'Event Archives' },
  { label: 'Newsletter / Magazine' },
  { label: 'Right to Information', to: 'https://www.iitkgp.ac.in/right-to-information' },
  { label: 'Anti-Ragging Policy', to: 'https://www.iitkgp.ac.in/anti-ragging-measures' },
  { label: 'Career Development Centre', to: 'https://cdc.iitkgp.ac.in/' },
]

const DEPT_LINKS = [
  { label: 'AgFE Department Website', to: 'https://www.iitkgp.ac.in/department/AG' },
  { label: 'IIT Kharagpur Official Site', to: 'https://www.iitkgp.ac.in/home' },
  { label: 'NIRF Rankings', to: 'https://www.nirfindia.org/' },
  { label: 'Student Portal (ERP)', to: 'https://erp.iitkgp.ac.in/SSOAdministration/login.htm?sessionToken=56D08B592CF6F505A68E80CFE5D8CF68.node8&requestedUrl=https://erp.iitkgp.ac.in/IIT_ERP3/' },
  { label: 'Central Library', to: 'https://library.iitkgp.ac.in/' },
  { label: 'Research Publications', to: 'https://www.iitkgp.ac.in/navpage/research' },
]

const SOCIALS = [
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com' },
  { icon: '🐦', label: 'Twitter / X', href: 'https://twitter.com' },
  { icon: '▶️', label: 'YouTube', href: 'https://youtube.com' },
]

export default function Footer() {

  const [visitorCount, setVisitorCount] = useState(null)

  useEffect(() => {
    const SESSION_KEY = 'afes_visitor_counted'


    const alreadyCounted = sessionStorage.getItem(SESSION_KEY)

    const endpoint = alreadyCounted
      ? 'https://countapi.mileshilliard.com/api/v1/get/afes-iitkgp-visitor-count'
      : 'https://countapi.mileshilliard.com/api/v1/hit/afes-iitkgp-visitor-count'

    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setVisitorCount(data.value)
        if (!alreadyCounted) {
          sessionStorage.setItem(SESSION_KEY, 'true')
        }
      })
      .catch(() => setVisitorCount(551112))
  }, [])


  const digits = visitorCount !== null
    ? String(visitorCount).padStart(6, '0').split('')
    : ['0', '0', '0', '0', '0', '0'] // shown while loading

  return (
    <footer className={styles.footer}>

      {/* ── TOP BAND — brand + tagline ── */}
      <div className={styles.topBand}>
        <div className={styles.topBandInner}>
          <div className={styles.topBrandRow}>
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoCircle}>
                {/* <span className={styles.footerLogoText}>AFES</span> */}
                {/* <span className={styles.footerLogoSub}>IIT KGP</span> */}
                <img src="/logo.png" />
              </div>
              <div>
                <div className={styles.footerBrandName}>
                  Agricultural &amp; Food Engineering Society
                </div>
                <div className={styles.footerBrandSub}>
                  Indian Institute of Technology Kharagpur
                </div>
              </div>
            </div>
            <p className={styles.footerTagline}>
              Bridging the gap between today's students and tomorrow's industry leaders —
              through merit, mentorship, and democratic governance.
            </p>
          </div>

          {/* Social row */}
          <div className={styles.socialRow}>
            {SOCIALS.map(({ icon, label, href }) => (
              <a key={label} href={href} className={styles.socialChip}>
                <span>{icon}</span> {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN LINK COLUMNS ── */}
      <div className={styles.linkBand}>
        <div className={styles.linkBandInner}>

          {/* Column 1 — Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.colList}>
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className={styles.colLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Resources */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.colList}>
              {RESOURCES.map(({ label, to }) => (
                <li key={to}>
                  {/* <span className={styles.colLink}>{r}</span> */}
                  <Link to={to} className={styles.colLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Department */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Department &amp; Institute</h4>
            <ul className={styles.colList}>
              {DEPT_LINKS.map(({ label, to }) => (
                <li key={to}>
                  {/* <span className={styles.colLink}>{d}</span> */}
                  <Link to={to} className={styles.colLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactBlock}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Dept. of Agricultural &amp; Food Engineering,<br />IIT Kharagpur, West Bengal — 721302</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>afes@agfe.iitkgp.ac.in</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>+91-3222-283100</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🌐</span>
                <span>agfe.iitkgp.ac.in</span>
              </div>
            </div>

            {/* Visitor counter inspired by IIT KGP */}
            <div className={styles.visitorBox}>
              <span className={styles.visitorLabel}>Visitors</span>
              <div className={styles.visitorDigits}>

                {digits.map((d, i) => (
                  <span key={i} className={styles.digit}>{d}</span>

                ))}
              </div>
              <div className={styles.lastUpdate}>Last Update: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarInner}>
          <span>© {new Date().getFullYear()} AFES — Agricultural &amp; Food Engineering Society, IIT Kharagpur.</span>
          <div className={styles.bottomLinks}>
            <span className={styles.bottomLink}>Legal Disclaimer</span>
            <span className={styles.bottomLink}>Sitemap</span>
            <span className={styles.bottomLink}>Webmaster</span>
            <span className={styles.bottomLink}>Screen Reader Access</span>
          </div>
        </div>
      </div>

    </footer>
  )
}