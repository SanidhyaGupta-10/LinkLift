import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
    <main>
      <section className="grid grid-cols-2 ">
        <div className="flex flex-col justify-center h-full pl-30">
          <h1 className="text-5xl font-bold mb-4 text-center">Welcome to LinkLift</h1>
          <p className="text-lg mb-4 text-center">
            Your ultimate URL shortening and link management platform. Simplify,
            track, and optimize your links with ease.
          </p>
        <div className="flex space-x-4 justify-center">
           <Link href='/features'><button className='relative px-6 py-3 font-semibold text-white rounded-lg 
         bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 
         bg-[length:200%_200%] animate-gradient-x 
         shadow-lg hover:scale-105 transition-transform duration-300 '>Try Now</button></Link>
           <Link target="_blank" href='https://github.com/SanidhyaGupta-10/GetMeeChaii'><button className='relative px-6 py-3 font-semibold text-white rounded-lg 
         bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 
         bg-[length:200%_200%] animate-gradient-x 
         shadow-lg hover:scale-105 transition-transform duration-300  '>Github</button></Link>
        </div>
        </div>
        <div>
          <Image
            src="/vector.png"
            alt="LinkLift Logo"
            width={600}
            height={400}
            className="mx-auto my-4"
          />
        </div>
      </section>
    </main>
   </>
  );
}
