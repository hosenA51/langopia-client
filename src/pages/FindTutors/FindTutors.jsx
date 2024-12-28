import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import TutorCard from '../TutorCard/TutorCard';

const FindTutors = () => {
    const { user } = useAuth();
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/find-tutors')
            .then(res => res.json())
            .then(data => setTutorials(data));
    }, []); 

    return (
        <div className=' h-screen py-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                tutorials.map(tutorial => <TutorCard key={tutorial._id} tutorial={tutorial}></TutorCard>)
            }
            </div>
        </div>
    );
};

export default FindTutors;