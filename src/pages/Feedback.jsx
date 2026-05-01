import { useState } from 'react'
import styles from './Feedback.module.css'

/*
  ── EMAIL SETUP ──────────────────────────────────────────────
  This form sends feedback to the official AFES email using
  EmailJS (https://www.emailjs.com) — free, no backend needed.

  SETUP STEPS:
  1. Create a free account at emailjs.com
  2. Add a service (Gmail / Outlook) — note your SERVICE_ID
  3. Create an email template using the variables below — note TEMPLATE_ID
  4. Find your PUBLIC_KEY in Account → API Keys
  5. Replace the three constants below with your actual values
  6. Run: npm install @emailjs/browser

  Template variables available in your EmailJS template:
    {{from_name}}     — Sender name (or "Anonymous")
    {{from_program}}  — Year / Program
    {{reply_to}}      — Sender email (if provided)
    {{rating}}        — Star rating with label
    {{categories}}    — Comma-separated feedback areas
    {{recommend}}     — Recommendation answer
    {{message}}       — Full feedback text
    {{to_email}}      — afes@agfe.iitkgp.ac.in
    {{sent_at}}       — Date & time
  ──────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'   // ← replace
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // ← replace
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'   // ← replace
const AFES_EMAIL = 'afes@agfe.iitkgp.ac.in'

const CATEGORIES = [
  'Events & Activities',
  'Career Support (CDC)',
  'Communication & Updates',
  'Alumni Network',
  'Governance & Transparency',
  'Membership Value',
  'Website & PR',
  'Other',
]

const PROGRAMS = [
  '1st Year UG', '2nd Year UG', '3rd Year UG', '4th Year UG',
  '1st Year PG', '2nd Year PG', 'PhD', 'Faculty / Staff',
]

const STAR_LABELS = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']

const SIDE_INFO = [
  { icon: '🔒', title: 'Confidential', text: 'Your name is optional. Anonymous submissions carry equal weight with the Executive Body.' },
  { icon: '📋', title: 'Reviewed Each Term', text: 'All feedback is reviewed by the VP & Secretary every semester and tabled at the Executive Council.' },
  { icon: '🔄', title: 'Drives Change', text: 'Your input directly shapes AFES\'s agenda for the next academic year — events, portfolios, and governance.' },
]

/* Format a timestamp like "01 May 2026, 06:24 AM" */
function formatDate() {
  return new Date().toLocaleString('en-IN', {
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  })
}

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [categories, setCategories] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({
    name: '', email: '', program: '', feedback: '', recommend: '',
  })

  function toggleCategory(cat) {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.feedback.trim()) return

    setStatus('sending')

    const ratingLabel = rating > 0 ? `${rating}/5 — ${STAR_LABELS[rating - 1]}` : 'Not rated'
    const catList = categories.length ? categories.join(', ') : 'Not specified'

    const templateParams = {
      to_email: AFES_EMAIL,
      from_name: form.name.trim() || 'Anonymous',
      from_program: form.program || 'Not specified',
      reply_to: form.email.trim() || 'anonymous@no-reply.com',
      rating: ratingLabel,
      categories: catList,
      recommend: form.recommend || 'Not answered',
      message: form.feedback,
      sent_at: formatDate(),
    }

    try {
      // Dynamically import EmailJS so the build doesn't fail if not installed
      const emailjs = await import('@emailjs/browser').catch(() => null)

      if (emailjs && EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID') {
        await emailjs.default.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        )
      } else {
        /* ── DEV / DEMO MODE ──
           EmailJS not configured yet — log to console and simulate success.
           Replace the constants at the top of this file with real values. */
        console.log('📧 [AFES Feedback — Demo Mode] Would send to:', AFES_EMAIL)
        console.log('Template params:', templateParams)
        await new Promise((r) => setTimeout(r, 1200)) // simulate network
      }

      setStatus('success')
      // Reset after 6 seconds
      setTimeout(() => {
        setStatus('idle')
        setRating(0); setHovered(0); setCategories([])
        setForm({ name: '', email: '', program: '', feedback: '', recommend: '' })
      }, 6000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const displayRating = hovered || rating

  return (
    <div className={styles.page}>

      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <span className={styles.pageHeaderTag}>Member Feedback</span>
          <h1 className={styles.pageHeaderTitle}>Share Your Experience</h1>
          <p className={styles.pageHeaderSub}>
            Your feedback is submitted directly to the official AFES email and reviewed
            by the Executive Body every semester. Your honesty helps us improve.
          </p>
          <div className={styles.emailBadge}>
            <span>📬</span>
            <span>Responses sent to: <strong>{AFES_EMAIL}</strong></span>
          </div>
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <section className="section-wrapper">
        <div className={styles.feedbackLayout}>

          {/* ── SIDEBAR ── */}
          <aside className={styles.sidebar}>
            {SIDE_INFO.map(({ icon, title, text }) => (
              <div key={title} className={styles.sideCard}>
                <div className={styles.sideIcon}>{icon}</div>
                <h3 className={styles.sideTitle}>{title}</h3>
                <p className={styles.sideText}>{text}</p>
              </div>
            ))}

            {/* Email format preview */}
            <div className={styles.emailPreview}>
              <div className={styles.emailPreviewTitle}>📧 Email Format</div>
              <div className={styles.emailPreviewBody}>
                <div className={styles.emailLine}><span>To:</span> {AFES_EMAIL}</div>
                <div className={styles.emailLine}><span>Subject:</span> AFES Feedback — [Name] — [Date]</div>
                <div className={styles.emailLine}><span>Rating:</span> ★★★★☆</div>
                <div className={styles.emailLine}><span>Areas:</span> Events, CDC…</div>
                <div className={styles.emailLine}><span>Message:</span> Your feedback…</div>
              </div>
            </div>
          </aside>

          {/* ── FORM ── */}
          <div className={styles.formCard}>
            {/* SUCCESS STATE */}
            {status === 'success' && (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h2 className={styles.successTitle}>Feedback Submitted!</h2>
                <p className={styles.successText}>
                  Your feedback has been sent formally to{' '}
                  <strong>{AFES_EMAIL}</strong>. The Executive Body will review it
                  at the next semester review. Thank you for helping AFES improve.
                </p>
                <div className={styles.successNote}>
                  This form will reset in a few seconds.
                </div>
              </div>
            )}

            {/* ERROR STATE */}
            {status === 'error' && (
              <div className={styles.errorBanner}>
                ⚠️ Could not send your feedback. Please email us directly at <strong>{AFES_EMAIL}</strong>.
              </div>
            )}

            {/* FORM (always rendered, hidden when success) */}
            <form
              onSubmit={handleSubmit}
              style={{ display: status === 'success' ? 'none' : 'block' }}
            >
              <h2 className={styles.formTitle}>Leave Your Feedback</h2>
              <p className={styles.formSubtitle}>
                Submitted feedback is formatted into a formal email and delivered directly
                to the AFES official inbox.
              </p>

              {/* ── STAR RATING ── */}
              <div className={styles.ratingSection}>
                <label className={styles.fieldLabel}>Overall Rating</label>
                <div className={styles.starsRow}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      className={[styles.star, displayRating >= n ? styles.starLit : ''].join(' ')}
                      onClick={() => setRating(n)}
                      onMouseEnter={() => setHovered(n)}
                      onMouseLeave={() => setHovered(0)}
                      aria-label={`Rate ${n} out of 5`}
                    >
                      ★
                    </button>
                  ))}
                  {displayRating > 0 && (
                    <span className={styles.ratingWord}>{STAR_LABELS[displayRating - 1]}</span>
                  )}
                </div>
              </div>

              {/* ── CATEGORIES ── */}
              <div className={styles.catSection}>
                <label className={styles.fieldLabel}>Area of Feedback <span className={styles.optional}>(select all that apply)</span></label>
                <div className={styles.catGrid}>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={[styles.catChip, categories.includes(cat) ? styles.catSelected : ''].join(' ')}
                      onClick={() => toggleCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <hr className={styles.fieldDivider} />

              {/* ── IDENTITY ── */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fb-name">
                    Your Name <span className={styles.optional}>(optional)</span>
                  </label>
                  <input
                    id="fb-name" name="name" type="text"
                    placeholder="Leave blank to stay anonymous"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fb-email">
                    Your Email <span className={styles.optional}>(for reply, optional)</span>
                  </label>
                  <input
                    id="fb-email" name="email" type="email"
                    placeholder="your@email.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="fb-program">Year / Program</label>
                <select id="fb-program" name="program" value={form.program} onChange={handleChange}>
                  <option value="">Select…</option>
                  {PROGRAMS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              {/* ── FEEDBACK ── */}
              <div className="form-group">
                <label htmlFor="fb-feedback">
                  Detailed Feedback <span style={{ color: 'red' }}>*</span>
                </label>
                <textarea
                  id="fb-feedback" name="feedback"
                  placeholder="Share your thoughts, suggestions, or concerns. Your honesty directly shapes AFES's next academic year."
                  value={form.feedback} onChange={handleChange}
                  required style={{ minHeight: 140 }}
                />
              </div>

              {/* ── RECOMMEND ── */}
              <div className="form-group">
                <label htmlFor="fb-recommend">Would you recommend AFES to a fellow student?</label>
                <select id="fb-recommend" name="recommend" value={form.recommend} onChange={handleChange}>
                  <option value="">Select…</option>
                  <option>Definitely yes</option>
                  <option>Probably yes</option>
                  <option>Not sure</option>
                  <option>Probably not</option>
                  <option>Definitely not</option>
                </select>
              </div>

              {/* ── SUBMIT ── */}
              <button
                type="submit"
                className={[styles.submitBtn, status === 'sending' ? styles.submitting : ''].join(' ')}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <><span className={styles.spinner} /> Sending to {AFES_EMAIL}…</>
                ) : (
                  <>📬 Submit Feedback</>
                )}
              </button>

              <p className={styles.privacyNote}>
                🔒 Your submission will be formatted and sent as a formal email to{' '}
                <strong>{AFES_EMAIL}</strong>. Name and email are optional and used
                only for follow-up if explicitly provided.
              </p>
            </form>
          </div>

        </div>
      </section>
    </div>
  )
}