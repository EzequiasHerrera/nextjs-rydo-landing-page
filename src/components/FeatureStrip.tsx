import { Zap, MapPin, ShieldCheck, BatteryWarning, HardHat } from 'lucide-react';

export default function FeatureStrip() {
  const features = [
    {
      icon: <Zap size={20} className="text-[#ff009d]" />,
      title: "100% ELÉCTRICOS",
      subtitle: "Cero emisiones"
    },
    {
      icon: <MapPin size={20} className="text-[#ff009d]" />,
      title: "EXPLORÁ LA CIUDAD",
      subtitle: "A tu ritmo"
    },
    {
      icon: <ShieldCheck size={20} className="text-[#ff009d]" />,
      title: "SEGURO INCLUIDO",
      subtitle: "Y asistencia 24/7"
    },
    {
      icon: <BatteryWarning size={20} className="text-[#ff009d]" />,
      title: "BATERÍAS DE",
      subtitle: "LARGA DURACIÓN"
    },
    {
      icon: <HardHat size={20} className="text-[#ff009d]" />,
      title: "CASCO INCLUIDO",
      subtitle: "En cada alquiler"
    }
  ];

  return (
    <section className="border-t border-b border-white/10 bg-[#0a0a0a]/50">
      <div className="container mx-auto px-6 py-8 md:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row justify-items-center lg:justify-between items-center gap-y-6 gap-x-4 lg:gap-4">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-3 shrink-0">
              <div className="flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-wider">{feature.title}</span>
                <span className="text-[10px] text-zinc-400 font-medium">{feature.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
