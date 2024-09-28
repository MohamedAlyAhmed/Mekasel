export interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
    title?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    loading?: boolean;
    loadingComponent?: React.ReactNode;
    loadingSkeleton?: boolean;
}