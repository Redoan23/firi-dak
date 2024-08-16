
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";


const Extras = () => {

    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        if (!data.homeDeliveryFee && !data.courierFee) {
            return toast.error('Please set a valid amount')
        }

        data.name = 'deliveryFee'
        axiosPublic.put('/extraInfo', data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Changed successfully')
                }
                if (res.data.modifiedCount === 0) {
                    toast.info('No changes are made')
                }
            })
            .catch(err => {
                toast(`${err.message}`)
            })

    };

    return (
        <div className=" mt-12">
            <h3 className=" text-center font-bold text-4xl">Set Fees</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white shadow-lg mt-6 rounded w-1/2 mx-auto">
                <div>
                    <label className="block text-gray-700">Courier Fee</label>
                    <input
                        type="number"
                        step="0.01"
                        {...register('courierFee')}
                        className="w-full p-2 bg-gray-100 rounded outline-none border-none"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Home Delivery Fee</label>
                    <input
                        type="number"
                        step="0.01"
                        {...register('homeDeliveryFee')}
                        className="w-full p-2 bg-gray-100 rounded outline-none border-none"
                    />
                </div>
                <button
                    type="submit"
                    className=" btn border-none w-full p-2 text-white bg-orange-600 hover:bg-orange-700"
                >
                    Submit
                </button>
            </form>
            <Toaster richColors />
        </div>
    );
};

export default Extras;