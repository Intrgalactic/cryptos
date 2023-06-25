import BenefitsSection from "layouts/benefits-section";
import Webinar from "layouts/callout";
import ChartSection from "layouts/chart-section";
import CompaniesBar from "layouts/companies-bar";
import Header from "layouts/header";
import Hero from "layouts/hero";
import Testimonials from "layouts/testimonials";
import VideoSection from "layouts/video-section";
import News from "layouts/news";
import Footer from "layouts/footer";
export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <BenefitsSection/>
            <ChartSection/>
            <VideoSection/>
            <Testimonials/>
            <CompaniesBar/>
            <Webinar/>
            <News/>
            <Footer/>
        </>
    )
}