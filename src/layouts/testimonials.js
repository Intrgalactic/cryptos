import { SectionHeading } from "components/section-heading";
import { TestimonialBox } from "components/testimonial-box";

export default function Testimonials() {
    return (
        <>
            <SectionHeading heading={["hear some kind words", <br />, "from our customers"]} />
            <section className="testimonials">
                <TestimonialBox name="steve" lastname="pater" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <TestimonialBox name="john" lastname="len" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <TestimonialBox name="satoshi" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <TestimonialBox name="keiran" lastname="sea" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <TestimonialBox name="marie" lastname="bali" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
            </section>
        </>
    )
}