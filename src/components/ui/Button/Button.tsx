import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

const { buttonStyle, iconStyle } = styles;

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
    title?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    type = "button",
    className = "",
    disabled = false,
    title,
    startIcon,
    endIcon,
}) => {
    return (
        <button
            title={title}
            onClick={onClick}
            type={type}
            className={classNames(className || "", buttonStyle)}
            disabled={disabled}
        >
            {startIcon && <div className={iconStyle}>{startIcon}</div>}
            <div>{children}</div>
            {endIcon && <div className={iconStyle}>{endIcon}</div>}
        </button>
    );
};

export default Button;
