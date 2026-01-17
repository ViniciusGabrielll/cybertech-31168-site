import styles from "./intoTheDeep.module.css";
import fundoIntoTheDeep from "../../../assets/images/fundoIntoTheDeep.png";

function IntoTheDeep() {
  return (
    <>
    <header className={styles.header}>
        <h1>IntoTheDeep</h1>
        <div className={styles.ondas}/>
        <div className={styles.rastroOnda}/>
        <img src={fundoIntoTheDeep} className={styles.fundoHeader}/>
    </header>
    <main className={styles.main}>
    </main>
    </>
  );
}

export default IntoTheDeep;
