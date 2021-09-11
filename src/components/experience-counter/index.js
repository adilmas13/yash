// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.scss';
import {useEffect, useState} from "preact/hooks";
import {getExperience} from "../../service/calculationService";

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


export default ExperienceCounter;
