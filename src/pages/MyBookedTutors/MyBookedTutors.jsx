import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBookedTutors = () => {
    const { user } = useAuth();
    const [bookedTutors, setBookedTutors] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/booked-tutors?email=${user.email}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch booked tutors');
                    }
                    return res.json();
                })
                .then(data => setBookedTutors(data))
                .catch(error => console.error(error));
        }
    }, [user?.email]);


    const handleReview = async (id) => {
        const response = await fetch(`http://localhost:3000/tutorials/review/${id}`, {
            method: 'PATCH',
        });

        const data = await response.json();
        if (data.modifiedCount > 0) {
            alert('Review added successfully!');
            fetch('http://localhost:3000/find-tutors')
                .then(res => res.json())
                .then(data => setTutorials(data));
        }
    };

    return (
        <div className='bg-base-300 py-16'>
            {bookedTutors.length === 0 ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        You haven't booked any tutors yet.
                    </h2>
                    <p className="text-lg mt-2">
                        To find new tutors, visit the <a href="/find-tutors" className="text-[#FF6363] underline">Find Tutors</a> page.
                    </p>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto'>
                    {bookedTutors.map((tutor) => (
                        <div key={tutor._id} className='card bg-base-100 shadow-xl'>
                            <figure>
                                <img src={tutor.image} alt={tutor.tutorialName} className='w-full h-48 object-cover' />
                            </figure>
                            <div className='card-body pb-0'>
                                <h2 className='text-2xl font-bold text-center'>{tutor.tutorialName}</h2>
                                <div className='flex justify-center'>
                                    <p className='text-lg flex gap-8'>Language: <span className='text-[#FF6363]'>{tutor.language}</span></p>
                                    <p className='text-lg flex gap-8'>Price: <span className='text-[#FF6363]'>${tutor.price}</span></p>
                                </div>
                            </div>
                            <div className='flex justify-center my-4 p-0'>
                                <button className='btn btn-outline text-[#FF6363] text-lg hover:bg-[#FF6363]'>Review</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookedTutors;
