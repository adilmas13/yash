// eslint-disable-next-line no-unused-vars
import React from "preact";
import MasonryGrid from "../masonry-grid";
import {adverts, advertsDescription} from "../../dataSource/adverts";
import {useState} from "preact/hooks";
import style from './style.css'
import HorizontalPreview from "../horizontal-preview";
import Description from "../description";
import Logo from "../logo";

const breakpoints = [
    {
        point: 400,
        containerWidth: "100%",
        noOfColumns: 2,
        data: adverts
            .filter(it => it.id !== "blank")
            .sort((a, b) => a.id - b.id)
    }, {
        point: 800,
        containerWidth: "100%",
        noOfColumns: 3,
        data: adverts
            .filter(it => it.id !== "blank")
            .sort((a, b) => a.id - b.id)
    },
    {
        point: 1000,
        containerWidth: "900px",
        noOfColumns: 4,
        data: adverts
    },
    {
        point: 1200,
        containerWidth: "1100px",
        noOfColumns: 4,
        data: adverts
    },
    {
        point: 1300,
        containerWidth: "1200px",
        noOfColumns: 4,
        data: adverts
    }, {
        point: 3000,
        containerWidth: "2200px",
        noOfColumns: 4,
        data: adverts
    },
    {
        point: 5000,
        containerWidth: "3500px",
        noOfColumns: 4,
        data: adverts
    }
]

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
        <div className={style["logo-wrapper"]}>
            <Logo />
        </div>
        <MasonryGrid
            breakpoints={breakpoints}
            handleClick={handleClick}
            disableScroll={previewMedia} />
        {previewMedia &&
        <HorizontalPreview
            data={previewMedia}
            handleBackClick={() => setPreviewMedia(undefined)} />}
        {selectedDescription &&
        <Description data={selectedDescription} onCloseClicked={handleDescriptionBackClick} />}
    </div>
};

export default Adverts;
