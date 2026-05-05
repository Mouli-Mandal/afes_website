import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

/* ── Intersection Observer hook for scroll-reveal ── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

/* ── Animated counter ── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useReveal(0.4)
  useEffect(() => {
    if (!visible) return
    const num = parseInt(target.replace(/\D/g, ''))
    let start = 0
    const step = Math.ceil(num / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(start)
    }, 24)
    return () => clearInterval(timer)
  }, [visible, target])
  const prefix = target.includes('₹') ? '₹' : ''
  const suf = target.includes('+') ? '+' : suffix
  return <span ref={ref}>{prefix}{count}{suf}</span>
}

const NEWS = [
  '📢 Spring General Elections 2026 — Nominations open now',
  '🎪 Annual Industry-Academia Conclave — Register before 15 May',
  '📋 Placement Drive 2026 — CDC shortlist announced',
  '🏆 AFES Newsletter Vol. 3 — Now available for download',
  '✅ Membership portal live — ₹1000 one-time lifetime membership',
]

const STATS = [
  { icon: '🎓', num: '1000+', label: 'Student Members', color: 'sea' },
  { icon: '🏭', num: '4', label: 'Core Portfolios', color: 'green' },
  { icon: '👨‍🏫', num: '10', label: 'Faculty Advisors', color: 'blue' },
  { icon: '🤝', num: '200+', label: 'Alumni Network', color: 'sea' },
]

const FEATURES = [
  { icon: '🌐', title: 'Website & Public Relations', body: 'Managing digital presence, social media, and publishing the departmental newsletter to amplify AFES\'s voice across the community.' },
  { icon: '🤝', title: 'Alumni Relations', body: 'Connecting current students with global alumni and industry leaders to foster mentorship, collaboration, and lifelong opportunity.' },
  { icon: '📈', title: 'Career Development Centre', body: 'Driving placement drives, securing internship opportunities, and building professional readiness for all student members.' },
  { icon: '🎪', title: 'Event Organisation', body: 'Executing field trips, conclaves, workshops, and industrial-academic events that enrich the departmental ecosystem.' },
]

const ACHIEVEMENTS = [
  { rank: '6th', cat: 'Overall', color: 'sea' },
  { rank: '5th', cat: 'Engineering', color: 'green' },
  { rank: '5th', cat: 'Research', color: 'blue' },
  { rank: '4th', cat: 'Innovation', color: 'sea' },
]

const BENEFITS = [
  { icon: '📜', title: 'Certificate', desc: 'Formal certificate from Faculty Advisor with AFES emblem' },
  { icon: '🪪', title: 'Member ID', desc: 'Lifetime member ID card with full network access' },
  { icon: '🌐', title: 'Portal Display', desc: 'Your photo & message on the AFES Life Membership page' },
  { icon: '🔗', title: 'Alumni Access', desc: 'Full access to alumni database and industry connections' },
  { icon: '📊', title: 'Official Record', desc: 'Contribution receipt for institutional records' },
]

const PROGRAMME_CARDS = [
  { label: 'B.Tech / B.Arch.', sub: 'Undergraduate' },
  { label: 'M.Tech', sub: 'Postgraduate' },
  { label: 'Joint M.Sc.–Ph.D', sub: 'Research' },
  { label: 'PhD', sub: 'Doctoral' },
  { label: 'MS (Research)', sub: 'Research' },
  { label: 'Dual Degree', sub: 'Integrated' },
]

/* ── Network node animated dots ── */
function NetworkCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight
    const NODES = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 1,
    }))
    let raf
    function draw() {
      ctx.clearRect(0, 0, W, H)
      NODES.forEach((n) => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })
      for (let i = 0; i < NODES.length; i++) {
        for (let j = i + 1; j < NODES.length; j++) {
          const dx = NODES[i].x - NODES[j].x
          const dy = NODES[i].y - NODES[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(NODES[i].x, NODES[i].y)
            ctx.lineTo(NODES[j].x, NODES[j].y)
            ctx.strokeStyle = `rgba(52,211,153,${0.18 * (1 - dist / 130)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      NODES.forEach((n) => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(52,211,153,0.55)'
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    const ro = new ResizeObserver(() => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    })
    ro.observe(canvas)
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])
  return <canvas ref={canvasRef} className={styles.networkCanvas} />
}

/* ── Scroll progress bar ── */
function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className={styles.scrollProgress} style={{ width: `${pct}%` }} />
}

/* ── Reveal wrapper ── */
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={[styles.reveal, visible ? styles.revealVisible : '', className].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const [newsIdx, setNewsIdx] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setNewsIdx((i) => (i + 1) % NEWS.length), 3800)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.page}>
      <ScrollProgress />

      {/* ══════════════════════════════════════════
          HERO — glassmorphism + animated network
      ══════════════════════════════════════════ */}
      <section className={styles.hero}>
        {/* Background image + glassmorphism overlay */}
        <div className={styles.heroBgImage} />
        <div className={styles.heroBgOverlay} />

        {/* Animated network canvas */}
        <NetworkCanvas />

        {/* Parallax floating orbs */}
        <div className={styles.orb1} style={{ transform: `translateY(${scrollY * 0.25}px)` }} />
        <div className={styles.orb2} style={{ transform: `translateY(${scrollY * -0.18}px)` }} />
        <div className={styles.orb3} style={{ transform: `translateY(${scrollY * 0.12}px)` }} />

        {/* Hero content */}
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgePulse} />
            Agricultural &amp; Food Engineering Society · IIT Kharagpur
          </div>

          <h1 className={styles.heroTitle}>
            Bridging <span className={styles.heroGradText}>Academia</span>
            <br />and Industry
          </h1>

          <p className={styles.heroSub}>
            A student-led, faculty-guided society dedicated to career preparedness,
            professional development, and lasting connections in the agri-tech ecosystem.
          </p>

          <div className={styles.heroCta}>
            <button className={styles.btnGlass} onClick={() => navigate('/about')}>
              Explore AFES
            </button>
            <button className={styles.btnOutlineGlass} onClick={() => navigate('/contact')}>
              Join Now →
            </button>
          </div>

          {/* Glass stat chips in hero */}
          <div className={styles.heroChips}>
            {STATS.map(({ icon, num, label }) => (
              <div key={label} className={styles.heroChip}>
                <span>{icon}</span>
                <span className={styles.heroChipNum}>{num}</span>
                <span className={styles.heroChipLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className={styles.scrollCue}>
          <span>Scroll</span>
          <div className={styles.scrollCueLine} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEWS TICKER
      ══════════════════════════════════════════ */}
      <div className={styles.ticker}>
        <span className={styles.tickerBadge}>Latest</span>
        <div className={styles.tickerText} key={newsIdx}>{NEWS[newsIdx]}</div>
        <button className={styles.tickerNav} onClick={() => setNewsIdx((i) => (i + 1) % NEWS.length)}>›</button>
      </div>

      {/* ══════════════════════════════════════════
          ANIMATED STATS BAR
      ══════════════════════════════════════════ */}
      <div className={styles.statsBar}>
        {STATS.map(({ icon, num, label, color }) => (
          <Reveal key={label} delay={100}>
            <div className={styles.statItem}>
              <div className={`${styles.statIconWrap} ${styles[`statIcon_${color}`]}`}>{icon}</div>
              <div className={styles.statNum}><Counter target={num} /></div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          COMBINED: PORTFOLIO + ACHIEVEMENTS
          (single background image spans both)
      ══════════════════════════════════════════ */}
      <div className={styles.combinedSection}>

        {/* ── Portfolio Cards ── */}
        <section className={styles.portfolioSection}>
          <div className={styles.portfolioBg} />
          <div className={styles.portfolioInner}>
            <Reveal>
              <span className={styles.sectionTag}>What We Do</span>
              <h2 className={styles.sectionTitle}>Four pillars of excellence</h2>
              <p className={styles.sectionLead}>
                AFES operates across four specialised portfolios, each creating
                tangible outcomes for every AgFE member at IIT Kharagpur.
              </p>
            </Reveal>

            <div className={styles.glassGrid}>
              {FEATURES.map(({ icon, title, body }, i) => (
                <Reveal key={title} delay={i * 100} className={styles.cardReveal}>
                  <div className={styles.glassCard}>
                    <div className={styles.glassCardOrb} />
                    <div className={styles.glassCardIcon}>{icon}</div>
                    <h3 className={styles.glassCardTitle}>{title}</h3>
                    <p className={styles.glassCardBody}>{body}</p>
                    <div className={styles.glassCardGlow} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Achievements + Programmes ── */}
        <section className={styles.achieveSection}>
          <div className={styles.achieveInner}>
            <Reveal>
              <div className={styles.achieveLeft}>
                <span className={styles.sectionTagDark}>IIT Kharagpur · AgFE</span>
                <h2 className={styles.achieveTitle}>
                  Proud to be part of<br />India's premier institute
                </h2>
                <p className={styles.achieveSub}>
                  IIT Kharagpur ranks among India's top institutions. AFES bridges this
                  academic excellence with real-world industry impact in the agri-tech sector.
                </p>
                <div className={styles.rankGrid}>
                  {ACHIEVEMENTS.map(({ rank, cat, color }) => (
                    <div key={cat} className={`${styles.rankCard} ${styles[`rank_${color}`]}`}>
                      <div className={styles.rankNum}>{rank}</div>
                      <div className={styles.rankCat}>{cat}</div>
                      <div className={styles.rankSub}>NIRF 2025</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className={styles.achieveRight}>
                <div className={styles.programmeHeader}>Programmes at AgFE</div>
                <div className={styles.programmeGrid}>
                  {PROGRAMME_CARDS.map(({ label, sub }) => (
                    <div key={label} className={styles.programmeCard}>
                      <div className={styles.programmeLabel}>{label}</div>
                      <div className={styles.programmeSub}>{sub}</div>
                      <div className={styles.programmeArrow}>→</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </div>

      {/* ══════════════════════════════════════════
          MEMBERSHIP BENEFITS — glassmorphism
      ══════════════════════════════════════════ */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsBg} />
        <div className={styles.benefitsInner}>
          <Reveal>
            <span className={styles.sectionTag} style={{ color: '#6ee7b7' }}>Membership Benefits</span>
            <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
              What your membership includes
            </h2>
            <p className={styles.sectionLead} style={{ color: 'rgba(255,255,255,0.65)' }}>
              One-time ₹1000 lifetime fee. A reaffirmation of your bond with the
              AgFE community, with exclusive privileges throughout your academic journey.
            </p>
          </Reveal>

          <div className={styles.benefitsGrid}>
            {BENEFITS.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80} className={styles.cardReveal}>
                <div className={styles.benefitGlassCard}>
                  <div className={styles.benefitIcon}>{icon}</div>
                  <div className={styles.benefitTitle}>{title}</div>
                  <div className={styles.benefitDesc}>{desc}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className={styles.benefitsCta}>
              <button className={styles.btnGlassWhite} onClick={() => navigate('/contact')}>
                Apply for Membership — ₹1000 Lifetime
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className={styles.ctaBanner}>
        <Reveal>
          <h2 className={styles.ctaTitle}>Ready to make an impact?</h2>
          <p className={styles.ctaSub}>
            Join AFES — IIT Kharagpur's most active departmental society,
            connecting campus talent with global agri-tech opportunities.
          </p>
          <div className={styles.ctaBtns}>
            <button className={styles.btnSolid} onClick={() => navigate('/contact')}>
              Apply for Membership
            </button>
            <button className={styles.btnOutlineDark} onClick={() => navigate('/administration')}>
              Meet the Team
            </button>
          </div>
        </Reveal>
      </section>

    </div>
  )
}