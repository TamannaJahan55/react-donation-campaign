import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../Utility/localStorage";


const DonationDetails = () => {
    const donationDetails = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donationDetails.find(donation => donation.id === idInt);
    console.log(donation);

    const handleDonate = () =>{
        saveDonation(idInt);
        toast.success('You have donated successfully!!!', {
            position: "top-right",
            theme: "colored"
        });
    }
    return (
        <section className="mx-16 my-10">
            <div className="box-content m-10">
                <div className="relative">
                    <img className="w-[1150px]" src={donation.img_rectangle} alt="" />
                    <div style={{ backgroundColor: "black", opacity: "0.5", position: "absolute", bottom: "0", width: "100%", padding: "60px" }}></div>
                    <div className="absolute bottom-5 w-[100%] p-4">
                        <button onClick={handleDonate} className=" btn border-none text-white normal-case ml-10" style={{ backgroundColor: donation.color_for_text_and_button_bg }}>Donate ${donation.price}</button>
                    </div>
                </div>
                <h2 className="text-4xl font-bold mt-14">{donation.title}</h2>
                <p className="text-base font-normal mt-6">{donation.description}</p>
            </div>
            <ToastContainer />

        </section>
    );
};

export default DonationDetails;