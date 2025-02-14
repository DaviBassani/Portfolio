import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mb-16">
      <Image
        className="rounded-full mb-6"
        src="/next.svg"
        alt="Foto do perfil"
        width={150}
        height={150}
        priority
      />
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Seu Nome
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        Desenvolvedor Full Stack
      </p>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
        Apaixonado por criar soluções web inovadoras e escaláveis. 
        Especializado em React, Next.js, Node.js e TypeScript.
      </p>
    </section>
  );
} 