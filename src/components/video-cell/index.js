import style from './style.scss';
/*
* props = {
*      src: string,
*      width: string,
*      height : string,
* }
* */
const VideoCell = (props) => {
    const src = props.src || "";
    const poster = props.poster || "";
    const color = props.color || "lightgrey";
    const borderRadius = props.borderRadius || "0";

    let wrapperStyle = {
        ...{backgroundColor: color},
        ...{borderRadius}
    }
    let videoStyle = {
        ...{borderRadius}
    }

    return <div className={style['video-wrapper']} style={wrapperStyle}>
        <video src={src} poster={poster} style={videoStyle} autoPlay loop muted />
    </div>;
};


export default VideoCell;
