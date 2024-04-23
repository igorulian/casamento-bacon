import Image from "next/image";
import { Libre_Barcode_39_Text, Lora } from "next/font/google";
import localFont from "next/font/local";
import Section from "@/components/Section";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Head from "next/head";
import { FormEventHandler, useEffect, useRef, useState } from "react";

const CountDown = dynamic(() => import("@/components/CountDown"), {
  ssr: false,
});

const lora = Lora({ subsets: ["latin"] });

const gistesy = localFont({
  src: [
    {
      path: "../assets/fonts/Gistesy.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Home() {
  const formsInput = useRef<HTMLFormElement>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    formsInput.current?.addEventListener("submit", (e) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setConfirmed(true);
      }, 500);
    });
  }, []);

  return (
    <main className="bg-white flex min-h-screen min-w-screen flex-col items-center">
      <Head>
        <title>Casamento Bacon</title>
      </Head>
      <Section.Container className="md:flex-row relative max-[768px]:max-h-[650px]">
        <div className="md:w-full md:relative md:justify-center">
          <Image
            src={require("../assets/image.webp")}
            alt="Bárbara e Maicon"
            layout="fill"
            loading="lazy"
            objectFit="cover"
            className="opacity-90 md:h-auto max-[768px]:h-full max-[768px]:max-h-[500px] md:-mt-0 -mt-20"
          />
        </div>
        <div
          style={{
            right: -250,
            marginRight: "33%",
          }}
          className="z-10 -bottom-20 md:w-[500px] w-11/12 h-[400px] absolute md:top-60 md:left-auto max-[768px]:top-1/2 max-[768px]:left-1/2 max-[768px]:transform max-[768px]:-translate-x-1/2 max-[768px]:-translate-y-1/4 "
        >
          <Image
            className="absolute z-0 right-0 top-0 w-40 rotate-180 scale-x-[-1]"
            src={require("../assets/fro.svg")}
            alt="fro"
          />
          <div className="bg-white w-full h-full p-8 py-16 z-10 flex flex-col gap-8 justify-between">
            <h5
              className={twMerge(
                "max-[368px]:text-7xl text-8xl z-10 text-color-txt",
                gistesy.className
              )}
            >
              Barbara
              <br />
              <span className="text-7xl">e</span> Maicon
            </h5>
            <div className="flex flex-row items-center gap-4">
              <Image
                src={require("../assets/icons/icon-date-jade.svg")}
                alt="icon calendar"
              />
              <p className="text-color-txt">06 de Julho de 2024</p>
            </div>
            <div className="md:w-[500px] w-full h-[400px] absolute bg-primary -z-10 -bottom-2 -right-2" />
          </div>
        </div>
        <div className="md:bg-sky-200 md:w-1/3 md:h-full"></div>
      </Section.Container>

      <Section.Container className="bg-primary-light h-auto justify-center items-center p-8 pt-4">
        <div className="flex flex-col items-center">
          <Image
            className="w-10 rotate-90 scale-x-[-1]"
            src={require("../assets/fro_branca.svg")}
            alt="fro"
          />
          <Section.Title className={`${lora.className}`}>
            CONTAGEM REGRESSIVA
          </Section.Title>
        </div>

        <CountDown />
      </Section.Container>

      <Section.Container
        id="section-cer"
        className="bg-white h-auto items-center px-0 md:px-40 p-8 pt-4 flex gap-8"
      >
        <div className="flex flex-col items-center">
          <Image
            className="w-10 rotate-90 scale-x-[-1]"
            src={require("../assets/fro.svg")}
            alt="fro"
          />
          <Section.Title className={`text-color-txt ${lora.className}`}>
            CERIMÔNIA E RECEPÇÃO
          </Section.Title>
        </div>
        <div className="md:max-w-[700px] relative min-h-64 w-full overflow-hidden aspect-[16/9] bg-slate-600 rounded-lg">
          <Image
            src={require("../assets/foto_local.jpg")}
            alt="Casa bonita"
            layout="fill"
            objectFit="cover"
            className="opacity-85 h-auto"
          />
        </div>
        <p className="text-color-txt text-center md:max-w-[700px]">
          Gostaríamos muito de contar com a presença de todos vocês no momento
          em que nossa união será abençoada diante de Deus e de nossa família.
          Escolhemos o Rancho Art Eventos para esse momento! A cerimônia será
          realizada no amplo gramado do rancho, deixando nosso dia do jeitinho
          que sempre sonhamos. Tentaremos ser o mais breve e pontuais possível
          durante a cerimônia. Logo após, a recepção será no mesmo local.
        </p>
        <ul>
          <li className=" text-color-txt text-center md:max-w-[700px] mb-2">
            <b>-</b> Traje esporte fino.
          </li>
          <li className=" text-color-txt text-center md:max-w-[700px] mb-2">
            <b>-</b> Horário de Brasília;
          </li>
          <li className=" text-color-txt text-center md:max-w-[700px] mb-2">
            <b>-</b> Na cidade costuma-se ter polícia realizando
            <br />
            bafômetros, aconselhamos a busca por táxis e Ubers.
          </li>
        </ul>
        <div className="w-full md:max-w-[700px] overflow-hidden aspect-[16/9] bg-color-txt  rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBRQRRY6z_IciTrG612AOj1iNWJQwt9eBw&q=-20.272312,-50.949289"
            className="w-full h-full border-none"
            loading="lazy"
          ></iframe>
        </div>
        <p className="text-color-txt text-xs">
          Dia 06 de Julho de 2024, as 16:30. Rancho Art Eventos, Rua Tucunaré,
          s/nª, Loteamento Vale do Sol na cidade Santa Fé do Sul - SP.
        </p>
      </Section.Container>

      <Section.Container
        id="section-contacts"
        className="bg-primary-light h-auto justify-center items-center p-8 pt-4"
      >
        <div className="flex flex-col items-center">
          <Image
            priority
            className="w-10 rotate-90 scale-x-[-1]"
            src={require("../assets/fro_branca.svg")}
            alt="fro"
          />
          <Section.Title className={`text-white mb-8 ${lora.className}`}>
            CONTATOS
          </Section.Title>
          <div className="flex md:flex-row flex-col items-start gap-12 justify-around overflow-x-auto">
            <div className="flex flex-col gap-4 flex-wrap justify-start align-top text-start w-full md:w-auto">
              <h4 className={`text-primary text-base mb-4 ${lora.className}`}>
                Maquiagem e cabelo:
              </h4>
              <div className="flex md:flex-col md:flex-nowrap gap-4 flex-row flex-wrap md:justify-start justify-between">
                <div className="flex flex-col gap-1 text-white">
                  <p className={`font-bold mt-2 ${lora.className}`}>
                    Jaqueline Santiago
                  </p>
                  <p className="text-sm">(17) 98210-7302</p>
                  <p className="text-sm">@jaquelinesantiagomakeup</p>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <p className={`font-bold mt-2 ${lora.className}`}>
                    Fernandes Neto
                  </p>
                  <p className="text-sm">(17) 99245-2246</p>
                  <p className="text-sm">@_fernandes_neto</p>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <p className={`font-bold mt-2 ${lora.className}`}>
                    Yhane Vieira
                  </p>
                  <p className="text-sm">(17) 98156-0007</p>
                  <p className="text-sm">@atelieyhanevieira</p>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <p className={`font-bold mt-2 ${lora.className}`}>
                    StudioCarolMake
                  </p>
                  <p className="text-sm">(17) 99191-6460</p>
                  <p className="text-sm">@carolmakee</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start text-start w-full md:w-auto">
              <h4 className={`text-primary text-base mb-4 ${lora.className}`}>
                Hotéis:
              </h4>
              <div className="flex md:flex-col md:flex-nowrap md:justify-start md:gap-0 gap-4 flex-row flex-wrap justify-between">
                <div className="flex flex-col gap-1 text-white">
                  <p className={`font-bold mt-2 ${lora.className}`}>
                    Hotel Portal da Mata
                  </p>
                  <p className="text-sm">(17) 3641-1575</p>
                  <p className="text-sm">@hotelportaldamata</p>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <p className={`font-bold mt-2 ${lora.className}`}>
                    Hotel Santa Fé
                  </p>
                  <p className="text-sm">(17) 99149-2593</p>
                  <p className="text-sm">@hotel_santafe</p>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <p className={`font-bold mt-2 ${lora.className}`}>
                    Hotel Litani
                  </p>
                  <p className="text-sm">(17) 99140-9393</p>
                  <p className="text-sm">@hotel.litani</p>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <p className={`font-bold mt-2 ${lora.className}`}>
                    Hotel San Gennaro
                  </p>
                  <p className="text-sm">(17) 99661-5990</p>
                  <p className="text-sm">@hotelsangennaro</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start text-start w-full md:w-auto">
              <h4 className={`text-primary text-base mb-4 ${lora.className}`}>
                Aplicativos de carona
              </h4>
              <div className="flex md:flex-col md:flex-nowrap md:justify-start md:gap-0 gap-4 flex-row flex-wrap justify-between w-full">
                <div className="flex flex-col gap-1 text-white">
                  <p className={`font-bold mt-2 ${lora.className}`}>
                    Sampa Santa Fe do Sul
                  </p>
                  <p className="text-sm">(17) 99603-2221</p>
                  <p className="text-sm">@sampamobilitysantafe</p>
                </div>

                <div className="flex flex-col gap-1 text-white">
                  <p className={`font-bold mt-2 ${lora.className}`}>
                    Amigo car
                  </p>
                  <p className="text-sm">@amigocar_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section.Container>

      <Section.Container className="h-auto min-h-[500px] items-center py-4">
        <div className="flex flex-col items-center">
          <Image
            className="w-10 rotate-90 scale-x-[-1]"
            src={require("../assets/fro.svg")}
            alt="fro"
          />
          <Section.Title className={`text-color-txt ${lora.className}`}>
            CONFIRMAÇÃO DE PRESENÇA
          </Section.Title>
        </div>
        <div className="md:max-w-[700px] px-4 relative w-full rounded-lg flex items-center justify-center h-full">
          {confirmed ? (
            <span className="text-color-txt mt-[25%]">
              Presença confirmada com sucesso!
            </span>
          ) : (
            <form
              className="w-full"
              ref={formsInput}
              action="https://docs.google.com/forms/d/e/1FAIpQLSde9pw7mOPuLP3g25R75h7DV6GYdYVd_9WyWlsVmfOJrouCIA/formResponse"
            >
              <div className="flex flex-col gap-2 mt-4">
                <label className="text-primary">Nome</label>
                <input
                  style={{ outline: "none !important;" }}
                  className="input border rounded-md border-primary p-4 text-color-txt"
                  type="text"
                  name="entry.1325086022"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label className="text-primary">Quantas pessoas</label>
                <input
                  style={{ outline: "none !important;" }}
                  className="input border rounded-md border-primary p-4 text-color-txt"
                  type="number"
                  name="entry.507466633"
                  placeholder="Ex: 2"
                  min="1"
                  max="99"
                />
              </div>
              <button
                type="submit"
                className={`flex w-full p-4 border-none justify-center rounded-md mt-8 ${
                  loading ? "bg-neutral-200 " : "bg-primary"
                }`}
              >
                {loading ? "Carregando..." : "Confirmar"}
              </button>
            </form>
          )}
        </div>
      </Section.Container>

      <Footer />
    </main>
  );
}
