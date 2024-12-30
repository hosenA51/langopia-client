import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyBookedTutors = () => {
    const { user } = useAuth();
    const [bookedTutors, setBookedTutors] = useState([]);
    const [reviewsCount, setReviewsCount] = useState(0);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/booked-tutors?email=${user.email}`)
                .then(res => setBookedTutors(res.data));
        }
    }, [user?.email]);


    const handleReview = (tutorId) => {
        fetch(`https://langopia-server.vercel.app/tutorials/${tutorId.toString()}/review`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ review: 1 }),
        })
            .then(response => response.json())
            .then(() => {
                Swal.fire('Success!', 'Review updated successfully.', 'success');

                fetch('https://langopia-server.vercel.app/find-tutors')
                    .then((res) => res.json())
                    .then((data) => {
                        const totalReviews = data.reduce((acc, tutor) => acc + (Number(tutor.review) || 0), 0);
                        setReviewsCount(totalReviews);
                    });
            })
            .catch(error => {
                console.error('Error updating review:', error);
            });
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
                                <button
                                    className='btn btn-outline text-[#FF6363] text-lg hover:bg-[#FF6363]'
                                    onClick={() => handleReview(tutor.tutorId)}
                                >Review</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookedTutors;
