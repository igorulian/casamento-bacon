import HeaderButton from "@/components/HeaderButton";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center">
      <header className="bg-white w-full p-4 flex items-center justify-between">  
        <h4 className="text-black">Barbara e Maicon</h4>

        <div className="flex flex-row gap-8">
          <HeaderButton>
            Cerimonia          
          </HeaderButton>
          <HeaderButton>
            Local          
          </HeaderButton>
          <HeaderButton>
            Lista de presentes
          </HeaderButton>
        </div>

        <button>

        </button>
      </header>
      <Section.Container>
        <Section.Title>AAA</Section.Title>
      </Section.Container>
    </main>
  );
}
