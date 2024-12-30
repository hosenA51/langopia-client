import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
    const tutorial = useLoaderData();
    const { user } = useAuth();
    const [tutorials, setTutorial] = useState();

    const { _id, language, tutorialName, email, price, image, description, review } = tutorial;

    useEffect(() => {
        fetch(`https://langopia-server.vercel.app/tutorials/${_id}`)
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, [_id]);

    const handleBookTutor = async () => {
        const bookedTutor = {
            userEmail: user.email,
            tutorId: _id,
            tutorialName,
            language,
            price,
            image,
            review,
        };

        const response = await fetch('https://langopia-server.vercel.app/book-tutor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookedTutor),
        });

        const data = await response.json();
        if (data.insertedId) {
            Swal.fire({
                icon: 'success',
                title: 'Tutor Booked!',
                text: 'You have successfully booked this tutor.',
            });
        } else if (data.message) {
            Swal.fire({
                icon: 'warning',
                title: 'Already Booked!',
                text: 'You have already booked this tutor.',
            });
        }
    };

    return (
        <div className='bg-base-300 py-14'>
            <div className="card lg:card-side bg-base-100 w-10/12 lg:w-7/12 mx-auto shadow-xl">
                <figure className='flex-1'>
                    <img
                        src={image}
                        className='h-full w-full' />
                </figure>
                <div className="card-body flex-1">
                    <div className='flex'>
                        <h2 className="text-4xl font-bold">{tutorialName}</h2>
                    </div>
                    <div><p className="text-lg font-medium flex justify-start gap-12">Language: <span className='text-[#FF6363]'>{language}</span></p></div>
                    <p className='text-lg font-medium flex justify-start gap-9'>Description: <span className='text-lg font-normal text-gray-500'>{description}</span></p>
                    <hr />
                    <div className='flex justify-between'>
                        <p className='flex justify-start gap-10'><span className='text-lg font-medium'>Price:</span> <span className='text-lg font-medium text-[#FF6363]'>${price}</span></p>
                        <p className='flex justify-start gap-10'><span className='text-lg font-medium'>review:</span> <span className='text-lg font-medium text-[#FF6363]'>{review}</span></p>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <button className='btn btn-outline w-2/4 text-[#FF6363] hover:bg-[#FF6363] text-lg rounded-full' onClick={handleBookTutor}>Book</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;