import { ChartBlock } from "components/chart-block"
import { SectionHeading } from "components/section-heading"
import equitiesPricesChart from 'assets/images/equitites_prices_chart.png';
import percentOfInvestmentsChart from 'assets/images/percent-of-investments-chart.png';

export default function ChartSection() {
    return (
        <>
            <SectionHeading heading={["TRANSPARENCY CONNECTED", <br />, "WITH ACTION"]} />
            <section className="chart-block-section">
                <ChartBlock dir="left" chart={equitiesPricesChart} heading="CHARTS PROOVE OUR CHARTS" alt="equities prices comparison chart" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" btnText="Create your account"/>
                <ChartBlock dir="right"  chart={percentOfInvestmentsChart} heading="SUSTAINED INVESTMENTS" alt="percent of company investments chart" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" btnText="Read more"/>
            </section>
        </>
    )
}