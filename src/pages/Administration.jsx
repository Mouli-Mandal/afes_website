import styles from './Administration.module.css'

// ─── Real member data parsed from AFES_Contacts.vcf ───────────────────────────

const ORG_STRUCTURE = {
  oversight: [
    // President / Faculty Advisors — not in VCF; kept as placeholders
    { name: 'President', position: 'President', type: 'oversightMain', phone: null },
    { name: 'Faculty Advisor', position: 'Faculty Advisor', type: 'oversightSide', phone: null },
  ],

  studentAdvisors: [
    { name: 'Hrick Bose',         position: 'Student Advisor', type: 'studentAdvisor', phone: '9630174316' },
    { name: 'Mantej Singh Sohi',  position: 'Student Advisor', type: 'studentAdvisor', phone: '8699177818' },
  ],

  vicePresident: [
    { name: 'Dhara Soni', position: 'Vice-President', type: 'vicePresident', phone: '6200412754' },
  ],

  treasurer: [
    // Not present in VCF — kept as placeholder
    { name: 'Treasurer', position: 'Treasurer', type: 'treasurer', phone: null },
  ],

  secretary: [
    { name: 'Kuntal Pal', position: 'Secretary', type: 'secretary', phone: '6296641845' },
  ],

  associateTreasurer: [
    { name: 'Smrutishree Tripathy', position: 'Associate Treasurer', type: 'associateTreasurer', phone: '9827997411' },
    { name: 'Rajshekhar Upadhyay', position: 'Associate Treasurer', type: 'associateTreasurer', phone: '9137454490' },
  ],

  portfolioHeads: {
    websitePR: [
      { name: 'Rakesh Kr. Verma', position: 'Website & PR', type: 'portfolioHead', phone: '7484073950' },
      { name: 'Nishant Kumawat',  position: 'Website & PR', type: 'portfolioHead', phone: '8302963154' },
      { name: 'Jayant Saini',     position: 'Website & PR', type: 'portfolioHead', phone: '7404702327' },
      { name: 'Mouli Mandal',     position: 'Website & PR', type: 'portfolioHead', phone: '9593105208' },
      { name: 'Roushan Kumar',    position: 'Website & PR', type: 'portfolioHead', phone: '9031137470' },
    ],
    alumniRelations: [
      { name: 'Nirmal Patidar',    position: 'Alumni Relations', type: 'portfolioHead', phone: '9165905280' },
      { name: 'Jyotshna Rani',    position: 'Alumni Relations', type: 'portfolioHead', phone: '8341425479' },
      { name: 'Arjun Gupta',      position: 'Alumni Relations', type: 'portfolioHead', phone: '7879590186' },
      { name: 'Nimay Agarwal',    position: 'Alumni Relations', type: 'portfolioHead', phone: '9993326196' },
      { name: 'Rutthvick Trehan', position: 'Alumni Relations', type: 'portfolioHead', phone: '9599554201' },
    ],
    cdc: [
      { name: 'Sri Raghav Tanikella', position: 'CDC', type: 'portfolioHead', phone: '9940046078' },
      { name: 'Ankit Kumar',          position: 'CDC', type: 'portfolioHead', phone: '6205201375' },
      { name: 'Ashish Kumar',         position: 'CDC', type: 'portfolioHead', phone: '8899240987' },
      { name: 'Anshu Kumar',          position: 'CDC', type: 'portfolioHead', phone: '8877448982' },
      { name: 'Mohd Ismail',          position: 'CDC', type: 'portfolioHead', phone: '9311091344' },
      { name: 'Sahil Bisen',          position: 'CDC', type: 'portfolioHead', phone: '9689826505' },
      { name: 'Devansh Agarwal',      position: 'CDC', type: 'portfolioHead', phone: null },
    ],
    eventOrg: [
      { name: 'Anukul Das',    position: 'Event Organization', type: 'portfolioHead', phone: '7479307611' },
      { name: 'Kashish Singh', position: 'Event Organization', type: 'portfolioHead', phone: '7060052817' },
      { name: 'Yamini Priya',  position: 'Event Organization', type: 'portfolioHead', phone: '6300523621' },
      { name: 'Kumkum Gorai',  position: 'Event Organization', type: 'portfolioHead', phone: '7320809248' },
      { name: 'Nidhi',         position: 'Event Organization', type: 'portfolioHead', phone: '9121020404' },
      { name: 'Vaskar Kundu',  position: 'Event Organization', type: 'portfolioHead', phone: '8617350165' },
      { name: 'Anuruddh Kumar',position: 'Event Organization', type: 'portfolioHead', phone: '8604993521' },
      { name: 'Kasu Suji',     position: 'Event Organization', type: 'portfolioHead', phone: '8897206614' },
    ],
  },

  // Under-secretary / Associate not in VCF — shown as structural placeholders
  execution: [
    { name: 'Under-Secretary', position: 'Under-Secretary', type: 'underSecretary', phone: null },
    { name: 'Associate',       position: 'Associate',       type: 'associate',      phone: null },
  ],
}

