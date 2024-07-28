
const Accordian = () => {
    return (
        <div className=" mt-12">
            <div className=" py-8">
                <h3 className=" text-4xl font-semibold text-black text-center">Why <span className=" text-orange-600">F</span><span className=" text-gray-500 text-2xl">IRIDAK</span> ?</h3>
            </div>
            <div className=" mx-auto lg:px-20">
                <div className="join join-vertical border-none shadow-none w-full">
                    <div className="collapse collapse-arrow join-item border-t-gray-600 py-1 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-gray-500 text-xl font-medium">Fast delivery</div>
                        <div className="collapse-content">
                            <p>Get your products delivered within 3-5 working days. Swift service, guaranteed satisfaction InShaAllah</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-t-gray-600 py-1 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-gray-500  text-xl font-medium">Handcrafted product</div>
                        <div className="collapse-content">
                            <p>Each item is meticulously crafted with care and precision, ensuring top-notch quality and uniqueness</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-t-gray-600 py-1 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-gray-500  text-xl font-medium">Happy Customer</div>
                        <div className="collapse-content">
                            <p>We prioritize your satisfaction. Join our community of delighted customers who love our products and service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordian;