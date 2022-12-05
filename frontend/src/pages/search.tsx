import { TextField } from "@mui/material";
import React from "react";
import AuthLayout from "../components/layouts/auth";
import Video from "../components/video";
import VideoProps from "../types/VideoProps";

export default function Search() {
  const [search, setSearch] = React.useState("");
  const [videos, setVideos] = React.useState<VideoProps[]>([
    {
      id: 1,
      title: "Como criar um jogo 2D com Phaser",
      description: "Aprenda a criar um jogo 2D com Phaser",
      image: "/images/game-1.webp",
      url: "https://www.youtube.com/watch?v=3EMxBkqC4z0",
      views: 1000,
      user: {
        id: 1,
        name: "João",
        image: "/images/avatar.svg",
        followers: 1000,
      },
    },
    {
        id: 2,
        title: "Como criar um jogo 2D com Phaser",
        description: "Aprenda a criar um jogo 2D com Phaser",
        image: "/images/game-1.webp",
        url: "https://www.youtube.com/watch?v=3EMxBkqC4z0",
        views: 1000,
        user: {
          id: 1,
          name: "João",
          image: "/images/avatar.svg",
          followers: 1000,
        },
      },
      {
        id: 3,
        title: "Como criar um jogo 2D com Phaser",
        description: "Aprenda a criar um jogo 2D com Phaser",
        image: "/images/game-1.webp",
        url: "https://www.youtube.com/watch?v=3EMxBkqC4z0",
        views: 1000,
        user: {
          id: 1,
          name: "João",
          image: "/images/avatar.svg",
          followers: 1000,
        },
      },
      {
        id: 4,
        title: "Como criar um jogo 2D com Phaser",
        description: "Aprenda a criar um jogo 2D com Phaser",
        image: "/images/game-1.webp",
        url: "https://www.youtube.com/watch?v=3EMxBkqC4z0",
        views: 1000,
        user: {
          id: 1,
          name: "João",
          image: "/images/avatar.svg",
          followers: 1000,
        },
      },
  ]);

  return (
    <AuthLayout className="p-5">
      <div className="flex flex-row">
        <TextField
          id="outlined-search"
          label="Pesquisar"
          type="search"
          variant="outlined"
          value={search}
          className="w-1/2 mr-3"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="rounded bg-cyan-700 px-5 py-3">
          <p className="text-white font-bold">Pesquisar</p>
        </button>
      </div>
      <div className="flex flex-row py-10">
        {videos.map((video) => (
          <Video {...video} key={video.id} black className="w-3/12 mr-5" />
        ))}
      </div>
    </AuthLayout>
  );
}
