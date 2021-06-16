// eslint-disable-next-line no-unused-vars
import style from './style.css';
import {aboutMeImg} from "../../service/imgService";
import {details} from "../../dataSource/aboutMe";

const MyInfoMobile = () => {
    return <div className={style.parent}>
        <div className={style.container}>
            <div className={style['top']}>
                <div className={style['main-image-wrapper']}>
                    <img src={aboutMeImg("about_shadow")} alt="yash-shadow" className={style['main-image-shadow']} />
                    <img src={aboutMeImg("about")} alt="yash" className={style['main-image']} />
                </div>
            </div>
            <div className={style.middle}>
                <div className={style['gender-age']}>{details.gender}. {details.age}.</div>
                <div className={style.designation}>{details.designation}</div>
            </div>
            <div className={style.bottom}>
                <div className={style['divide-container']}>
                    <div className={style['name-description-container']}>
                        <div className={style.name}>{details.name}</div>
                        <div className={style['noun-success']}>
                            <span>noun: </span>
                            <span>success</span>
                        </div>
                        <div className={style.description}>
                            {details.description.map(it => <div>{it}</div>)}
                        </div>
                    </div>
                    <div className={style['contact-container']}>
                        <div className={style.split}>
                            <span>digits</span>
                            <span>{details.contact}</span>
                        </div>
                        <div className={style.split}>
                            <span>letters</span>
                            <span>{details.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MyInfoMobile;
