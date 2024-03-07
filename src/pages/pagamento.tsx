import GiftType from "@/types/gift";
import { Copy } from "@phosphor-icons/react";
import { useQRCode } from "next-qrcode";
import { Lora } from "next/font/google";
import { useEffect, useMemo, useState } from "react";

const lora = Lora({ subsets: ["latin"] });

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

  return (
    <main className="bg-white -mt-16 px-4 flex min-h-screen min-w-screen flex-col justify-center items-center">
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
            text={
              "00020101021126360014br.gov.bcb.pix0114+55679821218405204000053039865802BR5923LINCON ULIAN TRAMONTANO6008BRASILIA62070503***63049661"
            }
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
              setCoppied((old) => !old);
            }}
            className="border-primary border-dotted bg-sky-50 border-[1px] mt-4 rounded-lg p-4 w-full max-w-80"
          >
            <div className="text-primary w-full flex items-center text-center">
              <Copy size={20} className="mr-2" color="#0097b2" />
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
            <div className="flex flex-row justify-end mb-4 text-2xl items-center w-full">
              <p className=" text-color-txt mr-4">Valor:</p>
              <p className=" text-color-txt">R${total}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Pagamento;
