import { deleteProject } from "@/lib/action";
import styles from "./page.module.css";
import Link from "next/link";

export default async function DeleteConfirmPage({ params }) {
  const { _id } = await params;

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.heading}>Delete Confirmation</h2>
        <p className={styles.message}>
          Are you sure you want to delete this item?
        </p>
        <div className={styles.buttons}>
          <Link href="/dashboard/projects" className={styles.cancelButton}>
            Cancel
          </Link>
          <form action={deleteProject}>
            <input type="hidden" name="id" value={_id} />
            <button type="submit" className={styles.confirmButton}>
              Confirm Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}