import detailsStyle from './details.css'
import downloadStyle from './download.css'
import headerStyle from './header.css'
import React from "preact";
import {cvUrl} from "../../dataSource/home";

export const Header = (props) => <div className={headerStyle.header}>{props.header}</div>;

export const Details = (props) => {
    const style = detailsStyle;
    return <div className={detailsStyle.details}>
        <div className={style['title-container']}>
            {props.data.map(it => <div className={style['title-wrapper']}>
                <div className={style['title']}>{it.text1}</div>
                <div className={style['symbol']}>&#8250;</div>
            </div>)}
        </div>
        <div className={style.desc}>
            {props.data.map(it => (
                    it.text2 ? <span>{it.text2}{it.text3 && <span className={style.info}>{it.text3}</span>}</span> :
                        <span>{props.children}</span>
                )
            )}
        </div>
    </div>
}

export const Download = () => {
    const downloadCv = () => {
        window.open(cvUrl, '_blank');
    }

    return <div className={downloadStyle['download-cv']} onClick={() => downloadCv()}>download</div>
}

