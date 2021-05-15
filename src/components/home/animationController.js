
const upArrow = () => document.getElementById('up_arrow');
const downArrow = () => document.getElementById('down_arrow');

export const animateDownArrowOnClick = () => {
    const animation = downArrow().animate([
        {transform: 'translateY(0px) rotate(180deg)'},
        {transform: 'translateY(10px) rotate(180deg)'},
        {transform: 'translateY(0px) rotate(180deg)'},
    ], {
        duration : 1000
    })
    animation.play();
    return animation;
}

export const animateUpArrowOnClick = () => {
    const animation = upArrow().animate([
        {transform: 'translateY(0px)'},
        {transform: 'translateY(-10px)'},
        {transform: 'translateY(0px)'},
    ], {
        duration : 1000
    })
    animation.play();
    return animation;
}

export const cancelAnimation = animation => animation?.cancel();
