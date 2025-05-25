import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="section-title">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
