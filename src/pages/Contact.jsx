import { useState } from 'react'
import Button from '../components/ui/Button'
import styles from './Contact.module.css'

const CONTACT_INFO = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Dept. of Agricultural & Food Engineering, IIT Kharagpur, West Bengal — 721302',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'afes@agfe.iitkgp.ac.in',
  },
  {
    icon: '🕐',
    label: 'Office Hours',
    value: 'Monday – Friday, 10:00 AM – 5:00 PM IST',
  },
  {
    icon: '🌐',
    label: 'Department Website',
    value: 'agfe.iitkgp.ac.in',
  },
  {
    icon: '📞',
    label: 'Department Office',
    value: '+91-3222-283100',
  },
]

const SUBJECTS = [
  'General Inquiry',
  'Membership',
  'Partnership / Sponsorship',
  'Event Collaboration',
  'Alumni Relations',
  'Career & Placement',
  'Other',
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', subject: '', message: '',
  })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' })
  }

  return (
    <div className={styles.page}>
      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className="section-tag">Contact Us</p>
          <h1 className="section-title" style={{ color: 'white' }}>Get in Touch with AFES</h1>
          <p style={{ color: '#8fafcc', fontSize: '1rem', lineHeight: 1.8, maxWidth: 540 }}>
            Have a question, proposal, or want to collaborate? Our team responds within 48 hours.
          </p>
        </div>
      </div>

      {/* ── CONTACT GRID ── */}
      <section className="section-wrapper">
        <div className={styles.contactGrid}>
          {/* Info panel */}
          <div>
            <h2 className={styles.panelTitle}>Contact Information</h2>
            <p className={styles.panelLead}>
              Reach out directly or fill in the form — whichever works best for you.
            </p>
            <div className={styles.infoList}>
              {CONTACT_INFO.map(({ icon, label, value }) => (
                <div key={label} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{icon}</div>
                  <div>
                    <div className={styles.infoLabel}>{label}</div>
                    <div className={styles.infoValue}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapPin}>📍</div>
              <div className={styles.mapText}>
                <strong>IIT Kharagpur</strong>
                <span>Kharagpur, West Bengal 721302</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formCard}>
            <h2 className={styles.panelTitle}>Send a Message</h2>

            {sent && (
              <div className={styles.successBanner}>
                ✓ Message sent! We'll get back to you within 48 hours.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Arjun"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Sharma"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject…</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" variant="green" full>
                {sent ? 'Message Sent ✓' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}