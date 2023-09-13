import { useEffect, useState } from "react";
import { TextTarget } from "./components/TextTarget";
import toast, { Toaster } from "react-hot-toast";

type Languages = {
  code: string;
  name: string;
  targets: string[];
};

type Inputs = {
  code: string;
};
const toastMensajeAlertaMax = () => {
  toast.error("Solo puedes añadir hasta 5 idiomas :(", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};

function App() {
  const [languages, setLanguages] = useState<Languages[]>([]);
  const [inputs, setInputs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const maxElements = 5;

  const addInput = async (lang: string) => {
    if (inputs.length < maxElements) {
      setInputs((inputs) => [...inputs, lang]);
    } else {
      toastMensajeAlertaMax();
    }
  };

  useEffect(() => {
    const dataFetch = async () => {
      setIsLoading(true);
      const data = await (
        await fetch("https://libretranslate.com/languages")
      ).json();

      setIsLoading(false);
      setLanguages(data);
    };

    dataFetch();
  }, []);

  return (
    <>
      <article className="rounded-xl flex m-auto flex-col w-2/3 bg-gradient-to-r from-cyan-900 to-emerald-500">
        <header className="mt-4 w-72 rounded-t-lg bg-[#2e2e2e] p-2 pt-4 ml-4 inline-flex ">
          <button
            className="m-auto relative inline-flex items-center justify-center p-2 px-6 py-2 bg-green-600 overflow-hidden font-medium transition duration-300 ease-out border-2 border-green-600 rounded-lg group"
            onClick={() => {
              const lang = document.querySelector(
                "#languages"
              ) as HTMLInputElement;
              addInput(lang.value);
            }}
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-600 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6 icon icon-tabler icon-tabler-plus"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#fff"
                stroke-linecap="round"
                viewBox="0 0 24 24"
                stroke-width="2"
                fill="#fff"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 5l0 14"></path>
                <path d="M5 12l14 0"></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              Añadir
            </span>
            <span className="relative invisible">Añadir</span>
          </button>

          <select
            name="languages"
            id="languages"
            className="m-auto bg-neutral-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          >
            {isLoading && <option>Loading</option>}
            {languages.map((val, i) => (
              <option key={i} name-lang={val.name} value={val.code}>
                {val.name}
              </option>
            ))}
          </select>
        </header>
        <main className="mt-0 m-4 inline-flex bg-[#2e2e2e] gap-2 px-4 py-4 rounded-t-none rounded-lg h-[70vh] overflow-y-auto">
          <textarea
            className="px-2 py-2 w-1/2 hover:outline-none bg-zinc-300 text-zinc-700"
            name="text-target"
            id="text-target"
            cols={30}
          ></textarea>
          <div className="flex flex-col gap-2 w-1/2">
            {inputs.slice(0, maxElements).map((index) => (
              <TextTarget key={index} />
            ))}
            {inputs.length === maxElements ? (
              <div>
                <Toaster position="top-center" />
              </div>
            ) : (
              <span className="text-center font-bold">
                Idiomas agregados{" "}
                <span className="bg-gradient-to-r from-cyan-900 to-emerald-500 color-zinc-50 p-1 m-auto">
                  {" "}
                  {inputs.length}
                </span>
              </span>
            )}
          </div>
        </main>
      </article>
    </>
  );
}

export default App;
