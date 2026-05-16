import styles from './Administration.module.css'

// ─── Real member data parsed from AFES_Contacts.vcf ───────────────────────────

const ORG_STRUCTURE = {
  oversight: [
    // President / Faculty Advisors — not in VCF; kept as placeholders
    { name: 'President', position: 'President', type: 'oversightMain' },
    { name: 'Faculty Advisor', position: 'Faculty Advisor', type: 'oversightSide' },
  ],

  studentAdvisors: [
    { name: 'Hrick Bose', position: 'Student Advisor', type: 'studentAdvisor' },
    { name: 'Mantej Singh Sohi', position: 'Student Advisor', type: 'studentAdvisor' },
  ],

  vicePresident: [
    { name: 'Dhara Soni', position: 'Vice-President', type: 'vicePresident' },
  ],

  treasurer: [
    // Not present in VCF — kept as placeholder
    { name: 'Treasurer', position: 'Treasurer', type: 'treasurer' },
  ],

  secretary: [
    { name: 'Kuntal Pal', position: 'Secretary', type: 'secretary' },
  ],

  associateTreasurer: [
    { name: 'Smrutishree Tripathy', position: 'Associate Treasurer', type: 'associateTreasurer' },
    { name: 'Rajshekhar Upadhyay', position: 'Associate Treasurer', type: 'associateTreasurer' },
  ],

  portfolioHeads: {
    websitePR: [
      { name: 'Nishant Kumawat', type: 'portfolioHead' },
      { name: 'Mouli Mandal', type: 'portfolioHead' },
      { name: 'Roushan Kumar', type: 'portfolioHead' },
      { name: 'Rakesh Kr. Verma', type: 'portfolioHead' },
      { name: 'Jayant Saini', type: 'portfolioHead' },
    ],
    alumniRelations: [
      { name: 'Nirmal Patidar', type: 'portfolioHead' },
      { name: 'Rutthvick Trehan', type: 'portfolioHead' },
      { name: 'Jyotshna Rani', type: 'portfolioHead' },
      { name: 'Arjun Gupta', type: 'portfolioHead' },
      { name: 'Nimay Agarwal', type: 'portfolioHead' },
    ],
    cdc: [
      { name: 'Ashish Kumar', type: 'portfolioHead' },
      { name: 'Sri Raghav Tanikella', type: 'portfolioHead' },
      { name: 'Ankit Kumar', type: 'portfolioHead' },
      { name: 'Anshu Kumar', type: 'portfolioHead' },
      { name: 'Mohd Ismail', type: 'portfolioHead' },
      { name: 'Sahil Bisen', type: 'portfolioHead' },
      { name: 'Devansh Agarwal', type: 'portfolioHead' },
    ],
    eventOrg: [
      { name: 'Anukul Das', type: 'portfolioHead' },
      { name: 'Kashish Singh', type: 'portfolioHead' },
      { name: 'Yamini Priya', type: 'portfolioHead' },
      { name: 'Kumkum Gorai', type: 'portfolioHead' },
      { name: 'Nidhi', type: 'portfolioHead' },
      { name: 'Vaskar Kundu', type: 'portfolioHead' },
      { name: 'Anuruddh Kumar', type: 'portfolioHead' },
      { name: 'Kasu Suji', type: 'portfolioHead' },
    ],
  },

  // Under-secretary / Associate not in VCF — shown as structural placeholders
  execution: [
    { name: 'Under-Secretary', position: 'Under-Secretary', type: 'underSecretary' }, 
    { name: 'Associate', position: 'Associate', type: 'associate' },
  ],
}

// ─── Portfolio configuration (label, icon, colour accent) ────────────────────
const PORTFOLIO_CONFIG = [
  {
    key: 'websitePR',
    label: 'Website & Public Relations Heads',
    icon: '🌐',
    accent: '#4e9af1',
  },
  {
    key: 'alumniRelations',
    label: 'Alumni Relations Heads',
    icon: '🤝',
    accent: '#a78bfa',
  },
  {
    key: 'cdc',
    label: 'CDC Heads',
    icon: '💼',
    accent: '#34d399',
  },
  {
    key: 'eventOrg',
    label: 'Event Organization Heads',
    icon: '🎉',
    accent: '#f97316',
  },
]

// ─── Colour map ───────────────────────────────────────────────────────────────
const COLOR_MAP = {
  oversightMain: '#4a6fa5',
  oversightSide: '#2d9d78',
  studentAdvisor: '#2d9d78',
  vicePresident: '#76b041',
  treasurer: '#2d9d78',
  secretary: '#76b041',
  associateTreasurer: '#76b041',
  portfolioHead: '#76b041',
  underSecretary: '#2d9d78',
  associate: '#2d9d78',
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
            <img
              src="/p7.png"
              alt="AFES Executive Ecosystem – Organizational Structure"
              className={styles.orgChartImage}
            />
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO SECTIONS (detailed grids) ── */}
      <section className={styles.portfolioSection}>
        <div className="section-wrapper" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
          <p className="section-tag">Members</p>
          <h2 className="section-title">OUR TEAM</h2>

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