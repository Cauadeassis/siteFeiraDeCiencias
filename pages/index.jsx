import React from "react";
import styles from "../styles/mainPage.module.css";
import Link from "next/link";
import Head from 'next/head'
export default function MainPage() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Feira de Ciências</title>
            </Head>
            <div className={styles.body}>
                <header className={styles.header}>
                    <nav className={styles.nav}>
                        <a href="#introduction" className={styles.link}>Sobre</a>
                        <a href="#galery" className={styles.link}>Experimentos</a>
                        <a href="https://create.kahoot.it/share/densidade/e0721a7f-3bb2-4453-abc9-72191adadda2"
                            className={styles.link}
                            target="_blank"
                            rel="noopener noreferrer">
                            Quiz
                        </a>
                        <a href="secondaryPage" className={styles.link}>Animação</a>
                    </nav>
                </header>
                <main>
                    <section className={styles.hero}>
                        <h2 className={styles.secondaryTitle}>Densidade: A Ciência por Trás das Substâncias</h2>
                        <p className={styles.description}>
                            Descubra como a densidade afeta o nosso dia a dia com experimentos incríveis e interativos.
                        </p>
                        <a href="#galery" className={styles.linkButton}>Ver Experimentos</a>
                    </section>

                    <section id="introduction" className={styles.introduction}>
                        <h2 className={styles.secondaryTitle}>O que é Densidade?</h2>
                        <p className={styles.description}>
                            Densidade é a razão entre a massa de um material e o volume que ele ocupa, sendo calculada pela fórmula{" "}
                            <strong className={styles.strong}>d=m/v</strong>. Ela determina se um objeto flutua ou afunda,
                            e tem aplicações desde a engenharia até a culinária. Na nossa feira, você vai ver isso na prática!
                        </p>

                        <h2 className={styles.secondaryTitle}>Introdução ao Projeto</h2>
                        <p className={styles.description}>
                            A densidade é uma propriedade fundamental da matéria que influencia diretamente como os objetos interagem entre si no ambiente. Neste projeto, exploramos o conceito de densidade de forma prática e visual, por meio de experimentos simples e envolventes. Nosso objetivo é demonstrar como a densidade determina se um objeto afunda ou flutua, como líquidos de diferentes densidades se separam em camadas, e como pequenas alterações em um sistema podem modificar completamente o seu comportamento.
                        </p>
                    </section>
                    <section id="galery" className={styles.galery}>
                        <h2 className={styles.secondaryTitle}>Experimentos em Destaque</h2>
                        <div className={styles.cardsContainer}>
                            <div className={styles.card}>
                                <h3 className={styles.title}>Camadas de Líquidos</h3>
                                <p className={styles.description}>Veja como diferentes líquidos formam camadas por causa da densidade.</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.title}>Ovo Flutuante</h3>
                                <p className={styles.description}>Descubra como adicionar sal na água pode fazer um ovo flutuar.</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.title}>Densidade dos Gases</h3>
                                <p className={styles.description}>Experimentos que mostram como gases também têm densidade!</p>
                            </div>
                        </div>
                    </section>
                    <section id="videoSection" className={styles.videoSection}>
                        <h2 className={styles.secondaryTitle}>Vídeo Explicativo</h2>
                        <iframe className={styles.youtubeVideo}
                            src="https://www.youtube.com/embed/24S0-Q9DYtg?si=YGMhsnxESTncLkMf"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </section>
                </main>
                <footer id="contact" className={styles.contactSection}>
                    <p>&copy; 2025 Feira de Ciências - Tema: Densidade. Todos os direitos reservados.</p>
                    <p>
                        Site feito por:{" "}
                        <a href="https://www.instagram.com/sk8_cauaa?igsh=MTA0aWdkcms1b2p2bw=="
                            className={styles.instagramLink}
                            target="_blank"
                            rel="noopener noreferrer">
                            Cauã de Assis Dias
                        </a>{" "}
                        e{" "}
                        <a href="troll" className={styles.instagramLink}>
                            João Vitor Scoparo Schettino
                        </a>
                    </p>
                </footer>
            </div>
        </>
    );
}