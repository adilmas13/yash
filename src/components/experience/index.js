// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.scss';
import {aboutMeImg} from "../../service/imgService";
import {experience as data} from "../../dataSource/aboutMe";
import ExperienceCounter from "../experience-counter";
import {Details, Header} from "../about-me-common-components";

const Experience = () => {
    return <div className={style.parent}>
        <div className={style['image-wrapper']}>
            <img src={aboutMeImg("experience_shadow")} alt="yash-shadow" className={style['shadow-image']} />
            <img src={aboutMeImg("experience")} alt="yash" className={style['main-image']} />
        </div>
        <div className={style['right-content']}>
            <div className={style['details-wrapper']}>
                <div className={style['top-wrapper']}>
                    <Header header={'experience'} />
                    <ExperienceCounter />
                </div>
                <div className={style['middle-wrapper']}>
                    <Details data={data} />
                </div>
            </div>
        </div>
    </div>
}

export default Experience;
