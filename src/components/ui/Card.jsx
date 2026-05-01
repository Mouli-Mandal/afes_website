import styles from './Card.module.css'

/**
 * Card — generic raised white card with optional hover lift.
 *
 * Props:
 *   icon     — emoji or JSX icon (optional)
 *   title    — card heading
 *   children — card body content
 *   badge    — { label, variant } where variant = 'blue' | 'green' | 'gold' | 'pink'
 *   className — extra CSS class overrides
 */
export default function Card({ icon, title, children, badge, className = '' }) {
  return (
    <div className={[styles.card, className].join(' ')}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {badge && (
        <span className={[styles.badge, styles[`badge_${badge.variant || 'green'}`]].join(' ')}>
          {badge.label}
        </span>
      )}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.body}>{children}</div>
    </div>
  )
}