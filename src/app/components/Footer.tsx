type FooterProps = {
  onNavigate: (sectionId: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  return (
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
              <li>
                <button type="button" onClick={() => onNavigate('sobre')}>
                  Sobre
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('servicos')}>
                  Serviços
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('projetos')}>
                  Projetos
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contato')}>
                  Contato
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Horário de Atendimento</h4>
            <p className="text-gray-400">Disponível para atendimento pelos telefones oficiais.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 FG Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
