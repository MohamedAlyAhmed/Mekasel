import classNames from "classnames";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import styles from "./Image.module.scss";
import { ImageProps } from "./Image.types";

const { imgHidden, container, loadingContainer } = styles;

const Image = ({ alt, src }: ImageProps) => {
    const [loadImage, setLoadImage] = useState(true);

    const handleLoad = () => {
        setLoadImage(false);
    };

    const handleError = () => {
        setLoadImage(false);
    };

    return (
        <div className={container}>
            <LazyLoadImage
                src={src}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                className={classNames(loadImage ? imgHidden : "")}
            />
            {loadImage && (
                <div className={loadingContainer}>
                    <Skeleton style={{ width: "100%", height: "100%" }} />
                </div>
            )}
        </div>
    );
};

export default Image;
