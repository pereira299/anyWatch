import { TextareaAutosize, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import AuthLayout from "../../components/layouts/auth";

export default function CreateVideo() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [image, setImage] = React.useState("");
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
        onChange={(e) => setImage(e.target.value)}
        hidden
      />
      <div className="flex flex-row justify-between my-10 w-full px-10">
        {image ? (
          <Image
            src={image}
            width={1920}
            height={1080}
            alt="Logo"
            className="rounded-full mb-3 mx-auto"
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
