import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/projects";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-gradient-to-br from-[#090b12] via-[#0f1527] to-[#111126] text-foreground">
      <section className="mx-auto grid h-full max-w-6xl items-center gap-10 px-6 py-8 sm:px-10 lg:grid-cols-2">
        <div>
          <p className="animate-fade-in text-sm tracking-[0.2em] text-indigo-300">
            PROJECT PORTFOLIO
          </p>
          <h1 className="animate-fade-up mt-4 bg-gradient-to-r from-indigo-200 via-sky-200 to-violet-200 bg-clip-text text-6xl font-semibold tracking-tight text-transparent sm:text-8xl">
            BEN BRAKE
          </h1>
          <p className="animate-fade-up-delay-2 mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            I'm a Mechatronics Engineering student at the University of Waterloo with experience in PCB design 
            and robotics. Currently an Electrical Team Member at the Waterloo Aerial Robotics Group (a design team at UWaterloo), 
            working on circuit design and hardware bring-up for autonomous drones. 
            Outside of engineering, I enjoy waterskiing, playing piano and guitar, and dirt biking.
          </p>

          <div className="animate-fade-up-delay-2 mt-12 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-indigo-500 px-7 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-indigo-400"
            >
              View All Projects
            </Link>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-indigo-400/60 bg-indigo-500/10 px-7 py-3 text-sm font-medium text-indigo-100 transition-transform duration-300 hover:-translate-y-1"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="animate-fade-up-delay-2">
          <div className="relative flex h-[30rem] items-center justify-center overflow-hidden rounded-3xl border border-zinc-700 bg-gradient-to-br from-indigo-500/15 via-sky-500/10 to-violet-500/15 p-6 shadow-[0_0_60px_rgba(56,189,248,0.08)]">
            <div className="absolute -right-10 bottom-8 h-44 w-44 rounded-full bg-sky-400/35 blur-2xl" />
            <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl border border-zinc-600/70 bg-zinc-900/70">
              <Image
                src="/ME!.jpg"
                alt="Ben Brake"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
