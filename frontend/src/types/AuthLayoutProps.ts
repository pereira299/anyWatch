import UserProps from "./UserProps";

export interface AuthLayoutProps {
    children: React.ReactNode;
    className?: string;
    user?: UserProps;
}