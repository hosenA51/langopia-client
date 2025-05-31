import { motion } from 'framer-motion';

export default function LanguageGoals() {
  return (
    <section className="py-16 px-6 bg-base-300 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-[#FF6363] mb-4">Track Your Language Goals</h2>
        <p className="text-gray-600 mb-6">Visualize your journey with weekly, monthly, and yearly progress tracking tools tailored for each language you’re learning.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {['Vocabulary', 'Grammar', 'Speaking'].map((item, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="bg-base-100 p-6 rounded-xl shadow-md"
            >
              <h3 className="font-semibold text-lg text-blue-600">{item}</h3>
              <p className="text-sm text-gray-500 mt-2">Progress: {Math.floor(Math.random() * 100)}%</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}