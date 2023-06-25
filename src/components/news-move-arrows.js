import moveArr from 'assets/images/news-move-arrow.png';

export function NewsMoveArrows() {
    return (
        <div className="news__move-arrows">
            <img src={moveArr} alt="move arrow" />
            <img src={moveArr} alt="move arrow" />
        </div>
    )
}