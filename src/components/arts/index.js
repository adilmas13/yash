// eslint-disable-next-line no-unused-vars
import React from "preact";
import MasonryGrid from "../masonry-grid";
import {arts} from "../../dataSource/arts";

const breakpoints = [
    {
        point: 400,
        noOfColumns: 3,
        data: arts
            .filter(it => it.id !== "blank")
            .sort((a, b) => a.id - b.id)
    }, {
        point: 800,
        noOfColumns: 4,
        data: arts
            .filter(it => it.id !== "blank")
            .sort((a, b) => a.id - b.id)
    }, {
        point: 1200,
        noOfColumns: 5,
        data: arts
    }];

const Arts = () => {
    return <MasonryGrid breakpoints={breakpoints} />
};

export default Arts;
