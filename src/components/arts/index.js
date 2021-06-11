// eslint-disable-next-line no-unused-vars
import React from "preact";
import MasonryGrid from "../masonry-grid";
import {arts} from "../../dataSource/arts";
import {useState} from "preact/hooks";
import style from "./style.css"
import Preview from "../preview";

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
    const [previewMedia, setPreviewMedia] = useState(undefined)

    const handleClick = media => {
        const group = arts.filter(it => it.groupId === media.groupId);
        setPreviewMedia({group, selected: group.indexOf(media)})
    }
    
    const handlePreviewBackClick = () => setPreviewMedia(undefined);

    return <div className={style.parent}>
        <MasonryGrid
            breakpoints={breakpoints}
            handleClick={handleClick}
        />
        {previewMedia && <Preview data={previewMedia}  handleBackClick={handlePreviewBackClick} />}
    </div>
}

export default Arts;
