import { Smartphone, QrCode, Bike, LockKeyhole } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "1.",
      icon: <Smartphone size={40} className="text-[#ff009d]" strokeWidth={1} />,
      title: "DESCARGÁ LA APP",
      desc: "Creá tu cuenta en segundos."
    },
    {
      num: "2.",
      icon: <QrCode size={40} className="text-[#ff009d]" strokeWidth={1} />,
      title: "ESCANEÁ Y DESBLOQUEÁ",
      desc: "Escaneá el código QR del vehículo."
    },
    {
      num: "3.",
      icon: <Bike size={40} className="text-[#ff009d]" strokeWidth={1} />,
      title: "VIAJÁ",
      desc: "Disfrutá tu viaje por Buenos Aires."
    },
    {
      num: "4.",
      icon: <LockKeyhole size={40} className="text-[#ff009d]" strokeWidth={1} />,
      title: "ESTACIONÁ Y FINALIZÁ",
      desc: "Finalizá el viaje desde la app y listo."
    }
  ];

  return (
    <section id="como-funciona" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-8 flex items-center space-x-2">
          <span>¿CÓMO</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">FUNCIONA?</span>
        </h2>

        <div className="relative flex flex-col md:flex-row justify-start items-center">

          {/* Main container with rounded borders */}
          <div className="bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-6 md:p-10 lg:pl-12 lg:pr-32 relative z-10 w-full lg:w-[85%]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center md:items-start space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="space-y-1 text-left w-full max-w-[180px]">
                    <h3 className="text-xs sm:text-sm font-bold tracking-tight text-white flex items-center space-x-1 sm:space-x-2">
                      <span className="text-[#ff009d] font-black">{step.num}</span>
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-zinc-400 text-[10px] sm:text-xs leading-relaxed max-w-[180px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overlapping Image Container */}
          <div className="relative lg:absolute mt-[-40px] md:mt-0 md:top-[50%] md:-translate-y-1/2 right-0 w-[180px] sm:w-[220px] lg:w-[280px] xl:w-[320px] z-20 overflow-visible lg:transform lg:translate-x-4 flex justify-center">
            {/* Replace with actual overlapping app image */}
            <img src="/assets/img/celular.png" alt="App Preview" className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(255,0,157,0.2)]" />
            <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-bold tracking-widest text-xs z-10 text-center px-4 mix-blend-difference pointer-events-none">
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
