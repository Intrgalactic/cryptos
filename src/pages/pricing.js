import Faq from "layouts/faq";
import Footer from "layouts/footer";
import Header from "layouts/header";
import PricingSection from "layouts/pricing-section";

export default function Pricing() {
    return (
        <div className="pricing-app">
            <Header/>
            <PricingSection/>
            <Faq/>
            <Footer/>
        </div>
    )
}