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
                    <div className={styles.container} id="menu">

                        <nav className={styles.nav}>
                            <ul className={styles.ul}>
                                <li className={styles.li}><a href="#sobre" className={styles.a}>Sobre</a></li>
                                <li className={styles.li}><a href="#experimentos" className={styles.a}>Experimentos</a></li>
                                <li className={styles.li}><a href="#" className={styles.a}>Quiz</a></li>
                                <li className={styles.li}><a href="secondaryPage" className={styles.a}>Animação</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h2 className={styles.h2}>Densidade: A Ciência por Trás das Substâncias</h2>
                        <p className={styles.p}>
                            Descubra como a densidade afeta o nosso dia a dia com experimentos incríveis e interativos.
                        </p>
                        <a href="#experimentos" className={styles.btn}>Ver Experimentos</a>
                    </div>
                </section>

                <section id="sobre" className={styles.sobre}>
                    <div className={styles.container}>
                        <h2 className={styles.h2}>O que é Densidade?</h2>
                        <p className={styles.p}>
                            Densidade é a relação entre a massa e o volume de um corpo. Ela determina se um objeto flutua ou afunda,
                            e tem aplicações desde a engenharia até a culinária. Na nossa feira, você vai ver isso na prática!
                        </p>

                        <h2 className={styles.h2}>Introdução ao Projeto</h2>
                        <p className={styles.p}>
                            A densidade é uma propriedade fundamental da matéria que influencia diretamente como os objetos interagem entre si no ambiente. Neste projeto, exploramos o conceito de densidade de forma prática e visual, por meio de experimentos simples e envolventes. Nosso objetivo é demonstrar como a densidade determina se um objeto afunda ou flutua, como líquidos de diferentes densidades se separam em camadas, e como pequenas alterações em um sistema podem modificar completamente o seu comportamento.
                        </p>
                    </div>
                </section>

                <section id="experimentos" className={styles.galeria}>
                    <div className={styles.container}>
                        <h2 className={styles.h2}>Experimentos em Destaque</h2>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Camadas de Líquidos</h3>
                                <p className={styles.p}>Veja como diferentes líquidos formam camadas por causa da densidade.</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Ovo Flutuante</h3>
                                <p className={styles.p}>Descubra como adicionar sal na água pode fazer um ovo flutuar.</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Densidade dos Gases</h3>
                                <p className={styles.p}>Experimentos que mostram como gases também têm densidade!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <h2 className={styles.h2}>Vídeo Explicativo</h2>
                <section id="video" className={styles.sobre}>
                    <div className={styles.container}>
                        <p className={styles.p}>
                            Densidade é a razão entre a massa de um material e o volume que ele ocupa, sendo calculada pela fórmula{" "}
                            <strong className={styles.strong}>d=m/v</strong>
                        </p>
                        <iframe className={styles.iframe}
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/24S0-Q9DYtg?si=YGMhsnxESTncLkMf"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>

                <footer id="contato">
                    <div className={styles.container}>
                        <p>&copy; 2025 Feira de Ciências - Tema: Densidade. Todos os direitos reservados.</p>
                        <p>
                            site feito por:{" "}
                            <a href="https://www.instagram.com/sk8_cauaa?igsh=MTA0aWdkcms1b2p2bw==">
                                Cauã de Assis Dias
                            </a>{" "}
                            e{" "}
                            <a href="troll">
                                João Vitor Scoparo Schettino
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}