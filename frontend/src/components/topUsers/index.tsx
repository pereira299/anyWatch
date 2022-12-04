import React from "react";
import UserProps from "../../types/UserProps";
import Follow from "../follow";
import User from "../user";

export default function TopUsers(props: TopUsersProps) {
    return (
        <div className={props.className}>
            {props.users.map((user) => (
                <User {...user} key={user.id} className="w-1/2" />
            ))}
        </div>
    )
}

interface TopUsersProps {
    users: UserProps[];
    className?: string;
}