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

const MobileView = (props) => {
    const scrollerRef = createRef();

    useEffect(() => {
        const element = scrollerRef.current;
        element.scroll({
            top: (element.clientHeight) * props.pageNo,
            behavior: "smooth"
        });
    }, [props.pageNo]);

    const hideIcon = {
        opacity: 0,
        userSelect: 'none',
        pointerEvents: 'none'
    }
    const showIcon = {
        opacity: 1,
        userSelect: 'all',
        pointerEvents: 'all'
    }

    return <div className={style.parent}>
        <div className={style['scroll-container']} ref={scrollerRef}>
            <MyInfoMobile />
            <ExperienceMobile />
            <LiteracyMobile />
        </div>
        <div className={style['top-arrow-container']}>
            {props.pageNo === 0 ? <Logo /> : <div />}
            <div
                style={props.pageNo > 0 ? showIcon : hideIcon}
                className={style['icon-wrapper']}
                onClick={() => props.onPrevClicked()}
            >
                <img src={'assets/arrow_blunt.svg'} />
                <div>previous</div>
            </div>
        </div>
        <div className={style['bottom-arrow-container']}>
            <div
                style={props.pageNo < 2 ? showIcon : hideIcon}
                className={style['icon-wrapper']}
                onClick={() => props.onNextClicked()}
            >
                <div>next</div>
                <img src={'assets/arrow_blunt.svg'} />
            </div>
        </div>
    </div>
}

const DesktopView = (props) => {
    const scrollerRef = createRef();

    // useEffect(() => {
    //     const element = scrollerRef.current;
    //     element.scroll({
    //         left: element.clientWidth * props.pageNo,
    //         behavior: "smooth"
    //     })
    //     return () => {
    //     };
    // }, [props.pageNo]);

    return <div className={style['parent']}>
        <div className={style['container']}>
            <div className={style.wrapper}>
                <div className={style["scroll-container"]} ref={scrollerRef}>
                    {props.pageNo === 0 && <MyInfo />}
                    {props.pageNo === 1 && <Experience />}
                    {props.pageNo === 2 && <Literacy />}
                </div>
                {props.pageNo > 0 && <div className={style.left} onClick={() => props.onPrevClicked()}>prev</div>}
                {props.pageNo < 2 && <div className={style.right} onClick={() => props.onNextClicked()}>next</div>}
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
