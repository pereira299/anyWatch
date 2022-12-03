import React from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Home() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-6/12 flex flex-col justify-center">
        <Image
          src="/images/video-stream.svg"
          width={500}
          height={500}
          alt="Video"
          className="mx-auto w-9/12"
        />
      </div>
      <div className="w-6/12 bg-cyan-700 flex flex-col justify-center">
        <div className="shadow bg-white rounded-md my-auto w-10/12 m-auto p-10 flex flex-col">
          <h3 className="text-5xl text-center mb-10 text-black font-bold">Bem-vindo</h3>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            className="mb-5"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl variant="outlined" className="mb-5">
            <InputLabel htmlFor="outlined-adornment-password">
              Senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <button className="bg-cyan-700 py-5 hover:bg-cyan-600 active:bg-cyan-900 hover:shadow-sm py-2 px-4 rounded">
            <p className="text-white text-xl active:text-gray-400 font-bold">
              Entrar
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
