import { getIntroduction } from "@/lib/introduction";
import Link from "next/link";
import styles from "./page.module.css";

export default async function IntroductionPage() {
  const { content } = await getIntroduction();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Your Introduction</h2>
      <p className={styles.content}>{content}</p>
      <div className={styles.buttonRow}>
        <Link href="/dashboard/introduction/edit" className={styles.button}>
          Edit
        </Link>
        <Link href="/dashboard" className={styles.button}>
          Back
        </Link>
      </div>
    </div>
  );
}