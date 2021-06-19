// eslint-disable-next-line no-unused-vars
import React, {createRef} from "preact";
import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import {route} from "preact-router";
import Logo from "../logo";
import {getPageNo, homeVideoForwardSlots, homeVideoReverseSlots, setPageNo} from "../../dataSource/home";
import {
    animateDownArrowOnClick,
    animateUpArrowOnClick,
    cancelAnimation,
    decreaseYashTextOpacity,
    hideDownArrow,
    hideUpArrow,
    revealDownArrow,
    revealHome,
    revealUpArrow,
    showDownArrow,
    showUpArrow
} from "./animationController";
import {useIsMobileView} from "../../hooks/mobileViewHook";
import {downArrow, upArrow} from "./utils";

const Designation = () => <div class={style.designation}>
    <div class={style.text}>ASSOCIATE</div>
    <div class={style.text}>CREATIVE</div>
    <div class={style.text}>DIRECTOR</div>
</div>;

const SlotMachine = (props) => {
    const slotsRef = createRef()
    const upArrowRef = createRef()
    const downArrowRef = createRef()

    const slots = [
        "mbre--",
        "bout--",
        "wards-",
        "dverts",
        "rts---"
    ]

    const slots2 = [
        "-ambre-",
        "-about-",
        "-awards",
        "adverts",
        "-arts--"
    ]

    // to create the slot machine columns and cells when component renders
    useEffect(() => {
        const noOfColumns = Math.max(
            ...props.isMobileView
                ? slots2.map(it => it.length)
                : slots.map(it => it.length)
        )

        const slotContainer = slotsRef.current;
        // creating columns
        for (let i = 0; i < noOfColumns; ++i) {
            const column = document.createElement("div");
            column.classList.add("column");
            slotContainer.appendChild(column)
        }
        (props.isMobileView ? slots2 : slots)
            .forEach((item) => {
                const temp = item.split("")
                temp.forEach((it, index) => {
                    const element = document.createElement("span")
                    element.classList.add("cell");
                    element.innerText = it !== "-" ? it : "";
                    slotContainer.childNodes[index].appendChild(element)
                })
            })
    }, [])

    // to animate the slot machine when position changes
    useEffect(() => {
        let position = props.action.position;
        let cellHeight = document.getElementsByClassName("cell")[0].clientHeight;
        let children = slotsRef.current.childNodes
        children.forEach((column, index) => {
            if (!props.action.isFirst) {
                const delay = index * 0.2;
                column.style.transition = "all 1s ease-in-out";
                column.style.transitionDelay = `${delay}s`;
            }
            column.style.transform = `translateY(-${cellHeight * position}px)`;
        })
    }, [props.action.position])

    // hide or show arrow based on position
    useEffect(() => {
        const action = props.action;
        if (action.isFirst) {
            return;
        }
        let animation;
        const position = action.position;
        switch (action.direction) {
            case "next": {
                animation = animateDownArrowOnClick();
                animation.onfinish = () => {
                    if (position === 1) {
                        showUpArrow();
                    }
                    if (position === 4) {
                        hideDownArrow();
                    }
                }
                break;
            }
            case "previous": {
                animation = animateUpArrowOnClick();
                animation.onfinish = () => {
                    if (position === 0) {
                        hideUpArrow();
                    }
                    if (position === 3) {
                        showDownArrow();
                    }
                }
                break;
            }
        }
        return () => {
            cancelAnimation(animation);
        }
    }, [props.action])

    // to enable or disable arrow click based on position
    useEffect(() => {
        const position = props.action.position;
        upArrowRef.current.style.pointerEvents = position > 0 ? 'auto' : 'none';
        downArrowRef.current.style.pointerEvents = position < slots.length - 1 ? 'auto' : 'none';
    }, [props.action])

    const redirect = () => {
        const position = props.action.position;
        switch (position) {
            case 1 :
                route("/about-me")
                break;
            case 2 :
                route("/awards")
                break;
            case 3 :
                route("/adverts")
                break;
            case 4 :
                route("/arts")
                break;
        }
        setPageNo(position);
    }

    return <div class={style["slot-wrapper"]}>
        <div class={style["slot-parent"]}>
            <img
                id="up_arrow"
                ref={upArrowRef}
                class={style.arrow}
                src={"assets/arrow.svg"}
                onClick={() => props.onPreviousClick()} />

            <div class={style["slot-container"]}>
                {!props.isMobileView && <div className={style["a-text"]}>A</div>}
                <div class={style.slot}
                     ref={slotsRef}
                     onClick={() => redirect()} />
            </div>

            <img
                id="down_arrow"
                ref={downArrowRef}
                class={style["down-arrow"]}
                src={"assets/arrow.svg"}
                onClick={() => props.onNextClicked()} />
        </div>
    </div>
}

