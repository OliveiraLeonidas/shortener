import { Link } from "lucide-react";
import { FormEvent } from "react";



export function App() {
  
  function createLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log('enviado')
  }


  return (
    <div className="space-y-8 mx-6 sm:min-h-[420px]">
      <div className="bg-zinc-900 rounded-lg flex item-center justify-center py-6">
        <h1 className="text-xl sm:text-2xl">
          Encurtado<span className="text-emerald-400">.link</span>
        </h1>
      </div>

      <div className="bg-zinc-900 rounded-lg p-6 space-y-6">
        <h2 className="text-2xl text-center">Cole o link abaixo</h2>

        <form onSubmit={createLink} className="space-y-4">
          <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <div className="px-2 flex items-center flex-1 gap-2">
              <Link className="size-5 text-zinc-400" />
              <input
                type="email"
                name="email"
                placeholder="Insira o link..."
                className="bg-transparent text-xs placeholder-zinc-400 outline-none flex-1 sm:placeholder:text-lg sm:py-2 sm:text-zinc-50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-300 text-lime-950 rounded-lg px-5 py-2 font-sm  hover:bg-teal-400 flex items-center justify-center gap-2">
            Encurtar URL
          </button>
        </form>
      </div>
    </div>
  );
}
