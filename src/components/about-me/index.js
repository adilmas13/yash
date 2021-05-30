import style from './style.css';
import {useEffect, useRef, useState} from "preact/hooks";
import MyInfo from "../my-info";
import Experience from "../experience";
import Literacy from "../literacy";
import Logo from "../logo";

const MobileView = () => {
    const [pageNo, setPageNo] = useState(0);
    const nextArrowRef = useRef(null);
    const previousArrowRef = useRef(null);

    useEffect(() => {
        const element = document.getElementById("scroller");
        element.scroll({
            top: (element.clientHeight) * pageNo,
            behavior: "smooth"
        })
        return () => {
        };
    }, [pageNo]);

    const onPrevClicked = () => setPageNo((currentPageNo) => currentPageNo - 1);
    const onNextClicked = () => setPageNo((currentPageNo) => currentPageNo + 1);

    const hideIcon = {
        opacity: 0,
        userSelect : 'none',
        pointerEvents: 'none'
    }
    const showIcon = {
        opacity: 1,
        userSelect : 'all',
        pointerEvents: 'all'
    }

    return <div className={style.parent}>
        <div className={style['scroll-container']} id="scroller">
            <MyInfo />
            <Experience />
            <Literacy />
        </div>
        <div className={style['top-arrow-container']}>
            {pageNo === 0 ? <Logo /> : <div />}
            <div
                style={pageNo > 0 ? showIcon : hideIcon}
                className={style['icon-wrapper']}
                onClick={onPrevClicked}
                ref={previousArrowRef}>
                <img src={'assets/arrow_blunt.svg'} />
                <div>previous</div>
            </div>
        </div>
        <div className={style['bottom-arrow-container']}>
            <div
                style={pageNo < 2 ? showIcon : hideIcon}
                className={style['icon-wrapper']}
                 onClick={onNextClicked}
                 ref={nextArrowRef}>
                <div>next</div>
                <img src={'assets/arrow_blunt.svg'} />
            </div>
        </div>
    </div>
}

const DesktopView = () => {
    const [pageNo, setPageNo] = useState(0);

    useEffect(() => {
        const element = document.getElementById("scroller");
        element.scroll({
            left: document.body.clientWidth * pageNo,
            behavior: "smooth"
        })
        return () => {
        };
    }, [pageNo]);

    const onPrevClicked = () => setPageNo((currentPageNo) => currentPageNo - 1);
    const onNextClicked = () => setPageNo((currentPageNo) => currentPageNo + 1);

    return <div id="app">
        <div class={style.wrapper}>
            <div class={style["scroll-container"]} id="scroller">
                <MyInfo />
                <Experience />
                <Literacy />
            </div>
            {pageNo > 0 && <div class={style.left} onClick={onPrevClicked}>prev</div>}
            {pageNo < 2 && <div class={style.right} onClick={onNextClicked}>next</div>}
        </div>
    </div>
}

const AboutMe = () => <div>
    <div className={style.mobile}>
        <MobileView />
    </div>
    <div className={style.desktop}>
        <DesktopView />
    </div>
</div>

export default AboutMe;