// ─── Portfolio configuration (label, icon, colour accent) ────────────────────
const PORTFOLIO_CONFIG = [
  {
    key: 'websitePR',
    label: 'Website & Public Relations',
    icon: '🌐',
    accent: '#4e9af1',
  },
  {
    key: 'alumniRelations',
    label: 'Alumni Relations',
    icon: '🤝',
    accent: '#a78bfa',
  },
  {
    key: 'cdc',
    label: 'CDC',
    icon: '💼',
    accent: '#34d399',
  },
  {
    key: 'eventOrg',
    label: 'Event Organization',
    icon: '🎉',
    accent: '#f97316',
  },
]

// ─── Colour map ───────────────────────────────────────────────────────────────
const COLOR_MAP = {
  oversightMain:      '#4a6fa5',
  oversightSide:      '#2d9d78',
  studentAdvisor:     '#2d9d78',
  vicePresident:      '#76b041',
  treasurer:          '#2d9d78',
  secretary:          '#76b041',
  associateTreasurer: '#76b041',
  portfolioHead:      '#76b041',
  underSecretary:     '#2d9d78',
  associate:          '#2d9d78',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getBoxColor(type) {
  return COLOR_MAP[type] || '#4a6fa5'
}

function initials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
}

// ─── OrgBox ───────────────────────────────────────────────────────────────────
function OrgBox({ member, compact = false }) {
  const bg = getBoxColor(member.type)
  return (
    <div
      className={`${styles.orgBox} ${compact ? styles.orgBoxCompact : ''}`}
      style={{ backgroundColor: bg }}
    >
      {!compact && (
        <div className={styles.orgBoxAvatar} style={{ borderColor: bg }}>
          {initials(member.name)}
        </div>
      )}
      <div className={styles.orgBoxName}>{member.name}</div>
      <div className={styles.orgBoxPosition}>{member.position}</div>
      {member.phone && (
        <a
          href={`tel:${member.phone}`}
          className={styles.orgBoxPhone}
          onClick={(e) => e.stopPropagation()}
        >
          📞 {member.phone}
        </a>
      )}
    </div>
  )
}

