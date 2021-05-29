// eslint-disable-next-line no-unused-vars
import style from './style.css';
import {aboutMeImg} from "../../utils/imgService";
import {getAge} from "../../utils/calculationService";

const details = {
    name: 'yash',
    age: getAge("12/22/1991"),
    designation: 'senior art director',
    contact: '+91-8080606226',
    email: 'yash.ambre92@gmail.com',
    gender: 'male',
    description: [
        'Passionate, ambitious and artistic',
        'towards work and life equally.',
        'A rare combination of positive and',
        'creative blood, living up to its name.'
    ]
};

const DesktopView = () => {
    return <div class={style.parent}>
        <div class={style["image-wrapper"]}>
            <img src={aboutMeImg("about_shadow")} alt="yash-shadow" class={style['main-image']} />
            <img src={aboutMeImg("about")} alt="yash" class={style['main-image']}
                 style="position: absolute; right: 10px" />
        </div>
        <div class={style['details-wrapper']}>
            <div class={style['top-wrapper']}>
                <div class={style['gender-age']}>{details.gender}. {details.age}.</div>
                <div class={style['designation']}>{details.designation}</div>
            </div>
            <div class={style['middle-wrapper']}>
                <div class={style.name}>{details.name}</div>
                <div class={style['noun-success']}>
                    <span>noun: </span>
                    <span>success</span>
                </div>
                <div class={style.description}>
                    {details.description.map(it => <div>{it}</div>)}
                </div>
            </div>
            <div class={style['bottom-wrapper']}>
                <div class={style['digits-letters-wrapper']}>
                    <div class={style.split}>
                        <span>digits</span>
                        <span>{details.contact}</span>
                    </div>
                    <div class={style.split}>
                        <span>letters</span>
                        <span>{details.email}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const MobileView = () => {
    return <div className={style.parent}>
        <div className={style['top']}>
            <div className={style['main-image-wrapper']}>
                <img src={aboutMeImg("about_shadow")} alt="yash-shadow" className={style['main-image-shadow']} />
                <img src={aboutMeImg("about")} alt="yash" className={style['main-image']} />
            </div>
        </div>
        <div class={style.middle}>
                <div className={style['gender-age']}>{details.gender}. {details.age}.</div>
                <div className={style.designation}>{details.designation}</div>
        </div>
        <div class={style.bottom}>
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

        {/*<div class={style['bottom-wrapper']}>*/}

        {/*    */}
        {/*</div>*/}

    </div>
}
const MyInfo = () => {
    return <div>
        <div class={style.desktop}>
            <DesktopView />
        </div>
        <div className={style.mobile}>
            <MobileView />
        </div>
    </div>
};

export default MyInfo;
