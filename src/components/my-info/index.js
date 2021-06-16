// eslint-disable-next-line no-unused-vars
import style from './style.css';
import {aboutMeImg} from "../../service/imgService";
import {details} from "../../dataSource/aboutMe";

const MyInfo = () => {
    return <div class={style.parent}>
        <div class={style["image-wrapper"]}>
            <img src={aboutMeImg("about_shadow")} alt="yash-shadow" class={style['image-shadow']} />
            <img src={aboutMeImg("about")} alt="yash" class={style['main-image']} />
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
export default MyInfo;
