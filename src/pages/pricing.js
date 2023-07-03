import useLoader from "hooks/useLoader";
import Faq from "layouts/faq";
import Footer from "layouts/footer";
import Header from "layouts/header";
import Loader from "layouts/loader";
import PricingSection from "layouts/pricing-section";

export default function Pricing({isLoading,setIsLoading}) {
    useLoader(setIsLoading);
    return (
        <div className="pricing-app">
            <Header/>
            <PricingSection/>
            <Faq/>
            <Footer/>
            {isLoading &&
                <Loader />}
        </div>
    )
}