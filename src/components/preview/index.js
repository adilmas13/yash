import {useEffect, useRef, useState} from "preact/hooks";
import style from "./style.css";

const Back = (props) => {
    return (
        <div class={style["back-parent"]} onClick={() => props.onCancel()}>
            <div class={style["icon-wrapper"]}>
                <img src={'assets/cross.svg'} />
            </div>
            <div class={style.text}>BACK</div>
        </div>
    )
}

const LoadableImage = (props) => {

    const [isImageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        let timeoutId = setTimeout(() => setImageLoaded(false), 800)
        const img = imgRef.current;
        const loadedListener = () => {
            clearTimeout(timeoutId);
            setImageLoaded(true);
        };
        img.addEventListener("load", loadedListener)
        img.src = props.src;
        return () => {
            clearTimeout(timeoutId)
            img.removeEventListener("load", loadedListener)
        }
    }, [props.src]);

    return <div class={style["image-wrapper"]}>
        <img
            class={isImageLoaded ? style["visible"] : style["hidden"]}
            ref={imgRef}
            alt="preview"
        />
        {!isImageLoaded && <div class={style["loader"]}>Loading</div>}
    </div>
}

const Preview = (props) => {
    const group = props.data.group;
    const [pageNo, setPageNo] = useState(props.data.selected);

    const onPrevClicked = () => setPageNo((currentPageNo) => currentPageNo - 1);

    const onNextClicked = () => setPageNo((currentPageNo) => currentPageNo + 1);

    const parentHeight = document.body.clientHeight;
    const parentWidth = document.body.clientWidth;

    let width = parentWidth * 0.75;
    let height;

    const media = group[pageNo];
    const [ratioWidth, ratioHeight] = media.ratio.split(":").map(it => parseInt(it));

    if (ratioWidth > ratioHeight) {
        height = width * (ratioHeight / ratioWidth);
    } else {
        height = parentHeight * 0.80;
        width = height * 0.709; // this is not 9:16 as the images are not been given in those dimensions
    }

    const enableArrow = {
        visibility: 'visible',
        pointerEvents: 'auto'
    }

    const disableArrow = {
        visibility: 'hidden',
        pointerEvents: 'none'
    }

    return (<div class={style.parent}>
        <div className={style['container']}>
            <div className={style.cancel}>
                <Back onCancel={() => props.handleBackClick()} />
            </div>
            <div className={style["body-wrapper"]}>
                <div
                    style={pageNo > 0 ? enableArrow : disableArrow}
                    className={style["prev-wrapper"]}
                    onClick={onPrevClicked}>
                    <img src={"assets/arrow_blunt.svg"}
                         className={style.arrow} />
                    <div className={style.text}>prev</div>
                </div>
                <div className={style.body}>
                    {media.video
                        ? <iframe
                            width={width}
                            height={height}
                            src={media.video.src} />
                        : <LoadableImage src={media.image.src} />
                    }
                </div>
                <div
                    style={pageNo < (group.length - 1) ? enableArrow : disableArrow}
                    className={style["next-wrapper"]}
                    onClick={onNextClicked}>
                    <div className={style.text}>next</div>
                    <img src={"assets/arrow_blunt.svg"} className={style.arrow} />
                </div>
            </div>
        </div>
    </div>)
};

export default Preview;
