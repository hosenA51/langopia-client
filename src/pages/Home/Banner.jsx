import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className="py-20 md:py-28 lg:pt-36 bg-gradient-to-t from-[#FFC8C8] to-[#FFFFFF] lg:h-[550px] rounded-b-[60px]">
            <div className='flex flex-col-reverse md:flex-row items-center justify-between w-10/12 mx-auto'>
                <div className="text-center md:text-left">
                    <motion.h1
                        animate={{ opacity: [0, 1], y: [-50, 0] }}
                        transition={{ duration: 1.5 }}
                        className="text-5xl font-bold mb-6 text-gray-800"
                    >
                        Welcome to{' '}
                        <span className="text-[#FF6363]">
                            Langopia
                        </span>
                    </motion.h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Unlock the power of languages with Langopia – connect with <br /> expert tutors, explore new cultures, and open doors <br /> to global opportunities.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-primary  bg-[#FF6363] hover:bg-[#FF6363] text-white rounded-full shadow-lg transition-all text-lg px-6 font-semibold"
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* Single Image with Animation */}
                <motion.div
                    className="flex justify-start"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <img
                        src="https://i.ibb.co.com/6YdWSBK/DALL-E-2024-12-25-11-40-32-A-modern-vibrant-banner-image-representing-language-learning-featuring-di.webp"
                        alt="Langopia Banner"
                        className="max-w-lg w-full rounded-lg shadow-xl border border-blue-300"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
