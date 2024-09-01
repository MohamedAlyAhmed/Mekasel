import Wrapper from "@components/common/Wrapper/Wrapper";
import styles from "./GridList.module.scss";
import { EmptyMessage } from "@components/ui";

const { container } = styles;

type GridListProps<T> = {
    records: T[];
    renderItem: (record: T) => React.ReactNode;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    spacing?: number;
};

type HasId = {
    id?: number;
};

const GridList = <T extends HasId>({
    records,
    renderItem,
    xs,
    sm,
    md,
    lg,
    xl,
    spacing,
}: GridListProps<T>) => {
    const list =
        records.length > 0 ? (
            <div
                className={container}
                style={
                    {
                        "--xs": xs,
                        "--sm": sm,
                        "--md": md,
                        "--lg": lg,
                        "--xl": xl,
                        "--spacing": spacing,
                    } as React.CSSProperties
                }
            >
                {records?.map((record) => (
                    <div key={record.id}>{renderItem(record)}</div>
                ))}
            </div>
        ) : (
            <EmptyMessage message="no records for now ..." />
        );

    return <Wrapper>{list}</Wrapper>;
};

export default GridList;
