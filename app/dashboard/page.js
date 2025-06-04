// app/dashboard/page.js (or wherever your Dashboard lives)
import { verifyToken } from '@/lib/auth';
import Link from 'next/link';
import styles from './page.module.css';
import Logout from '@/components/logout';

export default function Dashboard() {
  // to fetch name of login user instead of verifying token.
  const user = verifyToken();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome, {user.username}</h1>

      {/* add this wrapper */}
      <div className={styles.linkRow}>
        <Link href="/dashboard/introduction" className={styles.button}>
          Introduction
        </Link>
        <Link href="/dashboard/exps" className={styles.button}>
          Experience
        </Link>
        <Link href="/dashboard/projects" className={styles.button}>
          Projects
        </Link>
      </div>

      <Logout />
    </div>
  );
}