import Image from "next/image";
import React from "react";
import AuthLayout from "../../components/layouts/auth";
import TextLabel from "../../components/TextLabel";
import Video from "../../components/video";
import VideoProps from "../../types/VideoProps";

export default function User(props: UserProps) {
  return (
    <AuthLayout className="h-fit">
      <div className="flex flex-row p-5">
        <Image
          src={props.image}
          width={500}
          height={500}
          alt="Logo"
          className="rounded-full mb-3 mx-auto"
        />
        <div className="w-6/12 flex flex-row flex-wrap justify-between py-14">
          <TextLabel text={props.name} label="Nome" className="w-4/12" />
          <TextLabel text={props.email} label="Email" className="w-4/12" />
          <TextLabel
            text={props.username}
            label="Username"
            className="w-4/12"
          />
          <TextLabel
            text={Intl.NumberFormat("pt-BR", {
              style: "decimal",
              notation: "compact",
              compactDisplay: "short",
            }).format(props.followers)}
            label="Seguidores"
          />
          <TextLabel
            text={Intl.DateTimeFormat("pt-BR", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(new Date(props.nasc || "2000-01-01"))}
            label="Data de nascimento"
          />
          <TextLabel
            text={Intl.DateTimeFormat("pt-BR", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(new Date(props.created_at || "2000-01-01"))}
            label="Criado em"
          />
          <TextLabel text={props.bio} label="Bio" />
        </div>
      </div>
      {props.videos && props.videos.length > 0 ? (
        <div className="flex flex-row flex-wrap w-screen p-5">
          {props.videos &&
            props.videos.map((video: VideoProps) => (
              <Video {...video} key={video.id} black className="w-2/12 mr-10"/>
            ))}
        </div>
      ) : (
        <div className="w-screen flex">
          <p className="text-gray-500 m-auto font-bold text-3xl">
            Nenhum vídeo encontrado
          </p>
        </div>
      )}
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
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@teste.com",
    followers: 100000,
    nasc: "2000-01-01",
    created_at: "2021-01-01",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl.",
    image: "/images/avatar.svg",
    videos: [
      {
        id: 1,
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
      },
      {
        id: 2,
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
      },
      {
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
      },
    ],
  };
  return {
    props: {
      ...user,
    },
    revalidate: 60,
  };
}

interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  followers: number;
  nasc: string;
  bio: string;
  image: string;
  created_at: string;
  videos: VideoProps[];
}
