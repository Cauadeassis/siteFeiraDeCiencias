import React from "react";
import styles from "../styles/secondaryPage.module.css";
import Link from "next/link";

export default function BarquinhoDoAmor() {
    return (
        <div className={styles.body}>
            <div className={styles.ocean}>
                <h1 className={styles.mainTitle}>💕 Barquinho do amor 💕</h1>

                <div className={styles.wave}></div>
                <div className={styles.wave}></div>

                <div className={styles.boat}>
                    <div className={styles.mast}></div>
                    <div className={styles.sail}></div>
                    <div className={styles.hull}></div>
                </div>
                <div className={styles.badassLabel}>🔥 Navegando no Estilo!</div>
            </div>
        </div>
    );
}