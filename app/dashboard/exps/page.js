import Link from 'next/link';
import styles from './page.module.css';
import { getExperiences } from '@/lib/experiences';


export default async function ExperienceList() {
  const items = await getExperiences();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Your Experiences</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item._id.toString()} className={styles.item}>
            {item.current && <div className={styles.time}>Current</div>}
            {!item.current && <div className={styles.time}>{item.startDate} -- {item.endDate}</div>}
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.actions}>
              <Link href={`/dashboard/exps/${item._id.toString()}`} className={styles.button}>Edit</Link>
              <Link href={`/dashboard/exps/delete/${item._id.toString()}`} className={styles.deleteButton}>Delete</Link>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.addWrapper}>
        <Link href="/dashboard/exps/new" className={styles.button}>Add New</Link>
      </div>
    </div>
  );
}