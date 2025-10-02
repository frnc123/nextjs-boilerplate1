import Image from "next/image";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
=======
        // background tetap fullpage (bisa diganti), card di tengah ber-border seperti screenshot
    <div className="font-sans min-h-screen p-8 sm:p-20 flex items-center justify-center bg-[#d2dbeb]">
      {/* Card utama dengan border mirip screenshot */}
      <div className="w-full max-w-[500px] bg-white border-2 border-[#0385a] rounded-xl p-10 shadow-md">
        <main className="flex flex-col gap-8 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/sza.jpg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
996a607201a2d958b068fb138f96c529df3cc176
>>>>>>> 4cd582c19d26679afa8edf7e0ab35fc26117f4a5

          <div className="w-full text-center sm:text-left">
            <h1 className="text-[#0385a] font-bold text-2xl mb-3">
              Kelompok Kecebur Laut
            </h1>

            <ol className="font-mono list-inside list-decimal text-sm leading-6 text-gray-700">
              <li className="tracking-[-.01em]">Ferincia Diarra N. Z.</li>
              <li className="tracking-[-.01em]">Layla Nur Fitria</li>
              <li className="tracking-[-.01em]">Shafa Early</li>
            </ol>
          </div>
        
          <div className="flex flex-col space-y-1">
  <a
    className="flex items-center gap-2 hover:underline"
    href="https://www.youtube.com/@BABYMONSTER"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/globe.svg"
      alt="Globe icon"
      width={16}
      height={16}
    />
    Go to BABYMONSTER channel →
  </a>

  <b className="text-sm">
    ★ Our favorite song: Hot Sauce - BABYMONSTER
  </b>
</div>


          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-[#0385a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://youtu.be/xn8mQqz2xmM?si=XgRVr4wnmhw31orQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to play the song
            </a>

            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
          </div>
        </main>

      </div>
    </div>
  );
}
