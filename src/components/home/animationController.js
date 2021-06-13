import {downArrow, homeBody, upArrow, yashText} from "./utils";

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

export const revealHome = () => {
    let body = homeBody();
    const animation = body.animate([
        {opacity: 0},
        {opacity: 1}
    ], {
        duration: 1500,
        fill: "forwards"
    })
    animation.play()
    return animation
}

const revealArrow = arrow => {
    const animation = arrow.animate([
        {opacity: 0},
        {opacity: 0.7}
    ], {
        duration: 1500,
        delay : 2000,
        fill: "forwards"
    });
    animation.play();
    return animation;
}
export const revealDownArrow = () => revealArrow(downArrow())

export const revealUpArrow = () => revealArrow(upArrow())

export const decreaseYashTextOpacity = () => {
    const text = yashText()
    const animation = text.animate([
        {opacity: 1},
        {opacity: 0.7}
    ], {
        duration: 500,
        delay : 2000,
        fill: "forwards"
    });
    animation.play();
    return animation;
}
