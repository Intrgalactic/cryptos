
export function FaqRecord({heading,description}) {
    return (
        <div className="faq__record">
            <h3>{heading}</h3>
            <hr/>
            <p>{description}</p>
        </div>
    )
}