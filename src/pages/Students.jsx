import styles from './Students.module.css'

const RESOURCES = [
  { icon: '📅', title: 'Academic Calendar', desc: 'Semester schedules, exam dates, and important deadlines.' },
  { icon: '📋', title: 'Time Table', desc: 'Class schedules organized by semester and programme.' },
  { icon: '🏆', title: 'Scholarships', desc: 'Available scholarships, eligibility criteria and application process.' },
  { icon: '🏠', title: 'Hostel Info', desc: 'Hostel allocation, facilities, and contact details.' },
  { icon: '📊', title: 'Results', desc: 'Semester results and grade reports for AgFE students.' },
  { icon: '📝', title: 'Placement', desc: 'Placement drives, interview prep resources and company visits.' },
]

export default function Students() {
  return (
    <div className={styles.page}>

      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className="section-tag">Students</p>
          <h1 className="section-title" style={{ color: 'white' }}>Student Resources</h1>
          <p style={{ color: '#8fafcc', fontSize: '1rem', lineHeight: 1.8, maxWidth: 580 }}>
            Everything you need as an AgFE student at IIT Kharagpur — academics,
            scholarships, hostel info, and placement support.
          </p>
        </div>
      </div>

      {/* ── RESOURCE CARDS ── */}
      <section className="section-wrapper">
        <p className="section-tag">Quick Access</p>
        <h2 className="section-title">Student Resources</h2>
        <p className="section-lead">
          Access all important student resources in one place.
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
