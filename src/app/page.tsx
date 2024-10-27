import Image from "next/image";
import { Globe, Code, PaintBucket } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/bg.jpg')` }}>
      <div className="min-h-screen h-full w-full bg-black bg-opacity-60 p-4 sm:p-8 lg:p-12">
        {/* Profile and Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
          {/* Profile Image Section */}
          <div className="w-60 h-60 md:w-80 md:h-80 overflow-hidden rounded-full mx-auto shadow-cyan-300 shadow-2xl mb-4 md:mb-0">
            <Image src="/images/profile.jpeg" alt="Profile" width={320} height={320} className="object-cover w-full h-full" />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left mx-auto">
            <h1 className="text-white text-4xl md:text-5xl font-bold">SAFIA ALI</h1>
            <h2 className="text-white py-2 text-xl md:text-2xl">
              And I'm a <span className="text-cyan-300">frontend Developer</span>
            </h2>
            <p className="text-white text-md py-2 max-w-lg mx-auto md:mx-0 opacity-80">
              I'm a student in the GIAIC Batch 1, Quarter 2, with strong skills in HTML, CSS, JavaScript, TypeScript, Tailwind, and more.
              I'm actively seeking an internship to apply and expand my knowledge in real-world projects!
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col  sm:flex-row justify-center items-center gap-6 mt-9 pt-9">
          {/* Web Design Box */}
          <div className="w-full max-w-xs p-6 border-2 hover:border-cyan-300 hover:-translate-y-1 hover:scale-110 duration-300  rounded backdrop-blur-xl text-center mx-auto">
            <Globe className="text-cyan-300 w-12 h-12 mx-auto mb-4" />
            <h2 className="text-cyan-300 text-xl font-semibold">Web Design</h2>
            <p className="text-white text-sm mt-3 opacity-80">
              With over 20+ website templates designed, I offer customized, high-quality web solutions that blend style and functionality.
            </p>
            <button className="bg-cyan-300 px-4 py-1 mt-4 rounded-lg">Hire Me</button>
          </div>

          {/* Web Development Box */}
          <div className="w-full max-w-xs p-6 border-2 rounded backdrop-blur-xl text-center mx-auto hover:border-cyan-300 hover:-translate-y-1 hover:scale-110 duration-300">
            <Code className="text-cyan-300 w-12 h-12 mx-auto mb-4" />
            <h2 className="text-cyan-300 text-xl font-semibold">Web Development</h2>
            <p className="text-white text-sm mt-3 opacity-80">
              With experience in 45+ web development projects, I offer tailored programming solutions ensuring high performance and functionality.
            </p>
            <button className="bg-cyan-300 px-4 py-1 mt-4 rounded-lg">Hire Me</button>
          </div>

          {/* Graphic Design Box */}
          <div className="w-full max-w-xs p-6 border-2 rounded backdrop-blur-xl text-center mx-auto hover:border-cyan-300 hover:-translate-y-1 hover:scale-110 duration-300">
            <PaintBucket className="text-cyan-300 w-12 h-12 mx-auto mb-4" />
            <h2 className="text-cyan-300 text-xl font-semibold">Graphic Design</h2>
            <p className="text-white text-sm mt-3 opacity-80">
              With 30+ successful projects, I provide custom graphic design services that bring your brand to life with creativity and impact.
            </p>
            <button className="bg-cyan-300 px-4 py-1 mt-4 rounded-lg">Hire Me</button>
          </div>
        </div>
      </div>
    </main>
  );
}
