import style from './style.scss';
import {route} from "preact-router";

const Logo = (props) => {
    const isTextVisible = (!props.hideText) ?? true;
    return <div class={style["logo-parent"]} onClick={() => route("home")}>
        <img class={style.logo} src={"assets/home_icon.svg"} />
        {isTextVisible && <span className={style["logo-text"]}>home</span>}
    </div>
}

export default Logo;
