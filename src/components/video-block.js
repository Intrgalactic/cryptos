import video from 'assets/images/video.mp4';

export function VideoBlock() {
    return (
        <div className="video-section__block" >
            <video>
                <source src=""/>
            </video>
            <div className="custom-play-btn"></div>
        </div>
    )
}