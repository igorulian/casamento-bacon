import Product from "@/components/Product";
import GIFTS from "@/assets/database/gifts.json";

export default function Presentes() {
  return (
    <main className="flex items-center justify-center bg-blue-50">
      <div className="justify-center w-full md:w-2/3 flex flex-row flex-wrap min-h-screen min-w-screen p-4 md:p-8 gap-2 md:gap-8">
        {GIFTS.map((p, index) => (
          <Product product={p} key={index} />
        ))}
      </div>
    </main>
  );
}