// ─── MemberCard (for portfolio grids) ────────────────────────────────────────
function MemberCard({ member, accent }) {
  return (
    <div className={styles.memberCard} style={{ '--accent': accent }}>
      <div className={styles.memberAvatar} style={{ background: accent }}>
        {initials(member.name)}
      </div>
      <div className={styles.memberName}>{member.name}</div>
      <div className={styles.memberRole}>{member.position}</div>
      {member.phone ? (
        <a href={`tel:${member.phone}`} className={styles.memberPhone}>
          📞 {member.phone}
        </a>
      ) : (
        <span className={styles.memberPhoneNA}>No contact listed</span>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
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

            {/* ── OVERSIGHT ── */}
            <div className={styles.orgLevel}>
              <div className={styles.levelLabel}>Oversight</div>
              <div className={styles.levelContent}>
                <div className={styles.oversightRow}>
                  <OrgBox member={ORG_STRUCTURE.oversight[0]} />
                  <div className={styles.oversightAdvisors}>
                    <OrgBox member={ORG_STRUCTURE.oversight[1]} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.levelConnector} />

            {/* ── OPERATIONAL CORE ── */}
            <div className={styles.orgLevel}>
              <div className={styles.levelLabel}>Operational Core</div>
              <div className={styles.levelContent}>
                <div className={styles.operationalRow}>
                  {/* Student Advisors */}
                  <div className={styles.advisorsStack}>
                    {ORG_STRUCTURE.studentAdvisors.map((m) => (
                      <OrgBox key={m.name} member={m} compact />
                    ))}
                  </div>
                  {/* Vice President */}
                  <OrgBox member={ORG_STRUCTURE.vicePresident[0]} />
                  {/* Treasurer */}
                  <OrgBox member={ORG_STRUCTURE.treasurer[0]} />
                </div>
              </div>
            </div>

            <div className={styles.levelConnector} />

            {/* ── SECRETARY & ASSOCIATE TREASURER ── */}
            <div className={styles.orgLevel}>
              <div className={styles.levelContent}>
                <div className={styles.secretaryRow}>
                  <OrgBox member={ORG_STRUCTURE.secretary[0]} />
                  <div className={styles.assocTreasurerStack}>
                    {ORG_STRUCTURE.associateTreasurer.map((m) => (
                      <OrgBox key={m.name} member={m} compact />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.levelConnector} />

            {/* ── PORTFOLIO HEADS (structural row) ── */}
            <div className={styles.orgLevel}>
              <div className={styles.levelLabel}>Portfolio Heads</div>
              <div className={styles.levelContent}>
                <div className={styles.portfolioRow}>
                  {PORTFOLIO_CONFIG.map((p) => (
                    <div
                      key={p.key}
                      className={styles.orgBox}
                      style={{ backgroundColor: COLOR_MAP.portfolioHead, minWidth: 120 }}
                    >
                      <div className={styles.orgBoxName}>{p.icon} {p.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.levelConnector} />

            {/* ── EXECUTION ── */}
            <div className={styles.orgLevel}>
              <div className={styles.levelLabel}>Execution</div>
              <div className={styles.levelContent}>
                <div className={styles.executionRow}>
                  {ORG_STRUCTURE.execution.map((m) => (
                    <OrgBox key={m.name} member={m} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PORTFOLIO SECTIONS (detailed grids) ── */}
      <section className={styles.portfolioSection}>
        <div className="section-wrapper" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
          <p className="section-tag">Members</p>
          <h2 className="section-title">Portfolio-wise Contacts</h2>

          {/* ── Operational Leaders ── */}
          <div className={styles.portfolioBlock}>
            <div
              className={styles.portfolioBlockHeader}
              style={{ '--p-accent': '#4a6fa5' }}
            >
              <span className={styles.portfolioBlockIcon}>🏛️</span>
              <div>
                <div className={styles.portfolioBlockTitle}>Operational Leaders</div>
                <div className={styles.portfolioBlockSub}>Vice-President · Secretary · Treasurer · Student Advisors</div>
              </div>
            </div>
            <div className={styles.memberGrid}>
              {[
                ...ORG_STRUCTURE.vicePresident,
                ...ORG_STRUCTURE.secretary,
                ...ORG_STRUCTURE.associateTreasurer,
                ...ORG_STRUCTURE.studentAdvisors,
              ].map((m) => (
                <MemberCard key={m.name + m.phone} member={m} accent="#4a6fa5" />
              ))}
            </div>
          </div>

          {/* ── Portfolio-specific blocks ── */}
          {PORTFOLIO_CONFIG.map((p) => (
            <div key={p.key} className={styles.portfolioBlock}>
              <div
                className={styles.portfolioBlockHeader}
                style={{ '--p-accent': p.accent }}
              >
                <span className={styles.portfolioBlockIcon}>{p.icon}</span>
                <div>
                  <div className={styles.portfolioBlockTitle}>{p.label}</div>
                  <div className={styles.portfolioBlockSub}>
                    Portfolio Heads — {ORG_STRUCTURE.portfolioHeads[p.key].length} members
                  </div>
                </div>
              </div>
              <div className={styles.memberGrid}>
                {ORG_STRUCTURE.portfolioHeads[p.key].map((m) => (
                  <MemberCard key={m.name + m.phone} member={m} accent={p.accent} />
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  )
}