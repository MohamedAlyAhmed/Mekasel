import { DotsSpinner } from "@components/ui";
import { TError, TLoading } from "@customTypes/shared";
import styles from "./Loading.module.scss";

const { spinner, spinnerAndMessage } = styles;

type LoadingProps = {
    status: TLoading;
    error: TError;
    children: React.ReactNode;
    loadingMessage?: string;
};

const Loading = ({ status, error, children, loadingMessage }: LoadingProps) => {
    if (status === "pending") {
        return (
            <div className={spinner}>
                <div className={spinnerAndMessage}>
                    <DotsSpinner />
                    {loadingMessage && <p>{loadingMessage}</p>}
                </div>
            </div>
        );
    }

    if (status === "failed") {
        return <p>{error}</p>;
    }

    return <>{children}</>;
};

export default Loading;
