
export function NewsBox({image,alt,heading,description}) {
    return (
        <div className="news__box">
            <img src={image} alt={alt}/>
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    )
}