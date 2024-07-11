import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Her zaman en iyi koltuk yıkama&nbsp;
          <code className="font-mono font-bold">Derin Koltuk Yıkama</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://derinyikama.com.tr/"
            target="_blank"
            title="Koltuk Yıkama"
          >
            <Image
              src="/logo.png"
              alt="Koltuk Yıkama"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] content-center place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1  className="mb-3 text-2xl font-semibold">Koltuk Yıkama</h1>
        <Image
        src="/homeimage.jpg"
        alt="koltuk yıkama"
        width={550}
        height={550}
        priority
        />
        <div className="w-full">
          <ul>
            <li> Buharlı Koltuk Yıkama </li>
            <li> Hızlı ve Detaylı Yıkama </li>
            <li> Aynı Gün Kullanım </li>
            <li> Kredi Kartı ile Ödeme </li>
            <li> 7/24 Hizmet </li>
          </ul>
        </div>
        <ul> <li> <a href="https://derinyikama.com.tr/adalar-koltuk-yikama" title="Adalar Koltuk Yıkama">  Adalar Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/atasehir-koltuk-yikama" title="Ataşehir Koltuk Yıkama">  Ataşehir Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/beykoz-koltuk-yikama" title="Beykoz Koltuk Yıkama">  Beykoz Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/cekmekoy-koltuk-yikama" title="Çekmeköy Koltuk Yıkama">  Çekmeköy Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/istanbul-koltuk-yikama" title="İstanbul Koltuk Yıkama">  İstanbul Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/kadikoy-koltuk-yikama" title="Kadıköy Koltuk Yıkama">  Kadıköy Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/kartal-koltuk-yikama" title="Kartal Koltuk Yıkama">  Kartal Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/maltepe-koltuk-yikama" title="Maltepe Koltuk Yıkama">  Maltepe Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/pendik-koltuk-yikama" title="Pendik Koltuk Yıkama">  Pendik Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/sancaktepe-koltuk-yikama" title="Sancaktepe Koltuk Yıkama">  Sancaktepe Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/sile-koltuk-yikama" title="Şile Koltuk Yıkama">  Şile Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/tuzla-koltuk-yikama" title="Tuzla Koltuk Yıkama">  Tuzla Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/umraniye-koltuk-yikama" title="Ümraniye Koltuk Yıkama">  Ümraniye Koltuk Yıkama</a> </li> <li> <a href="https://derinyikama.com.tr/uskudar-koltuk-yikama" title="Üsküdar Koltuk Yıkama">  Üsküdar Koltuk Yıkama</a> </li> </ul>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://derinyikama.com.tr/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          title="Koltuk Yıkama"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Koltuk Yıkama{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Profesyonel derin koltuk yıkama hizmeti
          </p>
        </a>

        <a
          href="https://derinyikama.com.tr/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          title="Yatak Yıkama"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Yatak Yıkama{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Profesyonel derin yatak yıkama hizmeti
          </p>
        </a>

        <a
          href="https://derinyikama.com.tr/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          title="Sandalye Yıkama"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Sandalye Yıkama{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Profesyonel derin sandalye yıkama hizmeti
          </p>
        </a>

        <a
          href="https://derinyikama.com.tr/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          title="Halıfleks Yıkama"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Halıfleks Yıkama{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Profesyonel derin halıfleks yıkama hizmeti
          </p>
        </a>
      </div>
    </main>
  );
}
