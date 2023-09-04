import { IconPlus } from "@tabler/icons-react"
import { useEffect, useState } from "react"

type Languages = {
  code: string;
  name: string,
  targets: string[];
}

function App() {
  const [languages, setLanguages] = useState<Languages[]>([]);

  useEffect(() => {

    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://libretranslate.com/languages"
        )
      ).json()
      console.log(data);

      setLanguages(data);
    }

    dataFetch();
  }, []);


  return (
    <>
      <article className="rounded-md flex flex-col gap-2">
        <header className="inline-flex gap-2">
          <button className="inline-flex bg-green-600 rounded-md px-4 py-2">
            <IconPlus /> Add
          </button>
          <select className="text-zinc-200 rounded-md px-4 bg-zinc-700">
            <option>
              Language
            </option>
            {languages.map((val, i) => (
              <option key={i} value={val.code}>{val.name}</option>
            ))}
          </select>
          <p className="self-end text-zinc-500">
            Solo puedes seleccionar 5 idiomas
          </p>
        </header>
        <main className="inline-flex bg-zinc-700 gap-2 px-4 py-4 rounded-lg h-[70vh] overflow-y-auto">
          <textarea className="px-2 py-2 hover:outline-none bg-zinc-200 text-zinc-700"
            name="text-target"
            id="text-target"
            cols={30}
          ></textarea>
          <div className="flex flex-col gap-2 ">
            <div className="h-1/2 bg-zinc-200"> 
              <textarea className="px-4 py-2 bg-zinc-200 text-zinc-700 h-full"
                name="text-target"
                id="text-target"
                cols={30}
              ></textarea>
            </div>
            <textarea className="px-4 py-2 bg-zinc-200 text-zinc-700 h-1/2"
              name="text-target"
              id="text-target"
              cols={30}
            ></textarea>
<textarea className="px-4 py-2 bg-zinc-200 text-zinc-700 h-1/2"
              name="text-target"
              id="text-target"
              cols={30}
            ></textarea>

          </div>
        </main>

      </article>

    </>
  )
}

export default App