const Yash = () => {

    useEffect(() => {
        decreaseYashTextOpacity()
    }, [])

    return <div className={style["yash-text-wrapper"]}>
        <div className={style["yash-text"]} id={'yash-text'}>yash</div>
    </div>
}

const YashVideo = (props) => {
    const videoRef = createRef()

    useEffect(() => {
        const action = props.action;
        if (action.isFirst) {
            return;
        }
        const video = videoRef.current;
        const {start, end} = action.direction === "previous"
            ? homeVideoReverseSlots[homeVideoReverseSlots.length - 1 - action.position]
            : homeVideoForwardSlots[action.position];
        video.pause();
        video.currentTime = start;

        const progressListener = () => {
            if (video.currentTime >= end) {
                video.pause();
            }
        }

        video.addEventListener('timeupdate', progressListener);
        video.play();
        return () => video.removeEventListener('timeupdate', progressListener);
    }, [props.action])

    return <video ref={videoRef} src={"assets/videos/video.mp4"} preload autoPlay={true} />
}

const DesktopView = (props) => <div class={style.parent} id={'home_body'}>
    <div class={style.body}>
        <div class={style["three-layer"]}>
            <Yash />
            <YashVideo action={props.action} />
            <SlotMachine
                isMobileView={props.isMobileView}
                action={props.action}
                onNextClicked={() => props.onNextClicked()}
                onPreviousClick={() => props.onPreviousClick()} />
        </div>
        <Designation />
    </div>
    <div class={style["logo-wrapper"]}>
        <Logo />
    </div>
</div>

const MobileView = (props) => <div className={style.parent} id={'home_body'}>
    <div className={style["logo-wrapper"]}>
        <Logo />
    </div>
    <div className={style["three-layer"]}>
        <Yash />
        <YashVideo action={props.action} />
        <SlotMachine
            isMobileView={props.isMobileView}
            action={props.action}
            onNextClicked={() => props.onNextClicked()}
            onPreviousClick={() => props.onPreviousClick()} />
        <Designation />
    </div>

</div>;

const Home = () => {
    const isMobileView = useIsMobileView(700);

    const [action, setAction] = useState({
        position: 4,
        direction: "next",
        isFirst: true
    })

    const onNextClicked = () => {
        setAction(action => {
            return {
                ...action,
                position: ++action.position,
                direction: "next"
            }
        })
    }

    const onPreviousClick = () => {
        setAction(action => {
            return {
                ...action,
                position: --action.position,
                direction: "previous"
            }
        })
    }

    const setActionWithDelay = (action, delay) => setTimeout(() => setAction(action), delay);

    useEffect(() => {
        const pageNo = getPageNo();
        revealHome();
        decreaseYashTextOpacity();
        setActionWithDelay({...action, position: pageNo, isFirst: false}, 500);
        const promises = [revealUpArrow().finished, revealDownArrow().finished];
        Promise
            .all(promises)
            .then(() => {
                if (pageNo === 0) {
                    hideUpArrow(300);
                }
                if (pageNo === 4) {
                    hideDownArrow(300)
                }
            })
    }, [])

    return isMobileView
        ? <MobileView
            action={action}
            onNextClicked={onNextClicked}
            onPreviousClick={onPreviousClick}
            isMobileView={isMobileView}
        />
        : <DesktopView
            action={action}
            onNextClicked={onNextClicked}
            onPreviousClick={onPreviousClick}
            isMobileView={isMobileView}
        />
}

export default Home;
