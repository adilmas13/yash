// eslint-disable-next-line no-unused-vars
import React from "preact";
import {adverts} from "../../utils/dataService";
import CommonListing2 from "../common2";
import {useEffect, useState} from "preact/hooks";

const breakpoints = [{
    point: 600,
    noOfColumns: 2,
    width: '100'
}, {
    point: 800,
    noOfColumns: 3,
    width: '600'
}, {
    point: 1200,
    noOfColumns: 4,
    width: '1200'
}];

const getDataBasedOnBreakPoint = () => {
    const width = window.innerWidth;
    return breakpoints.reduce((acc, value) => {
        if (width > value.point)
            return value;
        return acc;
    }, breakpoints[0]);
};

const useAdvertsData = () => {
    const [data, setData] = useState([]);
    const [breakPoint, setBreakPoint] = useState(getDataBasedOnBreakPoint());

    useEffect(() => {
        let timeOut;
        const handleWindowResize = () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
            timeOut = setTimeout(() => {
                setBreakPoint(Object.assign({}, getDataBasedOnBreakPoint()));
            }, 1000);
        };
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    useEffect(() => {
        const containerWidth = document.getElementById('scroll-container').offsetWidth;
        const noOfColumns = breakPoint.noOfColumns;
        const gap = 10;
        const columnWidth = (containerWidth / noOfColumns) - gap;
        const final = adverts.reduce((accumulator, value, index) => {
            const temp = index % noOfColumns;
            const topIndex = (index - noOfColumns);
            const left = columnWidth * temp + (index % noOfColumns !== 0 ? (gap * temp) : 0);
            let data;
            if (value.id === "blank") {
                data = {
                    top: topIndex > -1 ? accumulator[topIndex].height + accumulator[topIndex].top : 0,
                    height: 0,
                    left,
                    width: columnWidth,
                    media: value
                };
            } else {
                const aspect = value.ratio.split(":");
                data = {
                    top: topIndex > -1 ? accumulator[topIndex].height + accumulator[topIndex].top + gap : 0,
                    height: columnWidth / (aspect[0] / aspect[1]),
                    left,
                    width: columnWidth,
                    media: value
                };
            }
            return [...accumulator, ...[data]]
        }, [])

        setData(final);
    }, [breakPoint])
    return data;
}

const Adverts = () => {
    const data = useAdvertsData();

    return <CommonListing2 config={{
        data,
        type: "adverts"
    }} />
};

export default Adverts;
