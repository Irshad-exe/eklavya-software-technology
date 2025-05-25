import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  href,
  target,
  rel
}: ButtonProps) {
  const buttonClass = variant === 'primary' 
    ? 'btn-primary' 
    : 'btn-secondary';

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${buttonClass} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${buttonClass} ${className}`}
    >
      {children}
    </motion.button>
  );
}
