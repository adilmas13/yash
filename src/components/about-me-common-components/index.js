import style from './style.css'
import React from "preact";

const Header = (props) => <div className={style.header}>{props.header}</div>;

export default Header;
