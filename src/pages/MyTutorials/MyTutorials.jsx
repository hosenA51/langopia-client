import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";

const MyTutorials = () => {
    const { user } = useAuth();
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/tutorials?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTutorials(data))
    }, [user.email])
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
                                // onClick={() => handleDelete(tutorial.id)}
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