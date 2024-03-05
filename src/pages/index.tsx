import Image from "next/image";
import { Inter } from "next/font/google";
import Section from "@/components/Section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen min-w-screen flex-col items-center">
      <Section.Container className="md:flex-row">
        <div
          style={{ aspectRatio: 1280 / 720 }}
          className="md:w-full md:relative md:justify-center"
        >
          <Image
            src={require("../assets/image.jpg")}
            alt="Barbara e Maicon"
            layout="fill"
            objectFit="cover"
            className="opacity-85 h-auto"
          />
        </div>
        <div
          style={{
            width: 400,
            height: 400,
            right: -250,
            marginRight: "33%",
          }}
          className="z-10 absolute md:top-60"
        >
          <div className="bg-white w-full h-full p-8 z-10">
            <h5 className="text-6xl text-color-txt">
              Bárbara
              <br />& Maicon
            </h5>
          </div>
          <div
            style={{
              width: 400,
              height: 400,
            }}
            className="absolute bg-primary -z-10 -bottom-2 -right-2"
          />
        </div>
        <div className="md:bg-sky-200 md:w-1/3 md:h-full"></div>
      </Section.Container>

      <Section.Container className="bg-primary-light h-auto justify-center items-center p-8">
        <Section.Title>CONTAGEM REGRESSIVA</Section.Title>

        <div className="flex flex-row gap-4 mt-8">
          <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
            01
            <br />
            <span className="text-xs mt-2">DIAS</span>
          </div>
          <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
            01
            <br />
            <span className="text-xs mt-2">HORAS</span>
          </div>
          <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
            01
            <br />
            <span className="text-xs mt-2">MINUTOS</span>
          </div>
          <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
            01
            <br />
            <span className="text-xs mt-2">SEGUNDOS</span>
          </div>
        </div>
      </Section.Container>

      <Section.Container className="bg-white items-center p-8 flex gap-8">
        <Section.Title className="text-color-txt">
          CERIMONIA E RECEPÇÃO
        </Section.Title>
        <p className=" text-color-txt text-center">
          Gostaríamos muito de contar com a presença de todos vocês no momento
          em que nossa união será abençoada diante de Deus.
          <br />
          Escolhemos o Rancho Art Eventos para esse momento! A cerimonia será
          realizada no amplo gramado do rancho, deixando nosso dia do jeitinho
          que sempre sonhamos. <br />
          Tentaremos ser o mais breve e pontuais possível durante a cerimonia.
          Logo após a recepção será no mesmo local.
        </p>
        <div className="flex w-full px-0 md:px-40">
          <div className="w-full h-80 bg-slate-600  rounded-lg"></div>
        </div>
        <p className="text-color-txt text-xs">
          Dia 06 de Julho de 2024, as 16:30. Rancho Art Eventos, Rua Tucunaré,
          s/nª, Loteamento Vale do Sol na cidade Santa Fé do Sul - SP.
        </p>
      </Section.Container>

      <Section.Container className="bg-primary-light h-auto justify-center items-center p-8">
        <Section.Title>CERIMONIA E RECEPÇÃO</Section.Title>
      </Section.Container>
    </main>
  );
}
