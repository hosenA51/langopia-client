import React from 'react';
import { RiArrowRightDoubleLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const navigate = useNavigate();
    const categories = [
        { title: 'English', logo: 'https://i.ibb.co.com/Xjc2hby/big-ben.png', bgColor: '#EAF3FF' },
        { title: 'Spanish', logo: 'https://i.ibb.co.com/HBgrsWs/language-Icon-spanish.png', bgColor: '#FFF4E5' },
        { title: 'French', logo: 'https://i.ibb.co.com/SVX2zqz/bastille-day.png', bgColor: '#E9FFE5' },
        { title: 'German', logo: 'https://i.ibb.co.com/PwSYqV2/brandenburg-gate.png', bgColor: '#FFE5E5' },
        { title: 'Chinese', logo: 'https://i.ibb.co.com/KqC7w9j/chinese.png', bgColor: '#F5E5FF' },
        { title: 'Italian', logo: 'https://i.ibb.co.com/9Wvwstp/colosseum.png', bgColor: '#E5F7FF' },
        { title: 'Japanese', logo: 'https://i.ibb.co.com/PtbRV4v/torii-gate.png', bgColor: '#FFEDE5' },
        { title: 'Arabic', logo: 'https://i.ibb.co.com/MS1VYYx/dome.png', bgColor: '#E5FFF5' },
        { title: 'Portuguese', logo: 'https://i.ibb.co.com/c3p0Yj9/porto-cathedral.png', bgColor: '#FFF5E5' },
    ];

    const handleCategoryClick = (category) => {
        navigate(`/find-tutors/${category.toLowerCase()}`);
    };

    return (
        <section className="py-12 bg-base-200">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#FF6363]">Language Category</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="flex items-center justify-between p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                            style={{ backgroundColor: category.bgColor }}
                            onClick={() => handleCategoryClick(category.title)}
                        >
                            <div className="flex items-center gap-4">
                                <img src={category.logo} alt={category.title} className="w-12 h-12" />
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>
                            <div className='text-3xl'>
                            <RiArrowRightDoubleLine />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
