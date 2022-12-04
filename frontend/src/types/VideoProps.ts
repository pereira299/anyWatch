import UserProps from "./UserProps";

export default interface VideoProps {
    id: number;
    title: string;
    description: string;
    url: string;
    views: number;
    image: string;
    user: UserProps;
    className?: string;
}