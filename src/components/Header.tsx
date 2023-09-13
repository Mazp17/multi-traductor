import { motion } from "framer-motion";

export const Header = () => (
  <header className="flex flex-col items-center m-12">
    <h1 className="text-6xl text-white font-bold bg-clip-text text-transparent">
      MultiTraductor
    </h1>
    <p className="text-red-600">(Proximamente a definir un mejor nombre!!!)</p>
    <motion.a
      whileHover={{ scale: 1.2}}
      whileTap={{ scale: 0.9}}
      transition={{ type: "spring", stiffness: 900, damping: 14 }}
      className="w-3 h-auto w-auto p-1 rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-github"
        height="34"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
      </svg>
    </motion.a>
  </header>
);
