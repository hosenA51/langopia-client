import React, { useEffect, useState } from 'react';

const Stats = () => {
    const [tutorsCount, setTutorsCount] = useState(0);
    const [reviewsCount, setReviewsCount] = useState(0);
    const [languagesCount, setLanguagesCount] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/find-tutors')
            .then((res) => res.json())
            .then((data) => {
                setTutorsCount(data.length);

                const totalReviews = data.reduce((acc, tutor) => acc + (Number(tutor.review) || 0), 0);
                setReviewsCount(totalReviews);

                const allLanguages = data.flatMap((tutor) => tutor.language);
                const uniqueLanguages = new Set(allLanguages);
                setLanguagesCount(uniqueLanguages.size);
            });

        fetch('http://localhost:3000/users/count')
            .then((res) => res.json())
            .then((data) => {
                setTotalUsers(data.totalUsers);
            })
            .catch((error) => {
                console.error('Error fetching total users count:', error);
            });
    }, []);

    return (
        <section className="py-16 bg-base-200">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 text-center">
                <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <p className="text-3xl font-bold text-[#FF6363]">{tutorsCount}</p>
                    <h3 className="text-xl font-semibold text-base-content">Total Tutors</h3>
                </div>
                <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <p className="text-3xl font-bold text-[#FF6363]">{reviewsCount}</p>
                    <h3 className="text-xl font-semibold text-base-content">Total Reviews</h3>
                </div>
                <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <p className="text-3xl font-bold text-[#FF6363]">{languagesCount}</p>
                    <h3 className="text-xl font-semibold text-base-content">Total Languages</h3>
                </div>
                <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <p className="text-3xl font-bold text-[#FF6363]">{totalUsers}</p>
                    <h3 className="text-xl font-semibold text-base-content">Total Users</h3>
                </div>
            </div>
        </section>
    );
};

export default Stats;
