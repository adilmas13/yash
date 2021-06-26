// eslint-disable-next-line no-unused-vars
import {createRef, React} from "preact";
import style from './style.css';
import {useEffect} from "preact/hooks";

const Description = (props) => {
    const data = props.data;
    const logo = data.logo?.src || "";
    const descCenterPieceRef = createRef();

    const logoStyle = {
        transform: `translateX(-50%) translateY(${data.logo?.top || 0})`,
        width: data.logo?.width || "50px"
    }

    const layoutStyle = {
        paddingTop: data.layout.paddingTop
    }

    useEffect(() => {
        const animation = descCenterPieceRef.current.animate([
            {transform: 'scale(0.5)', opacity: 0.5},
            {transform: 'scale(1.0)', opacity: 1},
        ], {
            duration: 250,
            fill: "forwards"
        });
        animation.play();
    }, [])

    return <div className={style['description-body']}>
        <div className={style['description-container']}>
            <div className={style['description-center-piece']} style={layoutStyle} ref={descCenterPieceRef}>
                <div className={style['description']}>{data.description}</div>
                <div className={style['bottom-line']} />
                <img className={style['close']} src={'assets/cross.svg'} onClick={props.onCloseClicked} />
                <div className={style['close-message']}>{data.closeText}</div>
                {data.logo && <img className={style['logo']} style={logoStyle} src={logo} />}
            </div>
        </div>
    </div>
}

export default Description;
