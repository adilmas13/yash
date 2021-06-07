// eslint-disable-next-line no-unused-vars
import React from "preact";
import {adverts, getAdverts, testIt} from "../../utils/dataService";
import CommonListing2 from "../common2";

const Adverts = () => {
    const config = {
        data: getAdverts(),
        type: "adverts"
    }
    const mutated = adverts.reduce((accumulator, currentValue) => {
        const groupId = currentValue.groupId;
        const mapped = currentValue.assets.map(asset => {
            asset["groupId"] = groupId;
            return asset;
        });
        return [...accumulator, ...mapped];
    }, []);

    const containerWidth = 800;
    const noOfColumns = 4;
    const columnWidth = containerWidth / noOfColumns;
    const bottomMargin = 10;
    let columnIndex = 0
    console.log(mutated);
    const final = testIt.reduce((accumulator, value, index) => {
        if (columnIndex >= noOfColumns) {
            columnIndex = 0;
        }
        const topIndex = (index - noOfColumns);
        let data;
        if (value.id === "blank") {
            data = {
                top: topIndex > -1 ? accumulator[topIndex].height + accumulator[topIndex].top : 0,
                height: 0,
                left: columnWidth * columnIndex,
                width: columnWidth,
                media: value
            };
        } else {
            const aspect = value.ratio.split(":");
            data = {
                top: topIndex > -1 ? accumulator[topIndex].height + accumulator[topIndex].top + bottomMargin : 0,
                height: columnWidth / (aspect[0] / aspect[1]),
                left: columnWidth * columnIndex,
                width: columnWidth,
                media: value
            };
        }

        ++columnIndex;
        return [...accumulator, ...[data]]
    }, [])
    console.log(final);

    return <CommonListing2 config={{
        data: final,
        type: "adverts"
    }} />
};

export default Adverts;
