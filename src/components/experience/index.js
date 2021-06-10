// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {aboutMeImg} from "../../service/imgService";
import {useEffect, useState} from "preact/hooks";
import {getExperience} from "../../service/calculationService";

const data = [
    {place: 'ddb mudra', experience: '1.7 YEARS', designation: 'senior art director'},
    {place: 'leo burnett', experience: '3.8 YEARS', designation: 'art director'},
    {place: 'witty arts', experience: '2.0 YEARS', designation: 'graphic designer'},
    {place: 'percept art', experience: '1.0 YEARS', designation: 'freelance designer'}
];

const ExperienceCounter = () => {
    const [exp, setExp] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // 12 April 2012
        // 12/04/2012
        let id = setInterval(() => {
            setExp(getExperience("04/12/2012"));
        }, 1000)
        return () => {
            clearInterval(id)
        }
    });

    return <div className={style['time-parent']}>
        <div className={style.number} value="YEARS">{exp.years}</div>
        <div className={style.colon}>:</div>
        <div className={style.number} value="MONTHS">{exp.months}</div>
        <div className={style.colon}>:</div>
        <div className={style.number} value="DAYS">{exp.days}</div>
        <div className={style.colon}>:</div>
        <div className={style.number} value="HOURS">{exp.hours}</div>
        <div className={style.colon}>:</div>
        <div className={style.number} value="MINUTES">{exp.minutes}</div>
        <div className={style.colon}>:</div>
        <div className={style.number} value="SECONDS">{exp.seconds}</div>
    </div>
}
const MobileView = () => {

    return <div className={style.parent}>
        <div className={style['top']}>
            <div className={style['main-image-wrapper']}>
                <img src={aboutMeImg("experience_shadow")} alt="yash-shadow" className={style['main-image-shadow']} />
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
            <div className={style.details}>
                <div className={style.titles}>
                    {data.map(it => <span>{it.place}<span>&#8250;</span></span>)}
                </div>
                <div className={style.desc}>
                    {data.map(it => <span>{it.experience}<span
                        className={style.designation}>{it.designation}</span></span>)}
                </div>
            </div>
        </div>

    </div>
}

const DesktopView = () => {
    return <div className={style.parent}>
        <div className={style['image-wrapper']}>
            <img src={aboutMeImg("experience_shadow")} alt="yash-shadow" className={style['shadow-image']} />
            <img src={aboutMeImg("experience")} alt="yash" className={style['main-image']} />
        </div>
        <div className={style['right-content']}>
            <div className={style['details-wrapper']}>
                <div className={style['top-wrapper']}>
                    <div className={style.header}>experience</div>
                    <ExperienceCounter />
                </div>
                <div className={style['middle-wrapper']}>
                    <div className={style.details}>
                        <div className={style.titles}>
                            {data.map(it => <span>{it.place}<span>&#8250;</span></span>)}
                        </div>
                        <div className={style.desc}>
                            {data.map(it => <span>{it.experience}<span
                                className={style.designation}>{it.designation}</span></span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
const Experience = () => <div>
    <div className={style.desktop}>
        <DesktopView />
    </div>
    <div className={style.mobile}>
        <MobileView />
    </div>
</div>

export default Experience;
