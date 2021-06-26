import style from "./style.css";
import {createRef, React} from "preact";
import Back from "../back";
import {useEffect, useState} from "preact/hooks";
import LazyImage from "../lazy-image";

const getHeight = (containerWidth, ratio) => {
    const [ratioWidth, ratioHeight] = ratio.split(":").map(it => parseInt(it));
    return containerWidth / (ratioWidth / ratioHeight)
};
const VerticalPreview = (props) => {
    const scrollContainerRef = createRef();
    const [parentWidth, setParenWidth] = useState(0);

    const group = props.data.group;

    useEffect(() => {
        const containerWidth = scrollContainerRef.current.clientWidth;
        setParenWidth(containerWidth);
        if (group.length === 1){
            scrollContainerRef.current.style.justifyContent = "center";
            scrollContainerRef.current.style.marginTop = "0";
        }
    },[])

    return <div className={style['preview-parent']}>
        <div className={style.cancel}>
            <Back onCancel={() => props.handleBackClick()} />
        </div>
        <div className={style['preview-container']}>
            <div className={style['scroll-container']} ref={scrollContainerRef}>
                {group.map((it, index) => {
                    return (
                        <div className={style['media-wrapper']} key={index}>
                            {it.video ? <iframe src={it.video.src} style={{
                                    height: getHeight(parentWidth, it.ratio)
                                }} /> :
                                <LazyImage src={it.image.src} />}
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
}

export default VerticalPreview;
