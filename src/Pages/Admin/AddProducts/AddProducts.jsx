import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../Hooks/useAxiosPublic/useAxiosPublic';
import { toast, Toaster } from 'sonner';



const AddProducts = () => {

    const axiosPublic = useAxiosPublic()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        axiosPublic.post('/bangles', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Item added to the database')
                }
            })
            .catch(err => {
                toast.error(`${err.message}`)
            })
    };

    return (
        <div className=' mt-12'>
            <div className=' shadow-lg p-5'>
                <div>
                    <h3 className=' text-center font-semibold text-4xl'>Add Product</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Product name is required' })}
                            className="w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none border-none"
                        />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Category</label>
                        <input
                            type="text"
                            {...register('category', { required: 'Category is required' })}
                            className="w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none border-none"
                        />
                        {errors.category && <p className="text-red-600">{errors.category.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            {...register('price', { required: 'Price is required', valueAsNumber: true })}
                            className="w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none border-none"
                        />
                        {errors.price && <p className="text-red-600">{errors.price.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Weight</label>
                        <input
                            type="number"
                            step="0.1"
                            {...register('weight', { required: 'weight is required', })}
                            className="w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none border-none"
                        />
                        {errors.size && <p className="text-red-600">{errors.size.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Size</label>
                        <input
                            type="number"
                            step="0.1"
                            {...register('size', { required: 'Size is required', })}
                            className="w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none border-none"
                        />
                        {errors.size && <p className="text-red-600">{errors.size.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Picture Link</label>
                        <input
                            type="text"
                            {...register('img', { required: 'Picture link is required' })}
                            className="w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none border-none"
                        />
                        {errors.img && <p className="text-red-600">{errors.img.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Discount (%)</label>
                        <input
                            type="number"
                            step="0.1"
                            {...register('discount')}
                            className="w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none border-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 ">Stock Status</label>
                        <select {...register('stockStatus')} name="stockStatus" id="stockStatus" className=' bg-white w-full rounded focus:outline-none' required>
                            <option value="">Set Stock Status</option>
                            <option value="Sale">Sale</option>
                            <option value="Stock Out">Stock Out</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded shadow-lg">
                        Add Product
                    </button>
                </form>
            </div>
            <Toaster richColors className=" z-[100]" />
        </div>
    );
};

export default AddProducts;