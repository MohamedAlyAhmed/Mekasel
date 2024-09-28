import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import DotsSpinner from "../DotsSpinner/DotsSpinner";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const { buttonStyle, iconStyle } = styles;

const Button = (props: ButtonProps) => {
    const {
        onClick,
        children,
        type = "button",
        className = "",
        disabled = false,
        title,
        startIcon,
        endIcon,
        loading,
        loadingComponent,
        loadingSkeleton,
    } = props;

    return (
        <>
            {loadingSkeleton ? (
                <Skeleton width={152} height={48} />
            ) : (
                <button
                    title={title}
                    onClick={onClick}
                    type={type}
                    className={classNames(className || "", buttonStyle)}
                    disabled={disabled}
                >
                    {startIcon && <div className={iconStyle}>{startIcon}</div>}
                    {!loading && <div>{children}</div>}
                    {loading &&
                        (loadingComponent ?? (
                            <DotsSpinner size={7} color="white" />
                        ))}
                    {endIcon && <div className={iconStyle}>{endIcon}</div>}
                </button>
            )}
        </>
    );
};

export default Button;
