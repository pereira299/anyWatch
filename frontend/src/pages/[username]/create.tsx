import { TextareaAutosize, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import AuthLayout from "../../components/layouts/auth";

export default function CreateVideo() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [image, setImage] = React.useState<String>();
  const [loading, setLoading] = React.useState(false);

  const handleFile = () => {
    const file = document.getElementById("thumb");
    file?.click();
  };
  return (
    <AuthLayout className="p-5">
      <h1 className="text-black font-bold text-5xl">
        Criar transmissão ao vivo
      </h1>
      <input
        type="file"
        id="thumb"
        hidden
        onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setImage(URL.createObjectURL(file));
            }
          }}
      />
      <div className="flex flex-row justify-between my-10 w-full px-10">
        {image ? (
          <Image
            src={image}
            width={1920}
            height={1080}
            alt="Logo"
            className="w-6/12 mb-3 mx-auto"
          />
        ) : (
          <div
            className="w-6/12 h-2/3 mb-10 rounded-lg px-20 py-60 border-4 cursor-pointer border-cyan-700"
            onClick={handleFile}
          >
            <p className="text-center font-bold text-2xl text-cyan-700">
              Adicionar thumbnail
            </p>
          </div>
        )}
        <div className="flex flex-col w-5/12">
          <TextField
            id="outlined-basic"
            label="Título"
            variant="outlined"
            className="mb-5"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            className="mb-5 border border-gray-400 rounded"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="bg-cyan-700 roundend py-5 text-white font-bold rounded-md p-2">
            Criar transmissão
          </button>
        </div>
      </div>
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
