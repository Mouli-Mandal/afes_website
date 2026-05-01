import styles from './Button.module.css'

/**
 * Button — supports variants: 'primary' | 'outline' | 'green'
 *
 * Props:
 *   variant  — 'primary' (gold) | 'outline' (white border) | 'green'
 *   onClick  — click handler
 *   children — label
 *   type     — button | submit | reset
 *   full     — boolean, makes button 100% width
 *   disabled — boolean
 */
export default function Button({
  variant = 'primary',
  onClick,
  children,
  type = 'button',
  full = false,
  disabled = false,
  className = '',
}) {
  const cls = [
    styles.btn,
    styles[variant],
    full ? styles.full : '',
    className,
  ].join(' ')

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}