import { HeroBtn } from "./hero-btn";

export function HeroLeftBlock() {
    return (
        <div className="hero__left-block">
            <h1 className="hero__heading">automate your <br/>trading and <font className="hero__highlighted">earnings</font></h1>
            <p className="hero__description">Improve your earnings with <br/>all-in-one charts</p>
            <HeroBtn/>
        </div>
    )
}