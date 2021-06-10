// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';

const Loader = () => {

    return <div class={style.parent}>
        <div class={style["loader"]}>LOADING...</div>
    </div>
};

export default Loader;
