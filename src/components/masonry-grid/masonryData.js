import {useEffect, useState} from "preact/hooks";

const getDataBasedOnBreakPoint = (breakpoints) => {
    const width = window.innerWidth;
    return breakpoints.reduce((acc, value) => {
        if (width > value.point)
            return value;
        return acc;
    }, breakpoints[0]);
};

export const useMasonryData = (breakpoints) => {

    const [data, setData] = useState([]);
    const [breakPoint, setBreakPoint] = useState(getDataBasedOnBreakPoint(breakpoints));

    useEffect(() => {
        let timeOut;
        const handleWindowResize = () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
            timeOut = setTimeout(() => {
                setBreakPoint(Object.assign({}, getDataBasedOnBreakPoint(breakpoints)));
            }, 1000);
        };
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    useEffect(() => {
        const containerWidth = document.getElementById('scroll-container').offsetWidth;
        const noOfColumns = breakPoint.noOfColumns;
        const gap = 10;
        const columnWidth = ((containerWidth - (gap * (noOfColumns + 1))) / noOfColumns);
        const final = breakPoint.data
            .reduce((accumulator, value, index) => {
                const temp = index % noOfColumns;
                const topIndex = (index - noOfColumns);
                const aspect = value.ratio.split(":");
                const topGap = value.id !== "blank" ? gap : 0;
                const data = {
                    top: topIndex > -1 ? accumulator[topIndex].height + accumulator[topIndex].top + topGap : 0,
                    height: value.id !== "blank" ? columnWidth / (aspect[0] / aspect[1]) : 0,
                    left: (columnWidth * temp) + (gap * (temp + 1)),
                    width: columnWidth,
                    media: value
                }
                return [...accumulator, ...[data]]
            }, [])

        setData(final);
    }, [breakPoint])
    return data;
}
