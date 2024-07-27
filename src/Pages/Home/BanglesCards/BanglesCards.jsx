import { useEffect, useState } from "react";


const BanglesCards = () => {

    const [bangles, setBangles] = useState([])
    useEffect(() => {
        fetch('./primarydata.json')
            .then(res => res.json())
            .then(data => setBangles(data))
    }, [])

    return (
        <div className=" mt-16 ">
            <div>
                <h3 className=' text-center mx-auto text-black text-4xl font-semibold mb-6'> Bangles </h3>
            </div>
            <div className=" grid grid-cols-3 gap-4 place-items-center">
                {
                    bangles.map((bangle, i) =>

                        <div key={i}>
                            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                                <div className=" w-full h-80">
                                    <img className=" w-full h-full" src={bangle.img} alt="Bangle" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">{bangle.name}</h2>
                                    <p>{bangle.price} Tk</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default BanglesCards;