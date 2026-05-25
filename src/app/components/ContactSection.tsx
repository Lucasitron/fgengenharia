import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  return (
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
              <p className="text-gray-600">(94) 99253-0203</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Mail className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">fgengenhariafg@gmail.com</p>
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
  );
}
