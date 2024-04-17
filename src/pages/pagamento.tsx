import GiftType from "@/types/gift";
import { PiCopy } from "react-icons/pi";
import { useQRCode } from "next-qrcode";
import { Lora } from "next/font/google";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

const lora = Lora({ subsets: ["latin"] });

const CODE =
  "00020101021126580014br.gov.bcb.pix013650dab449-7494-4e85-b2c1-fe73220aa3835204000053039865802BR5919BARBARA C BIANCHINI6011TRES LAGOAS62070503***63049E46";

const Pagamento = () => {
  const [cart, setCart] = useState<GiftType[]>([]);
  const [coppied, setCoppied] = useState(false);
  const { Canvas } = useQRCode();

  useEffect(() => {
    const localCart = localStorage.getItem("@cart");

    const c = localCart ? JSON.parse(localCart) : [];
    setCart(c);
  }, []);

  const total = useMemo(() => {
    let t = 0;
    cart.forEach((i) => {
      t += i.price;
    });
    return t;
  }, [cart]);

  const formatedTotal = useMemo(() => {
    const parteInteira = Math.floor(total);
    const parteDecimal = (total - parteInteira) * 100;

    const parteInteiraFormatada = parteInteira.toLocaleString("pt-BR");

    const parteDecimalFormatada = parteDecimal.toFixed(0).padStart(2, "0");

    const valorFormatado = `R$ ${parteInteiraFormatada},${parteDecimalFormatada}`;

    return valorFormatado;
  }, [total]);

  function copyTextToClipboard(text: string) {
    var textArea = document.createElement("textarea");
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "bem-sucedido" : "sem sucesso";
      console.log("Comando de cópia de texto foi " + msg);
    } catch (err) {
      console.log("Oops, não foi possível copiar");
      window.prompt(
        "Copie para a área de transferência: Ctrl+C e tecle Enter",
        text
      );
    }
    document.body.removeChild(textArea);
  }

  return (
    <main className="bg-white -mt-16 px-4 flex min-h-screen min-w-screen flex-col justify-center items-center">
      <Head>
        <title>Pagamento</title>
      </Head>
      <div className="w-full lg:w-2/5 bg-white p-2 md:p-8 flex flex-col items-center rounded-xl h-screen md:h-auto min-h-96 justify-between">
        <h4 className={`mt-20 md:mt-0 text-primary mb-8 ${lora.className}`}>
          Pagamento
        </h4>
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
          {cart.length <= 0 && (
            <p className="text-center text-color-txt">
              Ops! Parece que seu carrinho está vazio
            </p>
          )}

          <Canvas
            text={CODE}
            options={{
              errorCorrectionLevel: "M",
              scale: 4,
              width: 300,
              color: {
                dark: "#0097b2",
                light: "#FFFFFF",
              },
            }}
          />

          <button
            onClick={() => {
              copyTextToClipboard(CODE);
              setCoppied(true);
            }}
            className="border-primary border-dotted bg-sky-50 border-[1px] mt-4 rounded-lg p-4 w-full max-w-80"
          >
            <div className="text-primary w-full flex items-center text-center">
              <PiCopy size={20} className="mr-2" color="#0097b2" />
              {coppied ? (
                <span>Código copiado!</span>
              ) : (
                <span>Clique aqui para copiar o código PIX</span>
              )}
            </div>
          </button>
        </div>
        <div className="flex w-full md:max-w-80 flex-col mt-4">
          {cart.length > 0 && (
            <div className="flex flex-row justify-end mb-4 text-xl items-center w-full">
              <p className={` text-color-txt mr-4 ${lora.className}`}>Valor:</p>
              <p className={` text-color-txt ${lora.className}`}>
                {formatedTotal}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Pagamento;
