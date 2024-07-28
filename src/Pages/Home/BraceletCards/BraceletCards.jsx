import { useEffect, useState } from "react";
import PrimaryCard from "../../../components/PrimaryCard";

const BraceletCards = () => {
    const [bracelets, setBracelets] = useState([])
    useEffect(() => {
        fetch('./braceletData.json')
            .then(res => res.json())
            .then(data => setBracelets(data))
    }, [])
    return (
        <div className=" mt-12">
            <PrimaryCard title={'Bracelets'} dataArray={bracelets} />
        </div>
    );
};

export default BraceletCards;