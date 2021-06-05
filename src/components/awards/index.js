// eslint-disable-next-line no-unused-vars
import {React} from "preact";
import style from './style.css';
import {awardsDescription, awardsOriginal, awardsThumbnails} from "../../utils/dataService";
import {awardsLogo, awardsThumbnail} from "../../utils/imgService";
import {useState} from "preact/hooks";
import Logo from "../logo";
import Preview from "../preview";

const Description = (props) => {
    const data = awardsDescription.find(it => it.id === props.id);
    const logo = data.logo ? awardsLogo(data.logo.src) : "";

    const logoStyle = {
        transform: `translateX(-50%) translateY(${data.logo?.top || 0})`,
        width: data.logo?.width || "50px"
    }

    const layoutStyle = {
        paddingTop: data.layout.paddingTop
    }

    return <div className={style['description-body']}>
        <div className={style['description-container']}>
            <div className={style['description-center-piece']} style={layoutStyle}>
                <div className={style['description']}>{data.description}</div>
                <div className={style['bottom-line']} />
                <img className={style['close']} src={'assets/cross.svg'} onClick={props.onCloseClicked} />
                <div className={style['close-message']}>{data.closeText}</div>
                {data.logo && <img className={style['logo']} style={logoStyle} src={logo} />}
            </div>
        </div>
    </div>
}

const MediaCell = (props) => {
    const [isImageLoaded, setImageLoaded] = useState(false);

    let cellStyle = {
        opacity: isImageLoaded ? 1 : 0,
    }

    let imageWrapperStyle = {
        backgroundColor: `${props.media.color}33` || "lightgrey"
    }

    return <div class={style["image-wrapper"]} style={imageWrapperStyle}>
        <img
            class={style.cell}
            style={cellStyle}
            src={awardsThumbnail(props.media.image)}
            alt="image"
            onLoad={() => setImageLoaded(true)}
            onClick={() => props.onClicked()}
        />
    </div>
};

const Awards = () => {
        const [previewMedia, setPreviewMedia] = useState(undefined);
        const [selectedDescriptionId, setSelectedDescriptionId] = useState(undefined);

        const onClicked = (media) => {
            const data = {
                group: awardsOriginal.find(it => it.id === media.id).media,
                selected: awardsOriginal.find(it => it.id === media.id).media[0],
                type: "awards"
            }
            setPreviewMedia(data);
            setSelectedDescriptionId(media.id);
        };

        const onDescriptionCloseClicked = () => setSelectedDescriptionId(undefined);

        return <div class={style.parent}>
            <Logo />
            <div class={style.grid}>
                {awardsThumbnails.map(data => <MediaCell media={data} onClicked={() => onClicked(data)} />)}
            </div>
            {previewMedia &&
            <Preview
                data={previewMedia}
                onCancelClicked={() => setPreviewMedia(undefined)} />}
            {selectedDescriptionId &&
            <Description id={selectedDescriptionId} onCloseClicked={() => onDescriptionCloseClicked()} />}
        </div>
    }
;

export default Awards;
