"use client";
import styles from "./logout.module.css";

export default function Logout() {
    async function handleLogout() {
        await fetch("/api/logout", {method: "POST"});
        window.location.href = "/";
    }
    return (
        <button onClick={handleLogout} className={styles.logoutButton}>Log out</button>
    );
}