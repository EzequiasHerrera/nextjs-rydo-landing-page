import { ArrowRight, Check } from 'lucide-react';

export default function Vehicles() {
  const vehicles = [
    {
      category: "MOTOS ELÉCTRICAS",
      sub: "DE ÚLTIMA GENERACIÓN",
      image: "/assets/img/moto.png", // Replace with real asset
      features: [
        "Autonomía extendida",
        "Velocidad máxima 45 km/h",
        "Asiento doble",
        "Luces LED"
      ],
      color: "#ff009d"
    },
    {
      category: "BICIS ELÉCTRICAS",
      sub: "DE ÚLTIMA GENERACIÓN",
      image: "/assets/img/bici.png", // Replace with real asset
      features: [
        "Pedaleo asistido",
        "Autonomía hasta 80 km",
        "Livianas y resistentes",
        "Luces LED"
      ],
      color: "#00e5ff"
    }
  ];

  return (
    <section id="vehiculos" className="py-16 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-row justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">NUESTROS VEHÍCULOS</h2>
          <button className="hidden sm:flex text-[#ff009d] text-xs font-bold tracking-widest hover:text-white transition-colors items-center space-x-2 group">
            <span>VER TODOS</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {vehicles.map((v, i) => {
            const isNeonBlue = v.color === "#00e5ff";
            const dropShadowClass = isNeonBlue
              ? "drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(0,229,255,0.8)]"
              : "drop-shadow-[0_0_15px_rgba(255,0,157,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(255,0,157,0.8)]";
            const btnClass = isNeonBlue
              ? "border-[#00e5ff] hover:bg-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]"
              : "border-[#ff009d] hover:bg-[#ff009d] hover:shadow-[0_0_20px_rgba(255,0,157,0.6)]";

            return (
              <div key={i} className="bg-[#0a0a0a] rounded-3xl border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">

                {/* Asset Placeholder */}
                <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-full relative flex items-center justify-center p-4">
                  <img
                    src={`${v.image}`}
                    alt={v.category}
                    className={`w-full h-full object-contain transition-all duration-500 ease-in-out z-10 ${dropShadowClass}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-xs text-center z-0">
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col space-y-6 relative z-10">
                  <div>
                    <h3 className="font-bold text-lg tracking-wider" style={{ color: v.color }}>{v.category}</h3>
                    <p className="text-white text-md font-semibold tracking-wide">{v.sub}</p>
                  </div>

                  <ul className="space-y-3">
                    {v.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-zinc-300 text-sm">
                        <Check size={16} className="shrink-0" strokeWidth={3} style={{ color: v.color }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`self-start mt-4 border text-white hover:text-white px-8 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all flex items-center justify-center ${btnClass}`}>
                    VER MÁS
                  </button>
                </div>

              </div>
            )
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center sm:hidden">
          <button className="text-[#ff009d] text-xs font-bold tracking-widest hover:text-white transition-colors flex items-center space-x-2">
            <span>VER TODOS</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
