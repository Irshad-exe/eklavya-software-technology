import { Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DevBarProps {
  className?: string;
}

const DevBar = ({ className = '' }: DevBarProps) => {
  return (
    <div className="bg-black text-white py-2 px-4 overflow-x-hidden">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-medium">Follow Us</span>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#2563eb] transition-colors duration-300">
              <Facebook className="w-3 sm:w-4 h-3 sm:h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#2563eb] transition-colors duration-300">
              <Instagram className="w-3 sm:w-4 h-3 sm:h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#2563eb] transition-colors duration-300">
              <Youtube className="w-3 sm:w-4 h-3 sm:h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#2563eb] transition-colors duration-300">
              <Twitter className="w-3 sm:w-4 h-3 sm:h-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
            <span className="text-xs sm:text-sm">+91 9771491637</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
            <span className="text-xs sm:text-sm">eklavyasoftware30@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevBar;
