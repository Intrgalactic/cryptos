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

export const animateVariant = {
    visible: {
        opacity:1,
        y:0,
        transition: {
            duration:0.3,
            type:"tween"
        }
    },
    hidden: {
        opacity:0,y:-170
    },

}
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