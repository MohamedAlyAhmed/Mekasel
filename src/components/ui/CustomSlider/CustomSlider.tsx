import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./CustomSlider.module.scss";

const { arrowStyle } = styles;

type SliderProps = {
    customSettings?: object;
    children: React.ReactNode;
};

type ArrowProps = {
    className?: string;
    style?: object;
    onClick?: () => void;
};

function SampleNextArrow({ className, style, onClick }: ArrowProps) {
    return (
        <div
            className={`${className} ${arrowStyle}`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
    return (
        <div
            className={`${className} ${arrowStyle}`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

const CustomSlider = ({ customSettings = {}, children }: SliderProps) => {
    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const settings = {
        ...defaultSettings,
        ...customSettings,
    };

    return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlider;
