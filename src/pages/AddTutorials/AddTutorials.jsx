import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
const AddTutorials = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleAddTutorials = event => {
        event.preventDefault();

        const form = event.target;

        const user = form.user.value;
        const email = form.email.value;
        const tutorialName = form.tutorialName.value;
        const language = form.language.value;
        const price = form.price.value;
        const review = form.review.value;
        const image = form.image.value;
        const description = form.description.value;

        const newTutorials = { user, email, tutorialName, language, price, review, image, description }

        // send data to the server
        fetch('https://langopia-server.vercel.app/tutorials', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTutorials)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tutorials Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/myTutorials')
                }
            })

    }
    return (
        <div className='w-full bg-base-300 m-0 py-8'>
            <div className="card bg-[#BEAE96] lg:w-2/4 shrink-0 shadow-2xl mx-auto">
                <div className="w-full rounded-t-2xl text-center mx-auto bg-[#2A2B29]">
                    <h1 className="text-4xl font-bold my-6 text-gray-300">Add Tutorials</h1>
                    <p className="mb-6 text-[#FF6363]">
                        Add your tutorials effortlessly by providing your tutorial image, language, <br /> price, description, and initial review. Share your knowledge and connect with learners worldwide!
                    </p>
                </div>
                <form
                    onSubmit={handleAddTutorials}
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
                            <input type="text" name='tutorialName' placeholder="Tutorial Name" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Language</span>
                            </label>
                            <input type="text" name='language' placeholder="Language" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" required />
                        </div>
                    </div>
                    {/*third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Review</span>
                            </label>
                            <input type="text" name='review' placeholder="Review" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" defaultValue={0} required />
                        </div>
                    </div>
                    {/*fourth row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Image URL</span>
                            </label>
                            <input type="text" name='image' placeholder="Image URL" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-medium">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered rounded-2xl border-gray-500 border-t-4 bg-[#ECE9E1]" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline bg-base-300 text-[#FF6363] px-6 py-2 rounded-full hover:bg-[#FF6363] hover:text-gray-100 transition-all duration-300 text-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTutorials;