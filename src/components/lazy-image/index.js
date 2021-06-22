import {useState} from "preact/hooks";
import style from './style.css'

/*
* props = {
*      url: string,
*      color: string,
*       borderRadius : string
* }
* */
const LazyImage = (props) => {
    const src = props.src || "";
    const color = props.color || "lightgrey";
    const borderRadius = props.borderRadius || "0"

    const [isImageLoaded, setImageLoaded] = useState(false);

    let wrapperStyle = {
        backgroundColor: color,
        borderRadius
    }

    let imageStyle = {
        borderRadius
    }

    return <div style={wrapperStyle} className={style['lazy-image-wrapper']}>
        <img
            style={imageStyle}
            className={isImageLoaded ? style["visible"] : style["hidden"]}
            src={src} onLoad={() => setImageLoaded(true)} />
    </div>;
};


export default LazyImage;
