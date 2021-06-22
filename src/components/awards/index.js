// eslint-disable-next-line no-unused-vars
import {createRef, React} from "preact";
import style from './style.css';
import {awardsDescription, awardsDetails, awardsThumbnails} from "../../dataSource/awards";
import {useEffect, useState} from "preact/hooks";
import Logo from "../logo";
import Description from "../description";
import VerticalPreview from "../vertical-preview";
import LazyImage from "../lazy-image";

const MediaCell = (props) => {
    const media = props.media;

    return <div class={style["image-wrapper"]} onClick={() => props.onClicked()}>
        <div className={style.cell}>
            <LazyImage
                class={style.cell}
                src={media.thumbnail}
                color={`media.color}33`}
                borderRadius={'10px'}
            />
        </div>
    </div>
};

const Awards = () => {
        const containerRef = createRef();
        const [preview, setPreview] = useState(undefined);
        const [description, setDescription] = useState(undefined);

        const onClicked = (media) => {
            setPreview({
                group: awardsDetails.filter(it => it.groupId === media.id),
                selected: 0,
            });
            setDescription(awardsDescription.find(it => it.id === media.id));
        };

        const handleDescriptionBackClick = () => setDescription(undefined);

        useEffect(() => {
            const container = containerRef.current;
            container.style.overflow = preview ? 'hidden' : 'inherit';
        }, [preview])

        return <div class={style.parent}>
            <div className={style['logo-wrapper']}>
                <Logo />
            </div>
            <div className={style.container} ref={containerRef}>
                <div className={style.grid}>
                    {awardsThumbnails.map(data => <MediaCell media={data} onClicked={() => onClicked(data)} />)}
                </div>
            </div>
            {preview &&
            <VerticalPreview
                data={preview}
                handleBackClick={() => setPreview(undefined)} />}
            {description &&
            <Description data={description} onCloseClicked={handleDescriptionBackClick} />}
        </div>
    }
;

export default Awards;
