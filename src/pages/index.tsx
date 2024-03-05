import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Section from "@/components/Section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen min-w-screen flex-col items-center">
      <Section.Container>
        <Section.Title>AAA</Section.Title>
      </Section.Container>
      <Section.Container className="bg-sky-100">
        <Section.Title>AAA</Section.Title>
      </Section.Container>
    </main>
  );
}
