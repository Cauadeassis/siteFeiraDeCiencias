import React from "react";
import "styles/mainPage.css";

export default function MainPage() {
    return (
        <div>
            <header>
                <h1>Título</h1>
                <menu>
                    <a href="#secao1">
                        <h2>O que é densidade?</h2>
                    </a>
                    <a href="#secao2">
                        <h2>Exemplos de experimentos</h2>
                    </a>
                    <a href="#secao3">
                        <h2>Membros do grupo</h2>
                    </a>
                    <a href="secondaryPage.html">
                        <h2>Animação do barco do amor</h2>
                    </a>
                </menu>
            </header>

            <main>
                <section id="secao1">
                    <h3>🔬 O que é Densidade?</h3>
                    <div id="piru1">
                        <p id="firstParagraph">
                            Densidade é a quantidade de massa em um certo volume de um material.
                            A fórmula usada é: <br />
                            <strong>D = m / V (densidade = massa ÷ volume).</strong>
                        </p>
                        <iframe
                            id="video"
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
                <section>
                    <h3>🌊 Afundar ou Boiar?</h3>
                    <p>
                        - Objetos com densidade menor que a da água boiam. <br />
                        - Objetos com densidade maior que a da água afundam. <br />
                        A densidade da água é 1 g/cm³.
                    </p>
                </section>
                <section id="secao2">
                    <h3>🧪 Exemplos Práticos</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Objeto</th>
                                <th>Resultado</th>
                                <th>Explicação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bola de isopor</td>
                                <td>Boiou</td>
                                <td>Tem baixa densidade</td>
                            </tr>
                            <tr>
                                <td>Prego de ferro</td>
                                <td>Afundou</td>
                                <td>Densidade maior que a da água</td>
                            </tr>
                            <tr>
                                <td>Madeira</td>
                                <td>Boiou</td>
                                <td>Densidade menor que a da água</td>
                            </tr>
                            <tr>
                                <td>Sabonete</td>
                                <td>Varia</td>
                                <td>Depende da composição</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>

            <footer id="secao3">
                <p>Feira de Ciências • IFerno • Outubro de 2025</p>
                {[...Array(5)].map((_, i) => (
                    <a key={i} href="instagram://user?username=sk8_cauaa">
                        <h2>Cauã</h2>
                    </a>
                ))}
            </footer>
        </div>
    );
}