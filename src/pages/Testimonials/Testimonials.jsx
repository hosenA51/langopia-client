import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "I had an amazing experience learning Spanish with my tutor! The platform is easy to use and the tutors are top-notch.",
            name: "Sarah, USA",
            language: "Spanish Learner",
            image: "https://i.ibb.co.com/RBM67Dg/freepik-candid-image-photography-natural-textures-highly-r-35776.jpg",
        },
        {
            quote: "The tutors are very patient and the lessons are well-structured. I highly recommend this platform!",
            name: "Ali, UAE",
            language: "Arabic Learner",
            image: "https://i.ibb.co.com/dmj25DH/freepik-candid-image-photography-natural-textures-highly-r-35778.jpg",
        },
        {
            quote: "I’ve improved my French skills tremendously thanks to this platform. The flexible scheduling is a huge plus!",
            name: "Marie, France",
            language: "French Learner",
            image: "https://i.ibb.co.com/nnKxk2H/freepik-candid-image-photography-natural-textures-highly-r-35774.jpg",
        },
        {
            quote: "Learning Japanese was never this easy! The tutors are fantastic and very supportive.",
            name: "Hiroshi, Japan",
            language: "Japanese Learner",
            image: "https://i.ibb.co.com/RDKwZXB/freepik-candid-image-photography-natural-textures-highly-r-35779.jpg",
        },
        {
            quote: "Thanks to this platform, I can now confidently communicate in German. Highly recommended!",
            name: "Lukas, Germany",
            language: "German Learner",
            image: "https://i.ibb.co.com/8jQ1Xt0/freepik-candid-image-photography-natural-textures-highly-r-35777.jpg",
        },
        {
            quote: "The interactive lessons and skilled tutors have helped me master Chinese faster than I expected.",
            name: "Chen, China",
            language: "Chinese Learner",
            image: "https://i.ibb.co.com/8BYG6N0/freepik-candid-image-photography-natural-textures-highly-r-35780.jpg",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-l from-base-100 to-base-300">
            <div className="max-w-screen-xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-[#FF6363] mb-4">What Our Users Say</h2>
                    <p className="text-lg text-base-content">Hear from our satisfied learners around the world.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-base-100 shadow-lg rounded-lg overflow-visible hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative flex justify-center">
                                <div className="absolute -top-8">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                                    />
                                </div>
                            </div>
                            <div className="pt-16 pb-6 px-6 text-center">
                                <p className="text-base-content italic mb-4">"{testimonial.quote}"</p>
                                <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
                                <p className="text-base-content">{testimonial.language}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
