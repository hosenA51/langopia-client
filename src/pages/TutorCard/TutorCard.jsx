import React from 'react';
import { Link } from 'react-router-dom';

const TutorCard = ({tutorial}) => {

    const { _id, tutorialName, language, price, image, review } = tutorial || {};

    return (
        <div className="card card-side bg-base-100 shadow-xl w-full">
            <figure className='flex-1 h-full w-full'>
                <img
                    src={image}
                    className='h-full w-full object-fill'
                    alt="image"
                />
            </figure>
            <div className="card-body flex-1 py-3">
                <h2 className="card-title">
                    {tutorialName}
                    
                </h2>
                <h4 className="text-lg flex justify-between">Language: <span className='text-[#FF6363]'>{language}</span></h4>
                <p className='text-lg flex justify-between'>Review: <span className='text-[#FF6363]'>{review}</span></p>
                <div className="flex justify-between">
                    <p>Price: ${price}</p>
                </div>
                <div className="card-actions justify-center flex">
                    <Link 
                    className='flex-1' 
                    to={`/tutor/details/${_id}`}
                    >
                        <button className="btn btn-sm btn-outline rounded-full w-full text-[#FF6363] hover:bg-[#FF6363]">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;