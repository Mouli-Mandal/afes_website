import styles from './Vision.module.css'

const TIMELINE = [
  {
    num: '01',
    label: 'Career Preparedness',
    color: 'green',
    text: 'Equip every student with the professional skills, industry knowledge, and network needed to thrive in the agri-food engineering sector and beyond — from internships to top-tier placements.',
  },
  {
    num: '02',
    label: 'Industry Connectivity',
    color: 'teal',
    text: 'Build and maintain high-value relationships with alumni, industry leaders, and research institutions to create continuous pipelines of opportunity — internships, collaborations, and employment.',
  },
  {
    num: '03',
    label: 'Democratic Governance',
    color: 'gold',
    text: 'Sustain a transparent, merit-based, democratic structure with annual spring elections, strict one-year tenures, mandatory handover protocols, and rigorous candidate screening.',
  },
  {
    num: '04',
    label: 'Ethical Excellence',
    color: 'navy',
    text: 'Uphold IIT Kharagpur\'s institutional reputation through strict confidentiality mandates, professional conduct standards, and responsible stewardship of society funds and sensitive data.',
  },
  {
    num: '05',
    label: 'Institutional Memory',
    color: 'green',
    text: 'Preserve and transfer operational knowledge across every leadership cycle — through structured handover meetings, digital asset documentation, and alumni network continuity.',
  },
]

const PILLARS = [
  {
    icon: '🌾',
    title: 'Academic Integration',
    body: 'Bridging classroom theory with practical, industry-relevant experiences — ensuring students graduate not just with degrees but with demonstrable professional capability.',
  },
  {
    icon: '⚙️',
    title: 'Operational Excellence',
    body: 'A self-sustaining system with clear financial governance, audit trails, transparent decision-making, and a quorum-based voting structure at every level.',
  },
  {
    icon: '🌍',
    title: 'Global AgFE Network',
    body: 'Connecting the community across campuses, companies, and continents — creating opportunities and mentorships that endure long after graduation.',
  },
]

const MEETINGS = [
  { type: 'General Body',      freq: '1 / Year',         purpose: 'Report on Society\'s annual progress' },
  { type: 'Joint Operational', freq: 'Monthly',           purpose: 'Manage day-to-day operational tasks' },
  { type: 'Executive Council', freq: '1 / Semester',      purpose: 'Finalise broad activities and strategy' },
  { type: 'Extra-ordinary',    freq: 'As needed (7 days notice)', purpose: 'Constitutional amendments' },
]

export default function Vision() {
  return (
    <div className={styles.page}>
      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className="section-tag">Vision &amp; Mission</p>
          <h1 className="section-title" style={{ color: 'white' }}>Our Roadmap to Excellence</h1>
          <p style={{ color: '#8fafcc', fontSize: '1rem', lineHeight: 1.8, maxWidth: 600 }}>
            AFES is more than a list of rules and titles — it is a highly engineered,
            self-sustaining ecosystem designed to transform academic potential into
            industry-ready excellence.
          </p>
        </div>
      </div>

      {/* ── VISION STATEMENT ── */}
      <section className={styles.visionStatement}>
        <div className="section-wrapper" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className={styles.quoteBlock}>
            <div className={styles.quoteMark}>"</div>
            <blockquote className={styles.quote}>
              Bridging the gap between today's students and tomorrow's industry leaders —
              through merit, mentorship, and democratic governance.
            </blockquote>
            <div className={styles.quoteSource}>— AFES Operating Manual, March 2026</div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-wrapper">
        <p className="section-tag">Strategic Objectives</p>
        <h2 className="section-title">Five pillars of purpose</h2>
        <p className="section-lead">
          Each objective drives AFES's day-to-day decisions and long-term institutional direction.
        </p>

        <div className={styles.timeline}>
          {TIMELINE.map(({ num, label, color, text }) => (
            <div key={num} className={styles.timelineItem}>
              <div className={[styles.timelineDot, styles[`dot_${color}`]].join(' ')}>
                {num}
              </div>
              <div className={styles.timelineContent}>
                <div className={[styles.timelineLabel, styles[`label_${color}`]].join(' ')}>
                  {label}
                </div>
                <p className={styles.timelineText}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className={styles.pillarsSection}>
        <div className="section-wrapper" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <p className="section-tag" style={{ color: 'var(--gold-light)' }}>Core Principles</p>
          <h2 className="section-title" style={{ color: 'white' }}>Built on three foundations</h2>
          <div className={styles.pillarsGrid}>
            {PILLARS.map(({ icon, title, body }) => (
              <div key={title} className={styles.pillar}>
                <div className={styles.pillarIcon}>{icon}</div>
                <h3 className={styles.pillarTitle}>{title}</h3>
                <p className={styles.pillarBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE RHYTHM ── */}
      <section className="section-wrapper">
        <p className="section-tag">Governance Rhythm</p>
        <h2 className="section-title">Meetings &amp; decision-making</h2>
        <p className="section-lead">
          Official decisions require a quorum of 50% + 1 of eligible voting members.
          Internal operational votes are held strictly by the VP, Secretary, and Portfolio Heads.
        </p>

        <div className={styles.meetingsTable}>
          <div className={styles.tableHead}>
            <span>Meeting Type</span>
            <span>Frequency</span>
            <span>Primary Purpose</span>
          </div>
          {MEETINGS.map(({ type, freq, purpose }) => (
            <div key={type} className={styles.tableRow}>
              <span className={styles.meetingType}>{type}</span>
              <span className={styles.meetingFreq}>{freq}</span>
              <span className={styles.meetingPurpose}>{purpose}</span>
            </div>
          ))}
        </div>

        <div className={styles.quorumBanner}>
          <span className={styles.quorumTitle}>The Quorum Rule</span>
          <span className={styles.quorumDesc}>
            Official decisions require <strong>50% + 1</strong> of eligible voting members present.
            Internal ops voting is held strictly by VP, Secretary, and Portfolio Heads.
          </span>
        </div>
      </section>
    </div>
  )
}