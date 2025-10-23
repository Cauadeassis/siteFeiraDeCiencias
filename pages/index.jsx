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
                        <a href="#densityExplanation" className={styles.link}>Sobre</a>
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
                    <section className={`${styles.hero} ${styles.section}`}>
                        <h1 className={styles.mainTitle}>Densidade: A Ciência por Trás das Substâncias</h1>
                        <p className={styles.description}>
                            Descubra como a densidade afeta o nosso dia a dia com experimentos incríveis e interativos.
                        </p>
                        <a href="#galery" className={styles.linkButton}>Ver Experimentos</a>
                    </section>

                    <section id="densityExplanation" className={`${styles.densityExplanation} ${styles.section}`}>
                        <h2 className={styles.secondaryTitle}>O que é Densidade?</h2>
                        <p className={styles.description}>
                            Densidade é a razão entre a massa de um material e o volume que ele ocupa, sendo calculada pela fórmula{" "}
                            <strong className={styles.strong}>d=m/v</strong>. Ela determina se um objeto flutua ou afunda,
                            e tem aplicações desde a engenharia até a culinária. Na nossa feira, você vai ver isso na prática!
                        </p>
                    </section>
                    <section id="empuxoExplanation" className={`${styles.empuxoExplanation} ${styles.section}`}>
                        <h2 className={styles.secondaryTitle}>Força de Empuxo</h2>
                        <p className={styles.description}>
                            O empuxo é uma força que os líquidos exercem nos corpos mergulhados neles.
                            Essa força empurra o objeto para cima e é o que faz um barco flutuar, mesmo sendo pesado!
                        </p>
                        <p className={styles.description}>
                            Se o empuxo for maior que o peso do objeto, ele flutua.
                            Se for menor, ele afunda.
                        </p>
                        <img className={styles.empuxoImg} src="/exemploDeEmpuxo.png" alt="exemplo da força de empuxo" />
                    </section>
                    <section id="superficialTensionExplanation" className={`${styles.superficialTensionExplanation} ${styles.section}`}>
                        <h2 className={styles.secondaryTitle}>Tensão Superficial</h2>
                        <p className={styles.description}>
                            A tensão artificial é uma força que existe na superfície dos líquidos que faz eles terem uma pele elástica.
                        </p>
                        <p className={styles.description}>
                            Isso acontece porque as moléculas da superfície são puxadas apenas para dentro do líquido, já que não há moléculas acima delas.
                        </p>
                        <img className={styles.superficialTensionImg} src="/exemploDeTensaoArtificial.png" alt="exemplo da tensão superficial" />
                    </section>
                    <section id="galery" className={`${styles.galery} ${styles.section}`}>
                        <h2 className={styles.secondaryTitle}>Experimentos em Destaque</h2>
                        <div className={styles.cardsContainer}>
                            <div className={styles.card}>
                                <h3 className={styles.title}>Óleo e biosurfactante</h3>
                                <p className={styles.description}>Veja um experimento onde o óleo se mistura com a água de forma  uniforme, usando biosurfactante.</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.title}>Orégano e detergente</h3>
                                <p className={styles.description}>Descubra como e por que o detergente limpa gorduras, usando apenas orégano, detergente e água.</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.title}>Agulha magnetizada</h3>
                                <p className={styles.description}>Colocamos uma folha sobre a água e, em cima dela, a agulha. Mesmo sendo de metal, a agulha flutuará.</p>
                            </div>
                        </div>
                    </section>
                    <section id="videoSection" className={`${styles.videoSection} ${styles.section}`}>
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
                        <a href="https://www.instagram.com/vttr_jv/"
                            className={styles.instagramLink}
                            target="_blank"
                            rel="noopener noreferrer">
                            João Vitor Scoparo Schettino
                        </a>
                    </p>
                </footer>
            </div>
        </>
    );
}