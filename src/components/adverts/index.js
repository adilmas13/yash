// eslint-disable-next-line no-unused-vars
import React from "preact";
import MasonryGrid from "../masonry-grid";
import {adverts, adverts_mobile, advertsDescription} from "../../dataSource/adverts";
import {useEffect, useState} from "preact/hooks";
import style from './style.css'
import HorizontalPreview from "../horizontal-preview";
import Description from "../description";
import Logo from "../logo";
import VerticalPreview from "../vertical-preview";

const breakpoints = [
    {
        point: 400,
        containerWidth: "100%",
        noOfColumns: 2,
        data: adverts_mobile
    }, {
        point: 800,
        containerWidth: "100%",
        noOfColumns: 4,
        data: adverts
    },
    {
        point: 1000,
        containerWidth: "100%",
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
        point: 2500,
        containerWidth: "2100px",
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

let viewedDescription = [];

const Adverts = () => {
    const [previewMedia, setPreviewMedia] = useState(undefined);
    const [description, setDescription] = useState(undefined);

    const handleClick = (media) => {
        const group = adverts.filter(it => it.groupId === media.groupId);
        setPreviewMedia({
            group,
            selected: group.indexOf(media),
        })
        if (!viewedDescription.includes(media.groupId)) {
            setDescription(advertsDescription.find(it => it.id === media.groupId));
            viewedDescription.push(media.groupId);
        }
    };

    useEffect(() => {
        viewedDescription = [];
    }, [])

    const handleDescriptionBackClick = () => setDescription(undefined);

    const handlePreviewBackClick = () => setPreviewMedia(undefined)

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
        {description &&
        <Description data={description} onCloseClicked={handleDescriptionBackClick} />}
    </div>
};

export default Adverts;
