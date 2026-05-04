import styles from './Students.module.css'

const RESOURCES = [
  { icon: '📅', label: 'Academic Calendar', desc: 'Semester schedules, exam dates, and important deadlines.', to:'https://www.iitkgp.ac.in/academic-calendar-ug' },
  { icon: '📋', label: 'Study Materials', desc: 'Class schedules organized by semester and programme.', to:'https://drive.google.com/drive/folders/1FbMJzvdLaICUHgMUtfT5CHl02SxnezhJ'},
  { icon: '🏆', label: 'Scholarships', desc: 'Available scholarships, eligibility criteria and application process.', to:'https://www.iitkgp.ac.in/scholarships'},
  { icon: '🏠', label: 'Hostel Info', desc: 'Hostel allocation, facilities, and contact details.', to:'https://hmc.iitkgp.ac.in/web/' },
  { icon: '📊', label: 'Gymkhana', desc: 'Technology Students Gymkhana is the hub of the numerous extra- curricular and co - curricular activities in IIT Kharagpur ranging from sports to socio - cultural.', to:'https://gymkhana.iitkgp.ac.in/'},
  { icon: '📝', label: 'SETU', desc: 'SETU - SUPPORT, EMPATHY, TRANSFORMATION, UPLIFTMENT, offer confidential, one-to-one and group based Counselling Services.', to:'https://sarth.iitkgp.ac.in/' },
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
          {RESOURCES.map(({ icon, label, desc,to }) => (
            <a 
              key={to} 
              href={to || '#'} 
              className={styles.card}
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit', pointerEvents: to ? 'auto' : 'none', opacity: to ? 1 : 0.6 }}
            >
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
