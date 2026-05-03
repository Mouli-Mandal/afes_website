import { useSearchParams, Link } from 'react-router-dom'
import styles from './Search.module.css'

// All site pages and their searchable contents
const SEARCH_INDEX = [
  { title: 'Home', path: '/', desc: 'Welcome to AFES — Agricultural & Food Engineering Society at IIT Kharagpur.' },
  { title: 'About', path: '/about', desc: 'Learn about AFES — our story, mission, membership, and values.' },
  { title: 'Administration', path: '/administration', desc: 'AFES executive body, faculty advisors, and administrative structure.' },
  { title: 'Vision', path: '/vision', desc: 'Our vision for the future of agricultural and food engineering.' },
  { title: 'Contact Us', path: '/contact', desc: 'Get in touch with AFES — contact details, address, and inquiry form.' },
  { title: 'Feedback', path: '/feedback', desc: 'Share your feedback, suggestions or grievances with AFES.' },
  { title: 'Students', path: '/students', desc: 'Academic calendar, timetable, scholarships, hostel info, results and placement.' },
  { title: 'Faculty & Staff', path: '/faculty', desc: 'Faculty directory, research areas, publications, advisory roles and schedules.' },
  { title: 'Visitors', path: '/visitors', desc: 'Campus map, directions, guest house, visit guidelines for visitors.' },
  { title: 'Alumni', path: '/alumni', desc: 'Alumni network, career opportunities, mentorship program, notable alumni.' },
]

export default function Search() {
  const [params] = useSearchParams()
  const query = params.get('q') || ''
  const q = query.toLowerCase().trim()

  const results = q
    ? SEARCH_INDEX.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q)
      )
    : []

  return (
    <div className={styles.page}>

      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className="section-tag">Search</p>
          <h1 className="section-title" style={{ color: 'white' }}>
            {q ? `Results for "${query}"` : 'Search AFES'}
          </h1>
          <p style={{ color: '#8fafcc', fontSize: '1rem' }}>
            {q
              ? `${results.length} result${results.length !== 1 ? 's' : ''} found`
              : 'Use the search bar in the top navigation to find anything on the site.'}
          </p>
        </div>
      </div>

      {/* ── RESULTS ── */}
      <section className="section-wrapper">
        {q && results.length === 0 && (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🔍</span>
            <p>No results found for <strong>"{query}"</strong></p>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Try different keywords or browse the pages directly.
            </p>
          </div>
        )}

        <div className={styles.resultList}>
          {results.map(({ title, path, desc }) => (
            <Link key={path} to={path} className={styles.resultCard}>
              <div className={styles.resultTitle}>{title}</div>
              <div className={styles.resultPath}>{path}</div>
              <div className={styles.resultDesc}>{desc}</div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
