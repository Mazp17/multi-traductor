import { IconBrandGithub } from "@tabler/icons-react";

export const Header = () => (
  <header className="flex flex-col items-center m-12">
    <h1 className="text-6xl text-white font-bold bg-clip-text text-transparent">
      MultiTraductor
    </h1>
    <p className="text-red-600">(Proximamente a definir un mejor nombre!!!)</p>
    <a
      className="w-3"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <IconBrandGithub className="h-10 w-auto p-1 duration-200 rounded-full hover:scale-125 bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]" />
    </a>
  </header>
);
