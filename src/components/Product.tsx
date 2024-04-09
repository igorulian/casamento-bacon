import Image from "next/image";
import { useMemo } from "react";

const Produto = ({
  product,
}: {
  product: { name: string; price: number; id: number };
}) => {
  function addToCart() {
    const localCart = localStorage.getItem("@cart");

    const cart = localCart ? JSON.parse(localCart) : [];
    cart.push(product);
    localStorage.setItem("@cart", JSON.stringify(cart));

    window.location.href = "carrinho";
  }

  const formatedPrice = useMemo(() => {
    const parteInteira = Math.floor(product.price);
    const parteDecimal = (product.price - parteInteira) * 100;

    const parteInteiraFormatada = parteInteira.toLocaleString("pt-BR");

    const parteDecimalFormatada = parteDecimal.toFixed(0).padStart(2, "0");

    const valorFormatado = `R$ ${parteInteiraFormatada},${parteDecimalFormatada}`;

    return valorFormatado;
  }, [product.price]);

  return (
    <div className="flex shadow-lg gap-2 justify-between flex-col items-center p-4 rounded-lg bg-white h-auto w-40 md:w-56">
      <Image
        alt="A"
        src={require(`../assets/gifts/gift_${product.id}.jpg`)}
        className="w-100 bg-black h-100 rounded-md aspect-square"
      />
      <div className="flex flex-col h-full justify-between items-center">
        <span className="text-color-txt text-xs sm:text-sm text-center">
          {product.name}
        </span>
        <span className="text-base text-gray-600">{formatedPrice}</span>
      </div>
      <button
        onClick={addToCart}
        className="flex text-regular items-center justify-center w-full p-2 text-white bg-primary rounded-lg"
      >
        Presentear
      </button>
    </div>
  );
};

export default Produto;
