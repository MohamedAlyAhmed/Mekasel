import Wrapper from "@components/common/Wrapper/Wrapper";
import { PiEmptyLight } from "react-icons/pi";
import styles from "./EmptyMessage.module.scss";

const { container } = styles;

type EmptyMessageProps = {
    icon?: React.ReactNode;
    message: string;
};

const EmptyMessage = ({
    icon = <PiEmptyLight />,
    message,
}: EmptyMessageProps) => {
    return (
        <Wrapper>
            <div className={container}>
                {icon && <div>{icon}</div>}
                <p>{message}</p>
            </div>
        </Wrapper>
    );
};

export default EmptyMessage;
