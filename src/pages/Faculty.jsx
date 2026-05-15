import styles from './Faculty.module.css'

const RESOURCES = [
  { icon: '📚', label: 'Faculty Directory', desc: 'Complete list of faculty members, their specializations and contact details according their departments.', to: 'https://www.iitkgp.ac.in/faclistbydepartment' },
  { icon: '🔬', label: 'Research Areas', desc: 'Ongoing research projects and areas of expertise according to Professor in the AgFE department .', to: 'https://www.iitkgp.ac.in/department/AG' },
  { icon: '📝', label: 'Publications', desc: 'Research papers, journals, and conference proceedings by faculty members.', to: '/' },
  { icon: '🏛️', label: 'Advisory Roles', desc: 'Faculty Advisors who guide AFES activities and student initiatives.', to: '/' },
  { icon: '📅', label: 'Academic Schedule', desc: 'Semester timetables office hours and faculty availability.', to: 'https://www.iitkgp.ac.in/academic-calendar-ug' },
  { icon: '📬', label: 'Staff Contacts', desc: 'Administrative staff contacts for departmental queries and support.', to: 'https://www.iitkgp.ac.in/department/AG' },
]

export default function Faculty() {
  return (
    <div className={styles.page}>

      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className="section-tag">Faculty &amp; Staff</p>
          <h1 className="section-title" style={{ color: 'white' }}>Faculty &amp; Staff Resources</h1>
          <p style={{ color: '#8fafcc', fontSize: '1rem', lineHeight: 1.8, maxWidth: 580 }}>
            Resources and information for faculty members and staff of the
            Agricultural &amp; Food Engineering department at IIT Kharagpur.
          </p>
        </div>
      </div>

      {/* ── RESOURCE CARDS ── */}
      <section className="section-wrapper">
        <p className="section-tag">Quick Access</p>
        <h2 className="section-title">Faculty &amp; Staff Resources</h2>
        <p className="section-lead">
          Everything faculty members and staff need — research, schedules, and departmental contacts.
        </p>
        <div className={styles.grid}>
          {RESOURCES.map(({ icon, label, desc, to }) => (
            <a
              key={to}
              href={to || '#'}
              className={styles.card}
              target="_blank"
              rel=""
              style={{ textDecoration: 'none', color: 'inherit', pointerEvents: to ? 'auto' : 'none', opacity: to ? 1 : 0.6 }}
            >


              {/* <div key={title} className={styles.card}> */}
              <span className={styles.cardIcon}>{icon}</span>
              <div className={styles.cardTitle}>{label}</div>
              <div className={styles.cardDesc}>{desc}</div>
            </a>
          ))}
        </div>
      </section >

    </div >
  )
}
