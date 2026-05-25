import { BadgeCheck, ShieldCheck } from 'lucide-react';
import { differentials, values } from '../data/siteContent';

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Sobre Nós</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              A FG Engenharia e Construção, fundada em 2021, entrega soluções completas em
              construção civil, montagem industrial, serviços de engenharia, manutenção,
              locação de máquinas e mão de obra especializada.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              A empresa reúne engenheiros, técnicos e especialistas de diferentes áreas para
              executar projetos com agilidade, segurança, eficiência e responsabilidade técnica.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">2021</div>
                <div className="text-gray-600 mt-2">Fundação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">5</div>
                <div className="text-gray-600 mt-2">Engenharias</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">360°</div>
                <div className="text-gray-600 mt-2">Soluções</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg min-h-96 p-8 flex flex-col justify-center">
            <p className="text-orange-400 font-semibold mb-4">Missão</p>
            <p className="text-white text-2xl font-bold mb-8">
              Transformar conhecimento técnico em soluções que geram impacto real.
            </p>
            <p className="text-green-400 font-semibold mb-4">Visão</p>
            <p className="text-gray-200 text-lg">
              Inspirar confiança pela capacidade de integrar talentos e construir um modelo de
              engenharia moderno, diverso e centrado nas pessoas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossos Valores</h3>
            <div className="grid gap-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3 text-gray-700">
                  <BadgeCheck className="text-green-600 shrink-0" size={20} />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Diferenciais Competitivos</h3>
            <div className="grid gap-3">
              {differentials.map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-700">
                  <ShieldCheck className="text-orange-600 shrink-0" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
