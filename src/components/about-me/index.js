import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import MyInfo from "../my-info";
import Experience from "../experience";
import Literacy from "../literacy";
import Logo from "../logo";

const MobileView = (props) => {

    useEffect(() => {
        const element = document.getElementById("scroller");
        element.scroll({
            top: (element.clientHeight) * props.pageNo,
            behavior: "smooth"
        })
        return () => {
        };
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
        <div className={style['scroll-container']} id="scroller">
            <MyInfo />
            <Experience />
            <Literacy />
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

    useEffect(() => {
        const element = document.getElementById("scroller1");
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
                <div className={style["scroll-container"]} id="scroller1">
                    {/*<MyInfo />*/}
                    <Experience />
                    {/*<Literacy />*/}
                </div>
                {props.pageNo > 0 && <div className={style.left} onClick={() => props.onPrevClicked()}>prev</div>}
                {props.pageNo < 2 && <div className={style.right} onClick={() => props.onNextClicked()}>next</div>}
            </div>
        </div>

    </div>
}

const AboutMe = () => {
    const [pageNo, setPageNo] = useState(0);

    const onPrevClicked = () => setPageNo((currentPageNo) => currentPageNo - 1);
    const onNextClicked = () => setPageNo((currentPageNo) => currentPageNo + 1);

    return <div>
        <div className={style.mobile}>
            <MobileView
                pageNo={pageNo}
                onPrevClicked={onPrevClicked}
                onNextClicked={onNextClicked}
            />
        </div>
        <div className={style.desktop}>
            <DesktopView
                pageNo={pageNo}
                onPrevClicked={onPrevClicked}
                onNextClicked={onNextClicked}
            />
        </div>
    </div>
}

export default AboutMe;
