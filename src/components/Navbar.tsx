import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Setup simple scroll spy
      const sections = ['inicio', 'como-funciona', 'vehiculos', 'tarifas', 'zonas', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', id: 'inicio' },
    { name: 'CÓMO FUNCIONA', id: 'como-funciona' },
    { name: 'VEHÍCULOS', id: 'vehiculos' },
    { name: 'TARIFAS', id: 'tarifas' },
    { name: 'ZONAS', id: 'zonas' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          {/* Logo placeholder, to be replaced by actual SVG later */}
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto text-white object-contain" style={{ minWidth: '100px' }} />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(link.id, e)}
              className={`text-xs font-semibold tracking-wider transition-colors ${
                activeSection === link.id ? 'text-[#ff009d]' : 'text-white hover:text-[#ff009d]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="border border-[#ff009d] text-white hover:bg-[#ff009d] hover:shadow-[0_0_15px_rgba(255,0,157,0.6)] px-6 py-2 rounded-full text-xs font-semibold tracking-widest transition-all">
            DESCARGAR APP
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white hover:text-[#ff009d] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 py-6 px-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(link.id, e)}
              className={`text-sm font-semibold tracking-wider transition-colors ${
                activeSection === link.id ? 'text-[#ff009d]' : 'text-white hover:text-[#ff009d]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-white/10 flex flex-col">
             <button className="border border-[#ff009d] text-white hover:bg-[#ff009d] hover:text-white px-6 py-3 rounded-full text-sm font-semibold tracking-widest transition-all text-center">
              DESCARGAR APP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
