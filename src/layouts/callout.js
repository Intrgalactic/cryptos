import { CtaBtn } from "components/cta-btn";
import { motion } from "framer-motion";
import { fadeInVariants } from "./testimonials";
export default function Webinar() {
    return (
        <motion.section className="webinar" variants={fadeInVariants} animate="visible" initial="hidden">
            <h1>SIGN UP TO OUR FREE WEBINAR <br/>ABOUT CRYPTOCURRENCY WORLD</h1>
            <CtaBtn btnText="sign up"/>
        </motion.section>
    )
}