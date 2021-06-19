// eslint-disable-next-line no-unused-vars
import React from "preact";
import MasonryGrid from "../masonry-grid";
import {arts, artsDescription} from "../../dataSource/arts";
import {useState} from "preact/hooks";
import style from "./style.css"
import Preview from "../preview";
import Description from "../description";

const breakpoints = [
    {
        point: 400,
        noOfColumns: 2,
        containerWidth: "100%",
        data: arts
            .filter(it => it.id !== "blank")
            .sort((a, b) => a.id - b.id)
    },
    {
        point: 700,
        noOfColumns: 3,
        containerWidth: "100%",
        data: arts
            .filter(it => it.id !== "blank")
            .sort((a, b) => a.id - b.id)
    }, {
        point: 900,
        noOfColumns: 4,
        containerWidth: "100%",
        data: arts
            .filter(it => it.id !== "blank")
            .sort((a, b) => a.id - b.id)
    }, {
        point: 1000,
        containerWidth: "900px",
        noOfColumns: 5,
        data: arts
    },
    {
        point: 1200,
        containerWidth: "1100px",
        noOfColumns: 5,
        data: arts
    },
    {
        point: 1300,
        containerWidth: "1200px",
        noOfColumns: 5,
        data: arts
    }, {
        point: 3000,
        containerWidth: "2200px",
        noOfColumns: 5,
        data: arts
    },
    {
        point: 5000,
        containerWidth: "3500px",
        noOfColumns: 5,
        data: arts
    }];

const Arts = () => {
    const [previewMedia, setPreviewMedia] = useState(undefined)
    const [description, setDescription] = useState(undefined)

    const handleClick = media => {
        const group = arts.filter(it => it.groupId === media.groupId);
        setPreviewMedia({group, selected: group.indexOf(media)})
        setDescription(artsDescription.find(it => it.id === media.groupId))
    }

    const handlePreviewBackClick = () => setPreviewMedia(undefined);

    const handleDescriptionBackClick = () => setDescription(undefined);

    return <div className={style.parent}>
        <MasonryGrid
            breakpoints={breakpoints}
            handleClick={handleClick}
            disableScroll={previewMedia} />
        {previewMedia && <Preview data={previewMedia} handleBackClick={handlePreviewBackClick} />}
        {description && <Description data={description} onCloseClicked={handleDescriptionBackClick} />}
    </div>
}

export default Arts;
