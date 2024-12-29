import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyTutorials = () => {
    const { user } = useAuth();
    const [tutorials, setTutorials] = useState([]);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/tutorials?email=${user.email}`)
        .then(res => setTutorials(res.data));

    }, [user.email])

    
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // Delete the tutorial
                fetch(`http://localhost:3000/tutorials/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            // Delete related booked tutors
                            fetch(`http://localhost:3000/booked-tutors?tutorId=${_id}`, {
                                method: "DELETE",
                            })
                                .then(res => res.json())
                                .then(bookedData => {
                                    if (bookedData.deletedCount > 0) {
                                        Swal.fire("Deleted!", "Tutorial and related bookings have been deleted.", "success");
                                    } else {
                                        Swal.fire("Deleted!", "Tutorial deleted but no related bookings found.", "info");
                                    }
                                });

                            setTutorials(tutorials.filter((tutorial) => tutorial._id !== _id));
                        } else {
                            Swal.fire("Error!", "Failed to delete the tutorial.", "error");
                        }
                    });
            }
        });
    };


    return (
        <div className="container my-10">
            {tutorials.length === 0 ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">No tutorials added yet!</h2>
                    <p className="mb-4 text-[#FF6363]">You haven't added any tutorials. Start creating one now!</p>
                    <Link to="/addTutorials">
                        <button className="bg-none text-lg font-semibold text-base-content px-4 py-2 rounded-full border hover:bg-[#FF6363] hover:text-white transition-all duration-300">
                            Add Tutorial
                        </button>
                    </Link>
                </div>
            ) : (
                <table className="table">
                    <thead className="text-lg font-bold">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Language</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Review</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutorials.map((tutorial, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{tutorial.tutorialName}</td>
                                <td>
                                    <img
                                        src={tutorial.image}
                                        alt={tutorial.name}
                                        style={{ width: "50px", height: "50px" }}
                                    />
                                </td>
                                <td>{tutorial.language}</td>
                                <td>${tutorial.price}</td>
                                <td>{tutorial.description}</td>
                                <td>{tutorial.review}</td>
                                <td className="flex flex-col gap-2 items-center">
                                    <button
                                        className="text-2xl text-orange-500"
                                        onClick={() => handleDelete(tutorial._id)}
                                    >
                                        <MdDeleteForever />
                                    </button>
                                    <Link to={`/updateTutorials/${tutorial._id}`}>
                                        <button
                                            className="text-xl text-green-500"
                                        >
                                            <MdEditSquare />
                                        </button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyTutorials;