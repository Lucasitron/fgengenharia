import { useState, useEffect, type FormEvent, type ReactNode } from 'react';
import {
  BadgeCheck,
  Building2,
  ChevronDown,
  ClipboardCheck,
  Factory,
  Handshake,
  HardHat,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import * as Collapsible from '@radix-ui/react-collapsible';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderCollapsed(window.scrollY > 100);

      const sections = ['inicio', 'sobre', 'servicos', 'projetos', 'orcamento', 'contato'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

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
      const data: { success?: boolean; message?: string } = await response.json();

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

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'projetos', label: 'Estrutura' },
    { id: 'orcamento', label: 'Orçamento' },
    { id: 'contato', label: 'Contato' },
  ];

  const services = [
    {
      title: 'Construção Civil',
      description: 'Execução de obras civis com foco em qualidade, da fundação ao acabamento.',
      Icon: Building2,
    },
    {
      title: 'Montagem Industrial',
      description: 'Montagem de estruturas e sistemas industriais complexos com precisão técnica.',
      Icon: Factory,
    },
    {
      title: 'Manutenção Industrial',
      description: 'Manutenção preventiva e corretiva para garantir continuidade operacional.',
      Icon: Wrench,
    },
    {
      title: 'Serviços de Engenharia',
      description: 'Projetos nas áreas civil, mecânica, elétrica, ambiental e segurança do trabalho.',
      Icon: HardHat,
    },
    {
      title: 'Laudos e Projetos',
      description: 'Laudos técnicos, gestão de projetos e acompanhamento especializado.',
      Icon: ClipboardCheck,
    },
    {
      title: 'Locação de Máquinas',
      description: 'Disponibilização de máquinas e equipamentos por meio de parceiros estratégicos.',
      Icon: Truck,
    },
    {
      title: 'Mão de Obra Especializada',
      description: 'Fornecimento de profissionais qualificados para diferentes demandas operacionais.',
      Icon: Users,
    },
  ];

  const values = [
    'Ética e integridade',
    'Segurança como prioridade absoluta',
    'Compromisso com prazos e resultados',
    'Qualidade em todas as etapas',
    'Inovação e melhoria contínua',
    'Transparência e responsabilidade técnica',
    'Respeito às pessoas e ao meio ambiente',
  ];

  const differentials = [
    'Corpo técnico altamente qualificado',
    'Capacidade multidisciplinar',
    'Melhores práticas de engenharia',
    'Cultura de segurança e compliance',
    'Estrutura enxuta e eficiente',
    'Parcerias estratégicas',
  ];

  const equipment = [
    'Pá carregadeira',
    'Escavadeira hidráulica',
    'Caminhão basculante',
    'Empilhadeiras',
    'Plataforma elevatória',
    'Caminhão muck',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300"
        animate={{ height: isHeaderCollapsed ? '70px' : '90px' }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <motion.div
            className="font-bold text-orange-600"
            animate={{ fontSize: isHeaderCollapsed ? '1.5rem' : '2rem' }}
          >
            FG ENGENHARIA
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 font-medium ${
                      activeSection === item.id
                        ? 'text-orange-600'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5594992352906"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Fale com a FG Engenharia pelo WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-orange-600 font-semibold mb-4">FG Engenharia e Empreendimentos | Desde 2021</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Construindo sonhos com engenharia completa
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Soluções em construção civil, montagem industrial, manutenção, locação de máquinas,
              mão de obra especializada e serviços técnicos multidisciplinares.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('orcamento')}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                Solicitar Orçamento
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Ver Estrutura
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Section */}
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

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ Icon, ...servico }, index) => (
              <motion.div
                key={servico.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{servico.title}</h3>
                <p className="text-gray-600">{servico.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Section */}
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
                <div className="flex items-center gap-3">
                  <Handshake className="text-green-600" size={20} />
                  <span>Tradimaq</span>
                </div>
                <div className="flex items-center gap-3">
                  <Handshake className="text-green-600" size={20} />
                  <span>Master Serviços</span>
                </div>
                <div className="flex items-center gap-3">
                  <Handshake className="text-green-600" size={20} />
                  <span>Best Engenharia</span>
                </div>
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

      {/* Orçamento Section */}
      <section id="orcamento" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Solicite um Orçamento</h2>
          <form
            onSubmit={handleBudgetSubmit}
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
                {[
                  'Construção Civil',
                  'Montagem Industrial',
                  'Manutenção Industrial',
                  'Serviços de Engenharia',
                  'Laudos e Projetos',
                  'Locação de Máquinas',
                  'Mão de Obra Especializada'
                ].map((servico) => (
                  <label key={servico} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="Serviços selecionados[]"
                      value={servico}
                      className="w-5 h-5 text-orange-600 rounded focus:ring-2 focus:ring-orange-500"
                    />
                    <span className="text-gray-700">{servico}</span>
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
              <label className="block text-gray-700 font-medium mb-2">Mensagem / Detalhes Adicionais</label>
              <textarea
                rows={4}
                name="Mensagem"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Descreva seu projeto ou necessidade..."
              ></textarea>
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

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Entre em Contato</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Phone className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Telefone</h3>
                <p className="text-gray-600">(94) 99235-2906</p>
                <p className="text-gray-600">(94) 99253-0230</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Mail className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">contato@fgengenharia.com.br</p>
                <p className="text-gray-600">Disponível para atendimento</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <MapPin className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Endereço</h3>
                <p className="text-gray-600">Rua da Paz, nº 67A</p>
                <p className="text-gray-600">Castanheira, Breu Branco - PA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">FG ENGENHARIA</h3>
              <p className="text-gray-400">
                Engenharia, construção e manutenção com qualidade, segurança e compromisso.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Construção Civil</li>
                <li>Montagem Industrial</li>
                <li>Manutenção Industrial</li>
                <li>Laudos e Projetos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('sobre')}>Sobre</button></li>
                <li><button onClick={() => scrollToSection('servicos')}>Serviços</button></li>
                <li><button onClick={() => scrollToSection('projetos')}>Projetos</button></li>
                <li><button onClick={() => scrollToSection('contato')}>Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Horário de Atendimento</h4>
              <p className="text-gray-400">
                Disponível para atendimento pelos telefones oficiais.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 FG Engenharia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CollapsibleSection({ title, children }: { title: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen} className="mb-6">
      <Collapsible.Trigger
        type="button"
        className="w-full flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <span className="font-medium text-gray-900">{title}</span>
        <ChevronDown
          className={`text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </Collapsible.Trigger>
      <Collapsible.Content className="mt-4 px-4">
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
