import {downArrow, upArrow} from "./utils";

const downArrowAnimationKeyFrames = [
    {transform: 'translateY(0px) rotate(180deg)'},
    {transform: 'translateY(10px) rotate(180deg)'},
    {transform: 'translateY(0px) rotate(180deg)'},
];

const upArrowAnimationKeyFrames = [
    {transform: 'translateY(0px)'},
    {transform: 'translateY(-10px)'},
    {transform: 'translateY(0px)'},
];

const commonAnimationOptions = {
    duration: 1000
};

export const animateDownArrowOnClick = () => {
    const arrow = downArrow();
    const animation = arrow.animate(downArrowAnimationKeyFrames, commonAnimationOptions)
    animation.play();
    return animation;
}

export const animateUpArrowOnClick = () => {
    const arrow = upArrow();
    const animation = arrow.animate(upArrowAnimationKeyFrames, commonAnimationOptions)
    animation.play();
    return animation;
}

export const animateDownArrowInfinitely = () => {
    const animation = downArrow().animate(downArrowAnimationKeyFrames, {
        ...commonAnimationOptions,
        iterations: 2
    });
    animation.play();
    return animation
}

export const animateUpArrowInfinitely = () => {
    const animation = upArrow().animate(upArrowAnimationKeyFrames, {
        ...commonAnimationOptions,
        iterations: 2
    });
    animation.play();
    return animation;
}

export const hideUpArrow = (delay = 0) => {
    const arrow = upArrow();
    arrow.style.pointerEvents = "none";
    const animation = arrow.animate([
        {transform: 'scale(1)'},
        {transform: 'scale(0)'}
    ], {duration: 200, delay, fill: "forwards"});
    animation.play();
    return animation;
};

export const hideDownArrow = (delay = 0) => {
    const arrow = downArrow()
    arrow.style.pointerEvents = "none";
    const animation = arrow.animate([
        {transform: 'scale(1) rotate(180deg)'},
        {transform: 'scale(0) rotate(180deg)'}
    ], {duration: 200, delay, fill: "forwards"});
    animation.play();
    return animation;
}

export const showUpArrow = () => {
    const arrow = upArrow();
    const animation = arrow.animate([
        {transform: 'scale(0)'}, {transform: 'scale(1)'}
    ], {duration: 200, fill: "forwards"});
    animation.onfinish = () => {
        arrow.style.pointerEvents = "auto";
    }
    animation.play();
    return animation;
}

export const showDownArrow = () => {
    let arrow = downArrow();
    const animation = arrow.animate([
        {transform: 'scale(0) rotate(180deg)'},
        {transform: 'scale(1) rotate(180deg)'}
    ], {
        duration: 200,
        fill: "forwards"
    });
    animation.onfinish = () => {
        arrow.style.pointerEvents = "auto";
    };
    animation.play();
    return animation;
};

export const cancelAnimation = animation => animation?.cancel();
