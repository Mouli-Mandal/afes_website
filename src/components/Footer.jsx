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
  'Academic Calendar',
  'Placement Portal',
  'Alumni Network',
  'Event Archives',
  'Newsletter / Magazine',
  'Right to Information',
  'Anti-Ragging Policy',
  'Career Development Centre',
]

const DEPT_LINKS = [
  'AgFE Department Website',
  'IIT Kharagpur Official Site',
  'NIRF Rankings',
  'Student Portal (ERP)',
  'Central Library',
  'Research Publications',
]

const SOCIALS = [
  { icon: '💼', label: 'LinkedIn', href: '#' },
  { icon: '📸', label: 'Instagram', href: '#' },
  { icon: '🐦', label: 'Twitter / X', href: '#' },
  { icon: '▶️', label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── TOP BAND — brand + tagline ── */}
      <div className={styles.topBand}>
        <div className={styles.topBandInner}>
          <div className={styles.topBrandRow}>
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoCircle}>
                <span className={styles.footerLogoText}>AFES</span>
                <span className={styles.footerLogoSub}>IIT KGP</span>
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
              {RESOURCES.map((r) => (
                <li key={r}>
                  <span className={styles.colLink}>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Department */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Department &amp; Institute</h4>
            <ul className={styles.colList}>
              {DEPT_LINKS.map((d) => (
                <li key={d}>
                  <span className={styles.colLink}>{d}</span>
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
                {['0', '1', '2', '4', '8', '3'].map((d, i) => (
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