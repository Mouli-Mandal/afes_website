import styles from './About.module.css'

const MISSION_POINTS = [
  'Founded to bridge the gap between campus learning and real-world industry expectations in ag-tech and food engineering.',
  'Governed by an elected executive body under the mentorship of up to 10 Faculty Advisors nominated by the President.',
  'Open to all UG, PG, and Doctoral students — lifetime membership at ₹1000, a single one-time payment.',
  'Faculty and Staff can join as associate members with an annual contribution of ₹2000.',
  'Strict confidentiality culture: members handle sensitive placement and corporate data with full professionalism.',
  'A not-for-profit entity operating autonomously within the Department of Agricultural and Food Engineering.',
]

const MEMBERSHIP = [
  {
    type: 'Student Members',
    icon: '🎓',
    fee: '₹1000',
    feeSub: 'One-time · Lifetime',
    target: 'All UG, PG, and Doctoral students',
    rights: ['Participate in all Society events', 'Receive official communications', 'Apply for Executive Body positions'],
    variant: 'green',
  },
  {
    type: 'Faculty / Staff Members',
    icon: '🏛️',
    fee: '₹2000',
    feeSub: 'Annual · Continued association',
    target: 'Institute Faculty and Staff',
    rights: ['Participate in all Society events', 'Receive official communications', 'Serve as Faculty / Student Advisor'],
    variant: 'navy',
  },
]

export default function About() {
  return (
    <div className={styles.page}>
      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className="section-tag">About AFES</p>
          <h1 className="section-title" style={{ color: 'white' }}>Who we are</h1>
          <p style={{ color: '#8fafcc', fontSize: '1rem', lineHeight: 1.8, maxWidth: 580 }}>
            The Agricultural and Food Engineering Society at IIT Kharagpur — a student-led,
            faculty-guided, not-for-profit entity operating autonomously within the Department.
          </p>
        </div>
      </div>

      {/* ── ABOUT SPLIT ── */}
      <section className="section-wrapper">
        <div className={styles.splitGrid}>
          {/* Left — text */}
          <div>
            <p className="section-tag">Our Story</p>
            <h2 className="section-title">Shaping tomorrow's leaders</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              AFES serves as the primary departmental society for career development, professional
              training, internship facilitation, and industrial engagement within the AgFE department
              at IIT Kharagpur. Every activity is shaped by a mentorship-first philosophy, with up to
              10 Faculty Advisors ensuring alignment with Institute standards and ethics.
            </p>
            <ul className={styles.missionList}>
              {MISSION_POINTS.map((pt) => (
                <li key={pt} className={styles.missionItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — brand block */}
          <div className={styles.brandBlock}>
            <div className={styles.brandBgPattern} aria-hidden="true" />
            <div className={styles.brandBig}>
              Shaping<br /><span>Tomorrow's</span><br />Leaders
            </div>
            <div className={styles.chips}>
              {['IIT Kharagpur', 'Est. AgFE Dept.', 'March 2026 Constitution',
                'Not-for-Profit', 'Student-Led', 'Faculty-Guided'].map((c) => (
                <span key={c} className={styles.chip}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP ── */}
      <section className={styles.memberSection}>
        <div className="section-wrapper" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <p className="section-tag">Membership</p>
          <h2 className="section-title">Join the AFES network</h2>
          <p className="section-lead">
            AFES membership is open to everyone in the AgFE community —
            students, faculty, and staff alike.
          </p>

          <div className={styles.memberGrid}>
            {MEMBERSHIP.map(({ type, icon, fee, feeSub, target, rights, variant }) => (
              <div key={type} className={[styles.memberCard, styles[`member_${variant}`]].join(' ')}>
                <div className={styles.memberHead}>
                  <span className={styles.memberIcon}>{icon}</span>
                  <div>
                    <div className={styles.memberType}>{type}</div>
                    <div className={styles.memberTarget}>{target}</div>
                  </div>
                </div>
                <div className={styles.memberFee}>
                  <span className={styles.feeNum}>{fee}</span>
                  <span className={styles.feeSub}>{feeSub}</span>
                </div>
                <ul className={styles.rightsList}>
                  {rights.map((r) => (
                    <li key={r} className={styles.rightItem}>
                      <span className={styles.checkmark}>✓</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}