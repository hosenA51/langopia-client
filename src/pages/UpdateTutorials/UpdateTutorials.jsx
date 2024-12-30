import { useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const UpdateTutorials = () => {
    const tutorial = useLoaderData();
    const { user } = useAuth();

    const { _id, tutorialName, language, price, image, description } = tutorial || {};


    const handleUpdateTutorial = event => {
        event.preventDefault();

        const form = event.target;

        const user = form.user.value;
        const email = form.email.value;
        const tutorialName = form.tutorialName.value;
        const language = form.language.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;

        const updatedTutorial = { user, email, tutorialName, language, price, image, description }

        // send data to the server
        fetch(`https://langopia-server.vercel.app/tutorials/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTutorial)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className='w-full bg-base-300 m-0 py-8'>
            <div className="card bg-[#BEAE96] lg:w-2/4 shrink-0 shadow-2xl mx-auto">
                <div className="w-full rounded-t-2xl text-center mx-auto bg-[#2A2B29]">
                    <h1 className="text-4xl font-bold my-6 text-gray-300">Update Tutorials</h1>
                    <p className="mb-6 text-[#FF6363]">
                        Here you can edit your tutorial details. Update the tutorial’s name, language, <br /> price, image URL, and description to keep your information up-to-date.
                    </p>
                </div>
                <form
                    onSubmit={handleUpdateTutorial}
                    className="card-body">
                    {/* first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Name</span>
                            </label>
                            <input type="text" name='user' value={user?.displayName || ''}
                                readOnly className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Email</span>
                            </label>
                            <input type="text" name='email' value={user?.email || ''}
                                readOnly className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" />
                        </div>
                    </div>
                    {/* second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Tutorial Name</span>
                            </label>
                            <input type="text" name='tutorialName' defaultValue={tutorialName} placeholder="Tutorial Name" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Language</span>
                            </label>
                            <input type="text" name='language' defaultValue={language} placeholder="Language" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" required />
                        </div>

                    </div>
                    {/*third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Review</span>
                            </label>
                            <input type="text" name='review' placeholder="Review" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" defaultValue={0} required readOnly />
                        </div>

                    </div>
                    {/*fourth row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Image URL</span>
                            </label>
                            <input type="text" name='image' defaultValue={image} placeholder="Image URL" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Description</span>
                            </label>
                            <input type="text" name='description' defaultValue={description} placeholder="Description" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline bg-base-300 text-[#FF6363] px-6 py-2 rounded-full hover:bg-[#FF6363] hover:text-gray-100 transition-all duration-300 text-lg">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTutorials;