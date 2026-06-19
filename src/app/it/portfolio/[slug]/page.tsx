import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { ProjectDetail } from "@/components/project-detail";
import { SITE_COPY } from "@/content/site-copy";

const copy = SITE_COPY.it;

export function generateStaticParams() {
  return copy.portfolio.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = copy.portfolio.projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | portfolio Alpha Technology`,
    description: project.description,
    alternates: {
      canonical: `https://alphatechnology.ai/it/portfolio/${slug}`,
      languages: {
        en: `https://alphatechnology.ai/portfolio/${slug}`,
        it: `https://alphatechnology.ai/it/portfolio/${slug}`,
      },
    },
  };
}

export default async function PortfolioProjectPageIt({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = copy.portfolio.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-black">
      <Navbar copy={copy.navbar} />
      <ProjectDetail basePath="/it" project={project} detail={copy.portfolio.detail} />
    </div>
  );
}
