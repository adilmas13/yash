import {useEffect, useRef, useState} from "preact/hooks";
import style from "./style.css";

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

export default LoadableImage;
