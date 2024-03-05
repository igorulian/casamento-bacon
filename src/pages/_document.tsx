import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";
// import '../styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Casamento Bacon" />
      <body>
        <Header.Container>
          <Header.Button>Home</Header.Button>
          <Header.Button>Cerimonia</Header.Button>
          <Header.Button>Recepção</Header.Button>
          <Header.Button>Local</Header.Button>
          <Header.Button>Lista de presentes</Header.Button>
          <Header.Button
            onClick={() => {
              window.location.href = "/presentes";
            }}
          >
            Presentes
          </Header.Button>
        </Header.Container>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
