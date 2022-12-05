import Image from "next/image";
import React from "react";
import VideoProps from "../../types/VideoProps";

export default function Video(props: VideoProps) {
    return (
        <div className={props.className}>
            <Image
                src={props.image}
                width={300}
                height={200}
                alt="Logo"
                className="w-full mb-3"
            />
            <div className="flex flex-row">
                <Image
                    src={props.user.image}
                    width={50}
                    height={50}
                    alt="Logo"
                    className="rounded-full mr-3"
                />
                <div>
                    <p className={`text-md font-bold ${props.black ? "text-black" : "text-white"}`}>{props.title}</p>
                    <p className={`${props.black ? "text-gray-600" : "text-gray-400"}`}>{Intl.NumberFormat("pt-BR", {
                        style: "decimal",
                        notation: "compact",
                        compactDisplay: "short"
                    }).format(props.views || 0)} visualizações</p>
                </div>
            </div>
        </div>
    )
}