import { useState, type FormEvent } from 'react';
import { serviceOptions } from '../data/siteContent';
import { CollapsibleSection } from './CollapsibleSection';

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export function BudgetSection() {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBudgetSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Enviando solicitação...');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '48886a3f-a5b7-40dd-819b-5201432ccffd');
    formData.append('subject', 'Nova solicitação de orçamento - FG Engenharia');
    formData.append('from_name', 'Site FG Engenharia');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data: Web3FormsResponse = await response.json();

      if (data.success) {
        setFormStatus('Solicitação enviada com sucesso. Em breve entraremos em contato.');
        form.reset();
      } else {
        setFormStatus('Não foi possível enviar agora. Tente novamente em instantes.');
      }
    } catch {
      setFormStatus('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="orcamento" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Solicite um Orçamento</h2>
        <form
          onSubmit={handleBudgetSubmit}
          acceptCharset="UTF-8"
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nome Completo</label>
              <input
                type="text"
                name="Nome completo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Telefone</label>
              <input
                type="tel"
                name="Telefone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="(94) 99999-9999"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Cidade</label>
              <input
                type="text"
                name="Cidade"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Sua cidade"
              />
            </div>
          </div>

          <CollapsibleSection title="Tipo de Serviço">
            <div className="space-y-3">
              {serviceOptions.map((service) => (
                <label key={service} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="Serviços selecionados[]"
                    value={service}
                    className="w-5 h-5 text-orange-600 rounded focus:ring-2 focus:ring-orange-500"
                  />
                  <span className="text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Localização do Projeto">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Estado</label>
                <select
                  name="Estado do projeto"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option>Pará</option>
                  <option>Maranhão</option>
                  <option>Tocantins</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Endereço do Projeto</label>
                <input
                  type="text"
                  name="Endereço do projeto"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Rua, número, bairro"
                />
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Detalhes do Projeto">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Tipo de Construção</label>
                <select
                  name="Tipo de demanda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option>Industrial</option>
                  <option>Construção civil</option>
                  <option>Comercial</option>
                  <option>Serviço técnico</option>
                  <option>Locação ou mão de obra</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Área Aproximada (m²)</label>
                <input
                  type="number"
                  name="Área aproximada em m²"
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Ex: 150"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Prazo Desejado</label>
                <select
                  name="Prazo desejado"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option>Urgente (até 15 dias)</option>
                  <option>Normal (até 30 dias)</option>
                  <option>Flexível (acima de 30 dias)</option>
                </select>
              </div>
            </div>
          </CollapsibleSection>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Mensagem / Detalhes Adicionais
            </label>
            <textarea
              rows={4}
              name="Mensagem"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Descreva seu projeto ou necessidade..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 rounded-lg font-medium shadow-lg transition-colors hover:from-orange-700 hover:to-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
          </button>
          {formStatus && (
            <p className="mt-4 text-center text-sm font-medium text-gray-700" role="status">
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
