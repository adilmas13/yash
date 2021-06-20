// eslint-disable-next-line no-unused-vars
import {createRef, React} from "preact";
import style from './style.css';
import {awardsDescription, awardsDetails, awardsThumbnails} from "../../dataSource/awards";
import {useEffect, useState} from "preact/hooks";
import Logo from "../logo";
import Description from "../description";

const AwardsPreview = (props) => {
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
const MediaCell = (props) => {
    const media = props.media;

    const [isImageLoaded, setImageLoaded] = useState(false);

    let cellStyle = {
        opacity: isImageLoaded ? 1 : 0,
    }

    let imageWrapperStyle = {
        backgroundColor: `${media.color}33` || "lightgrey"
    }

    return <div class={style["image-wrapper"]} style={imageWrapperStyle}>
        <img
            class={style.cell}
            style={cellStyle}
            src={media.thumbnail}
            alt="image"
            onLoad={() => setImageLoaded(true)}
            onClick={() => props.onClicked()}
        />
    </div>
};

const Awards = () => {
        const containerRef = createRef();
        const [preview, setPreview] = useState(undefined);
        const [description, setDescription] = useState(undefined);

        const onClicked = (media) => {
            setPreview({
                group: awardsDetails.filter(it => it.groupId === media.id),
                selected: 0,
            });
            setDescription(awardsDescription.find(it => it.id === media.id));
        };

        const handleDescriptionBackClick = () => setDescription(undefined);

        useEffect(() => {
            const container = containerRef.current;
            container.style.overflow = preview ? 'hidden' : 'inherit';
        }, [preview])

        return <div class={style.parent}>
            <Logo />
            <div className={style.container} ref={containerRef}>
                <div className={style.grid}>
                    {awardsThumbnails.map(data => <MediaCell media={data} onClicked={() => onClicked(data)} />)}
                </div>
            </div>
            {preview &&
            <AwardsPreview
                data={preview}
                handleBackClick={() => setPreview(undefined)} />}
            {description &&
            <Description data={description} onCloseClicked={handleDescriptionBackClick} />}
        </div>
    }
;

export default Awards;
