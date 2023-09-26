import {  useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { getStoredDonation } from '../../Utility/localStorage';

const Pie_Chart = () => {
    const totalDonations = 12;

    const [donationCount, setDonationCount] = useState(0);

    useEffect(() => {
        const storedDonationData = getStoredDonation() || [];
        setDonationCount(storedDonationData.length);
        console.log(storedDonationData.length)
    }
        , [])

    const donationPercentage = ((donationCount / totalDonations) * 100);
    console.log(donationPercentage)

    const chartData = {
        labels: ['Your Donation', 'Remaining'],
        datasets: [
            {
                data: [donationPercentage, 100 - donationPercentage],
                backgroundColor: ['#FF444A', '#00C49F'],
            }
        ]
    }


    return (
        <div>
            <div>
                <h2>Donation Pie-Chart</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={chartData}>
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};


export default Pie_Chart;

