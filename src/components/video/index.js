/*
* props = {
*      src: string,
*      width: string,
*      height : string,
* }
* */
const Video = (props) => {
    const src = props.src || "";
    const width = props.width || 'auto';
    const height = props.height || 'auto';

    const iFrameStyle={
        width,
        height
    };
    
    return <div style={iFrameStyle}>
        <iframe src={src}
                height={height}
                width={width}
                allowFullScreen={true}
                frameBorder={0} />
    </div>;
};


export default Video;
