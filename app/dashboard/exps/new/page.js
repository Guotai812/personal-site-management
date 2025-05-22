import { addExperience } from '@/lib/action';
import styles from './page.module.css';
import Link from 'next/link';

export default async function ExperienceForm({params}) {
  

  return (
    <form className={styles.form} action={addExperience}>
      <h2 className={styles.heading}>Experience Form</h2>

      <label htmlFor="title" className={styles.label}>Title</label>
      <input type="text" id="title" name="title" className={styles.input} required />

      <div className={styles.radioGroup}>
        <p className={styles.label}>Is it current?</p>
        <label className={styles.radioLabel}>
          <input type="radio" name="current" value="yes" /> Yes
        </label>
        <label className={styles.radioLabel}>
          <input type="radio" name="current" value="no" required /> No
        </label>
      </div>

      <label htmlFor="startDate" className={styles.label}>Start Date</label>
      <input type="date" id="startDate" name="startDate" className={styles.input} required />

      <label htmlFor="endDate" className={styles.label}>End Date</label>
      <input type="date" id="endDate" name="endDate" className={styles.input} required />

      <label htmlFor="description" className={styles.label}>Description</label>
      <textarea id="description" name="description" rows="5" className={styles.textarea} required></textarea>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.confirmButton}>Confirm</button>
        <Link href="/dashboard/exps" className={styles.cancelButton}>Cancel</Link>
      </div>
    </form>
  );
}