import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AuthLayoutProps } from "../../types/AuthLayoutProps";

export default function AuthLayout(props: AuthLayoutProps) {
  const [search, setSearch] = React.useState("");

  const handleSearch = () => {};
  return (
    <div className="">
      <header className=" bg-cyan-700">
        <div className="flex flex-row justify-between py-3 w-1/5 pr-3 ml-auto">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-search">
              Pesquisar
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch} edge="end">
                    <AiOutlineSearch />
                  </IconButton>
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>
          <button>
            <Image
              src={props.user?.image || "/images/avatar.svg"}
              width={50}
              height={50}
              alt="Logo"
              className="rounded-full"
            />
          </button>
        </div>
      </header>
      <main className={props.className}>
        {props.children}    
      </main>
    </div>
  );
}
