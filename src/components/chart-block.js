import { ChartDescriptionBlock } from "./chart-description-block";

export function ChartBlock({ dir, alt, chart, heading, description, btnText }) {
    return (
        <div className="chart-block">
            <img src={chart} alt={alt} />
            <ChartDescriptionBlock heading={heading} description={description} btnText={btnText} />
        </div>
    )
}