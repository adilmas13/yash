// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {aboutMeImg} from "../../utils/imgService";

const data = [
    {field: 'applied arts', place: 'RACHANA SANSAD', degree: 'Diploma'},
    {field: 'advertising', place: 'MUMBAI UNIVERSITY', degree: 'BMM Degree'},
    {field: 'graphics', place: 'FRAMEBOXX VISUAL EFFECTS'},
    {field: 'commerce', place: 'MUMBAI UNIVERSITY', degree: 'Junior Degree'},
    {field: 'dco', place: 'A+ COMPUTER INSTITUTE'},
    {field: 'ssc', place: 'MAHARASHTRA STATE BOARD'},
];

const MobileView = () => {
    return <div className={style.parent}>
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
                    {data.map(it => <span>{it.field} <span>&#8250;</span></span>)}
                    <span><span>&#8250;</span></span>
                </div>
                <div className={style.desc}>
                    {data.map(it => (
                        <span>{it.place}
                            {it.degree && <span className={style.degree}>{it.degree}</span>}
                                </span>)
                    )}
                    <span><div className={style['download-cv']}>download CV</div></span>
                </div>
            </div>
        </div>

    </div>
}
const DesktopView = () => <div className={style.parent}>
    <div className={style["image-wrapper"]}>
        <img src={aboutMeImg("literacy_shadow")} alt="yash-shadow" className={style['main-image']} />
        <img src={aboutMeImg("literacy")} alt="yash" className={style['main-image']}
             style="position: absolute; right: 10px" />
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

const Literacy = () => <div>
    <div className={style.desktop}>
        <DesktopView />
    </div>
    <div className={style.mobile}>
        <MobileView />
    </div>
</div>

export default Literacy;
