import { verifyToken } from '@/lib/auth';
import { logout } from '@/lib/action';
import Link from 'next/link';
import styles from './page.module.css';

export default function Dashboard() {
  const user = verifyToken();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome, {user.username}</h1>
      <Link href="/dashboard/exps" className={styles.button}>Experiences</Link>
      <form action={logout}>
        <button className={styles.logoutButton}>Logout</button>
      </form>
    </div>
  );
}