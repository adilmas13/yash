import {useEffect, useState} from "preact/hooks";

export const useIsMobileView = (breakpoint) => {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 701);
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])
    return width <= breakpoint;
}
