// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {aboutMeImg} from "../../service/imgService";
import {literacy as data} from "../../dataSource/aboutMe";
import {cvUrl} from "../../dataSource/home";
import Header from "../about-me-common-components";

const downloadCv = () => {
    fetch(cvUrl)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'yash-ambre.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch((e) => {
            alert('OOPS... Something went wrong, unable to download resume at the moment');
            console.error('Download CV FAILED -- ', e);
        });
}

const Literacy = () => <div className={style.parent}>
    <div className={style["image-wrapper"]}>
        <img src={aboutMeImg("literacy_shadow")} alt="yash-shadow" className={style['main-image-shadow']} />
        <img src={aboutMeImg("literacy")} alt="yash" className={style['main-image']} />
    </div>
    <div className={style['details-wrapper']}>
        <div className={style.wrapper}>
            <Header header={'literacy'} />
            <div className={style.details}>
                <div className={style['title-container']}>
                    {data.map(it => <div className={style['title-wrapper']}>
                        <div className={style['title']}>{it.field}</div>
                        <div className={style['symbol']}>&#8250;</div>
                    </div>)}
                    <div className={style['title-wrapper']}>
                        <div className={style['title']} />
                        <div className={style['symbol']}>&#8250;</div>
                    </div>
                </div>
                <div className={style.desc}>
                    {data.map(it => (
                        <span>{it.place}
                            {it.degree && <span className={style.degree}>{it.degree}</span>}
                                </span>)
                    )}
                    <span><span className={style['download-cv']}
                                onClick={() => downloadCv()}>download CV</span></span>
                </div>
            </div>
        </div>
    </div>
</div>

export default Literacy;
