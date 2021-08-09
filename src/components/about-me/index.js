import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import MyInfo from "../my-info";
import Experience from "../experience";
import Literacy from "../literacy";
import Logo from "../logo";
import {useIsMobileView} from "../../hooks/mobileViewHook";
import MyInfoMobile from "../my-info-mobile";
import ExperienceMobile from "../experience-mobile";
import LiteracyMobile from "../literacy-mobile";
import {createRef} from "preact";
import Back from "../back";
import {route} from "preact-router";

const MobileView = (props) => {
    const scrollerRef = createRef();
    const [active, setActive] = useState(props.pageNo);

    useEffect(() => {
        const element = scrollerRef.current;
        const scrollListener = () => setActive(Math.floor(element.scrollLeft / element.clientWidth));
        element.addEventListener('scroll', scrollListener);
        return () => element.removeEventListener('scroll', scrollListener)
    }, []);

    return <div className={style.parent}>
        <div className={style['top-arrow-container']}>
            <div className={style['logo-container']}><Logo /></div>
            <div className={style['page-indicator-container']}>
                <div className={style['page-indicator']} style={{opacity: active === 0 ? 1 : 0.3}} />
                <div className={style['page-indicator']} style={{opacity: active === 1 ? 1 : 0.3}} />
                <div className={style['page-indicator']} style={{opacity: active === 2 ? 1 : 0.3}} />
            </div>
        </div>
        <div className={style['scroll-container']} ref={scrollerRef}>
            <MyInfoMobile />
            <ExperienceMobile />
            <LiteracyMobile />
        </div>
    </div>
}

const DesktopView = (props) => {
    const scrollerRef = createRef();

    useEffect(() => {
        const element = scrollerRef.current;
        element.scroll({
            left: element.clientWidth * props.pageNo,
            behavior: "smooth"
        })
        return () => {
        };
    }, [props.pageNo]);

    return <div className={style['parent']}>
        <div className={style['container']}>
            <div className={style.wrapper}>
                <div className={style.cancel}>
                    <Back onCancel={() => route("/")} />
                </div>
                {props.pageNo > 0 && <div className={style['prev-wrapper']} onClick={() => props.onPrevClicked()}>
                    <img src={"assets/arrow_blunt.svg"}
                         className={style.arrow} />
                    <div className={style.text}>prev</div>
                </div>}
                <div className={style["scroll-container"]} ref={scrollerRef}>
                    <MyInfo />
                    <Experience />
                    <Literacy />
                </div>
                {props.pageNo < 2 && <div className={style['next-wrapper']} onClick={() => props.onNextClicked()}>
                    <div className={style.text}>next</div>
                    <img src={"assets/arrow_blunt.svg"} className={style.arrow} />
                </div>}
            </div>
        </div>

    </div>
}

const AboutMe = () => {
    const isMobileView = useIsMobileView(700);
    const [pageNo, setPageNo] = useState(0);

    const onPrevClicked = () => setPageNo((currentPageNo) => currentPageNo - 1);
    const onNextClicked = () => setPageNo((currentPageNo) => currentPageNo + 1);

    return isMobileView ?
        <MobileView
            pageNo={pageNo}
            onPrevClicked={onPrevClicked}
            onNextClicked={onNextClicked} />
        : <DesktopView
            pageNo={pageNo}
            onPrevClicked={onPrevClicked}
            onNextClicked={onNextClicked} />
}

export default AboutMe;
