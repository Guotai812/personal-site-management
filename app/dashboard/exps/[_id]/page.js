import { getExp } from '@/lib/experiences';
import styles from './page.module.css';
import { editExp } from '@/lib/action';
import Link from 'next/link';

export default async function ExperienceForm({params}) {
    const { _id } = await params;
    const exp = await getExp(_id);
    async function handleSubmit(formData) {
        "use server";
        await editExp(_id, formData)
    }
  return (
    <form className={styles.form} action={handleSubmit}>
      <h2 className={styles.heading}>Experience Form</h2>

      <label htmlFor="title" className={styles.label}>Title</label>
      <input type="text" id="title" name="title" className={styles.input} required defaultValue={exp.title}/>

      <div className={styles.radioGroup}>
        <p className={styles.label}>Is it current?</p>
        <label className={styles.radioLabel}>
          <input type="radio" name="current" value="yes" required defaultChecked={exp.current === true }/> Yes
        </label>
        <label className={styles.radioLabel}>
          <input type="radio" name="current" value="no" required defaultChecked={exp.current === false}/> No
        </label>
      </div>

      <label htmlFor="startDate" className={styles.label}>Start Date</label>
      <input type="date" id="startDate" name="startDate" className={styles.input} required={exp.current === true ? false : true} defaultValue={exp.startDate}/>

      <label htmlFor="endDate" className={styles.label}>End Date</label>
      <input type="date" id="endDate" name="endDate" className={styles.input} required={exp.current === true ? false : true} defaultValue={exp.endDate}/>

      <label htmlFor="description" className={styles.label}>Description</label>
      <textarea id="description" name="description" rows="5" className={styles.textarea} required defaultValue={exp.description}></textarea>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.confirmButton}>Confirm</button>
        <Link href="/dashboard/exps" className={styles.cancelButton}>Cancel</Link>
      </div>
    </form>
  );
}