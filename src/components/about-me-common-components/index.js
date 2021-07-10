import style from './style.css'
import React from "preact";

export const Header = (props) => <div className={style.header}>{props.header}</div>;

export const Details = (props) => {
    console.log(props);
    return <div className={style.details}>
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

