import { CheckCircle2, Navigation, Clock } from 'lucide-react';

export default function Zones() {
  return (
    <section id="zonas" className="py-16">
      <div className="container mx-auto px-6">
        <div className="w-full rounded-[2rem] border border-zinc-800 bg-[#080808] overflow-hidden relative">
          
          {/* Decorative faint glow */}
          <div className="absolute -inset-1 blur-2xl bg-[#ff009d]/5 rounded-[2rem] -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3">
             
            {/* Left Col - Text */}
            <div className="p-8 lg:p-10 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 z-10">
               <h2 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-tight uppercase">
                 DESCUBRÍ <br/>
                 <span className="italic text-[#ff009d]">BUENOS AIRES</span> <br/>
                 DE OTRA MANERA
               </h2>
               <button className="border border-[#ff009d] text-[#ff009d] hover:bg-[#ff009d] hover:text-white hover:shadow-[0_0_20px_rgba(255,0,157,0.6)] px-8 py-3.5 rounded-full text-xs font-bold tracking-widest transition-all">
                  EXPLORAR ZONAS
               </button>
            </div>

            {/* Middle Col - Image */}
            <div className="relative min-h-[250px] md:min-h-full opacity-60 mix-blend-screen overflow-hidden">
               {/* Replace this div with an actual <img> of the obelisco map/cityscape */}
               <div className="absolute inset-0 bg-zinc-900 border-x border-zinc-800 flex items-center justify-center text-zinc-600 text-sm">
                  <img src="/city-map.jpg" alt="City Map" className="w-full h-full object-cover opacity-50" />
               </div>
               
               {/* Gradients to fade edges into dark theme */}
               <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10"></div>
               <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10"></div>
               <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent z-10"></div>
            </div>

            {/* Right Col - Stats */}
            <div className="p-8 lg:p-10 flex flex-col items-center md:items-start justify-center space-y-8 bg-gradient-to-r from-transparent to-[#050505]/50 z-10 border-t md:border-t-0 md:border-l border-white/5 h-full">
                
                <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-4">
                  <div className="flex items-center justify-center shrink-0">
                    <CheckCircle2 size={36} className="text-[#ff009d]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight text-white leading-none">+50</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mt-1">Zonas habilitadas</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-4">
                  <div className="flex items-center justify-center shrink-0">
                    <Navigation size={36} className="text-[#ff009d]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight text-white leading-none">+1000</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mt-1">Vehículos en la calle</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-4">
                  <div className="flex items-center justify-center shrink-0">
                    <Clock size={36} className="text-[#ff009d]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight text-white leading-none">24/7</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mt-1">Disponibles para vos</div>
                  </div>
                </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
