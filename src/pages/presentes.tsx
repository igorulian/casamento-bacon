import Product from "@/components/Product";

export default function Presentes() {
  return (
    <main className="bg-blue-50 grid grid-cols-[repeat(auto-fill, minmax(200px, 1fr))] min-h-screen min-w-screen p-8 gap-4">
      {[0, 1, 2, 3].map((p) => (
        <Product key={p} />
      ))}
    </main>
  );
}
