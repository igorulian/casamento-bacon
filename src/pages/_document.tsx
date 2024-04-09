import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";
// import '../styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Casamento Bacon"></Head>
      <body>
        <Header.Container>
          <Header.Button href="/">Cerimônia</Header.Button>
          <Header.Button href="/">Contatos</Header.Button>
          <Header.Button href="presentes">Presentes</Header.Button>
        </Header.Container>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
