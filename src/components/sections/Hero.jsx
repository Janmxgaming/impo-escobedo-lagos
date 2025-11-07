// Hero.jsx — Opción A: Corte recto (sin onda)
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-puerto.jpg" 
          alt="Puerto con contenedores"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/45 to-gray-900/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo comentado */}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.9)]">
            Impo Escobedo de Lagos
          </h1>

          <p className="text-xl md:text-2xl mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
            Conectamos tu negocio con el mundo
          </p>
                    
          <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
            Expertos en importaciones, exportaciones y asesoría logística aduanal. 
            Llevamos tu empresa al siguiente nivel en comercio internacional.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contacto">
              <Button variant="primary">Contactar Ahora</Button>
            </Link>
            <Link to="/servicios">
              <Button variant="secondary">Ver Servicios</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* No wave — corte recto: nada más */}
    </section>
  );
};
