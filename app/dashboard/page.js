import { verifyToken } from '@/lib/auth';
import Link from 'next/link';
import styles from './page.module.css';
import Logout from '@/components/logout';

export default function Dashboard() {
  const user = verifyToken();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome, {user.username}</h1>
      <Link href="/dashboard/exps" className={styles.button}>Experiences</Link>
      <Logout />
    </div>
  );
}