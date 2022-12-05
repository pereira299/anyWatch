import Image from "next/image";
import React from "react";
import AuthLayout from "../../components/layouts/auth";
import VideoProps from "../../types/VideoProps";

export default function Stream(props: VideoProps) {
  return (
    <AuthLayout className="p-10">
      <video controls autoPlay className="w-11/12 mx-auto">
        <source src="http://localhost:8000/stream" type="video/mp4" />
      </video>
      <div className="flex flex-row px-20 mt-3">
        <Image
          src={props.user?.image || "/images/avatar.svg"}
          width={50}
          height={50}
          alt="Logo"
          className="rounded-full mr-5"
        />
        <div>
          <p className="text-md font-bold text-black">{props.title}</p>
          <p className="text-gray-400">
            {Intl.NumberFormat("pt-BR", {
              style: "decimal",
              notation: "compact",
              compactDisplay: "short",
            }).format(props.views)}{" "}
            visualizações
          </p>
        </div>

      </div>
        <p className="mx-auto mt-5 w-11/12">{props.description}</p>
    </AuthLayout>
  );
}

export async function getStaticPaths() {
  const paths: String[] = [];
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps() {
  const user = {
    id: 3,
    title: "Video 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl.",
    url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    image: "/images/game-1.webp",
    views: 100,
    user: {
      id: 1,
      name: "John Doe",
      image: "/images/avatar.svg",
    },
  };

  return {
    props: {
      ...user,
    },
    revalidate: 60,
  };
}
