import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/localStorage";
import DonatedCard from "../DonatedCard/DonatedCard";


const Donation = () => {
    const donations = useLoaderData();
    console.log(donations)

    const [donatedCategory, setDonatedCategory] = useState([]);
    const [displayDonations, setDisplayDonations] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {
            const donatedProject = donations.filter(donation => storedDonationIds.includes(donation.id))
            setDonatedCategory(donatedProject);
            setDisplayDonations(donatedProject)
            console.log(donatedProject)
        }
    }
        , [donations])


    return (
        <div className="max-w-7xl mx-10 my-10">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-1 md:gap-3 md:ml-40 lg:grid-cols-2 lg:gap-6">
                {
                    displayDonations ? donatedCategory.map((categoryDonated) => (
                        <DonatedCard key={categoryDonated.id} categoryDonated={categoryDonated}></DonatedCard>
                    ))

                        :

                        donatedCategory.slice(0, dataLength).map((categoryDonated) => (
                            <DonatedCard key={categoryDonated} categoryDonated={categoryDonated}></DonatedCard>
                        ))
                }
            </div>

                <div className={dataLength === donatedCategory.length && 'hidden'}>
                    <button onClick={() => setDataLength(donatedCategory.length)} className="btn text-white rounded mt-10 bg-green-600 lg:ml-96">See All</button>
                </div>
            
        </div>


    );
};

export default Donation;