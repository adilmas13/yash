// eslint-disable-next-line no-unused-vars
import {React} from "preact";
import style from './style.css';
import {awardsDescription, awardsDetails, awardsOriginal, awardsThumbnails} from "../../dataSource/awards";
import {useState} from "preact/hooks";
import Logo from "../logo";
import Preview from "../preview";
import Description from "../description";

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

        return <div class={style.parent}>
            <Logo />
            <div className={style.container}>
                <div className={style.grid}>
                    {awardsThumbnails.map(data => <MediaCell media={data} onClicked={() => onClicked(data)} />)}
                </div>
            </div>
            {preview &&
            <Preview
                data={preview}
                handleBackClick={() => setPreview(undefined)} />}
            {description &&
            <Description data={description} onCloseClicked={handleDescriptionBackClick} />}
        </div>
    }
;

export default Awards;
