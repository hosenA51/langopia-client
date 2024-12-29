import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import TutorCard from '../TutorCard/TutorCard';

const FindTutors = () => {
    const { user } = useAuth();
    const { category } = useParams();
    const [tutorials, setTutorials] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredTutorials, setFilteredTutorials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/find-tutors')
            .then(res => res.json())
            .then(data => {
                const filteredByCategory = category
                    ? data.filter(tutorial =>
                          tutorial.language?.toLowerCase() === category.toLowerCase()
                      )
                    : data;

                setTutorials(filteredByCategory);
                setFilteredTutorials(filteredByCategory);
            })
            .catch(error => console.error('Error fetching tutors:', error));
    }, [category]);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchText(query);

        const filtered = tutorials.filter(tutorial =>
            tutorial.language?.toLowerCase().includes(query)
        );
        setFilteredTutorials(filtered);
    };

    return (
        <div className="h-screen py-8">
            <div className="mb-8 flex justify-center">
                <input
                    type="text"
                    placeholder="Search by language..."
                    value={searchText}
                    onChange={handleSearch}
                    className="input input-bordered w-full max-w-md"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTutorials.length > 0 ? (
                    filteredTutorials.map(tutorial => (
                        <TutorCard key={tutorial._id} tutorial={tutorial}></TutorCard>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No tutors found {category ? `for "${category}"` : ''}.
                    </p>
                )}
            </div>
        </div>
    );
};

export default FindTutors;
