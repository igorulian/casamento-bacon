import Image from "next/image";

const Produto = ({ product }: { product: { name: string; price: number } }) => {
  
  function addToCart(){
    const localCart = localStorage.getItem('@cart')
    
    const cart = localCart ? JSON.parse(localCart) : []
    cart.push(product)
    localStorage.setItem('@cart', JSON.stringify(cart))

    window.location.href = 'carrinho'
  }
  
  return (
    <div className="flex justify-between flex-col items-center p-4 rounded-lg bg-white h-auto w-40 sm:w-56 ">
      <Image
        alt="A"
        src={require("../assets/gifts/gift_1.jpg")}
        className="w-100 bg-black h-100 rounded-md"
      />
      <span className="text-color-txt text-sm mt-2 text-center">
        {product.name}
      </span>
      <span className="text-base mb-2 text-color-txt">R${product.price}</span>
      <button onClick={addToCart} className="flex text-lg items-center justify-center w-full p-2 text-white bg-primary rounded-lg">
        Presentear
      </button>
    </div>
  );
};

export default Produto;
