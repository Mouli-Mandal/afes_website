import styles from './Visitors.module.css'

const RESOURCES = [
  { icon: '🗺️', title: 'Campus Map', desc: 'Navigate the IIT Kharagpur campus and locate the AgFE department easily.' },
  { icon: '🚗', title: 'How to Reach', desc: 'Directions by road, rail, and air to IIT Kharagpur campus.' },
  { icon: '🏨', title: 'Guest House', desc: 'On-campus guest house information, booking details and amenities.' },
  { icon: '📞', title: 'Contact & Reception', desc: 'Department reception contacts for visitor queries and appointments.' },
  { icon: '📋', title: 'Visit Guidelines', desc: 'Visitor entry procedures, security protocols and campus rules.' },
  { icon: '🎓', title: 'Department Overview', desc: 'Learn about the Agricultural & Food Engineering department and its offerings.' },
]

export default function Visitors() {
  return (
    <div className={styles.page}>

      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className="section-tag">Visitors</p>
          <h1 className="section-title" style={{ color: 'white' }}>Welcome to AgFE, IIT KGP</h1>
          <p style={{ color: '#8fafcc', fontSize: '1rem', lineHeight: 1.8, maxWidth: 580 }}>
            Planning a visit to the Agricultural &amp; Food Engineering department at IIT Kharagpur?
            Find everything you need to plan your visit here.
          </p>
        </div>
      </div>

      {/* ── RESOURCE CARDS ── */}
      <section className="section-wrapper">
        <p className="section-tag">Visitor Information</p>
        <h2 className="section-title">Plan Your Visit</h2>
        <p className="section-lead">
          All the information you need before and during your visit to our department.
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
