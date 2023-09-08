import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { TextTarget } from "./components/TextTarget";

type Languages = {
  code: string;
  name: string;
  targets: string[];
}

type Inputs = {
  code: string;
}


function App() {
  const [languages, setLanguages] = useState<Languages[]>([]);
  
  const [inputs, setInputs] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addInput = async (lang: string) => {
    setInputs(inputs => [...inputs, lang]);
  }

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
      <article className="rounded-md flex flex-col gap-2 w-2/3">
        <header className="inline-flex gap-2">
          <button className="inline-flex bg-green-600 rounded-md px-4 py-2"
            onClick={() => {
              const lang = (document.querySelector("#languages") as HTMLInputElement);
              addInput(lang.value);
            }}>
            <IconPlus /> Add
          </button>

          <select name="languages" id="languages" className="text-zinc-200 rounded-md px-4 bg-zinc-700">
            {isLoading && (
              <option>
                Loading
              </option>
            )}
            {languages.map((val, i) => (
              <option key={i} name-lang={val.name} value={val.code}>
                {val.name}
              </option>
            ))}
          </select>
          <p className="self-end text-zinc-500">
            Solo puedes seleccionar 5 idiomas
          </p>
        </header>
        <main className="inline-flex bg-zinc-700 gap-2 px-4 py-4 rounded-lg h-[70vh] overflow-y-auto">
          <textarea
            className="px-2 py-2 w-1/2 hover:outline-none bg-zinc-300 text-zinc-700"
            name="text-target"
            id="text-target"
            cols={30}
          ></textarea>
          <div className="flex flex-col gap-2 w-1/2">
              {inputs.map((string) => 
                <TextTarget/>
              )}
          </div>
        </main>
      </article>
    </>
  );
}

export default App;
