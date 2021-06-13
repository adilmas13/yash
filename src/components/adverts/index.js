// eslint-disable-next-line no-unused-vars
import React from "preact";
import MasonryGrid from "../masonry-grid";
import {adverts, advertsDescription} from "../../dataSource/adverts";
import {useState} from "preact/hooks";
import style from './style.css'
import Preview from "../preview";
import Description from "../description";

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
    const [previewMedia, setPreviewMedia] = useState(undefined);
    const [selectedDescription, setSelectedDescription] = useState(undefined);

    const handleClick = (media) => {
        const group = adverts.filter(it => it.groupId === media.groupId);
        setPreviewMedia({
            group,
            selected: group.indexOf(media),
        })
        setSelectedDescription(advertsDescription.find(it => it.id === media.groupId));
    };

    const handleDescriptionBackClick = () => setSelectedDescription(undefined);

    return <div className={style.parent}>
        <MasonryGrid
            breakpoints={breakpoints}
            handleClick={handleClick}
            disableScroll={previewMedia}
        />
        {previewMedia &&
        <Preview
            data={previewMedia}
            handleBackClick={() => setPreviewMedia(undefined)} />}
        {selectedDescription &&
        <Description data={selectedDescription} onCloseClicked={handleDescriptionBackClick} />}
    </div>
};

export default Adverts;
