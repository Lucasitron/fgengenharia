import { motion } from 'motion/react';

type HeroSectionProps = {
  onNavigate: (sectionId: string) => void;
};

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-orange-600 font-semibold mb-4">
            FG Engenharia e Empreendimentos | Desde 2021
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Construindo sonhos com engenharia completa
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Soluções em construção civil, montagem industrial, manutenção, locação de máquinas,
            mão de obra especializada e serviços técnicos multidisciplinares.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => onNavigate('orcamento')}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Solicitar Orçamento
            </button>
            <button
              type="button"
              onClick={() => onNavigate('projetos')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Ver Estrutura
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
