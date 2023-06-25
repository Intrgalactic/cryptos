import { SectionHeading } from "components/section-heading";
import { CompaniesStars } from "components/companies-stars";
import { CompaniesLogos } from "components/companies-logos";

export default function CompaniesBar() {
    return (
        <>
        <SectionHeading heading={["widely used on",<br/>,"worldwide platforms"]}/>
        <section className="companies-bar">
            <CompaniesStars/>
            <CompaniesLogos/>
        </section>
        </>
    )
}