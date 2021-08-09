import {useEffect, useRef, useState} from "preact/hooks";
import style from "./style.css";
import Back from "../back";
import {createRef} from "preact";
import LazyImage from "../lazy-image";
import Video from "../video";


const Page = (props) => {
    const pageContainerRef = createRef();
    const media = props.data;
    const [videoDimension, setVideoDimension] = useState({w: 0, h: 0});
    const [ratioWidth, ratioHeight] = media.ratio.split(":").map(it => parseInt(it));

    useEffect(() => {
        if (media.video) {
            const containerWidth = pageContainerRef.current.clientWidth;
            setVideoDimension({
                w: containerWidth,
                h: containerWidth * ratioHeight / ratioWidth
            })
        }
    }, [])

    return <div className={style['page-container']} ref={pageContainerRef}>
        {media.video
            ? <Video
                width={videoDimension.w}
                height={videoDimension.h}
                src={media.video.src}
            />
            : <LazyImage
                src={media.image.src}
                css={{
                    width: ratioWidth > ratioHeight ? '100%' : 'auto',
                    height: ratioWidth > ratioHeight ? 'auto' : '100vh'
                }} />}
    </div>
};

const HorizontalPreview = (props) => {
    const scrollRef = createRef();
    const isInitialLoad = useRef(true)
    const group = props.data.group;
    const [pageNo, setPageNo] = useState(props.data.selected);

    const onPrevClicked = () => setPageNo((currentPageNo) => currentPageNo - 1);

    const onNextClicked = () => setPageNo((currentPageNo) => currentPageNo + 1);

    useEffect(() => {
        const element = scrollRef.current;
        element.scroll({
            left: element.clientWidth * pageNo,
            behavior: isInitialLoad.current ? 'auto' : 'smooth'
        })
        isInitialLoad.current = false;
    }, [pageNo])

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
                <div className={style.body} ref={scrollRef}>
                    {group.map((data, index) => <Page key={index} data={data} />)}
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

export default HorizontalPreview;
