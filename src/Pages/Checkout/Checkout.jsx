
import { useForm } from "react-hook-form";
import useCartCalculations from "../../Hooks/useCartCalculations/useCartCalculations";


const Checkout = () => {

    // data from local storage
    const [itemQuantity, totalPrice, items] = useCartCalculations()



    const districts = [
        "Bagerhat", "Bandarban", "Barguna", "Barisal", "Bhola", "Bogra", "Brahmanbaria",
        "Chandpur", "Chittagong", "Chuadanga", "Comilla", "Cox's Bazar", "Dhaka", "Dinajpur",
        "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj", "Jamalpur",
        "Jessore", "Jhenaidah", "Jhalokati", "Joypurhat", "Kishoreganj", "Khagrachari", "Khulna",
        "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura", "Manikganj",
        "Meherpur", "Maulvibazar", "Munshiganj", "Mymensingh", "Narayanganj", "Narsingdi",
        "Naogaon", "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh",
        "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira",
        "Shariatpur", "Sherpur", "Sirajgonj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
    ];
    // form data
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
    });

    const onSubmit = (data) => {

        
        console.log('Form submitted:', data);
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white">
                <div className=" flex lg:flex-row flex-col items-center gap-6 justify-between w-[85%] mx-auto">
                    <div className=" w-full ">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Name *</label>
                            <input
                                type="text"
                                {...register('name', { required: 'Name is required' })}
                                className="w-full p-1 border bg-white border-gray-300 rounded-none focus:outline-none"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                            <input
                                type="text"
                                {...register('phone', { required: 'Phone number is required' })}
                                className="w-full p-1 border bg-white border-gray-300 rounded-none focus:outline-none"
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Emergency Phone (optional)</label>
                            <input
                                type="text"
                                {...register('secondaryPhone')}
                                className="w-full p-1 border bg-white border-gray-300 rounded-none focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Email *</label>
                            <input
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                                className="w-full p-1 border bg-white border-gray-300 rounded-none focus:outline-none"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">District *</label>
                            <select
                                {...register('district', { required: 'District is required' })}
                                className="w-full p-3 border bg-white border-gray-300 rounded-md focus:outline"
                            >
                                {districts.map((district) => (
                                    <option key={district} value={district} className=" text-gray-700">
                                        {district}
                                    </option>
                                ))}
                            </select>
                            {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Address *</label>
                            <textarea
                                {...register('address', { required: 'Address is required' })}
                                className="w-full p-1 border bg-white border-gray-300 rounded-none focus:outline-none"
                            />
                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Additional Information (optional)</label>
                            <textarea
                                {...register('notes')}
                                className="w-full p-1 border bg-white border-gray-300 rounded-none focus:outline-none"
                            />
                        </div>
                    </div>
                    {/* information part */}
                    <div className=" w-full">
                        <div>
                            {
                                items.map(item =>
                                    <div key={item.i} className=" flex items-center p-4 gap-3 border">
                                        <div>
                                            <div className=" overflow-hidden">
                                                <img src={item.img} alt="" className=" w-14 h-14 object-cover" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className=" text-gray-500">{item.n} -<span className=" text-gray-700"> {item?.q} x {item?.s}</span>  </h3>
                                            <p className=" text-gray-700">{item?.p} TK</p>
                                        </div>
                                    </div>)
                            }
                        </div>
                        <div className=" w-full">
                            <div className="bg-white py-4  w-full ">
                                <div className="flex justify-between  pb-2 mb-2">
                                    <span className="text-gray-800 font-semibold">Total Items:</span>
                                    <span className="text-gray-800">{itemQuantity}</span>
                                </div>
                                <div className="flex justify-between  pb-2 mb-2">
                                    <span className="text-gray-800 font-semibold">Total Price:</span>
                                    <span className="text-gray-800">{totalPrice} TK</span>
                                </div>
                                {/* <div className="flex justify-between  pb-2 mb-2">
                                    <span className="text-gray-800 font-semibold">Discount:</span>
                                    <span className="text-gray-800">0 TK</span>
                                </div> */}
                                <div className="flex justify-between  pb-2 mb-2">
                                    <span className="text-gray-800 font-semibold">Shipping Cost:</span>
                                    <span className="text-gray-800">0 TK</span>
                                </div>
                                <div className="flex justify-between border-t border-b items-center py-2 mt-2">
                                    <span className="text-xl font-bold">Subtotal:</span>
                                    <span className="text-xl font-bold">{totalPrice}TK</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className=" btn border-none w-full py-3 bg-orange-500 text-white font-bold rounded-none hover:bg-orange-600"
                            >
                                Complete Order
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;