import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden">

      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Replace the src below with your actual background image asset */}
        <img
          src="/assets/img/fondo.png"
          alt="Scooter and Bike Background"
          className="w-full h-full object-cover opacity-100 object-center"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl space-y-2 md:space-y-4">

          <div className="flex items-center space-x-3">
            <span className="w-1 h-5 bg-[#ff009d]"></span>
            <span className="text-[#ff009d] font-bold tracking-[0.2em] text-base uppercase">Movete Distinto</span>
          </div>

          <h1 className="font-black leading-[0.95] tracking-tight flex flex-col">
            <span className="text-6xl md:text-8xl lg:text-[130px]">CONOCÉ</span>
            <span className="text-6xl md:text-8xl lg:text-[130px] italic text-[#ff009d]">BS AS</span>
            <span className="text-3xl md:text-5xl lg:text-5xl mt-3 text-zinc-100">COMO NUNCA ANTES</span>
          </h1>

          <p className="text-zinc-300 text-base md:text-lg max-w-md font-medium leading-relaxed pb-4 pt-2">
            Bicis eléctricas y motos eléctricas de última generación para recorrer la ciudad a tu ritmo.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button className="w-full sm:w-auto bg-[#ff009d] hover:bg-[#d60084] hover:shadow-[0_0_20px_rgba(255,0,157,0.6)] text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest transition-all flex items-center justify-center space-x-2 group">
              <span>DESCARGAR APP</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto border border-zinc-600 hover:border-[#ff009d] hover:text-[#ff009d] hover:shadow-[0_0_15px_rgba(255,0,157,0.2)] text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest transition-all flex items-center justify-center space-x-2 group">
              <span>VER VEHÍCULOS</span>
              <ArrowRight size={16} className="text-zinc-500 group-hover:text-[#ff009d] group-hover:translate-x-1 transition-all" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
