// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {aboutMeImg} from "../../service/imgService";
import {experience as data} from "../../dataSource/aboutMe";
import ExperienceCounter from "../experience-counter";
import {Details} from "../about-me-common-components";

const ExperienceMobile = () => {
    return <div className={style.parent}>
        <div className={style.container}>
            <div className={style['top']}>
                <div className={style['main-image-wrapper']}>
                    <img src={aboutMeImg("experience_shadow")} alt="yash-shadow"
                         className={style['main-image-shadow']} />
                    <img src={aboutMeImg("experience")} alt="yash" className={style['main-image']} />
                    <img src={aboutMeImg("experience_smoke", "gif")} alt="yash" className={style['smoke']} />
                </div>
            </div>
            <div className={style.middle}>
                <div className={style['middle-wrapper']}>
                    <div className={style.header}>experience</div>
                    <ExperienceCounter />
                </div>
            </div>
            <div className={style.bottom}>
                <Details data={data} />
            </div>
        </div>
    </div>
}

export default ExperienceMobile;
