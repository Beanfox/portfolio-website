import Link from "next/link";
import Image from "next/image";
import { hardwareProjects, profile, softwareProjects } from "@/data/projects";

function ProjectCard({
  slug,
  title,
  period,
  shortDescription,
  imageLabel,
  mediaStyle,
  media,
}: {
  slug: string;
  title: string;
  period: string;
  shortDescription: string;
  imageLabel: string;
  mediaStyle: "wide" | "standard" | "square";
  media: Array<{
    type: "image" | "video";
    label: string;
    src?: string;
    poster?: string;
  }>;
}) {
  const previewMedia = media[0];
  const mediaAspectClass =
    mediaStyle === "wide"
      ? "aspect-[16/10]"
      : mediaStyle === "square"
        ? "aspect-square"
        : "aspect-[4/3]";

  return (
    <article className="group animate-fade-up h-full rounded-3xl border border-zinc-700 bg-zinc-900/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]">
      <Link href={`/projects/${slug}`} className="flex h-full flex-col">
        <div
          className={`relative mb-5 flex w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-zinc-600 bg-gradient-to-br from-indigo-500/10 via-zinc-900 to-sky-500/10 text-sm text-zinc-300 ${mediaAspectClass}`}
        >
          <div className="card-shimmer absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.45),transparent)]" />
          {previewMedia?.src && (
            <Image
              src={previewMedia.src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
            />
          )}
          {previewMedia?.type === "video" && previewMedia.src ? (
            <video
              className="relative z-10 h-full w-full bg-zinc-950/60 object-contain p-2"
              preload="metadata"
              muted
              playsInline
              poster={previewMedia.poster}
            >
              <source src={previewMedia.src} />
            </video>
          ) : previewMedia?.src ? (
            <Image
              src={previewMedia.src}
              alt={previewMedia.label}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative z-10 h-full w-full bg-zinc-950/60 object-contain p-2"
            />
          ) : (
            <span className="relative z-10 px-4 text-center font-medium">
              {imageLabel}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">{title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{period}</p>
        </div>
        <p className="mt-3 text-zinc-300">{shortDescription}</p>
        <p className="mt-auto pt-4 text-sm font-medium text-indigo-200 underline underline-offset-4">
          Open full project
        </p>
      </Link>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-gradient-to-b from-[#090b12] via-[#0f1527] to-[#101228] text-foreground">
      <header className="sticky top-0 z-20 border-b border-zinc-700/80 bg-[#0c1020]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/" className="text-sm font-semibold tracking-[0.15em] text-indigo-100">
            {profile.name.toUpperCase()}
          </Link>
          <div className="flex gap-5 text-sm text-zinc-300">
            <a href="#hardware" className="hover:text-indigo-200">
              Hardware
            </a>
            <a href="#software" className="hover:text-indigo-200">
              Software
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <h1 className="animate-fade-in bg-gradient-to-r from-indigo-200 via-sky-200 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
          Projects
        </h1>
        <p className="animate-fade-up mt-4 max-w-3xl text-zinc-300">
          Click any project to open a  detail page with more context, implementation notes, skills, and external links.
        </p>
      </section>

      <section id="hardware" className="mx-auto max-w-6xl px-6 pb-16 sm:px-10">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-100">Hardware Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {hardwareProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <section id="software" className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-100">Software Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {softwareProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
