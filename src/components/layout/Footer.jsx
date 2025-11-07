import { Link } from 'react-router-dom';
import { DolphinLogo } from '../common/DolphinLogo';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-blue-400">
                <DolphinLogo />
              </div>
              <span className="font-bold text-white">Impo Escobedo</span>
            </div>
            <p className="text-sm">Conectamos tu negocio con el mundo</p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servicios" className="hover:text-white">Importaciones</Link></li>
              <li><Link to="/servicios" className="hover:text-white">Exportaciones</Link></li>
              <li><Link to="/servicios" className="hover:text-white">Asesoría Logística</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contacto" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacidad" className="hover:text-white">Privacidad</Link></li>
              <li><Link to="/terminos" className="hover:text-white">Términos</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2024 Impo Escobedo de Lagos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};