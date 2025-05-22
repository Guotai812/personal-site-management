import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <p className={styles.subtitle}>This is Guotai's personal site manager!</p>
      <div className={styles.buttonGroup}>
        <Link href="/login" className={styles.button}>Login</Link>
        <Link href="/signup" className={styles.button}>Sign Up</Link>
      </div>
    </main>
  );
}