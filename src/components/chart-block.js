import { ChartDescriptionBlock } from "./chart-description-block";
import { motion } from "framer-motion";

export function ChartBlock({ dir, alt, chart, heading, description, btnText }) {
    return (
        <div className="chart-block">
            <motion.img src={chart} alt={alt} whileHover={{scale:1.3}}/>
            <ChartDescriptionBlock heading={heading} description={description} btnText={btnText} />
        </div>
    )
}