import Image from "next/image";
import React from "react";
import UserProps from "../../types/UserProps";

export default function User(props: UserProps) {
    return (
        <div className={`${props.className} h-fit`}>
            <Image
                src={props.image}
                width={150}
                height={150}
                alt="Logo"
                className="rounded-full mb-3 mx-auto"
            />
            <p className="text-black font-bold text-xl w-full text-center">{props.name}</p>
            <p className="text-gray-400 text-md w-full text-center">{Intl.NumberFormat("pt-BR", {
                style: "decimal",
                notation: "compact",
                compactDisplay: "short"
            }).format(props.followers || 0)} seguidores</p>
        </div>
    );
}
