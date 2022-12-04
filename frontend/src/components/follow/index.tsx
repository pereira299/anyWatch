import Image from "next/image";
import React from "react";
import UserProps from "../../types/UserProps";

export default function Follow(props: FollowProps) {
    return (
        <div className="flex flex-row hover:bg-cyan-800 px-3 py-2">
            <div className="mr-3">
                <Image 
                    src={props.user.image}
                    width={50}
                    height={50}
                    alt="Logo"
                    className="rounded-full"
                />
            </div>
            <div>
                <p className="text-md font-bold text-white">{props.user.name}</p>
                <p className="text-gray-400">{Intl.NumberFormat("pt-BR", {
                style: "decimal",
                notation: "compact",
                compactDisplay: "short"
            }).format(props.user.followers || 0)} seguidores</p>
            </div>
        </div>
    );
}


interface FollowProps {
    user: UserProps;
}