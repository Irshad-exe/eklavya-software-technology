import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Card({ 
  children, 
  className = '', 
  icon, 
  title,
  description 
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`card ${className}`}
    >
      {icon && (
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-orange-500/10 p-3">
            {icon}
          </div>
        </div>
      )}
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </motion.div>
  );
}
