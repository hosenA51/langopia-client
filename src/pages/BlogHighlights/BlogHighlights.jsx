import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

export default function BlogHighlights() {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 800 },
    });
    const blogs = [
        { title: 'Top 10 Language Learning Tips', excerpt: 'Boost your progress with these essential strategies.' },
        { title: 'Why Consistency Beats Intensity', excerpt: 'Daily habits matter more than marathons.' },
        { title: 'Choosing Your First Foreign Language', excerpt: 'Tips to pick the perfect language for you.' },
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-base-100 to-base-300">
            <div className="max-w-5xl mx-auto px-6">
                <animated.div style={fadeIn} className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#FF6363] mb-4">📘 Tips Corner</h2>
                </animated.div>
                <div className="relative border-l-4 border-blue-600 pl-6">
                    <div className="absolute top-0 left-0 h-full w-1 bg-blue-600"></div>
                    {blogs.map((blog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-12 relative"
                        >
                            <div className="ml-4">
                                <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-[31px] top-2.5"></div>
                                <h3 className="text-2xl font-bold text-blue-800">{blog.title}</h3>
                                <p className="text-gray-700 mt-2 text-base">{blog.excerpt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}