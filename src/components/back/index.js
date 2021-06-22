import {useEffect, useRef, useState} from "preact/hooks";
import style from "./style.css";

const Back = (props) => {
    return (
        <div class={style["back-parent"]} onClick={() => props.onCancel()}>
            <div class={style["icon-wrapper"]}>
                <img src={'assets/cross.svg'} />
            </div>
            <div class={style.text}>BACK</div>
        </div>
    )
}

export default Back;
