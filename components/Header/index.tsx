import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <p className={styles.headerText}>React Image</p>
    </header>
  );
}
