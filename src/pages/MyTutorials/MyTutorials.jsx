import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import Swal from "sweetalert2";

const MyTutorials = () => {
    const { user } = useAuth();
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/tutorials?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTutorials(data))
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
                fetch(`http://localhost:3000/tutorials/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your tutorial has been deleted.", "success");
                            setTutorials(tutorials.filter((tutorial) => tutorial._id !== _id));
                        } else {
                            Swal.fire("Error!", "Failed to delete the tutorial.", "error");
                        }
                    });
            }
            console.log("Deleting ID:", _id);
        });
    };

    return (
        <div className="container my-10">
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
                            <td>{user.displayName}</td>
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
                                <button
                                    className="text-xl text-green-500"
                                >
                                    <MdEditSquare />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyTutorials;