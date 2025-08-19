import FeaturesSection from "@/components/modules/HomePage/FeaturesSection";
import Frequently from "@/components/modules/HomePage/Frequently";
import HeroSection from "@/components/modules/HomePage/HeroSection";
import TourCards from "@/components/modules/HomePage/TourCards";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <TourCards />
            <FeaturesSection />
            <Frequently />
        </div>
    );
};

export default Home;