import React from "react";
import styles from "../styles/secondaryPage.module.css";
import Link from "next/link";

export default function secondaryPage() {
    return (
        <body className={styles.body}>
            <div className={styles.container}>
                <div className={styles.textoBox}>
                    <h2 className={styles.h2}>Por que o barco boia?</h2>
                    <p className={styles.p}>
                        Um barco boia porque, de acordo com o Princípio de Arquimedes, o empuxo — a força para cima exercida pela água —
                        é maior que o peso do barco. Isso acontece graças ao formato do casco, que desloca uma grande quantidade de água
                        e permite sua flutuação.
                    </p>
                </div>

                <div className={styles.mar}>
                    <div className={styles.barco}>
                        <div className={styles.vela}></div>
                    </div>
                </div>
            </div>
        </body>
    );
}