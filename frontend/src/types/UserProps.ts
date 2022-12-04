export default interface UserProps {
    id: number;
    name: string;
    image: string;
    followers?: number;
    following?: UserProps[];
    className?: string;
}