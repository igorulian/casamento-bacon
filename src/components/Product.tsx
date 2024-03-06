import Image from "next/image";

const Produto = () => {
  return (
    <div className="flex justify-end flex-col items-center p-4 rounded-lg bg-white h-80 min-w-52 max-w-56">
      <Image alt="A" src={""} className="w-100 bg-black h-100" />
      <span className="text-zinc-800">Presente maneiro</span>
      <span className="text-zinc-800">R$100</span>
      <button className="flex text-lg items-center justify-center w-full p-4 h-12 text-white bg-primary rounded-lg">
        Presentear
      </button>
    </div>
  );
};

export default Produto;
