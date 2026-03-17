import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects, projectsBySlug } from "@/data/projects";
import ProjectMediaCarousel from "@/components/project-media-carousel";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  const descriptionText = project ? project.fullDescription.join(" ") : "";

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-gradient-to-b from-[#090b12] via-[#0f1527] to-[#101228] text-foreground">
      <header className="sticky top-0 z-20 border-b border-zinc-700/80 bg-[#0c1020]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/projects" className="text-sm font-semibold tracking-[0.15em] text-indigo-100">
            ← ALL PROJECTS
          </Link>
          <p className="text-sm font-semibold tracking-[0.15em] text-indigo-100">
            {profile.name.toUpperCase()}
          </p>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-14 sm:px-10">
        <p className="animate-fade-in text-sm uppercase tracking-[0.18em] text-indigo-300">
          {project.category}
        </p>
        <h1 className="animate-fade-up mt-3 bg-gradient-to-r from-indigo-200 via-sky-200 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
          {project.title}
        </h1>
        <p className="animate-fade-up-delay mt-3 text-zinc-400">{project.period}</p>

        <div className="animate-fade-up-delay-2">
          <ProjectMediaCarousel media={project.media} mediaStyle={project.mediaStyle} />
        </div>

        <p className="mt-10 leading-8 text-zinc-300">{descriptionText}</p>

        <ul className="mt-8 list-disc space-y-2 pl-5 text-zinc-300">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-600 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-indigo-200">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
