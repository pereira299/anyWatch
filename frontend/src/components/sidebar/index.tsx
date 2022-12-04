import Image from "next/image";
import React from "react";
import UserProps from "../../types/UserProps";
import Follow from "../follow";

export default function Sidebar(props: UserProps) {
  return (
    <div className="w-2/12 bg-cyan-700 min-h-screen fixed top-0 py-10">
      <div>
        <div className="w-6/12 mx-auto mb-10">
          <Image
            src={props.image || "/images/avatar.svg"}
            width={100}
            height={100}
            alt="Logo"
            className="rounded-full mx-auto mb-3"
          />
          <p className="text-white font-bold text-xl w-full text-center">
            {props.name}
          </p>
          <p className="text-gray-400 text-md w-full text-center">
            {Intl.NumberFormat("pt-BR", {
              style: "decimal",
              notation: "compact",
              compactDisplay: "short",
            }).format(props.followers || 0)}{" "}
            seguidores
          </p>
        </div>
      </div>
      <div className="">
        <p className="font-bold text-white px-3">Seguindo</p>
        {props.following &&
          props.following.map((follow) => (
            <Follow user={follow} key={follow.id} />
          ))}
      </div>
    </div>
  );
}
