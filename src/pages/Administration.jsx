import styles from './Administration.module.css'

const EXEC_TEAM = [
  { name: 'Prof. A. K. Singh', position: 'President', role: 'Faculty', dept: 'AgFE Dept' },
  { name: 'Jane Smith', position: 'Vice President', role: 'Student', dept: 'AgFE Dept' },
  { name: 'Alex Johnson', position: 'General Secretary', role: 'Student', dept: 'AgFE Dept' },
]

const PORTFOLIO_HEADS = [
  { name: 'Alice Brown', position: 'Head of Events', dept: 'AgFE Dept', icon: '📅' },
  { name: 'Bob Wilson', position: 'Head of PR', dept: 'AgFE Dept', icon: '📢' },
  { name: 'Charlie Davis', position: 'Head of Finance', dept: 'AgFE Dept', icon: '💰' },
  { name: 'Diana Evans', position: 'Head of Alumni Relations', dept: 'AgFE Dept', icon: '🤝' },
]

const ADVISORS = [
  { name: 'Prof. Alan Turing', spec: 'AI in Agriculture', dept: 'AgFE Dept' },
  { name: 'Prof. Marie Curie', spec: 'Soil Science', dept: 'AgFE Dept' },
]

export default function Administration() {
  return (
    <div className={styles.page}>
      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <span className={styles.pageHeaderTag}>Governance</span>
          <h1 className={styles.pageHeaderTitle}>Administration</h1>
          <p className={styles.pageHeaderSub}>
            Meet the dedicated individuals who lead AFES and drive our mission forward.
            A robust organizational structure ensuring effective leadership and strategic growth.
          </p>
        </div>
      </div>

      {/* ── EXECUTIVE TEAM ── */}
      <section className="section-wrapper" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <p className="section-tag">Leadership</p>
        <h2 className="section-title">Executive Team</h2>
        <div className={styles.execGrid}>
          {EXEC_TEAM.map((member) => (
            <div key={member.name} className={styles.memberCard}>
              <div className={styles.memberCardTop}>
                <div className={`${styles.avatarFallback} ${styles.avatar_lg}`}>
                  {member.name.replace('Prof. ', '').charAt(0)}
                </div>
              </div>
              <div className={styles.memberCardBody}>
                <div className={styles.memberName}>{member.name}</div>
                <div className={styles.memberPosition}>{member.position}</div>
                <div className={styles.memberRole}>{member.role}</div>
                <div className={styles.memberDept}>{member.dept}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO HEADS ── */}
      <section className={styles.portfolioHeadsSection}>
        <div className="section-wrapper" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <p className="section-tag">Operations</p>
          <h2 className="section-title">Portfolio Heads</h2>
          <div className={styles.portfolioHeadsGrid}>
            {PORTFOLIO_HEADS.map((ph) => (
              <div key={ph.name} className={styles.phCard}>
                <div className={styles.phIcon}>{ph.icon}</div>
                <div className={styles.phName}>{ph.name}</div>
                <div className={styles.phPosition}>{ph.position}</div>
                <div className={styles.phDept}>{ph.dept}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORG CHART ── */}
      <section className={styles.orgSection}>
        <div className="section-wrapper" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <p className="section-tag">Hierarchy</p>
          <h2 className="section-title">Organizational Structure</h2>
          <div className={styles.orgChart}>
            <div className={styles.orgRow}>
              <div className={`${styles.orgBox} ${styles.boxPresident}`}>
                President
                <span className={styles.orgSub}>Faculty</span>
              </div>
            </div>
            <div className={styles.orgConnector}>
              <div className={styles.orgLine}></div>
            </div>
            <div className={styles.orgRow}>
              <div className={`${styles.orgBox} ${styles.boxVP}`}>
                Vice President
                <span className={styles.orgSub}>Student</span>
              </div>
              <div className={`${styles.orgBox} ${styles.boxSecretary}`}>
                General Secretary
                <span className={styles.orgSub}>Student</span>
              </div>
            </div>
            <div className={styles.orgConnector}>
              <div className={styles.orgLine}></div>
            </div>
            <div className={styles.orgRow}>
              <div className={`${styles.orgBox} ${styles.boxPortfolio}`}>
                Portfolio Heads
                <span className={styles.orgSub}>Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVISORS ── */}
      <section className="section-wrapper" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <p className="section-tag">Guidance</p>
        <h2 className="section-title">Faculty Advisors</h2>
        <div className={styles.advisorGrid}>
          {ADVISORS.map((advisor) => (
            <div key={advisor.name} className={styles.advisorCard}>
              <div className={`${styles.avatarFallback} ${styles.avatar_md}`}>
                {advisor.name.replace('Prof. ', '').charAt(0)}
              </div>
              <div className={styles.advisorInfo}>
                <div className={styles.advisorName}>{advisor.name}</div>
                <div className={styles.advisorSpec}>{advisor.spec}</div>
                <div className={styles.advisorDept}>{advisor.dept}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}