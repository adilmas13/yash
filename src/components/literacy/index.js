// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {aboutMeImg} from "../../service/imgService";
import {literacy as data} from "../../dataSource/aboutMe";
import {Details, Download, Header} from "../about-me-common-components";

const Literacy = () => <div className={style.parent}>
    <div className={style["image-wrapper"]}>
        <img src={aboutMeImg("literacy_shadow")} alt="yash-shadow" className={style['main-image-shadow']} />
        <img src={aboutMeImg("literacy")} alt="yash" className={style['main-image']} />
    </div>
    <div className={style['details-container']}>
        <div className={style.wrapper}>
            <Header header={'literacy'} />
            <div className={style['details-wrapper']}>
                <Details data={data}>
                    <Download />
                </Details>
            </div>
        </div>
    </div>
</div>

export default Literacy;
