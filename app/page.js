import Image from "next/image";
import Link from "next/link";

export default function Home(){
  return (
   <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4 md:px-16 py-10">
  <div className="flex flex-col justify-center items-center md:items-start h-full">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">Welcome to LinkLift</h1>
    <p className="text-base md:text-lg mb-6 text-center md:text-left">
      Your ultimate URL shortening and link management platform. Simplify,
      track, and optimize your links with ease.
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start w-full md:w-auto">
      <Link href='/features'>
        <button className='relative px-6 py-3 font-semibold text-white rounded-lg 
          bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 
          bg-[length:200%_200%] animate-gradient-x 
          shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-auto'>
          Try Now
        </button>
      </Link>
      <Link target="_blank" href='https://github.com/SanidhyaGupta-10/GetMeeChaii'>
        <button className='relative px-6 py-3 font-semibold text-white rounded-lg 
          bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 
          bg-[length:200%_200%] animate-gradient-x 
          shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-auto'>
          Github
        </button>
      </Link>
    </div>
  </div>
  <div className="flex justify-center">
    <Image
      src="/vector.png"
      alt="LinkLift Logo"
      width={400}
      height={300}
      className="mx-auto my-4 w-full max-w-xs md:max-w-lg h-auto"
    />
  </div>
</section>
  )
}