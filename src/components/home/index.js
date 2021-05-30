// eslint-disable-next-line no-unused-vars
import React, {createRef} from "preact";
import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import {route} from "preact-router";
import Logo from "../logo";
import {getPageNo, homeVideoForwardSlots, homeVideoReverseSlots, setPageNo} from "../../utils/dataService";
import {
    animateDownArrowInfinitely,
    animateDownArrowOnClick,
    animateUpArrowInfinitely,
    animateUpArrowOnClick,
    cancelAnimation,
    hideDownArrow,
    hideUpArrow,
    showDownArrow,
    showUpArrow
} from "./animationController";
import {downArrow, upArrow} from "./utils";

const Designation = () => <div class={style.designation}>
    <div class={style.text}>SENIOR</div>
    <div class={style.text}>ART</div>
    <div class={style.text}>DIRECTOR</div>
</div>;

const SlotMachine = (props) => {
    const slotsRef = createRef()
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

    useEffect(() => {
        const media = window.matchMedia("(max-width: 600px)")
        const noOfColumns = Math.max(
            ...media.matches
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
        (media.matches ? slots2 : slots)
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
                class={style.arrow}
                src={"assets/arrow.svg"}
                onClick={() => props.onPreviousClick()} />

            <div class={style["slot-container"]}>
                <div class={style["a-text"]}>A</div>
                <div class={style.slot}
                     ref={slotsRef}
                     onClick={() => redirect()} />
            </div>

            <img
                id="down_arrow"
                class={style["down-arrow"]}
                src={"assets/arrow.svg"}
                onClick={() => props.onNextClicked()} />
        </div>
    </div>
}

const Yash = () => <div class={style["yash-text-wrapper"]}>
    <div class={style["yash-text"]}>yash</div>
</div>

const YashVideo = (props) => {
    const videoRef = createRef()

    useEffect(() => {
        console.log('Video', props.action);
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

const Home = () => {

    const [action, setAction] = useState({
        position: 4,
        direction: "next",
        isFirst: true
    })

    const onNextClicked = () => {
        setAction(action => {
            return {
                position: ++action.position,
                direction: "next"
            }
        })
    }

    const onPreviousClick = () => {
        setAction(action => {
            return {
                position: --action.position,
                direction: "previous"
            }
        })
    }

    const setActionWithDelay = (action, delay) => setTimeout(() => setAction(action), delay);

    useEffect(() => {
        const pageNo = getPageNo();
        setActionWithDelay({...action, position: pageNo, isFirst: false}, 500);
        const promises = [animateDownArrowInfinitely().finished, animateUpArrowInfinitely().finished];
        Promise
            .all(promises)
            .then(() => {
                upArrow().style.pointerEvents = "auto";
                downArrow().style.pointerEvents = "auto";
                if (pageNo === 0) {
                    hideUpArrow(300);
                }
                if (pageNo === 4) {
                    hideDownArrow(300)
                }
            })
    }, [])

    useEffect(() => {
        if (action.isFirst) {
            return;
        }
        let animation;
        const position = action.position;
        switch (action.direction) {
            case "next": {
                const arrow = downArrow()
                arrow.style.pointerEvents = "none";
                animation = animateDownArrowOnClick();
                animation.onfinish = () => {
                    arrow.style.pointerEvents = "auto";
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
                const arrow = upArrow()
                arrow.style.pointerEvents = "none";
                animation = animateUpArrowOnClick();
                animation.onfinish = () => {
                    arrow.style.pointerEvents = "auto";
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
    }, [action])

    return <div class={style.parent}>
        <div class={style.body}>
            <div class={style["three-layer"]}>
                <Yash />
                <YashVideo action={action} />
                <SlotMachine
                    action={action}
                    onNextClicked={() => onNextClicked()}
                    onPreviousClick={() => onPreviousClick()}
                />
            </div>
            <Designation />
        </div>
        <div class={style["logo-wrapper"]}>
            <Logo />
        </div>
    </div>
};

export default Home;
