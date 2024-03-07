import GiftType from "@/types/gift";
import { Trash } from "@phosphor-icons/react";
import { Lora } from "next/font/google";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const lora = Lora({ subsets: ["latin"] });

const Carrinho = () => {
  const [cart, setCart] = useState<GiftType[]>([]);

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

  function removeGift(gift: GiftType) {
    const localCart = localStorage.getItem("@cart");

    let cart: GiftType[] = localCart ? JSON.parse(localCart) : [];
    cart = cart.filter((i) => i.name !== gift.name);
    localStorage.setItem("@cart", JSON.stringify(cart));
    setCart(cart);
  }

  return (
    <main className="bg-white -mt-16 px-4 flex min-h-screen min-w-screen flex-col justify-center items-center">
      <div className="w-full lg:w-2/5 bg-white p-2 md:p-8 flex flex-col items-center rounded-xl h-screen md:h-auto min-h-96 justify-between">
        <h4 className={`mt-16 md:mt-0 text-primary mb-8 ${lora.className}`}>
          Carrinho
        </h4>
        <div className="flex flex-col gap-4 w-full">
          {cart.length <= 0 && (
            <p className="text-center text-color-txt">
              Ops! Parece que seu carrinho está vazio
            </p>
          )}

          {cart.map((item, index) => (
            <div
              key={index}
              className="shadow-sm border-[1px] h-32 rounded-lg p-4 flex w-full flex-row justify-between py-4"
            >
              <Image
                src={require("../assets/gifts/gift_1.jpg")}
                alt={item.name}
                className="h-full w-auto rounded-lg"
              />

              <p className="ml-4 text-color-txt text-start w-full">
                {item.name}
              </p>
              <div className="flex flex-col justify-between">
                <button
                  onClick={() => {
                    removeGift(item);
                  }}
                  className="text-black flex justify-end w-auto"
                >
                  <Trash
                    color="#f65d5d"
                    size={24}
                    weight="regular"
                    alt="Excluir item"
                  />
                </button>
                <p className="text-color-txt">R${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col mt-4">
          {cart.length > 0 && (
            <div className="w-full px-4">
              <p className="w-full text-right text-color-txt">
                Total: R${total}
              </p>
            </div>
          )}
          <div className="flex mt-8 w-full flex-row justify-between gap-4 items-center">
            <a href="presentes" className="text-primary w-full">
              Adicionar mais presentes
            </a>
            <button
              disabled={cart.length <= 0}
              className={` w-full py-3 text-white p-2 rounded-lg ${
                cart.length > 0
                  ? "bg-primary"
                  : "bg-gray-300 opacity-50 cursor-pointer"
              }`}
            >
              Efetuar pagamento
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Carrinho;
