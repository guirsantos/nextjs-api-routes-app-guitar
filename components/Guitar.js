import Link from 'next/link'
import styles from '../styles.module.css'

export default function Guitar({ guitar }) {
  return (
    <li className={styles.hello}>
      <Link href="/guitar/[id]" as={`/guitar/${guitar.id}`}>
        <a>{guitar.name}</a>
      </Link>
    </li>
  )
}
