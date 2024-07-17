// I love Prettier :)
// 2nd time I wrote this, VSCode decided to screw me over (its 1AM send help)

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      <div className="mb-28 flex p-6 bg-white min-w-full rounded-xl shadow-lg justify-between">
        <p className="text-black text-lg">
          <a className="text-blue-600 text-xl font-extrabold">N</a>ouvelles
          <a className="text-blue-600 text-xl font-extrabold">J</a>ournées d'
          <a className="text-blue-600 text-xl font-extrabold">E</a>chographie
          <a className="text-blue-600 text-xl font-extrabold">F</a>oetale
        </p>
        <p className="text-black font-light italic">2025</p>
      </div>

      <div class="flex p-6 bg-white min-w-full rounded-xl shadow-lg justify-center space-x-4">
        <div>
          <div className="text-center text-xl font-extrabold text-black underline decoration-red-600 decoration-double">
            A VOS AGENDAS !
          </div>

          <p className="opacity-0 text-xl">hello</p>

          <p className="text-center text-slate-500">
            <a className="font-bold">Chers Amis,</a> <br></br>
            <br></br>
            Le prochain congrès
            <a className="text-yellow-500 font-bold">NJEF</a> se déroulera les :
            <br></br>
            <a className="text-red-600 font-bold italic underline underline-offset-4">
              31 janvier - 1er et 2 février 2025
            </a>
            <br></br>
            <br></br>
            <a className="text-blue-600 font-medium">
              Le foetus, c'est le CFEF !
            </a>
            <br></br>
            <br></br>
            <a className="italic font-light">
              A bientôt,
              <br></br>
            </a>
            <a className="italic font-extralight">
              Le bureau du CFEF
              <br></br>
              Les organisateurs
            </a>
          </p>
        </div>
      </div>

      <div className="mt-24 justify-normal">
        {/* <span className="text-black text-6xl">&#8594;  </span>  */}

        <Link href="https://cfef.org/NJEF.php">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:outline-none hover:ring-4 hover:text-yellow-400 hover:ring-blue-300">
            éditions précédentes
          </button>
        </Link>

        <p className="font-thin text-black text-center">
          Redirect sur cfef.org
        </p>

        {/* <span className="text-black text-6xl">  &#8592;</span>  */}
      </div>

      <Link
        className="mt-24"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        <Image
          src="/Banner.jpg"
          width={912}
          height={316}
          alt="Picture of the author"
        />
      </Link>
    </main>
  );
}
