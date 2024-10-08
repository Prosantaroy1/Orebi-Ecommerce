import AdsTwo from "../Ad2 Section/AdsTwo";
import AdsSection from "../Ads Section/AdsSection";
import Banner from "../Banner/Banner";
import Information from "../Information/Information";
import NewArrivals from "../New Arrivals/NewArrivals";
import OurBestsellers from "../Our Bestsellers/OurBestsellers";
import SpecialOffers from "../Special Offers/SpecialOffers";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Banner />
            <Information />
            <AdsSection />
            <NewArrivals />
            <OurBestsellers />
            <AdsTwo />
            <SpecialOffers/>
        </div>
    );
};

export default Home;