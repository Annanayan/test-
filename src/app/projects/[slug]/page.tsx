import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectDetailClient from '@/components/ProjectDetailClient';
import MathVillageDetailClient from '@/components/MathVillageDetailClient';
import DiagnosticDetailClient from '@/components/DiagnosticDetailClient';
import MultimodalGeometryDetailClient from '@/components/MultimodalGeometryDetailClient';
import DDPMDetailClient from '@/components/DDPMDetailClient';
import JobFlowDetailClient from '@/components/JobFlowDetailClient';
import BigIdeasDetailClient from '@/components/BigIdeasDetailClient';

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter(p => p.id !== project.id)
    .slice(0, 2);

  // Use specialized Math Village detail page for math-village project
  if (project.id === 'math-village') {
    return (
      <MathVillageDetailClient
        project={project}
        relatedProjects={relatedProjects}
      />
    );
  }

  // Use specialized Diagnostic detail page for diagnostic-game-design project
  if (project.id === 'diagnostic-game-design') {
    return (
      <DiagnosticDetailClient
        project={project}
        relatedProjects={relatedProjects}
      />
    );
  }

  // Use specialized Multimodal Geometry detail page for multimodal-geometry project
  if (project.id === 'multimodal-geometry') {
    return (
      <MultimodalGeometryDetailClient
        project={project}
        relatedProjects={relatedProjects}
      />
    );
  }

  // Use specialized DDPM detail page for ddpm-research project
  if (project.id === 'ddpm-research') {
    return (
      <DDPMDetailClient
        project={project}
        relatedProjects={relatedProjects}
      />
    );
  }

  // Use specialized JobFlow detail page for jobflow project
  if (project.id === 'jobflow') {
    return (
      <JobFlowDetailClient
        project={project}
        relatedProjects={relatedProjects}
      />
    );
  }

  // Use specialized Big Ideas detail page for big-ideas-synthesis project
  if (project.id === 'big-ideas-synthesis') {
    return (
      <BigIdeasDetailClient
        project={project}
        relatedProjects={relatedProjects}
      />
    );
  }

  return (
    <ProjectDetailClient
      project={project}
      relatedProjects={relatedProjects}
    />
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}