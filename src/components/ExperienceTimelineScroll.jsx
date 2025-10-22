import { motion } from 'framer-motion';

const YearSection = ({ year, cards }) => {
  return (
    <div className="year-section">
      <div className="year-label">{year}</div>
      <div className="card-group">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {card}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default YearSection;