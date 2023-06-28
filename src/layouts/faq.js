import { FaqRecord } from "components/faq-record";
import { SectionHeading } from "components/section-heading";

export default function Faq() {
    return (
        <>
        <SectionHeading heading={["frequently asked questions",<br/>,"about subscription"]}/>
        <section className="faq">
            <FaqRecord heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" description="It is a long established fact that a reader will be distracted by the readable content"/>
            <FaqRecord heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" description="It is a long established fact that a reader will be distracted by the readable content"/>
            <FaqRecord heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" description="It is a long established fact that a reader will be distracted by the readable content"/>
            <FaqRecord heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" description="It is a long established fact that a reader will be distracted by the readable content"/>
        </section>
        </>
    )
}