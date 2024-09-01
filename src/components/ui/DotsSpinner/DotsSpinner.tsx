import styles from "./DotsSpinner.module.scss";

const { dotsContainer, dot } = styles;

type DotsSpinnerProps = {
    size?: number;
    gap?: number;
    containerHeight?: number;
    color?: string;
    count?: number;
};

const DotsSpinner = ({
    size = 12,
    gap = 4,
    containerHeight = 12,
    color,
    count = 4,
}: DotsSpinnerProps) => (
    <div
        className={dotsContainer}
        style={{ gap: `${gap}px`, height: `${containerHeight}px` }}
    >
        {new Array(count).fill(0).map((_, index) => (
            <div
                key={index}
                className={dot}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: color,
                }}
            />
        ))}
    </div>
);

export default DotsSpinner;
