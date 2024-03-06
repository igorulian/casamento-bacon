import Image from "next/image";
import { Lora } from "next/font/google";
import localFont from "next/font/local";
import Section from "@/components/Section";
import { twMerge } from "tailwind-merge";

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
  return (
    <main className="bg-white flex min-h-screen min-w-screen flex-col items-center">
      <Section.Container className="md:flex-row  max-[768px]:max-h-[650px]">
        <div className="md:w-full md:relative md:justify-center">
          <Image
            src={require("../assets/image.jpg")}
            alt="Barbara e Maicon"
            layout="fill"
            objectFit="cover"
            className="opacity-90 md:h-auto max-[768px]:h-full max-[768px]:max-h-[500px]"
          />
        </div>
        <div>
          <div
            style={{
              right: -250,
              marginRight: "33%",
            }}
            className="z-10 md:w-[500px] w-full h-[400px] absolute md:top-60 md:left-auto max-[768px]:top-1/2 max-[768px]:left-1/2 max-[768px]:transform max-[768px]:-translate-x-1/2 max-[768px]:-translate-y-1/2 "
          >
            <Image
              className="absolute z-0 right-0 top-0 w-40 rotate-180 scale-x-[-1]"
              src={require("../assets/fro.svg")}
              alt="fro"
            />
            <div className="bg-white w-full h-full p-8 py-16 z-10 flex flex-col gap-8 justify-between">
              <h5
                className={twMerge(
                  "text-8xl z-10 text-color-txt",
                  gistesy.className
                )}
              >
                Barbara
                <br />& Maicon
              </h5>
              <div className="flex flex-row items-center gap-4">
                <Image
                  src={require("../assets/icons/icon-date-jade.svg")}
                  alt="icon calendar"
                />
                <p className="text-color-txt">09 de Julho de 2024</p>
              </div>
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

        <div className="flex flex-row gap-4 mt-8">
          <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
            <b>01</b>
            <br />
            <span className="text-xs mt-2">DIAS</span>
          </div>
          <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
            <b>01</b>
            <br />
            <span className="text-xs mt-2">HORAS</span>
          </div>
          <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
            <b>01</b>
            <br />
            <span className="text-xs mt-2">MINUTOS</span>
          </div>
          <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
            <b>01</b>
            <br />
            <span className="text-xs mt-2">SEGUNDOS</span>
          </div>
        </div>
      </Section.Container>

      <Section.Container className="bg-white h-auto items-center px-0 md:px-40 p-8 pt-4 flex gap-8">
        <div className="flex flex-col items-center">
          <Image
            className="w-10 rotate-90 scale-x-[-1]"
            src={require("../assets/fro.svg")}
            alt="fro"
          />
          <Section.Title className={`text-color-txt ${lora.className}`}>
            CERIMONIA E RECEPÇÃO
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
          em que nossa união será abençoada diante de Deus. Escolhemos o Rancho
          Art Eventos para esse momento! A cerimonia será realizada no amplo
          gramado do rancho, deixando nosso dia do jeitinho que sempre sonhamos.
          Tentaremos ser o mais breve e pontuais possível durante a cerimonia.
          Logo após a recepção será no mesmo local.
        </p>
        <div className="w-full md:max-w-[700px] overflow-hidden aspect-[16/9] bg-slate-600  rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBRQRRY6z_IciTrG612AOj1iNWJQwt9eBw&q=-20.2724477,-50.9481148"
            className="w-full h-full border-none"
            loading="lazy"
          ></iframe>
        </div>
        <p className="text-color-txt text-xs">
          Dia 06 de Julho de 2024, as 16:30. Rancho Art Eventos, Rua Tucunaré,
          s/nª, Loteamento Vale do Sol na cidade Santa Fé do Sul - SP.
        </p>
      </Section.Container>

      <Section.Container className="bg-sky-200 h-auto justify-center items-center p-8 pt-4">
        <div className="flex flex-col items-center">
          <Image
            className="w-10 rotate-90 scale-x-[-1]"
            src={require("../assets/fro_branca.svg")}
            alt="fro"
          />
          <Section.Title className={`text-color-txt mb-8 ${lora.className}`}>
            CONTATOS
          </Section.Title>
          <div className="flex md:flex-row flex-col items-start gap-12 justify-around overflow-x-auto">
            <div className="flex flex-col  justify-start align-top text-start">
              <h4 className={`text-color-txt text-base mb-4 ${lora.className}`}>
                Maquiagem e cabelo:
              </h4>
              <p className="font-bold mt-2">Jaqueline Santiago</p>
              <p>(17) 98210-7302</p>
              <p>@jaquelinesantiagomakeup</p>
              <p className="font-bold mt-2">Fernandes Neto</p>
              <p>(17) 99245-2246</p>
              <p>@_fernandes_neto</p>
              <p className="font-bold mt-2">Yhane Vieira</p>
              <p>(17) 98156-0007</p>
              <p>@atelieyhanevieira</p>
              <p className="font-bold mt-2">StudioCarolMake</p>
              <p>(17) 99191-6460</p>
              <p>@carolmakee</p>
            </div>
            <div className="flex flex-col justify-start text-start ">
              <h4 className={`text-color-txt text-base mb-4 ${lora.className}`}>
                Hotéis:
              </h4>

              <p className="font-bold mt-2">Hotel Portal da Mata</p>
              <p>(17) 3641-1575</p>
              <p>@hotelportaldamata</p>
              <p className="font-bold mt-2">Hotel Santa Fé</p>
              <p>(17) 99149-2593</p>
              <p>@hotel_santafe</p>
              <p className="font-bold mt-2">Hotel Litani</p>
              <p>(17) 99140-9393</p>
              <p>@hotel.litani</p>
              <p className="font-bold mt-2">Hotel San Gennaro</p>
              <p>(17) 99661-5990</p>
              <p>@hotelsangennaro</p>
            </div>
            <div className="flex flex-col justify-start text-start ">
              <h4 className={`text-color-txt text-base mb-4 ${lora.className}`}>
                Aplicativos de carona
              </h4>
              <p className="font-bold mt-2">Sampa Santa Fe do Sul</p>
              <p>(17) 99603-2221</p>
              <p>@sampamobilitysantafe</p>
              <p className="font-bold mt-2">Amigo car</p>
              <p>@amigocar_</p>
            </div>
          </div>
        </div>
      </Section.Container>
    </main>
  );
}
