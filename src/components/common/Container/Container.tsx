import { ReactNode } from "react";
import styles from "./Container.module.scss";

const { container } = styles;

const Container = ({ children }: { children: ReactNode }) => {
    return <div className={container}>{children}</div>;
};

export default Container;
