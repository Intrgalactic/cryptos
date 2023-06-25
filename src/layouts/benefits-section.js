import { BenefitBox } from "components/benefit-box";
import { SectionHeading } from "components/section-heading";
import fixedRates from 'assets/images/fixed-rates.png';
import earnFromZero from 'assets/images/earn-from-zero.png';
import scalableInterface from 'assets/images/scalable-interface.png';

export default function BenefitsSection() {
    return (
        <>
            <SectionHeading heading={["stop focusing on things which", <br/>,"take too much time"]}/>
            <section className="benefits">
                <BenefitBox image={fixedRates} alt="Woman sitting on gold" heading="fixed rates" description="Our services offer fixed deposit, therefore you can earn without any risk"/>
                <BenefitBox image={earnFromZero} alt="Man earning money" heading="earn from zero" description="Our product is universal to every capital levels and is same profitable for everyone"/>
                <BenefitBox image={scalableInterface} alt="Man looking at chart" heading="scalable interface" description="Our charts can be fit on desktop and on mobile either to share you best experience"/>
            </section>
        </>
    )
}