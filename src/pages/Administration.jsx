import styles from './Administration.module.css'

// Organizational Chart Data
const ORG_STRUCTURE = {
  oversight: [
    { name: 'Prof. A. K. Singh', position: 'President', type: 'oversightMain' },
    { name: 'Prof. Alan Turing', position: 'Faculty Advisor', type: 'oversightSide' },
    { name: 'Prof. Marie Curie', position: 'Faculty Advisor', type: 'oversightSide' },
  ],
  operationalCore: [
    { name: 'Jane Smith', position: 'Student Advisor', type: 'studentAdvisor' },
    { name: 'Alex Johnson', position: 'Vice-President', type: 'vicePresident' },
    { name: 'Sarah Wilson', position: 'Treasurer', type: 'treasurer' },
  ],
  secretary: [
    { name: 'Michael Chen', position: 'Secretary', type: 'secretary' },
    { name: 'Emma Davis', position: 'Associate Treasurer', type: 'associateTreasurer' },
  ],
  portfolioHeads: [
    { name: 'Alice Brown', position: 'Website & PR', type: 'portfolioHead' },
    { name: 'Bob Wilson', position: 'Alumni Relations', type: 'portfolioHead' },
    { name: 'Charlie Davis', position: 'CDC', type: 'portfolioHead' },
    { name: 'Diana Evans', position: 'Event Organization', type: 'portfolioHead' },
  ],
  execution: [
    { name: 'James Wilson', position: 'Under-Secretary', type: 'underSecretary' },
    { name: 'Lisa Anderson', position: 'Associate', type: 'associate' },
  ],
}

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

      {/* ── ORGANIZATIONAL CHART ── */}
      <section className={styles.orgSection}>
        <div className="section-wrapper" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <p className="section-tag">Hierarchy</p>
          <h2 className="section-title">Organizational Structure</h2>

          <div className={styles.orgChartContainer}>
            {/* OVERSIGHT LEVEL */}
            <div className={styles.orgLevel}>
              <div className={styles.levelLabel}>Oversight</div>
              <div className={styles.levelContent}>
                <div className={styles.oversightRow}>
                  <OrgBox member={ORG_STRUCTURE.oversight[0]} />
                  <div className={styles.oversightAdvisors}>
                    <OrgBox member={ORG_STRUCTURE.oversight[1]} />
                    <OrgBox member={ORG_STRUCTURE.oversight[2]} />
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.levelConnector}></div>

            {/* OPERATIONAL CORE LEVEL */}
            <div className={styles.orgLevel}>
              <div className={styles.levelLabel}>Operational Core</div>
              <div className={styles.levelContent}>
                <div className={styles.operationalRow}>
                  <OrgBox member={ORG_STRUCTURE.operationalCore[0]} />
                  <OrgBox member={ORG_STRUCTURE.operationalCore[1]} />
                  <OrgBox member={ORG_STRUCTURE.operationalCore[2]} />
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.levelConnector}></div>

            {/* SECRETARY & ASSOCIATE TREASURER LEVEL */}
            <div className={styles.orgLevel}>
              <div className={styles.levelContent}>
                <div className={styles.secretaryRow}>
                  <OrgBox member={ORG_STRUCTURE.secretary[0]} />
                  <OrgBox member={ORG_STRUCTURE.secretary[1]} />
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.levelConnector}></div>

            {/* PORTFOLIO HEADS LEVEL */}
            <div className={styles.orgLevel}>
              <div className={styles.levelLabel}>Portfolio Heads</div>
              <div className={styles.levelContent}>
                <div className={styles.portfolioRow}>
                  {ORG_STRUCTURE.portfolioHeads.map((member) => (
                    <OrgBox key={member.name} member={member} />
                  ))}
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.levelConnector}></div>

            {/* EXECUTION LEVEL */}
            <div className={styles.orgLevel}>
              <div className={styles.levelLabel}>Execution</div>
              <div className={styles.levelContent}>
                <div className={styles.executionRow}>
                  <OrgBox member={ORG_STRUCTURE.execution[0]} />
                  <OrgBox member={ORG_STRUCTURE.execution[1]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Org Chart Box Component
function OrgBox({ member }) {
  const getBoxColor = (type) => {
    const colorMap = {
      oversightMain: '#4a6fa5',      // Gray-blue
      oversightSide: '#2d9d78',       // Teal
      studentAdvisor: '#2d9d78',      // Teal
      vicePresident: '#76b041',       // Green
      treasurer: '#2d9d78',           // Teal
      secretary: '#76b041',           // Green
      associateTreasurer: '#76b041',  // Green
      portfolioHead: '#76b041',       // Green
      underSecretary: '#2d9d78',      // Teal
      associate: '#2d9d78',           // Teal
    }
    return colorMap[type] || '#4a6fa5'
  }

  return (
    <div className={styles.orgBox} style={{ backgroundColor: getBoxColor(member.type) }}>
      <div className={styles.orgBoxName}>{member.name}</div>
      <div className={styles.orgBoxPosition}>{member.position}</div>
    </div>
  )
}