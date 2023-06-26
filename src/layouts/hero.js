import { HeroLeftBlock } from "components/hero-left-block";
import { HeroRightBlock } from "components/hero-right-block";
import { motion } from "framer-motion";
import { animateVariant } from "pages/home";
export default function Hero() {
    return (
        <motion.section className="hero" variants={animateVariant} initial="hidden" animate="visible">
            <HeroLeftBlock/>
            <HeroRightBlock/>
        </motion.section>
    )
}