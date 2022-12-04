import React from "react";
import Carrousel from "../components/carrousel";
import LastVideo from "../components/lastVideos";
import AuthLayout from "../components/layouts/auth";
import Sidebar from "../components/sidebar";
import TopUsers from "../components/topUsers";

export default function Home() {
  const user = {
    id: 1,
    name: "João",
    image: "/images/avatar.svg",
    followers: 1000,
    following: [
      {
        id: 2,
        name: "Maria",
        image: "/images/avatar.svg",
        followers: 1000,
      },
      {
        id: 3,
        name: "José",
        image: "/images/avatar.svg",
        followers: 1000,
      },
    ],
  };

  const banners = [
    {
      id: 1,
      image: "/images/game-1.webp",
      link: "https://www.google.com.br",
    },
    {
      id: 2,
      image: "/images/game-2.webp",
      link: "https://www.google.com.br",
    },
    {
      id: 3,
      image: "/images/game-1.webp",
      link: "https://www.google.com.br",
    },
  ];

  const topUsers = [
    {
      id: 1,
      name: "João",
      image: "/images/avatar.svg",
      followers: 1000,
    },
    {
      id: 2,
      name: "Maria",
      image: "/images/avatar.svg",
      followers: 1000,
    },
    {
      id: 3,
      name: "José",
      image: "/images/avatar.svg",
      followers: 1000,
    },
    {
      id: 4,
      name: "João",
      image: "/images/avatar.svg",
      followers: 1000,
    },
    {
      id: 5,
      name: "Maria",
      image: "/images/avatar.svg",
      followers: 1000,
    },
    {
      id: 6,
      name: "José",
      image: "/images/avatar.svg",
      followers: 1000,
    },
  ];

  const lastStreams = [
    {
      id: 1,
      title: "Stream de teste",
      description: "Descrição da stream de teste",
      url: "https://www.google.com.br",
      views: 2300,
      image: "/images/game-1.webp",
      user: {
        id: 1,
        name: "João",
        image: "/images/avatar.svg",
        followers: 1000,
      },
    },
    {
      id: 2,
      title: "Stream de teste",
      description: "Descrição da stream de teste",
      url: "https://www.google.com.br",
      views: 2300,
      image: "/images/game-1.webp",
      user: {
        id: 1,
        name: "João",
        image: "/images/avatar.svg",
        followers: 1000,
      },
    },
    {
      id: 3,
      title: "Stream de teste",
      description: "Descrição da stream de teste",
      url: "https://www.google.com.br",
      views: 2300,
      image: "/images/game-1.webp",
      user: {
        id: 1,
        name: "João",
        image: "/images/avatar.svg",
        followers: 1000,
      },
    },
    {
      id: 4,
      title: "Stream de teste",
      description: "Descrição da stream de teste",
      url: "https://www.google.com.br",
      views: 2300,
      image: "/images/game-1.webp",
      user: {
        id: 1,
        name: "João",
        image: "/images/avatar.svg",
        followers: 1000,
      },
    },
    {
      id: 5,
      title: "Stream de teste",
      description: "Descrição da stream de teste",
      url: "https://www.google.com.br",
      views: 2300,
      image: "/images/game-1.webp",
      user: {
        id: 1,
        name: "João",
        image: "/images/avatar.svg",
        followers: 1000,
      },
    },
    {
      id: 6,
      title: "Stream de teste",
      description: "Descrição da stream de teste",
      url: "https://www.google.com.br",
      views: 2300,
      image: "/images/game-1.webp",
      user: {
        id: 1,
        name: "João",
        image: "/images/avatar.svg",
        followers: 1000,
      },
    },
  ];
  return (
    <AuthLayout className="flex flex-row">
      <Sidebar
        name={user.name}
        image={user.image}
        followers={user.followers}
        following={user.following}
        id={user.id}
      />
      <div className="w-10/12 bg-white min-h-screen ml-auto">
        <Carrousel banners={banners} />
        <div className="w-full flex flex-row justify-between">
          <TopUsers
            users={topUsers}
            className="w-1/2 flex flex-row flex-wrap"
          />
          <LastVideo
            videos={lastStreams}
            className="w-1/2 bg-cyan-600 flex flex-row flex-wrap justify-evenly pb-5"
          />
        </div>
      </div>
    </AuthLayout>
  );
}
