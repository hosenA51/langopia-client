import React from 'react';
import { Link } from 'react-router-dom';

const TutorCard = ({tutorial}) => {

    const { _id, tutorialName, language, price, image, description } = tutorial || {};

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
                    <div className="badge badge-secondary h-fit">{language}</div>
                </h2>
                <p className='text-gray-500'>{description}</p>
                <div className="flex justify-between">
                    <p>Price: ${price}</p>
                </div>
                <div className="card-actions justify-center flex">
                    <Link 
                    className='flex-1' 
                    to={`/tutor/details/${_id}`}
                    >
                        <button className="btn btn-sm btn-outline btn-success rounded-full w-full">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;