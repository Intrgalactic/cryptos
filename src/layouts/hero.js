import { HeroLeftBlock } from "components/hero-left-block";
import { HeroRightBlock } from "components/hero-right-block";

export default function Hero() {
    return (
        <section className="hero">
            <HeroLeftBlock/>
            <HeroRightBlock/>
        </section>
    )
}