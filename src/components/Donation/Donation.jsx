import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/localStorage";
import DonatedCard from "../DonatedCard/DonatedCard";


const Donation = () => {
    const donations = useLoaderData();

    const [donatedCategory, setDonatedCategory] = useState([]);
    const [displayAll, setDisplayAll] = useState(false);


    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {
            const donatedProject = donations.filter(donation => storedDonationIds.includes(donation.id))
            setDonatedCategory(donatedProject);
        }
    }
        , [donations])


    return (
        <div className="max-w-7xl mx-10 my-10">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-1 md:gap-3 md:ml-40 lg:grid-cols-2 lg:gap-6">
                {   
                    
                    displayAll? donatedCategory.map(categoryDonated => 
                    <DonatedCard key={categoryDonated} categoryDonated={categoryDonated}></DonatedCard>)

                    :

                    donatedCategory.slice(0, 4).map(categoryDonated => 
                        <DonatedCard key={categoryDonated} categoryDonated={categoryDonated}></DonatedCard>)
                }
            </div>

            <div className={donatedCategory.length <= 4 && !displayAll && 'hidden'}>
                <div className="w-auto m-auto text-center my-10">
                    <button onClick={() => setDisplayAll(donatedCategory.length)} className="btn text-white rounded bg-green-600 normal-case">See All</button>
                </div>
            </div>
            

        </div>


    );
};

export default Donation;