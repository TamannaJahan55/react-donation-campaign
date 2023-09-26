import { useEffect, useState} from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { getStoredDonation } from '../../Utility/localStorage';
import { useLoaderData } from 'react-router-dom';

const Pie_Chart = () => {
    
    const [donationCount, setDonationCount] = useState([])
    useEffect(() => {
        const storedDonationData = getStoredDonation() || [];
        const donationPercentage = storedDonationData.length / 12;
        setDonationCount(donationPercentage);

    }
        , [])

    const Donations = useLoaderData();
    const totalDonation = Donations.length / 12;

    const data = [
        { name: 'Your Donation', value: donationCount},
        { name: 'Total Donation', value: totalDonation - donationCount}
    ];

    const COLORS = ["#FF444A", "#00C49F"];


        return (
            <div>
                <div>
                    <h2>Donation Pie-Chart</h2>
                </div>
                <PieChart width={1300} height={400} >
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#FF444A"
                        dataKey="value"
                        label>
                    {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        );
    };


export default Pie_Chart;

