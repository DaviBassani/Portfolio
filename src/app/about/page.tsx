import Timeline from '@/components/Timeline';
import SkillsGraph from '@/components/SkillsGraph';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Sobre Mim
        </h1>
        
        <div className="space-y-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sou um desenvolvedor apaixonado por criar experiências digitais excepcionais.
              Com experiência em desenvolvimento web full-stack, busco constantemente
              aprender novas tecnologias e aprimorar minhas habilidades.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-6">Minhas Habilidades</h2>
            <SkillsGraph />
          </section>

          <section id="timeline" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Experiência</h2>
            <Timeline />
          </section>
        </div>
      </main>
    </div>
  );
} 