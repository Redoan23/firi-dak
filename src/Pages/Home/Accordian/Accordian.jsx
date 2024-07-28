
const Accordian = () => {
    return (
        <div className=" mt-12">
            <div className=" py-8">
                <h3 className=" text-4xl font-semibold text-orange-600 text-center">Why Firi Dak?</h3>
            </div>
            <div className=" mx-auto lg:px-20">
                <div className="join join-vertical border-none w-full">
                    <div className="collapse collapse-arrow join-item border-t-orange-600 py-1 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Fast delivery</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-t-orange-600 py-1 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Handcrafted product</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-t-orange-600 py-1 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Happy Customer</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordian;