import style from './style.css'
import downloadStyle from './download.css'
import React from "preact";
import {cvUrl} from "../../dataSource/home";

export const Header = (props) => <div className={style.header}>{props.header}</div>;

export const Details = (props) => <div className={style.details}>
    <div className={style['title-container']}>
        {props.data.map(it => <div className={style['title-wrapper']}>
            <div className={style['title']}>{it.text1}</div>
            <div className={style['symbol']}>&#8250;</div>
        </div>)}
    </div>
    <div className={style.desc}>
        {props.data.map(it => (
                it.text2 ? <span>{it.text2}{it.text3 && <span className={style.info}>{it.text3}</span>}</span> :
                    <span>{props.children}</span>
            )
        )}
    </div>
</div>

export const Download = () => {
    const downloadCv = () => {
        fetch(cvUrl)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'yash-ambre.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch((e) => {
                alert('OOPS... Something went wrong, unable to download resume at the moment');
                console.error('Download CV FAILED -- ', e);
            });
    }

    return <div className={downloadStyle['download-cv']} onClick={() => downloadCv()}>download</div>
}

