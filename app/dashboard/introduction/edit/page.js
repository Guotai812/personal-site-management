import { getIntroduction } from "@/lib/introduction";
import { editIntrodution } from "@/lib/action";
import styles from "./page.module.css";
import Link from "next/link";

export default async function IntroEdit() {
  const { _id, content } = await getIntroduction();

  async function handleSubmit(formData) {
    "use server";
    await editIntrodution(_id, formData);
  }

  return (
    <form action={handleSubmit} className={styles.container}>
      <h2 className={styles.heading}>Edit Introduction</h2>

      <div className={styles.formGroup}>
        <label htmlFor="content" className={styles.label}>
          Your Content
        </label>
        <textarea
          name="content"
          id="content"
          className={styles.textarea}
          defaultValue={content}
        />
      </div>

      <div className={styles.buttonRow}>
        <button
          type="submit"
          className={`${styles.button} ${styles.buttonConfirm}`}
        >
          Confirm
        </button>
        <Link
          href="/dashboard/introduction"
          className={`${styles.button} ${styles.buttonCancel}`}
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}