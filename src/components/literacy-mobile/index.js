// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {aboutMeImg} from "../../service/imgService";
import {literacy as data} from "../../dataSource/aboutMe";


const LiteracyMobile = () => {
    return <div className={style.parent}>
        <div className={style.container}>
            <div className={style['top']}>
                <div className={style['main-image-wrapper']}>
                    <img src={aboutMeImg("literacy_shadow")} alt="yash-shadow" className={style['main-image-shadow']} />
                    <img src={aboutMeImg("literacy")} alt="yash" className={style['main-image']} />
                </div>
            </div>
            <div className={style.middle}>
                <div className={style['middle-wrapper']}>
                    <div className={style.header}>literacy</div>
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.details}>
                    <div className={style.titles}>
                        {data.map(it => <span>{it.text1} <span>&#8250;</span></span>)}
                        <span><span>&#8250;</span></span>
                    </div>
                    <div className={style.desc}>
                        {data.map(it => (
                            <span>{it.text2}
                                {it.text3 && <span className={style.degree}>{it.text3}</span>}
                                </span>)
                        )}
                        <span><div className={style['download-cv']}>download CV</div></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default LiteracyMobile;
