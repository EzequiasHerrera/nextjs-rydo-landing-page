import { Instagram, Music2, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="faq" className="bg-[#020202] py-10 lg:py-16 border-t-2 border-t-[#ff009d]">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 pb-10 lg:pb-16">
          
          {/* Logo Section */}
          <div className="lg:w-[20%] flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left lg:pr-8 lg:border-r border-white/5">
             <div className="flex flex-col items-center lg:items-start">
               <img src="/logo.svg" alt="Logo" className="h-10 w-auto object-contain mb-1" style={{ minWidth: '120px' }} />
               <div className="flex items-center space-x-1 mt-1">
                 <span className="w-1 h-3 bg-white/50"></span>
                 <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Movete Distinto</span>
               </div>
             </div>
          </div>

          <div className="lg:w-[55%] grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-0 text-center lg:text-left">
            {/* Links Column 1 */}
            <div className="flex flex-col space-y-4 text-xs font-semibold tracking-wider lg:px-8 lg:border-r border-white/5">
              <span className="text-[#ff009d] uppercase mb-1">Compañía</span>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Sobre nosotros</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Trabajá con nosotros</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Prensa</a>
            </div>

            {/* Links Column 2 */}
            <div className="flex flex-col space-y-4 text-xs font-semibold tracking-wider lg:px-8 lg:border-r border-white/5">
              <span className="text-[#ff009d] uppercase mb-1">Ayuda</span>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Centro de ayuda</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Términos y condiciones</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Política de privacidad</a>
            </div>

            {/* Social Column */}
            <div className="flex flex-col items-center lg:items-start space-y-4 text-xs font-semibold tracking-wider lg:px-8 lg:border-r border-white/5 sm:col-span-1 col-span-2">
              <span className="text-[#ff009d] uppercase mb-1">Seguinos</span>
              <div className="flex space-x-6">
                <a href="#" className="text-white hover:text-[#ff009d] transition-all hover:scale-110">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#ff009d] transition-all hover:scale-110">
                  <Music2 size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#ff009d] transition-all hover:scale-110">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:w-[25%] flex flex-col items-center lg:items-end space-y-3 lg:pl-8 mt-4 lg:mt-0">
             <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Escribinos por Whatsapp</span>
             <a href="https://wa.me/something" className="flex items-center space-x-2 text-[#ff009d] hover:text-[#ff009d]/80 transition-colors">
               <MessageCircle size={28} />
               <span className="text-2xl font-light">11 1234 5678</span>
             </a>
          </div>

        </div>

        {/* Copyright separator */}
        <div className="border-t border-white/10 pt-8 flex items-center">
          <p className="text-[10px] text-zinc-600 font-medium">
            © 2024. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
