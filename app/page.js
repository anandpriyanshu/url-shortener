import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-purple-50">
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="text-2xl font-bold">The best URL shortener in the Market </p>
            <p> We are the most straightfoward URL Shortener in the world. </p>
            <div className=' flex gap-3'>
              <Link href="/shorten"><button className='bg-blue-600 rounded-lg p-2 font-bold text-white'>Try now</button></Link>
              <Link href="/github"><button className='bg-blue-600 rounded-lg p-2 font-bold text-white'>Github</button></Link>
            </div>
          </div>
          <div className="flex justify-start relative">
            <Image className="mix-blend-darken" src={"/vector.jpg"} fill={true} />
          </div>



        </section>
      </main>
    </>
  );
}
