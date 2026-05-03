import styles from './Alumni.module.css'

const RESOURCES = [
  { icon: '🤝', title: 'Alumni Network', desc: 'Connect with fellow AgFE alumni across industries and geographies.' },
  { icon: '💼', title: 'Career Opportunities', desc: 'Job postings, referrals and career opportunities shared by alumni.' },
  { icon: '🏆', title: 'Notable Alumni', desc: 'Distinguished alumni who have made a mark in their respective fields.' },
  { icon: '📰', title: 'Alumni Newsletter', desc: 'Stay updated with the latest news, achievements and events.' },
  { icon: '🎓', title: 'Mentorship Program', desc: 'Volunteer as a mentor to guide current AgFE students in their careers.' },
  { icon: '🏛️', title: 'Give Back', desc: 'Contribute to scholarships, research, and infrastructure development.' },
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
          {RESOURCES.map(({ icon, title, desc }) => (
            <div key={title} className={styles.card}>
              <span className={styles.cardIcon}>{icon}</span>
              <div className={styles.cardTitle}>{title}</div>
              <div className={styles.cardDesc}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
