// eslint-disable-next-line no-unused-vars
import {React, Fragment} from "preact";
import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import {advertsThumbnail, artsThumbnail} from "../../utils/imgService";
import Preview from "../preview";
import Logo from "../logo";
import {adverts, advertsDescription, artsDescription} from "../../utils/dataService";
import Description from "../description";


const MediaCell = (props) => {
    const media = props.media;

    let image;
    let video;
    switch (props.type) {
        case "adverts":
            image = advertsThumbnail(media.image, media.extension)
            video = advertsThumbnail(media.image, "mp4")
            break;
        case "arts":
            image = artsThumbnail(media.image)
            video = artsThumbnail(media.image, "mp4")
            break;
    }
    const [isVideoVisible, setVideoVisibility] = useState(false);
    const [isImageLoaded, setImageLoaded] = useState(false);

    const onHover = (evt) => {
        evt.stopPropagation();
        props.onCellEnter();
    };

    const onLeave = (evt) => {
        evt.stopPropagation();
        props.onCellLeave();
    };

    let overlayStyle = {
        position: 'absolute',
        borderRadius: '10px',
        backgroundColor: 'black',
        opacity: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: '0.3s ease-out all',
        userSelect: 'none'
    }

    let cellStyle = {
        backgroundColor: props.media.color || "lightgrey"
    }

    if (props.isActive) {
        overlayStyle = {...overlayStyle, ...{opacity: 0.35}}
    }

    useEffect(() => {
        let timeOutId;
        if (props.activeMedia && props.media.id === props.activeMedia.id) {
            timeOutId = setTimeout(() => {
                setVideoVisibility(true);
            }, 400)
        }
        return () => {
            if (timeOutId) {
                clearTimeout(timeOutId);
            }
            setVideoVisibility(false);
        }
    }, [props.activeMedia])

    return (<div class={style['media-wrapper']}
                 style={cellStyle}
                 onMouseEnter={onHover}
                 onMouseLeave={onLeave}
                 onClick={() => {
                     props.handleClick(media);
                     setVideoVisibility(false);
                 }}>
        <img
            class={isImageLoaded ? style["visible"] : style["hidden"]}
            alt="adverts" src={image} onLoad={() => setImageLoaded(true)} />
        <div style={overlayStyle} />
        {(isVideoVisible && media.videoId) &&
        <video src={advertsThumbnail(media.image, "mp4")} poster={image} autoplay loop />}
    </div>)
};

// config = {
//      data: {},
//      type: "adverts" | "arts"
// }
const CommonListing2 = (props) => {
    const config = props.config;
    const data = config.data;
    const type = config.type;
    const [previewMedia, setPreviewMedia] = useState(undefined);
    const [activeMedia, setActiveMedia] = useState(undefined);
    const [selectedDescription, setSelectedDescription] = useState(undefined);

    const onClicked = (media) => {
        console.log(media);
        let tempData;
        switch (type) {
            case "adverts":
                tempData = adverts.find(it => it.groupId === media.groupId)?.assets || [];
                setSelectedDescription(advertsDescription.find(it => it.id === media.groupId));
                break;
            default:
                tempData = data.flatMap(it => it).filter(it => it.groupId === media.groupId)
                setSelectedDescription(artsDescription.find(it => it.id === media.groupId));
                break
        }
        setPreviewMedia({
            group: tempData,
            selected: media,
            type
        })
    };

    const onCellEnter = media => setActiveMedia(media);

    const onCellLeave = () => setActiveMedia(undefined);

    const onDescriptionCloseClicked = () => setSelectedDescription(undefined);

    return <div class={style.parent}>
        <Logo />
        <div id='scroll-container' class={style['scroll-container']}>
            {data.map(it =>
                <div style={{
                    position: "absolute",
                    height: it.height,
                    width: it.width,
                    top: it.top,
                    left: it.left,
                }}>
                    {it.media.id !== "blank" ? <MediaCell
                        media={it.media}
                        type={type}
                        handleClick={onClicked}
                        onCellEnter={() => onCellEnter(it.media)}
                        onCellLeave={() => onCellLeave()}
                        activeMedia={activeMedia}
                        isActive={activeMedia && activeMedia.groupId === it.media.groupId && activeMedia.image !== it.media.image}
                    /> : <Fragment />}
                </div>
            )}
        </div>
        {previewMedia &&
        <Preview
            data={previewMedia}
            onCancelClicked={() => setPreviewMedia(undefined)} />}
        {selectedDescription &&
        <Description data={selectedDescription} onCloseClicked={() => onDescriptionCloseClicked()} />}
    </div>
};

export default CommonListing2;
