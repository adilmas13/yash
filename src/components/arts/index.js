// eslint-disable-next-line no-unused-vars
import React from "preact";
import MasonryGrid from "../masonry-grid";
import {arts, arts_mobile} from "../../dataSource/arts";
import {useEffect, useState} from "preact/hooks";
import style from "./style.css"
import HorizontalPreview from "../horizontal-preview";
import Description from "../description";
import Logo from "../logo";
import VerticalPreview from "../vertical-preview";
import {awardsDescription} from "../../dataSource/awards";

const breakpoints = [
    {
        point: 400,
        noOfColumns: 2,
        containerWidth: "100%",
        data: arts_mobile
    },
    {
        point: 700,
        noOfColumns: 2,
        containerWidth: "100%",
        data: arts_mobile
    },
    {
        point: 900,
        noOfColumns: 5,
        containerWidth: "100%",
        data: arts
    },
    {
        point: 1000,
        containerWidth: "100%",
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

let viewedDescription = [];

const Arts = () => {
    const [previewMedia, setPreviewMedia] = useState(undefined)
    const [description, setDescription] = useState(undefined)

    useEffect(() => {
        viewedDescription = [];
    }, [])

    const handleClick = media => {
        const group = arts.filter(it => it.groupId === media.groupId);
        setPreviewMedia({group, selected: group.indexOf(media)})
        if (!viewedDescription.includes(media.id)) {
            setDescription(awardsDescription.find(it => it.id === media.id));
            viewedDescription.push(media.id);
        }
    }

    const handlePreviewBackClick = () => setPreviewMedia(undefined);

    const handleDescriptionBackClick = () => setDescription(undefined);

    return <div className={style.parent}>
        <div className={style["logo-wrapper"]}>
            <Logo />
        </div>
        <MasonryGrid
            breakpoints={breakpoints}
            handleClick={handleClick}
            disableScroll={previewMedia} />
        {previewMedia && (
            window.innerWidth <= 1000 ?
                <VerticalPreview
                    data={previewMedia}
                    handleBackClick={handlePreviewBackClick} /> :
                <HorizontalPreview
                    data={previewMedia}
                    handleBackClick={handlePreviewBackClick} />
        )}
        {description && <Description data={description} onCloseClicked={handleDescriptionBackClick} />}
    </div>
}

export default Arts;
