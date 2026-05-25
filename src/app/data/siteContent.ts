import {
  Building2,
  ClipboardCheck,
  Factory,
  HardHat,
  Truck,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const menuItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'projetos', label: 'Estrutura' },
  { id: 'orcamento', label: 'Orçamento' },
  { id: 'contato', label: 'Contato' },
];

export type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const services: Service[] = [
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

export const values = [
  'Ética e integridade',
  'Segurança como prioridade absoluta',
  'Compromisso com prazos e resultados',
  'Qualidade em todas as etapas',
  'Inovação e melhoria contínua',
  'Transparência e responsabilidade técnica',
  'Respeito às pessoas e ao meio ambiente',
];

export const differentials = [
  'Corpo técnico altamente qualificado',
  'Capacidade multidisciplinar',
  'Melhores práticas de engenharia',
  'Cultura de segurança e compliance',
  'Estrutura enxuta e eficiente',
  'Parcerias estratégicas',
];

export const equipment = [
  'Pá carregadeira',
  'Escavadeira hidráulica',
  'Caminhão basculante',
  'Empilhadeiras',
  'Plataforma elevatória',
  'Caminhão muck',
];

export const serviceOptions = services.map((service) => service.title);
