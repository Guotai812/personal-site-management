// ProjectsPage.jsx
import Link from "next/link";
import { getProjects } from "@/lib/projects";
import styles from "./page.module.css";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Projects</h2>
      <ul className={styles.list}>
        {projects.map((pro) => (
          <li key={pro._id} className={styles.item}>
            <div className={styles.info}>
              <p className={styles.title}>{pro.name}</p>
              <p className={styles.description}>{pro.description}</p>
              <div className={styles.techList}>
                {pro.techniques.map((tech, idx) => (
                  <span key={idx} className={styles.techItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* all three actions in one row */}
            <div className={styles.links}>
              <a
                href={pro.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                View
              </a>
              <Link
                href={`/dashboard/projects/${pro._id.toString()}`}
                className={styles.button}
              >
                Edit
              </Link>
              <Link
                href={`/dashboard/projects/delete/${pro._id.toString()}`}
                className={styles.deleteButton}
              >
                Delete
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.addWrapper}>
        <Link href="/dashboard/projects/new" className={styles.button}>
          Add Project
        </Link>
        <Link href="/dashboard/projects" className={styles.button}>
          Back
        </Link>
      </div>
    </div>
  );
}