import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/1112345678" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 animate-bounce duration-1000"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
