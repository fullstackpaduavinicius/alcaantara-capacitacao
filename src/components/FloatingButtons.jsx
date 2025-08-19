// components/FloatingButtons.jsx
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/5579988187788?text=Olá! Gostaria de mais informações."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/marcusalcantara_aju"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg hover:opacity-90 transition"
      >
        <FaInstagram size={28} />
      </a>
    </div>
  );
};

export default FloatingButtons;
