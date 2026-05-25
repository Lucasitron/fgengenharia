import { Handshake, Truck } from 'lucide-react';
import { equipment } from '../data/siteContent';

export function StructureSection() {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Estrutura e Capacidade Operacional</h2>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Equipe Técnica</h3>
            <ul className="space-y-3 text-gray-600">
              <li>02 Engenheiros Civis</li>
              <li>01 Engenheiro Eletricista</li>
              <li>01 Engenheiro Ambiental e Sanitarista</li>
              <li>01 Engenheiro Mecânico</li>
              <li>01 Engenheiro de Segurança do Trabalho</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Equipe Operacional</h3>
            <p className="text-gray-600">
              Funcionários especializados atuando em contratos de terceiros, com mobilização
              eficiente e foco em segurança, qualidade e cumprimento de prazos.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Parceiros Estratégicos</h3>
            <div className="space-y-3 text-gray-600">
              {['Tradimaq', 'Master Serviços', 'Best Engenharia'].map((partner) => (
                <div key={partner} className="flex items-center gap-3">
                  <Handshake className="text-green-600" size={20} />
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Equipamentos Disponíveis</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {equipment.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-200">
                    <Truck className="text-orange-400 shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Proposta de Valor</h3>
              <p className="text-gray-200 mb-4">
                Solidez de mercado, corpo técnico experiente, agilidade operacional,
                segurança, soluções completas e relacionamento próximo.
              </p>
              <p className="text-orange-300 font-semibold">
                Construímos soluções duradouras, parcerias fortes e experiências positivas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
