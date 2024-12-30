import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const HowItWorks = () => {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 800 },
    });

    const timelineData = [
        {
            step: "Step 1",
            title: "Create Your Profile",
            description:
                "Sign up and create your personalized profile to start your learning journey.",
            icon: "👤",
        },
        {
            step: "Step 2",
            title: "Find the Perfect Tutor",
            description:
                "Browse through our extensive list of tutors and find the one that fits your needs.",
            icon: "🔍",
        },
        {
            step: "Step 3",
            title: "Start Learning",
            description:
                "Schedule your lessons and start achieving your language goals today!",
            icon: "📚",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-base-100 to-base-300">
            <div className="max-w-screen-lg mx-auto px-4">
                <animated.div style={fadeIn} className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#FF6363] mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-base-content">
                        A simple 3-step process to start your language learning journey.
                    </p>
                </animated.div>
                <div className="relative border-l-4 border-blue-500 pl-6">
                    {timelineData.map((item, index) => (
                        <animated.div
                            key={index}
                            style={fadeIn}
                            className="mb-10 flex items-start"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg mr-4">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-base-content">
                                    {item.step}: {item.title}
                                </h3>
                                <p className="text-base-content">{item.description}</p>
                            </div>
                        </animated.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
