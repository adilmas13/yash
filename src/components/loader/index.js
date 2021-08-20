import style from './style.css'

const Loader = (props) => {
    return <div className={style['loader-parent']}>
        <video src={'/assets/videos/loader.mp4'} autoPlay={true} preload={true} muted={true}
               onTimeUpdate={event => {
                   if (event.target['currentTime'] >= (event.target['duration'] - 0.01)) {
                       props.onComplete()
                   }
               }} />
    </div>
};

export default Loader;
