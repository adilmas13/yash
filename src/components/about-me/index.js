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

    useEffect(() => {
        const downArrow = nextArrowRef.current;
        const upArrow = previousArrowRef.current;

        if (pageNo === 2 && downArrow) {
            downArrow.animate([
                {transform: 'scale(1)'},
                {transform: 'scale(0)'},
            ], {duration: 200, fill: "forwards"}).play()
        }
        if (pageNo === 1 && upArrow) {
            upArrow.animate([
                {transform: 'scale(0) translateX(-50%)'},
                {transform: 'scale(1) translateX(-50%)'},
            ], {duration: 200, fill: "forwards"}).play()
        }
    }, [pageNo]);

    const onPrevClicked = () => setPageNo((currentPageNo) => currentPageNo - 1);
    const onNextClicked = () => setPageNo((currentPageNo) => currentPageNo + 1);

    return <div className={style.parent}>
        <div className={style['scroll-container']} id="scroller">
            <MyInfo />
            <Experience />
            <Literacy />
        </div>
        <div className={style['top-arrow-container']}>
            <Logo />
            <div className={style['icon-wrapper']} onClick={onPrevClicked} ref={previousArrowRef}>
                <div>next</div>
                <img src={'assets/arrow_blunt.svg'} />
            </div>
        </div>
        <div className={style['bottom-arrow-container']}>
            <div className={style['icon-wrapper']} onClick={onNextClicked} ref={nextArrowRef}>
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
