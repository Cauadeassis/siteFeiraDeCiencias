import React from "react";
import styles from "../styles/mainPage.module.css";
import Link from "next/link";

export default function MainPage() {
    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <h1 className={styles.mainTitle}>Título</h1>

                <menu className={styles.menu}>
                    <a className={styles.link} href="#secao1">
                        <h2>O que é densidade?</h2>
                    </a>
                    <a className={styles.link} href="#secao2">
                        <h2>Exemplos de experimentos</h2>
                    </a>
                    <a className={styles.link} href="#secao3">
                        <h2>Membros do grupo</h2>
                    </a>
                    <Link className={styles.link} href="/secondaryPage">
                        <h2>Animação do barco do amor</h2>
                    </Link>
                </menu>
            </header>

            <main>
                <section id="secao1" className={styles.section}>
                    <h3 className={styles.subTitle}>🔬 O que é Densidade?</h3>
                    <div className={styles.flexRow}>
                        <p className={styles.firstParagraph}>
                            Densidade é a quantidade de massa em um certo volume de um
                            material. A fórmula usada é: <br />
                            <strong>D = m / V (densidade = massa ÷ volume).</strong>
                        </p>
                        <iframe
                            className={styles.video}
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/24S0-Q9DYtg?si=sFKsifrE8gKnIlg9"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.subTitle}>🌊 Afundar ou Boiar?</h3>
                    <p className={styles.paragraph}>
                        - Objetos com densidade menor que a da água boiam. <br />
                        - Objetos com densidade maior que a da água afundam. <br />
                        A densidade da água é 1 g/cm³.
                    </p>
                </section>

                <section id="secao2" className={styles.section}>
                    <h3 className={styles.subTitle}>🧪 Exemplos Práticos</h3>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Objeto</th>
                                <th className={styles.th}>Resultado</th>
                                <th className={styles.th}>Explicação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.td}>Bola de isopor</td>
                                <td className={styles.td}>Boiou</td>
                                <td className={styles.td}>Tem baixa densidade</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Prego de ferro</td>
                                <td className={styles.td}>Afundou</td>
                                <td className={styles.td}>Densidade maior que a da água</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Madeira</td>
                                <td className={styles.td}>Boiou</td>
                                <td className={styles.td}>Densidade menor que a da água</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Sabonete</td>
                                <td className={styles.td}>Varia</td>
                                <td className={styles.td}>Depende da composição</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>

            <footer id="secao3" className={styles.section}>
                <p>Feira de Ciências • IFerno • Outubro de 2025</p>
                {[...Array(5)].map((_, i) => (
                    <a key={i} className={styles.link} href="instagram://user?username=sk8_cauaa">
                        <h2>Cauã</h2>
                    </a>
                ))}
            </footer>
        </div>
    );
}