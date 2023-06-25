
export function BenefitBox({image,alt,heading,description}) {
    return (
        <div className="benefit-box">
            <img src={image} alt={alt} className="benefit-box__image"/>
            <h1 className="benefit-box__heading">{heading}</h1>
            <p className="benefit-box__description">{description}</p>
        </div>
    )
}