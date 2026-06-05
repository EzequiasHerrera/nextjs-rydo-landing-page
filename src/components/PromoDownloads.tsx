import { Tag, QrCode } from 'lucide-react';

export default function PromoDownloads() {
  return (
    <section id="tarifas" className="py-8 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Left Card - Promo (1/4 width on desktop) */}
          <div className="lg:col-span-1 rounded-[2rem] border border-[#ff009d]/30 bg-[#0a0a0a] p-6 lg:p-8 flex items-center justify-between gap-4 sm:gap-6 relative overflow-hidden group hover:border-[#ff009d]/60 transition-colors h-full">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff009d]/10 blur-3xl rounded-full"></div>

            <div className="flex items-center justify-center shrink-0 h-full">
              <Tag className="text-[#ff009d] -rotate-12 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" strokeWidth={1} />
            </div>

            <div className="flex flex-col z-10 w-full relative">
              <div className="text-[10px] uppercase font-bold tracking-widest text-white mb-1">¡Primer Viaje</div>
              <div className="text-2xl lg:text-3xl font-black italic tracking-tight text-[#ff009d] leading-none mb-3">GRATIS!</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-wider mb-2">Usá el código:</div>
              <div className="border border-zinc-700 rounded-full px-3 py-1 inline-block text-center w-max">
                <span className="text-xs font-bold tracking-[0.2em] text-white">RYDOBSAS</span>
              </div>
            </div>
          </div>

          {/* Right Card - Download (3/4 width on desktop) */}
          <div className="lg:col-span-3 rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-6 md:px-10 flex flex-col md:flex-row items-stretch justify-between gap-8 overflow-hidden relative min-h-[160px]">

            {/* Column 1 - Text & Buttons */}
            <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-6 z-10">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight max-w-[280px]">
                DESCARGÁ LA APP Y EMPEZÁ <span className="italic">A RYDEAR</span>
              </h3>
              <div className="flex flex-row gap-4 items-center bg-black/0">
                {/* Store buttons - Replace with actual SVGs or Image assets for accurate app store badges */}
                <button className="bg-black border border-zinc-800 hover:border-zinc-600 rounded-xl px-4 py-2 flex items-center gap-3 transition-colors h-12 md:h-14 w-32 md:w-36 overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="App Store" className="w-4 h-4 md:w-5 md:h-5 object-contain opacity-90" />
                  <div className="flex flex-col items-start leading-none space-y-1">
                    <span className="text-[8px] md:text-[9px] text-zinc-400">Descargalo en el</span>
                    <span className="text-[10px] md:text-xs font-semibold text-white">App Store</span>
                  </div>
                </button>
                <button className="bg-black border border-zinc-800 hover:border-zinc-600 rounded-xl px-4 py-2 flex items-center gap-3 transition-colors h-12 md:h-14 w-36 overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                  <div className="flex flex-col items-start leading-none space-y-1">
                    <span className="text-[8px] md:text-[9px] text-zinc-400 uppercase">Disponible en</span>
                    <span className="text-[10px] md:text-xs font-semibold text-white">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Column 2 - QR Code */}
            <div className="hidden md:flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-xl z-10 shadow-[0_0_15px_rgba(255,0,157,0.3)] border-[3px] border-[#ff009d] aspect-square self-stretch">
              {/* Replace with actual QR image */}
              <QrCode className="text-black w-full h-full" strokeWidth={1} />
            </div>

            {/* Column 3 - Helmet Image */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center relative z-10">
              {/* Replace with actual helmet PNG asset with transparent bg */}
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center relative">
                <img src="assets/img/casco.png" alt="Casco" className="w-full h-full object-contain" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
