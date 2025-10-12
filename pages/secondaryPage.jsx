import React from "react";
import styles from "../styles/secondaryPage.module.css";
import Link from "next/link";

export default function secondaryPage() {
    return (
        <body className={styles.body}>
            <div className={styles.container}>
                <a href="/" className={styles.a}>
                    <h1 className={styles.mainTitle}>Densidade em ação</h1>
                </a>
                <div className={styles.textBox}>
                    <h2 className={styles.secondaryTitle}>Por que o barco boia?</h2>
                    <p className={styles.paragraph}>
                        Um barco boia porque, de acordo com o Princípio de Arquimedes, o empuxo — a força para cima exercida pela água —
                        é maior que o peso do barco. Isso acontece graças ao formato do casco, que desloca uma grande quantidade de água
                        e permite sua flutuação.
                    </p>
                </div>

                <div className={styles.ocean}>
                    <div className={styles.boat}>
                        <div className={styles.sail}></div>
                    </div>
                </div>
            </div>
        </body>
    );
}