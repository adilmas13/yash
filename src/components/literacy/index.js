// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {aboutMeImg} from "../../service/imgService";
import {literacy as data} from "../../dataSource/aboutMe";


const Literacy = () => <div className={style.parent}>
    <div className={style["image-wrapper"]}>
        <img src={aboutMeImg("literacy_shadow")} alt="yash-shadow" className={style['main-image-shadow']} />
        <img src={aboutMeImg("literacy")} alt="yash" className={style['main-image']} />
    </div>
    <div className={style['details-wrapper']}>
        <div className={style.wrapper}>
            <div className={style.header}>literacy</div>
            <div className={style.details}>
                <div className={style.titles}>
                    {data.map(it => <span>{it.field} <span>&#8250;</span></span>)}
                    <span><span>&#8250;</span></span>
                </div>
                <div className={style.desc}>
                    {data.map(it => (
                        <span>{it.place}
                            {it.degree && <span className={style.degree}>{it.degree}</span>}
                                </span>)
                    )}
                    <span><span className={style['download-cv']}>download CV</span></span>
                </div>
            </div>
        </div>
    </div>
</div>

export default Literacy;
