import {useEffect, useState} from "preact/hooks";

export const useIsMobileView = (breakpoint) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth)
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])
    return width <= breakpoint;
}
