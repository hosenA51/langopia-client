import { motion } from "motion/react"

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-base-300">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#FF6363]">Why Choose Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: 'fas fa-graduation-cap',
                            title: 'Expert Tutors',
                            description: 'Our tutors are highly experienced and passionate about teaching. They are experts in their respective languages and can guide you through every step of the learning process.',
                            color: 'text-blue-600',
                        },
                        {
                            icon: 'fas fa-clock',
                            title: 'Flexible Scheduling',
                            description: 'Schedule your lessons according to your availability. Whether you’re a morning person or night owl, we’ve got you covered.',
                            color: 'text-green-600',
                        },
                        {
                            icon: 'fas fa-globe-americas',
                            title: 'Global Reach',
                            description: 'Connect with tutors from around the world. Learn not just the language, but also immerse yourself in the culture of the language.',
                            color: 'text-orange-600',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center p-6 bg-base-100 shadow-lg rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <i className={`${item.icon} text-4xl ${item.color} mb-4`}></i>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-center text-base-content">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
