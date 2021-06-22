import style from "./style.css";
import {React} from "preact";

const VerticalPreview = (props) => {
    const group = props.data.group;
    console.log(group);

    // const getHeight = (media) =>{
    //     const [ratioWidth, ratioHeight] = media.ratio.split(":").map(it => parseInt(it));
    //     if (ratioWidth > ratioHeight) {
    //         height = width * (ratioHeight / ratioWidth);
    //     } else {
    //         height = parentHeight * 0.80;
    //         width = height * 0.709; // this is not 9:16 as the images are not been given in those dimensions
    //     }
    // }

    const onIframeLoaded = (event) => {
        console.log(event.target.contentDocument);
    };
    return <div className={style['description-parent']}>
        <div className={style['desc-container']}>
            <div className={style['scroll-container']}>
                {group.map(it => {
                    return (
                        <div className={style['media-wrapper']}>
                            {it.video ? <iframe src={it.video.src} onLoad={evt => onIframeLoaded(evt)} /> :
                                <img src={it.image.src} />}
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
}

export default VerticalPreview;
