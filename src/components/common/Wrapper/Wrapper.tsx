import { ReactNode } from "react";
import styles from "./Wrapper.module.scss";

const { wrapper } = styles;

const Wrapper = ({ children }: { children: ReactNode }) => {
    return <div className={wrapper}>{children}</div>;
};

export default Wrapper;
