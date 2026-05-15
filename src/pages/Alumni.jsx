import styles from './Alumni.module.css'

const RESOURCES = [
  { icon: '🤝', label: 'Alumni Network', desc: 'Connect with fellow AgFE alumni across industries and geographies.', to: 'http://alumni.iitkgp.ac.in/' },
  { icon: '💼', label: 'Career Opportunities', desc: 'Job postings, referrals and career opportunities shared by alumni.', to: 'https://iitkgp.almaconnect.com/' },
  { icon: '🏆', label: 'Notable Alumni', desc: 'Distinguished alumni who have made a mark in their respective fields.', to: '/' },
  { icon: '📰', label: 'Alumni Newsletter', desc: 'Stay updated with the latest news, achievements and events.', to: 'https://kgpchronicle.iitkgp.ac.in/' },
  { icon: '🎓', label: 'Mentorship Program', desc: 'Volunteer as a mentor to guide current AgFE students in their careers.', to: '/' },
  { icon: '🏛️', label: 'Give Back', desc: 'Contribute to scholarships, research, and infrastructure development.', to: 'http://alumni.iitkgp.ac.in/giving_back' },
]

export default function Alumni() {
  return (
    <div className={styles.page}>

      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className="section-tag">Alumni</p>
          <h1 className="section-title" style={{ color: 'white' }}>AFES Alumni Network</h1>
          <p style={{ color: '#8fafcc', fontSize: '1rem', lineHeight: 1.8, maxWidth: 580 }}>
            Once an AgFE student, always part of the AFES family. Stay connected,
            give back, and help shape the next generation of leaders.
          </p>
        </div>
      </div>

      {/* ── RESOURCE CARDS ── */}
      <section className="section-wrapper">
        <p className="section-tag">Stay Connected</p>
        <h2 className="section-title">Alumni Resources</h2>
        <p className="section-lead">
          Connect, mentor, and contribute to the growing AFES alumni community.
        </p>
        <div className={styles.grid}>
          {RESOURCES.map(({ icon, label, desc, to }) => (
            <a
              key={to}
              href={to || '#'}
              className={styles.card}
              style={{ textDecoration: 'none', color: 'inherit', pointerEvents: to ? 'auto' : 'none', opacity: to ? 1 : 0.6 }}

            >
              {/* < key={title} className={styles.card}> */}
              <span className={styles.cardIcon}>{icon}</span>
              <div className={styles.cardTitle}>{label}</div>
              <div className={styles.cardDesc}>{desc}</div>
            </a>
          ))}
        </div>
      </section>

    </div>
  )
}
