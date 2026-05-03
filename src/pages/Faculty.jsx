import styles from './Faculty.module.css'

const RESOURCES = [ 
  { icon: '📚', title: 'Faculty Directory', desc: 'Complete list of faculty members, their specializations and contact details.' },
  { icon: '🔬', title: 'Research Areas', desc: 'Ongoing research projects and areas of expertise in the AgFE department.' },
  { icon: '📝', title: 'Publications', desc: 'Research papers, journals, and conference proceedings by faculty members.' },
  { icon: '🏛️', title: 'Advisory Roles', desc: 'Faculty Advisors who guide AFES activities and student initiatives.' },
  { icon: '📅', title: 'Academic Schedule', desc: 'Semester timetables, office hours, and faculty availability.' },
  { icon: '📬', title: 'Staff Contacts', desc: 'Administrative staff contacts for departmental queries and support.' },
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
