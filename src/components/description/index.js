// eslint-disable-next-line no-unused-vars
import {React} from "preact";
import style from './style.css';

const Description = (props) => {
    const data = props.data;
    const logo = data.logo?.src || "";

    const logoStyle = {
        transform: `translateX(-50%) translateY(${data.logo?.top || 0})`,
        width: data.logo?.width || "50px"
    }

    const layoutStyle = {
        paddingTop: data.layout.paddingTop
    }

    return <div className={style['description-body']}>
        <div className={style['description-container']}>
            <div className={style['description-center-piece']} style={layoutStyle}>
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
