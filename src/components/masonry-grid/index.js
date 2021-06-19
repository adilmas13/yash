import {createRef, Fragment} from "preact";
import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import Logo from "../logo";
import {useMasonryData} from "./masonryData";


const MediaCell = (props) => {
    const media = props.media;

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
        {(!media.video || (media.video && !media.video.always_play_thumbnail)) && <img
            className={isImageLoaded ? style["visible"] : style["hidden"]}
            src={media.image.thumbnail} onLoad={() => setImageLoaded(true)} />}
        <div style={overlayStyle} />
        {(media.video && (media.video.always_play_thumbnail || isVideoVisible)) &&
        <video src={media.video.thumbnail_video} poster={media.image.thumbnail} autoplay loop muted />}
    </div>)
};

const MasonryGrid = (props) => {

    const scrollerRef = createRef()

    const data = useMasonryData(props.breakpoints);

    const [activeMedia, setActiveMedia] = useState(undefined);

    const onCellEnter = media => setActiveMedia(media);

    const onCellLeave = () => setActiveMedia(undefined);

    const positionStyle = it => {
        return {
            position: "absolute",
            height: it.height,
            width: it.width,
            top: it.top,
            left: it.left,
        }
    }

    useEffect(() => {
        const isScrollDisable = props.disableScroll;
        const scroller = scrollerRef.current;
        scroller.style.overflow = isScrollDisable ? 'hidden' : 'inherit';
    }, [props.disableScroll])

    return <div class={style.parent}>
        <div id='scroll-container' class={style['scroll-container']} ref={scrollerRef}>
            {data.map(it =>
                <div style={positionStyle(it)}>
                    {it.media.id !== "blank" ?
                        <MediaCell
                            key={it.id}
                            media={it.media}
                            handleClick={() => props.handleClick(it.media)}
                            onCellEnter={() => onCellEnter(it.media)}
                            onCellLeave={() => onCellLeave()}
                            activeMedia={activeMedia}
                            isActive={activeMedia && activeMedia.groupId === it.media.groupId && it.media.id !== activeMedia.id}
                        /> : <Fragment />}
                </div>
            )}
        </div>
    </div>
};

export default MasonryGrid;
