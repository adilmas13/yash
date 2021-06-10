// eslint-disable-next-line no-unused-vars
import React from "preact";
import MasonryGrid from "../masonry-grid";
import {adverts} from "../../dataSource/adverts";

const breakpoints = [
    {
        point: 400,
        noOfColumns: 2,
        data: adverts
            .filter(it => it.id !== "blank")
            .sort((a, b) => a.id - b.id)
    }, {
        point: 800,
        noOfColumns: 3,
        data: adverts
            .filter(it => it.id !== "blank")
            .sort((a, b) => a.id - b.id)
    }, {
        point: 1200,
        noOfColumns: 4,
        data: adverts
    }]

const Adverts = () => {
    return <MasonryGrid breakpoints={breakpoints} />
};

export default Adverts;
