import { CtaBtn } from "components/cta-btn";
import { SectionHeading } from "components/section-heading";
import { VideoBlock } from "components/video-block";

export default function VideoSection() {
    return (
        <>
            <div className="video-section__section-heading"><SectionHeading heading={["Start the future from", <br />, "the best point possible"]} /></div>
            <section className="video-section">
                <VideoBlock />
                <CtaBtn btnText="start investing right now" />
            </section>
        </>
    )
}